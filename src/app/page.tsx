import Hero from "./components/Hero";
import StatsCounter from "./components/StatsCounter";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import ServicesPreview from "./components/ServicesPreview";
import Testimonials from "./components/Testimonials";
import BlogPreview from "./components/BlogPreview";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <Projects />
      <ServicesPreview />
      <TechStack />
      <Testimonials />
      <BlogPreview />
      <CTA />
    </>
  );
}
