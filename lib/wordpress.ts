type WpPost = {
  id: number;
  title: {
    rendered: string;
  };
  excerpt?: {
    rendered: string;
  };
  content?: {
    rendered: string;
  };
  acf?: Record<string, unknown>;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url?: string;
    }>;
  };
};

export type CmsWork = {
  title: string;
  description: string;
  category: string;
  metric: string;
  theme: "green" | "pink" | "blue";
  order: number;
  image: string;
};

export type CmsService = {
  title: string;
  description: string;
  themeGroup: "competition" | "campaigns" | "talent";
  order: number;
  image: string;
};

export type CmsClient = {
  name: string;
  order: number;
  image: string;
};

const API_BASE =
  process.env.WORDPRESS_API_URL ?? "https://cms.leluasa.id/wp-json/wp/v2";

async function fetchWpPosts(postType: string): Promise<WpPost[]> {
  try {
    const response = await fetch(
      `${API_BASE}/${postType}?_embed&per_page=100`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    if (!response.ok) {
      return [];
    }

    return response.json();
  } catch {
    return [];
  }
}

function cleanText(value: string | undefined) {
  if (!value) return "";

  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&nbsp;/g, " ")
    .trim();
}

function getFeaturedImage(post: WpPost, fallback: string) {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? fallback;
}

function getOrder(post: WpPost) {
  const value = Number(post.acf?.order_number);
  return Number.isFinite(value) ? value : 999;
}

function getTheme(value: unknown): "green" | "pink" | "blue" {
  if (value === "pink" || value === "blue" || value === "green") {
    return value;
  }

  return "green";
}

function getThemeGroup(
  value: unknown
): "competition" | "campaigns" | "talent" {
  if (value === "campaigns" || value === "talent" || value === "competition") {
    return value;
  }

  return "competition";
}

export async function getCmsWorks(): Promise<CmsWork[]> {
  const posts = await fetchWpPosts("works");

  return posts
    .map((post) => ({
      title: cleanText(post.title.rendered),
      description: cleanText(post.excerpt?.rendered || post.content?.rendered),
      category: String(post.acf?.category ?? "Project"),
      metric: String(post.acf?.metric ?? ""),
      theme: getTheme(post.acf?.theme),
      order: getOrder(post),
      image: getFeaturedImage(post, "/assets/hero/hero-green.jpg"),
    }))
    .sort((a, b) => a.order - b.order);
}

export async function getCmsServices(): Promise<CmsService[]> {
  const posts = await fetchWpPosts("services");

  return posts
    .map((post) => ({
      title: cleanText(post.title.rendered),
      description: String(
        post.acf?.short_description ??
          cleanText(post.excerpt?.rendered || post.content?.rendered)
      ),
      themeGroup: getThemeGroup(post.acf?.theme_group),
      order: getOrder(post),
      image: getFeaturedImage(post, "/assets/services/service-competition.jpg"),
    }))
    .sort((a, b) => a.order - b.order);
}

export async function getCmsClients(): Promise<CmsClient[]> {
  const posts = await fetchWpPosts("clients");

  return posts
    .map((post) => ({
      name: cleanText(post.title.rendered),
      order: getOrder(post),
      image: getFeaturedImage(post, "/assets/hero/hero-green.jpg"),
    }))
    .sort((a, b) => a.order - b.order);
}