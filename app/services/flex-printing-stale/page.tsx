"use client";

import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import MagneticButton from "@/components/ui/magnetic-button";

export default function FlexPrintingPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Large Format Flex Printing
            </h1>
            <p className="text-gray-600 mt-4">
              High-quality large format printing for banners, hoardings,
              signage and commercial advertising.
            </p>

            <div className="mt-6">
              <MagneticButton>Get Quote</MagneticButton>
            </div>
          </div>

          <div className="relative h-[300px] rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center text-gray-400">
            Flex Printing Image
          </div>

        </div>
      </section>

      {/* OVERVIEW */}
      <Reveal>
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">Overview</h2>
          <p className="text-gray-600 mt-4 max-w-3xl">
            We provide high-quality flex printing solutions for businesses,
            events, and advertising needs. Our machines ensure vibrant colors,
            durability, and large-scale output.
          </p>
        </section>
      </Reveal>

      {/* CAPABILITIES */}
      <Reveal>
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">

            <h2 className="text-3xl font-semibold mb-12">
              Our Capabilities
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Large size printing",
                "High resolution output",
                "Weather-resistant materials",
                "Bulk order handling",
                "Fast turnaround",
                "Custom sizes available",
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 border rounded-xl bg-white"
                >
                  {item}
                </div>
              ))}
            </div>

          </div>
        </section>
      </Reveal>

      {/* GALLERY */}
      <Reveal>
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Work Showcase
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4].map((img) => (
              <div
                key={img}
                className="h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400"
              >
                Image
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* PROCESS */}
      <Reveal>
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">

            <h2 className="text-3xl font-semibold text-center mb-12">
              Our Process
            </h2>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                "Submit Requirement",
                "Printing & Production",
                "Delivery",
              ].map((step, i) => (
                <div key={i} className="p-6 border rounded-xl bg-white">
                  <h3 className="font-medium">{step}</h3>
                </div>
              ))}
            </div>

          </div>
        </section>
      </Reveal>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-semibold">
          Need Flex Printing?
        </h2>
        <p className="text-gray-600 mt-3">
          Get high-quality prints with fast delivery.
        </p>

        <div className="mt-6">
          <MagneticButton>Get Quote</MagneticButton>
        </div>
      </section>

    </main>
  );
}