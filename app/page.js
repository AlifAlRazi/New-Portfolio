import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import GithubSection from "./components/GithubSection";
import ResearchSection from "./components/ResearchSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <Stats />
      
      <div className="section-divider my-8" />
      <AboutSection />
      
      <div className="section-divider my-8" />
      <ExperienceSection />
      
      <div className="section-divider my-8" />
      <ProjectsSection />
      
      <div className="section-divider my-8" />
      <SkillsSection />
      
      <div className="section-divider my-8" />
      <GithubSection />
      
      <div className="section-divider my-8" />
      <ResearchSection />
      
      <div className="section-divider my-8" />
      <ContactSection />
    </div>
  );
}