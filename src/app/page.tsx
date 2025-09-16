import { Button } from "@/components/ui/Button";
import Link from "next/link";
import GlobeDemo from "@/components/ui/GlobeDemo";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Globe */}
      <section className="relative min-h-screen">
        {/* GlobeDemo component as background */}
        <div className="absolute inset-0 z-0">
          <GlobeDemo />
        </div>
      </section>

    </div>
  );
}
