import FeatureCourses from "@/components/FeatureCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCard from "@/components/TestimonialCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChosseUs from "@/components/WhyChosseUs";
import Instructors from "@/components/Instructors";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeatureCourses/>
      <WhyChosseUs/>
      <TestimonialCard/>
      <UpcomingWebinars/>
      <Instructors/>
    </main>
  );
}
