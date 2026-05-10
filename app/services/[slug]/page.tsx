import { GalleryItem, Machine, services } from "@/data/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import Reveal from "../../../components/ui/reveal";
import MagneticButton from "../../../components/ui/magnetic-button";
import MachineShowcase from "../../../components/services/MachineShowcase";
import Link from "next/link";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) return notFound();

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative py-24 px-6 bg-linear-to-b from-white via-gray-50 to-white overflow-hidden">
        
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-size[40px_40px]" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h1 className="text-5xl font-semibold leading-tight tracking-tight">
              {service.title}
            </h1>

            <div className="w-16 h-[3px] bg-black mt-6" />

            <p className="text-gray-600 mt-5 max-w-md">
              {service.description}
            </p>

            <div className="mt-8 flex gap-4">
              <Link href="/contact"><MagneticButton>Contact Us</MagneticButton></Link>
              <Link href="/gallery"><MagneticButton outline>View Work</MagneticButton></Link>
            </div>
          </div>

          <div className="relative">
            <div className="h-[350px] rounded-2xl overflow-hidden border shadow-md">
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -inset-4 bg-linear-to-r from-gray-200 to-gray-300 blur-2xl opacity-30 -z-10" />
          </div>

        </div>
          </section>
          <section className="px-6 py-8 bg-gray-200">
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">

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
          Built for reliable commercial-grade output
        </p>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">
          Capacity
        </p>
        <h3 className="text-lg font-semibold text-zinc-900">
          Large Scale Production
        </h3>
        <p className="text-sm text-zinc-500 mt-1">
          Fast turnaround with consistent execution
        </p>
      </div>

    </div>
  </div>
</section>

      {/* CAPABILITIES */}
      <Reveal>
  <section className="py-28 px-6 bg-gradient-to-b from-white via-zinc-50 to-white">
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-4">
            Production Excellence
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-zinc-900">
            Built for Precision, Scale & Premium Output
          </h2>
        </div>

        <p className="text-zinc-600 text-lg leading-relaxed max-w-xl">
          From large-scale commercial printing to durable fabrication materials,
          our infrastructure is designed to deliver industrial-grade consistency,
          speed, and visual excellence.
        </p>
      </div>

      {/* Premium showcase */}
      <div className="grid md:grid-cols-12 gap-6">

        {/* LEFT FEATURE PANEL */}
        <div className="md:col-span-7 rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-100 via-white to-white shadow-2xl p-10 min-h-[420px] flex flex-col justify-between relative overflow-hidden">

          {/* subtle glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-zinc-200 rounded-full blur-3xl opacity-40" />

          <div className="relative z-10">
            <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs mb-5">
              Core Capabilities
            </p>

            <div className="space-y-5">
              {service.features.map((feature: string, i: number) => (
                <div
                  key={i}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium shrink-0 group-hover:scale-110 transition">
                    0{i + 1}
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-zinc-900">
                      {feature}
                    </h3>

                    <p className="text-zinc-500 text-sm mt-1">
                      Engineered for reliable commercial-scale production.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT MATERIALS */}
        <div className="md:col-span-5 grid gap-5">
          {service.materials.map((material: string, i: number) => (
            <div
              key={i}
              className="group rounded-2xl border border-zinc-200 bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-zinc-900">
                  {material}
                </h3>

                {/* <div className="w-10 h-10 rounded-full bg-zinc-100 group-hover:bg-black group-hover:text-white transition flex items-center justify-center">
                  →
                </div> */}
              </div>

              <p className="text-zinc-500 text-sm mt-3 leading-relaxed">
                Premium-grade material optimized for industrial applications and
                precision output.
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
</Reveal>

      {/* MACHINES (DARK SECTION) */}
       <Reveal>
  <MachineShowcase machines={service.machines} />
</Reveal>

      {/* MATERIALS */}
      {/* <Reveal>
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12">
            Materials & Applications
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {service.materials.map((m: string, i: number) => (
              <div
                key={i}
                className="p-6 rounded-xl border bg-white hover:shadow-md transition text-center"
              >
                {m}
              </div>
            ))}
          </div>
        </section>
      </Reveal> */}

      {/* GALLERY */}
      <Reveal>
  <section className="py-28 px-6 bg-gradient-to-b from-white to-zinc-50">
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3">
          Portfolio
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
          Work Showcase
        </h2>

        <p className="text-zinc-600 mt-4 max-w-2xl mx-auto text-lg">
          Real commercial production work delivered with precision, scale, and premium finishing.
        </p>
      </div>

      {/* Featured Image */}
      <div className="relative rounded-3xl overflow-hidden group h-[520px] mb-6">
        <Image
          src={service.gallery[0].image}
          alt="Featured work"
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>

      {/* Secondary Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {service.gallery.slice(1).map((item: GalleryItem, i: number) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden group h-[280px]"
          >
            <Image
              src={item.image}
              alt={`Work ${i + 2}`}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
          </div>
        ))}
      </div>

    </div>
  </section>
</Reveal>

      {/* PROCESS
      <Reveal>
        <section className="py-24 px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">
            Our Process
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {["Requirement", "Production", "Delivery"].map(
              (step: string, i: number) => (
                <div
                  key={i}
                  className="p-6 border rounded-xl bg-white hover:shadow-md transition"
                >
                  <div className="text-gray-400 text-sm mb-2">
                    Step {i + 1}
                  </div>
                  <p className="font-medium">{step}</p>
                </div>
              )
            )}
          </div>
        </section>
      </Reveal> */}

      {/* CTA */}
      <section className="py-24 text-center bg-linear-to-r from-black to-gray-900 text-white">
        <h2 className="text-4xl font-semibold">
          Let’s Build Your Next Project
        </h2>

        <p className="mt-3 text-gray-300">
          High precision. Fast turnaround. Reliable results.
        </p>

        <div className="mt-6">
          <MagneticButton>Get Quote</MagneticButton>
        </div>
      </section>

    </main>
  );
}