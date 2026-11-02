export type Spec = { label: string; value: string };

export type Product = {
  slug: string;
  index: string;
  name: string;
  kicker: string;
  summary: string;
  image: string;
  imageAlt: string;
  /** Drop a file in public/ and set this when the clip is ready. */
  video?: string;
  points: string[];
  specs: Spec[];
};

export const PHONE_DISPLAY = "716-681-1634";
export const PHONE_TEL = "+17166811634";
export const EMAIL = "info@razorsedgemanufacturing.com";

export const products: Product[] = [
  {
    slug: "pepperoni-slicer",
    index: "01",
    name: "Pepperoni Slicer",
    kicker: "Pizzeria line",
    summary:
      "Automatic slicer for shops that buy pepperoni in sticks and cut it seconds before it hits the pie. Either end goes in. The whole stick comes out. Nothing is left in the tube.",
    image: "/images/slicer.jpg",
    imageAlt:
      "Brushed stainless automatic pepperoni slicer with a thickness dial and vertical feed tubes",
    points: [
      "Up to 75 slices a minute. Slice one stick, three, or half of one.",
      "Thickness in 1/32 inch steps, up to 1/2 inch, with a detent you can feel.",
      "Tube carousel lifts off for a bottle brush or the dishwasher. Blade guard swings clear.",
      "Optional French-cut carousel swaps in with the same counterweights.",
    ],
    specs: [
      { label: "Rate", value: "Up to 75 slices / min" },
      { label: "Thickness", value: "1/32 in steps, up to 1/2 in" },
      { label: "Dial", value: "Half turn = 1/32 in, with detent" },
      { label: "Feed", value: "Either end. Full stick. No waste." },
      { label: "Batch", value: "One, two, three sticks, or a partial" },
      { label: "Clean", value: "Lift-off carousel, swing-clear blade guard" },
      { label: "Option", value: "Interchangeable French-cut carousel" },
      { label: "Origin", value: "Made in America" },
    ],
  },
  {
    slug: "fleshing-machine",
    index: "02",
    name: "Fleshing Machine",
    kicker: "Yield",
    summary:
      "A durable fleshing machine for lines that need yield without tearing the product. Built to stay on the floor, not in the shop for repairs.",
    image: "/images/fleshing.jpg",
    imageAlt: "Heavy stainless fleshing machine with feed rollers and safety guards",
    points: [
      "Optimized for yield and gentle handling.",
      "Quoted to the product, the pace, and the line it has to live on.",
      "Washdown-minded stainless construction.",
    ],
    specs: [
      { label: "Role", value: "Fleshing for yield and gentle handling" },
      { label: "Build", value: "Durable line equipment" },
      { label: "Spec", value: "Quoted to the job" },
      { label: "Origin", value: "Made in America" },
    ],
  },
  {
    slug: "bx-cutter",
    index: "03",
    name: "BX Cutter",
    kicker: "Portioning",
    summary:
      "A robust cutter for high-throughput trimming and portioning. Tell us the cut and the volume. We spec the machine to the work.",
    image: "/images/bx-cutter.jpg",
    imageAlt: "Compact stainless portion cutter with an infeed chute and blade housing",
    points: [
      "Built for trimming and portioning that has to stay consistent.",
      "Sized for throughput, not a demo counter.",
      "Talk to the shop for blade, product, and line fit.",
    ],
    specs: [
      { label: "Role", value: "High-throughput trimming and portioning" },
      { label: "Build", value: "Robust line cutter" },
      { label: "Spec", value: "Quoted to the cut" },
      { label: "Origin", value: "Made in America" },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export const steps = [
  {
    n: "01",
    title: "Drop the stick",
    body: "Lift the counterweight out of a tube, drop in a stick, and put the weight back. Round end or pinched end — it slices either way.",
  },
  {
    n: "02",
    title: "Set the dial",
    body: "Each half turn is 1/32 inch. The detent clicks at every mark, so a 2/32 inch slice is two clicks, not a guess.",
  },
  {
    n: "03",
    title: "Walk away",
    body: "When the counterweight handles sit at the bottom of the slot, the sticks are done. Dump the bowl. Slice the next batch when you need it.",
  },
];
