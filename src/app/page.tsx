import { Hero } from "@/components/sections/hero";
import { QuickStats } from "@/components/sections/quick-stats";
import { FeaturedSkills } from "@/components/sections/featured-skills";
import { FeaturedProjects } from "@/components/sections/featured-projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickStats />
      <FeaturedSkills />
      <FeaturedProjects />
    </>
  );
}
