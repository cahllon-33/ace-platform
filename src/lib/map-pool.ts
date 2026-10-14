/** Competitive map pool shown on /maps. Plates in /public/images are original A.C.E. art. */
export const MAP_POOL = [
  { slug: "dust", name: "Dust II", src: "/images/map-dust.jpg", setting: "Desert town", note: "Long sightlines on A, tight mid doors." },
  { slug: "mirage", name: "Mirage", src: "/images/map-mirage.jpg", setting: "Market district", note: "Mid control decides most rounds." },
  { slug: "inferno", name: "Inferno", src: "/images/map-inferno.jpg", setting: "Old village", note: "Narrow chokes; utility-heavy executes." },
  { slug: "nuke", name: "Nuke", src: "/images/map-nuke.jpg", setting: "Industrial plant", note: "Stacked sites; fast vertical rotations." },
  { slug: "ancient", name: "Ancient", src: "/images/map-ancient.jpg", setting: "Jungle ruins", note: "Mid-to-B pressure shapes the half." },
  { slug: "anubis", name: "Anubis", src: "/images/map-anubis.jpg", setting: "Canal temple", note: "Water mid and open B attacks." },
  { slug: "train", name: "Train", src: "/images/map-train.jpg", setting: "Rail yard", note: "Train-car cover and long A lanes." },
] as const;
