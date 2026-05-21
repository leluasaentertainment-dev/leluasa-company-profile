import { clients, marqueeItems, projects, services } from "@/data/site-data";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <Navbar />
      <HeroSection />
      <MarqueeText />
      <ServicesSection />
      <WorksSection />
      <ClientsSection />
      <AboutSection />
      <BlogPreviewSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#" className="font-heading text-3xl tracking-wide text-white">
          LELUASA
        </a>

        <div className="hidden items-center gap-7 text-sm uppercase tracking-[0.25em] text-white/70 md:flex">
          <a href="#home" className="hover:text-[#b6ff00]">
            Home
          </a>
          <a href="#about" className="hover:text-[#b6ff00]">
            About
          </a>
          <a href="#services" className="hover:text-[#b6ff00]">
            Services
          </a>
          <a href="#works" className="hover:text-[#b6ff00]">
            Works
          </a>
          <a href="#clients" className="hover:text-[#b6ff00]">
            Clients
          </a>
          <a href="#blog" className="hover:text-[#b6ff00]">
            Blog
          </a>
          <a href="#contact" className="hover:text-[#b6ff00]">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-[#b6ff00] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#b6ff00] transition hover:bg-[#b6ff00] hover:text-black"
        >
          Send Brief
        </a>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 md:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(182,255,0,0.18),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(255,46,166,0.16),transparent_30%),radial-gradient(circle_at_55%_80%,rgba(0,213,255,0.12),transparent_28%)]" />

      <div className="absolute left-0 top-28 h-px w-full bg-white/10" />
      <div className="absolute bottom-24 left-0 h-px w-full bg-white/10" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-end gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.45em] text-[#b6ff00]">
            Leluasa E-Sportainment
          </p>

          <h1 className="font-heading text-[5.5rem] leading-[0.85] text-white sm:text-[7rem] md:text-[10rem] lg:text-[13rem]">
            Craft Your
            <br />
            Vision.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            We create top-tier experiences in the esports industry through
            competition management, talent, and innovative campaigns that drive
            brand engagement and industry growth.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#works"
              className="rounded-full bg-[#b6ff00] px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:scale-105"
            >
              See Our Works
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/20 px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:border-[#ff2ea6] hover:text-[#ff2ea6]"
            >
              Our Services
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
          <div className="aspect-[4/5] rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(182,255,0,0.9),rgba(255,46,166,0.75),rgba(0,213,255,0.75))] p-1">
            <div className="flex h-full flex-col justify-between rounded-[1.35rem] bg-black p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                Esports ecosystem
              </p>
              <div>
                <p className="font-heading text-6xl leading-none text-white">
                  Play.
                  <br />
                  Compete.
                  <br />
                  Engage.
                </p>
                <p className="mt-5 text-sm leading-7 text-white/60">
                  Bridging brands and gaming communities through creative,
                  competitive, and measurable esports solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeText() {
  return (
    <section className="border-y border-white/10 bg-[#b6ff00] py-4 text-black">
      <div className="flex w-max marquee-track">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map(
          (item, index) => (
            <span
              key={`${item}-${index}`}
              className="font-heading mx-6 text-4xl uppercase tracking-wider md:text-6xl"
            >
              {item}
            </span>
          )
        )}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#ff2ea6]">
              Our Services
            </p>
            <h2 className="font-heading mt-3 text-7xl leading-none md:text-9xl">
              What We Do
            </h2>
          </div>
          <p className="max-w-xl text-white/60">
            From esports competitions to campaign management, we help brands
            enter and grow inside the esports ecosystem.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-2 hover:border-[#b6ff00]"
            >
              <p className="font-heading text-5xl text-white/20">
                0{index + 1}
              </p>
              <h3 className="font-heading mt-10 text-5xl leading-none text-white">
                {service}
              </h3>
              <p className="mt-5 text-sm leading-7 text-white/55">
                Strategic planning, production, and execution for impactful
                esports and gaming-related brand experiences.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorksSection() {
  return (
    <section id="works" className="bg-white px-5 py-24 text-black md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#ff2ea6]">
            See Our Works
          </p>
          <h2 className="font-heading mt-3 text-7xl leading-none md:text-9xl">
            Success Stories
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-[2rem] border border-black/10 bg-black p-5 text-white"
            >
              <div className="mb-6 aspect-[4/3] rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(182,255,0,0.8),rgba(255,46,166,0.8),rgba(0,213,255,0.8))]" />
              <p className="text-xs uppercase tracking-[0.3em] text-[#b6ff00]">
                {project.category}
              </p>
              <h3 className="font-heading mt-3 text-4xl leading-none">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/60">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientsSection() {
  return (
    <section id="clients" className="border-y border-white/10 px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 className="font-heading text-7xl leading-none md:text-9xl">
            Our Clients
          </h2>
          <p className="hidden max-w-md text-right text-white/60 md:block">
            Trusted by brands that want to connect with competitive gaming
            audiences.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client}
              className="flex h-32 items-center justify-center rounded-[1.5rem] border border-white/10 bg-white/[0.04] font-heading text-3xl text-white/70"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#00d5ff]">
            About Us
          </p>
          <h2 className="font-heading mt-3 text-7xl leading-none md:text-9xl">
            Fueling Gaming Passion
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-9 text-white/65">
          <p>
            We are focused on creating top-tier experiences in the esports
            industry. We specialize in managing esports competitions, talent,
            and innovative campaigns to drive brand engagement and industry
            growth.
          </p>
          <p>
            Through a dynamic approach, we bridge the gap between brands and the
            rapidly evolving esports ecosystem. At Leluasa, we believe in
            fueling the passion for gaming through creative and competitive
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

function BlogPreviewSection() {
  return (
    <section id="blog" className="bg-[#0d0d0d] px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#b6ff00]">
          Blog
        </p>
        <h2 className="font-heading mt-3 text-7xl leading-none md:text-9xl">
          Latest Insights
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <article
              key={item}
              className="rounded-[2rem] border border-white/10 bg-black p-7"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#ff2ea6]">
                Esports Insight
              </p>
              <h3 className="font-heading mt-5 text-4xl leading-none">
                How Brands Can Enter the Esports Ecosystem
              </h3>
              <p className="mt-5 text-sm leading-7 text-white/55">
                A short insight about gaming communities, campaign strategy, and
                brand engagement.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="px-5 py-24 md:px-8">
      <div className="mx-auto rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(182,255,0,0.16),rgba(255,46,166,0.14),rgba(0,213,255,0.12))] p-8 md:max-w-7xl md:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#b6ff00]">
          Contact
        </p>
        <h2 className="font-heading mt-4 max-w-4xl text-7xl leading-none md:text-9xl">
          Ready to craft your esports vision?
        </h2>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="mailto:hello@leluasa.id"
            className="rounded-full bg-white px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-black"
          >
            Send Your Brief
          </a>
          <a
            href="#"
            className="rounded-full border border-white/20 px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-white"
          >
            Talk With Us
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <p className="font-heading text-4xl">LELUASA E-SPORTAINMENT</p>
        <p className="text-sm text-white/45">
          © 2026 Leluasa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}