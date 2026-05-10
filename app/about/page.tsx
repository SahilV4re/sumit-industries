import Image from "next/image";
import MagneticButton from "../../components/ui/magnetic-button";
import Reveal from "../../components/ui/reveal";
import { Button } from "../../components/ui/button";    
import { Beam } from "@/components/ui/background-grid-beam";

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-white via-zinc-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#d4d4d8_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d8_1px,transparent_1px)] bg-[size:40px_40px]" />
        <Beam />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-4">
              About Us
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight text-zinc-900">
              Precision Manufacturing Built for Commercial Excellence
            </h1>

            <p className="mt-6 text-lg text-zinc-600 leading-relaxed max-w-xl">
              We deliver industrial-grade printing, CNC fabrication, UV
              applications, and custom signage solutions engineered for
              precision, durability, and premium commercial output.
            </p>

            <div className="mt-10">
              <MagneticButton>Explore Services</MagneticButton>
            </div>
          </div>

          <div className="relative h-[520px] rounded-3xl overflow-hidden">
            <Image
              src="/hero-2.jpeg"
              alt="About Sumit Industries"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* MANAGING DIRECTOR */}
      <Reveal>
        <section className="py-24 px-6 bg-white border-b border-zinc-100">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[auto_1fr] gap-12 md:gap-16 items-center">
            {/* LEFT: IMAGE */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl mx-auto md:mx-0 border-4 border-white">
              <Image
                src="/hero-1.jpeg"
                alt="Managing Director"
                fill
                className="object-cover"
              />
            </div>
            
            {/* RIGHT: CONTENT */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 flex items-baseline justify-center md:justify-start gap-2">
                Mr. Sumit Ashok Vispute
                <span className="text-xl md:text-2xl text-zinc-400 font-normal">
                  (B.E Design)
                </span>
              </h2>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mt-3 font-medium">
                Managing Director
              </p>
              
              <div className="w-16 h-[2px] bg-zinc-200 my-8 mx-auto md:mx-0" />
              
              <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed italic font-light">
                "At Sumit Industries, our commitment has always been to deliver uncompromising quality and scale. We continually invest in world-class infrastructure to ensure our clients receive the highest standard of precision manufacturing."
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* TRUST STRIP */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">
              Infrastructure
            </p>
            <h3 className="text-lg font-semibold text-zinc-900">
              Imported Machinery
            </h3>
            <p className="text-sm text-zinc-500 mt-1">
              Advanced machines sourced from Japan & Germany
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">
              Quality
            </p>
            <h3 className="text-lg font-semibold text-zinc-900">
              Precision Manufacturing
            </h3>
            <p className="text-sm text-zinc-500 mt-1">
              Reliable commercial-grade execution
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">
              Capability
            </p>
            <h3 className="text-lg font-semibold text-zinc-900">
              Multi-Service Infrastructure
            </h3>
            <p className="text-sm text-zinc-500 mt-1">
              Flex • UV • CNC • LED
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Reveal>
  <section className="py-28 px-6 bg-gradient-to-b from-white via-zinc-50 to-white">
    <div className="max-w-6xl mx-auto">
      <div className="mb-16">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3">
          What We Do
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
          Comprehensive Industrial Production Solutions
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Flex Printing",
            quote: "Bold visuals built for large-scale brand impact.",
          },
          {
            title: "UV Printing",
            quote: "Premium direct printing across rigid and flexible surfaces.",
          },
          {
            title: "CNC Cutting",
            quote: "Precision fabrication engineered for complex industrial execution.",
          },
          {
            title: "LED Signage",
            quote: "Illuminated branding crafted for lasting visual presence.",
          },
        ].map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-zinc-200 bg-white p-8 hover:shadow-xl transition group"
          >
            <div className="w-8 h-[2px] bg-black mb-5 group-hover:w-12 transition-all" />

            <h3 className="text-xl font-semibold text-zinc-900">
              {service.title}
            </h3>

            <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
              {service.quote}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
</Reveal>

      {/* WHY CHOOSE US */}
      <Reveal>
        <section className="py-28 px-6 bg-zinc-100 text-zinc-900">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3">
                Why Choose Us
              </p>

              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Built Around Quality, Speed & Precision
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Imported Infrastructure",
                  desc: "Our facility is equipped with advanced machinery sourced from Japan and Germany, ensuring world-class precision and reliability for every project."
                },
                {
                  title: "Commercial Production Scale",
                  desc: "We are built for volume. Our operations are streamlined to handle large-scale commercial orders without compromising on speed or quality."
                },
                {
                  title: "Custom Manufacturing",
                  desc: "Every brand is unique. We offer highly customized fabrication and printing solutions tailored precisely to your specific requirements."
                },
                {
                  title: "Premium Finish Quality",
                  desc: "We obsess over the details. From material selection to the final cut, our rigorous quality control guarantees a premium finish."
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="flex flex-col sm:flex-row gap-6 p-8 md:p-10 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:shadow-xl transition duration-500 group"
                >
                  <div className="text-5xl font-light text-zinc-200 shrink-0 font-mono group-hover:text-black transition-colors">
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-zinc-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 leading-relaxed text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* FACILITY TOUR */}
      <Reveal>
        <section className="py-28 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3">
                Facility Tour
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
                Inside Sumit Industries
              </h2>
              <p className="mt-4 text-zinc-600 max-w-2xl mx-auto text-lg">
                Take a quick walk around our state-of-the-art production shop and see our imported machinery in action.
              </p>
            </div>
            
            {/* YOUTUBE EMBED */}
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-zinc-200">
              {/* Replace the 'src' URL below with your actual YouTube video embed URL! */}
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/J-W0JBDoeM0?si=ns1lFau6JvLUE7l0" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CTA */}
      <section className="py-28 px-6 bg-gradient-to-r from-black to-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Let’s Build Your Next Project
          </h2>

          <p className="mt-5 text-zinc-300 text-lg">
            Premium manufacturing solutions tailored for commercial excellence.
          </p>

          <div className="mt-10 flex justify-center">
            <Button variant="outline" className=" border border-white-500 bg-black px-4">Contact Us</Button>
          </div>
        </div>
      </section>
    </main>
  );
}