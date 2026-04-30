import { Blossom } from "@/components/Blossom";
import { Families } from "@/components/Families";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Stockists } from "@/components/Stockists";
import { Story } from "@/components/Story";
import { TaglineStrip } from "@/components/TaglineStrip";
import { Tubblys } from "@/components/Tubblys";

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
        <Stockists />
      </main>
      <Footer />
    </>
  );
}
