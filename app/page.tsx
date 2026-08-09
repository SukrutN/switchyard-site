import SiteHeader from "./components/SiteHeader";
import Hero from "./components/Hero";
import Laws from "./components/Laws";
import Numbers from "./components/Numbers";
import TourSection from "./components/TourSection";
import Quickstart from "./components/Quickstart";
import PromiseSection from "./components/Promise";
import Milestones from "./components/Milestones";
import SiteFooter from "./components/SiteFooter";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Laws />
        <Numbers />
        <TourSection />
        <Quickstart />
        <PromiseSection />
        <Milestones />
      </main>
      <SiteFooter />
    </>
  );
}
