//dummy about

import HeroSection from "@/components/Common/HeroSection";
import LetsConnect from "@/components/Common/LetsConnect";
import Ethics from "@/components/AboutEthics/BusinessEthics";
import Questions from "@/components/Common/Questions";


export default function About() {
    return (
        <div>
            <HeroSection />
            <Ethics />
            <LetsConnect />
            <Questions />
            
        </div>
    );
}