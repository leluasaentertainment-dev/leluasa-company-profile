import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getCmsWorkBySlug } from "@/lib/wordpress";

type WorkDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 60;

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const work = await getCmsWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F7F7F2] text-[#252525]">
      <Navbar />

      <section className="px-5 pb-24 pt-36 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/#works"
            className="text-xs font-black uppercase tracking-[0.25em] text-[#252525]/50 hover:text-[#A7FF00]"
          >
            ← Back to Works
          </Link>

          <div className="mt-10 grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-start">
            <div className="relative aspect-[4/5] overflow-hidden bg-black">
              <Image
                src={work.image}
                alt={work.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            <section>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#252525]/45">
                {work.category}
              </p>

              <h1 className="font-heading text-[4.5rem] leading-[0.88] md:text-[7rem]">
                {work.title}
              </h1>

              {work.metric && (
                <p className="mt-5 font-heading text-4xl leading-none text-[#A7FF00] md:text-5xl">
                  {work.metric}
                </p>
              )}

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#252525]/70">
                {work.description}
              </p>

              <article
                className="mt-10 max-w-none text-base leading-8 text-[#252525]/75"
                dangerouslySetInnerHTML={{ __html: work.content }}
              />
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}