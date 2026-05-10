export type Machine = {
  name: string;
  image: string;
  description: string;
};

export type GalleryItem = {
  image: string;
};

export type Service = {
  title: string;
  description: string;
  heroImage: string;
  features: string[];
  machines: Machine[];
  materials: string[];
  gallery: GalleryItem[];
};

export const services: Record<string, Service> = {
  "flex-printing": {
    title: "Large Format Flex Printing",
    description:
      "High-quality large format printing for banners, hoardings and advertising.",

    heroImage: "/flex.jpeg",

    features: [
      "Large size printing",
      "High resolution output",
      "Weather-resistant material",
      "Bulk orders supported",
    ],

    machines: [
      {
        name: "ECO Solvent Printer (EPSON)",
        image: "/flex/machine1.jpeg",
        description:
          "Engineered for vibrant high-resolution commercial output with premium color accuracy.",
      },
      {
        name: "Largest Size Industrial Flex Printer",
        image: "/flex/machine2.jpeg",
        description:
          "Built for large-scale industrial production with consistent precision and speed.",
      },
    ],

    materials: [
      "Flex",
      "Vinyl",
      "Backlit Media",
      "Frontlit Banners",
    ],

    gallery: [
      { image: "/flex/3.jpeg" },
      { image: "/flex/2.jpeg" },
      { image: "/flex/4.jpeg" },
      { image: "/flex/1.jpeg" },
    ],
    },
    "cnc-cutting": {
  title: "Precision CNC Cutting & Fabrication",
  description:
    "High-precision CNC cutting solutions for wood, acrylic, aluminium, MS, SS, brass, and industrial fabrication requirements.",

  heroImage: "/cnc/machine1.jpeg",

  features: [
    "Precision industrial cutting",
    "Custom fabrication support",
    "High-volume production capability",
    "Complex shape & pattern cutting",
  ],

  machines: [
    {
      name: "Industrial CNC Laser Cutting",
      image: "/cnc/machine1.jpeg",
      description:
        "Engineered for accurate industrial cutting with clean finishes and exceptional consistency for precision fabrication.",
    },
    {
      name: "Industrial CNC Router Cutting",
      image: "/cnc/machine2.jpeg",
      description:
        "Designed for precision cutting across MDF, wood, acrylic, aluminium, and decorative fabrication applications.",
    },
    {
      name: "Fiber Laser Cutting Machine",
      image: "/cnc/machine3.jpeg",
      description:
        "Built for high-performance cutting of MS, SS, and brass with industrial-grade speed, accuracy, and reliability.",
    },
  ],

  materials: [
    "MDF",
    "Wood",
    "Acrylic",
    "Aluminium",
    "MS / SS",
    "Brass",
  ],

  gallery: [
    { image: "/cnc/5.jpeg" },
    { image: "/cnc/2.jpeg" },
    { image: "/cnc/1.jpeg" },
    { image: "/cnc/6.jpeg" },
  ],
  },
  "uv-printing": {
  title: "Premium UV Printing Solutions",
  description:
    "High-quality UV printing for rigid and flexible materials, delivering vibrant colors, durability, and premium commercial-grade output.",

  heroImage: "/uv/machine1.jpeg",

  features: [
    "Multi-surface premium printing",
    "High-definition durable output",
    "Indoor & outdoor commercial applications",
    "Custom branding & product printing",
  ],

  machines: [
    {
      name: "UV Flat Bed Printing Machine",
      image: "/uv/machine1.jpeg",
      description:
        "Engineered for premium direct printing on acrylic, MDF, tiles, ACP sheets, aluminium, MS, and multiple rigid surfaces with exceptional detail.",
    },
    {
      name: "UV Roll To Roll Printing",
      image: "/uv/machine2.jpeg",
      description:
        "Designed for seamless high-volume printing on flexible media including fabric, cloth, curtains, and commercial display materials.",
    },
  ],

  materials: [
    "Acrylic",
    "MDF",
    "Tiles",
    "ACP Sheets",
    "Fabric",
    "Curtains",
  ],

  gallery: [
    { image: "/uv/2.jpeg" },
    { image: "/uv/1.jpeg" },
    { image: "/uv/3.jpeg" },
    { image: "/uv/4.jpeg" },
  ],
  },
  "led-signage": {
  title: "Custom LED Signage & Channel Letters",
  description:
    "Premium LED signage manufacturing solutions for businesses, commercial branding, storefront displays, and custom illuminated installations.",

  heroImage: "/led/machine1.jpeg",

  features: [
    "Custom illuminated signage production",
    "Precision channel letter fabrication",
    "Commercial branding solutions",
    "Durable indoor & outdoor installations",
  ],

  machines: [
    {
      name: "Aluminium Channel Bending LED Letters Machine",
      image: "/led/machine2.jpeg",
      description:
        "Built for precision fabrication of premium aluminium channel letters used in high-end commercial signage and illuminated branding.",
    },
    {
      name: "Liquid Letters Curing Machine",
      image: "/led/machine1.jpeg",
      description:
        "Engineered for manufacturing durable small-format LED letters with smooth finishing, illumination consistency, and premium visual quality.",
    },
  ],

  materials: [
    "Aluminium",
    "Acrylic",
    "LED Components",
    "Channel Letter Materials",
    "Signage Panels",
    "Branding Displays",
  ],

  gallery: [
    { image: "/led/1.jpeg" },
    { image: "/led/2.jpeg" },
    { image: "/led/3.jpeg" },
    { image: "/led/4.jpeg" },
  ],
  },
  
};