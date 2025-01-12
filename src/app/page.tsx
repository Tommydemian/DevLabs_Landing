import { FeaturesSection } from "./components/sections/features";
import { VSpace } from "./components/ui/VSpace";
import { CallToActionSection } from "./components/sections/call-to-action";
import { OtherToolsSection } from "./components/sections/other-tools";

export default function Home() {
  return (
    <main>
      <VSpace>
        <FeaturesSection />
        <div className="overflow-clip">
          <CallToActionSection />
        </div>
        <OtherToolsSection />
      </VSpace>
    </main>
  );
}
