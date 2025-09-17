import HomeHeroSection from "@/components/sections/HomeHeroSection";
import TechnologyServicesSection from "@/components/sections/TechnologyServicesSection";
import TechStackSection from "@/components/sections/TechStackSection";
import FutureSection from "@/components/sections/FutureSection";
import ProjectForm from "@/components/our-creations/ProjectForm";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <TechnologyServicesSection />
      <TechStackSection />
      <FutureSection />
      <ProjectForm/>
    </>
  );
}
