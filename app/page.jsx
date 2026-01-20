import { sections } from "./data/sections";
import SectionRenderer from "./components/SectionRenderer";

export default function Home() {
  return (
    <main>
      <SectionRenderer sections={sections} />
    </main>
  );
}
