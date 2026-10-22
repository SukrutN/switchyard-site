import SiteHeader from "./components/SiteHeader";
import Hero from "./components/Hero";
import Laws from "./components/Laws";
import Numbers from "./components/Numbers";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Laws />
        <Numbers />
      </main>
    </>
  );
}
