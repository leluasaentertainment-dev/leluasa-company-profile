import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getCmsServiceBySlug } from "@/lib/wordpress";

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 60;

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = await getCmsServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F7F7F2] text-[#252525]">
      <Navbar />

      <section className="px-5 pb-24 pt-36 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/#services"
            className="text-xs font-black uppercase tracking-[0.25em] text-[#252525]/50 hover:text-[#A7FF00]"
          >
            ← Back to Services
          </Link>

          <div className="mt-10 grid gap-12 md:grid-cols-[1fr_1fr] md:items-start">
            <section>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#252525]/45">
                {service.themeGroup}
              </p>

              <h1 className="font-heading text-[4.5rem] leading-[0.88] md:text-[7rem]">
                {service.title}
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#252525]/70">
                {service.description}
              </p>

              <article
                className="mt-10 max-w-none text-base leading-8 text-[#252525]/75"
                dangerouslySetInnerHTML={{ __html: service.content }}
              />
            </section>

            <div className="relative aspect-[4/5] overflow-hidden bg-black">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}