//dummy about

import HeroSection from "@/components/Common/HeroSection";
import ManagementTeam from "@/components/AboutTeam/ManagementTeam";
import LeadingTeam from "@/components/AboutTeam/LeadingTeam";
import Question from "@/components/Common/Questions";
import LetsConnect from "@/components/Common/LetsConnect";



export default function About() {
    return (
        <div>
            <HeroSection />
            <ManagementTeam />
            <LeadingTeam />
            <LetsConnect />
            <Question />
            
        </div>
    );
}