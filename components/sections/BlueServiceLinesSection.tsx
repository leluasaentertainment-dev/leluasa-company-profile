const serviceRows = [
  ["TALENT MANAGEMENT", "KOL CAMPAIGN", "STREAMERS"],
  ["ESPORTS TALENT", "CONTENT CREATOR", "INFLUENCER PARTNERSHIP", "BRAND DEAL"],
  ["COMMUNITY TALENT", "CREATOR ACTIVATION", "SPONSORSHIP"],
];

export default function BlueServiceLinesSection() {
  return (
    <section className="overflow-hidden bg-[#F7F7F2] px-5 py-20 text-[#252525] md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-heading text-5xl leading-none md:text-6xl">
            Our <span className="text-[#006BFF]">Services</span>
          </h2>
        </div>

        <div className="mt-14 space-y-5">
          {serviceRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex w-max items-center gap-8 ${
                rowIndex === 1 ? "-ml-40" : ""
              }`}
            >
              {[...row, ...row].map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex items-center gap-8"
                >
                  <span className="font-heading whitespace-nowrap text-[2.4rem] leading-none text-black md:text-[3.8rem] lg:text-[4.6rem]">
                    {item}
                  </span>

                  <span className="font-heading text-[2.4rem] leading-none text-black md:text-[3.8rem] lg:text-[4.6rem]">
                    &gt;&gt;
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}