const navItems = [
  { key: "home", href: "/" },
  {
    key: "products",
    href: "/signal-direct-imager",
    children: [
      { key: "signalDirect", href: "/signal-direct-imager" },
      { key: "bioproduction", href: "/bioproduction" }
    ]
  },
  { key: "technology", href: "/technology" },
  { key: "software", href: "/software" },
  { key: "specifications", href: "/specifications" },
  { key: "support", href: "/support" },
  { key: "contact", href: "/contact" }
];

export default navItems;
