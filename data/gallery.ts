export type GalleryCategory = {
  id: string;
  title: string;
  description: string;
  images: string[];
};

export const galleryData: GalleryCategory[] = [
  {
    id: "flex",
    title: "Flex Printing",
    description:
      "Large-scale commercial flex printing solutions for banners, hoardings, branding, and outdoor advertising.",

    images: [
      "/gallery/flex/1.jpeg",
      "/gallery/flex/2.jpeg",
      "/gallery/flex/3.jpeg",
      "/gallery/flex/4.jpeg",
      "/gallery/flex/5.jpeg",
    ],
  },

  {
    id: "uv",
    title: "UV Printing",
    description:
      "Premium direct printing on rigid and flexible materials including acrylic, ACP sheets, MDF, tiles, and fabric applications.",

    images: [
      "/gallery/uv/1.jpeg",
      "/gallery/uv/2.jpeg",
      "/gallery/uv/3.jpeg",
      "/gallery/uv/4.jpeg",
      "/gallery/uv/5.jpeg",
    ],
  },

  {
    id: "cnc",
    title: "CNC Cutting",
    description:
      "Precision industrial CNC cutting and fabrication for wood, acrylic, aluminium, MS, SS, brass, and decorative production.",

    images: [
      "/gallery/cnc/1.jpeg",
      "/gallery/cnc/2.jpeg",
      "/gallery/cnc/3.jpeg",
      "/gallery/cnc/4.jpeg",
      "/gallery/cnc/5.jpeg",
      "/gallery/cnc/6.jpeg",
      "/gallery/cnc/7.jpeg",
      "/gallery/cnc/8.jpeg",
    ],
  },

  {
    id: "led",
    title: "LED Signage",
    description:
      "Custom illuminated signage, branding installations, and premium channel letter fabrication for commercial applications.",

    images: [
      "/gallery/led/1.mp4",
      "/gallery/led/2.jpeg",
      "/gallery/led/3.jpeg",
      "/gallery/led/4.jpeg",
      "/gallery/led/5.jpeg",
    ],
  },
  {
    id: "industrial",
    title: "Industrial Projects",
    description:
      "Comprehensive, large-scale industrial manufacturing and fabrication projects engineered from design to execution.",

    images: [
      "/gallery/industrial/4.jpeg",
      "/gallery/industrial/2.jpeg",
      "/gallery/industrial/3.jpeg",
      "/gallery/industrial/1.jpeg",
      "/gallery/industrial/5.jpeg",
      "/gallery/industrial/6.jpeg",
      "/gallery/industrial/7.jpeg",
      
    ],
  },
];