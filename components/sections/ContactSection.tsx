import { contactInfo } from "@/data/site-data";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#F7F7F2] px-5 py-28 text-[#252525] md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#FF2E93]">
              Contact
            </p>

            <h2 className="font-heading text-[5rem] leading-[0.85] md:text-[9rem]">
              Ready to Drive Esports to New Heights?
            </h2>
          </div>

          <div className="rounded-[2rem] bg-[#252525] p-8 text-white">
            <div className="space-y-7 text-sm leading-7 text-white/70">
              <div>
                <p className="mb-2 font-bold uppercase tracking-[0.25em] text-[#A7FF00]">
                  PIC
                </p>
                <p>{contactInfo.person}</p>
              </div>

              <div>
                <p className="mb-2 font-bold uppercase tracking-[0.25em] text-[#A7FF00]">
                  Contact
                </p>
                <p>{contactInfo.phone}</p>
                <p>{contactInfo.email}</p>
              </div>

              <div>
                <p className="mb-2 font-bold uppercase tracking-[0.25em] text-[#A7FF00]">
                  Address
                </p>
                <p>{contactInfo.address}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="rounded-full bg-[#A7FF00] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.2em] text-[#252525]"
              >
                Send Your Brief
              </a>

              <a
                href={`https://wa.me/62${contactInfo.phone.replace(/^0/, "")}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.2em] text-white"
              >
                Talk With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}