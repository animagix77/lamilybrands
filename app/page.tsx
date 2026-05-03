import { Blossom } from "@/components/Blossom";
import { Families } from "@/components/Families";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Story } from "@/components/Story";
import { TaglineStrip } from "@/components/TaglineStrip";
import { Tubblys } from "@/components/Tubblys";

// NOTE: <Stockists /> (with its inline request form) is intentionally kept
// in /components and /app/api/request-stockist for easy reactivation later.
// To bring back, re-import here and add `<Stockists />` to the main flow,
// plus restore the matching nav link and footer link.

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TaglineStrip />
        <Families />
        <Tubblys />
        <Blossom />
        <Story />
      </main>
      <Footer />
    </>
  );
}
