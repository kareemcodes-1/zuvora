import Image from "next/image";

function CTA() {
  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/1.jpg"
        alt="cta-background"
        fill
        quality={100}
        priority
        className="object-cover object-center"
      />

      {/* Gradient overlay — stronger at bottom-left where text lives */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />

      {/* CTA Content — bottom-left like Moremud */}
      <div className="absolute bottom-0 left-0 z-20 p-10 md:p-16 ">
        {/* Eyebrow label */}
        <p className="text-white/60 uppercase tracking-[0.25em] text-[1rem] font-medium mb-4">
          Discover The Collection
        </p>

        {/* Bold headline */}
        <h1
          className="text-white font-black uppercase leading-[1.5] mb-8 text-[5rem]"
        >
          Elevate Your
  <br />
  Everyday Style
        </h1>

        {/* CTA Button — pill style, minimal */}
        <button
          className="next-btn btn-base btn-light !mb-[2rem] cursor-pointer"
        >
          SHOP NOW
        </button>
      </div>
    </section>
  );
}

export default CTA;