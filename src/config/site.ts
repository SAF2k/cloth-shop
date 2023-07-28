export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "My Cloths",
  description: "An open source e-commerce Clothing build with everything new in Next.js 13.",
  url: "/",
  ogImage: "",
   mainNav: [
    {
      title: "Lobby",
      items: [
        {
          title: "Products",
          href: "/products",
          description: "All the products we have to offer.",
          items: [],
        },
        {
          title: "Build a Board",
          href: "/build-a-board",
          description: "Build your own custom skateboard.",
          items: [],
        },
        {
          title: "Blog",
          href: "/blog",
          description: "Read our latest blog posts.",
          items: [],
        },
      ],
    },
]

};