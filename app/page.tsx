import AboutFounder from "@/components/shared/AboutFounder";
import DiscoverEvents from "@/components/shared/DiscoverEvents";
import HowWeWork from "@/components/shared/HowWeWork";
import LatestEventRecordings from "@/components/shared/LatestEventRecordings";
import LatestInsights from "@/components/shared/LatestInsights";
import LatestWork from "@/components/shared/LatestWork";
import NewsCarousel from "@/components/shared/NewsCarousel";
import SupportUs from "@/components/shared/SupportUs";
import TrendingIssues from "@/components/shared/TrendingIssues";
import UpcomingEvents from "@/components/shared/UpcomingEvents";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Hero Section containing the News Slider */}
      <section className="w-full">
        <NewsCarousel />
      </section>
      <LatestInsights />
      <UpcomingEvents />
      <LatestEventRecordings />
      <DiscoverEvents />
      <TrendingIssues />
      <LatestWork />
      <HowWeWork />
      <AboutFounder />
      <SupportUs />
    </main>
  );
}
