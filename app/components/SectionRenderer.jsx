import Hero from "./Hero";
import Features from "./Features";

export default function SectionRenderer({ sections }) {
  return (
    <>
      {sections.map((section, index) => {
        switch (section.type) {
          case "hero":
            return <Hero key={index} {...section.props} />;

          case "features":
            return <Features key={index} {...section.props} />;

          default:
            return null;
        }
      })}
    </>
  );
}
