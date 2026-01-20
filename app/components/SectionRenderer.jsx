import Hero from "./Hero";
import Features from "./Features";

const componentMap = {
  hero: Hero,
  features: Features,
};

export default function SectionRenderer({ sections }) {
  return (
    <>
      {sections.map((section, index) => {
        const Component = componentMap[section.type];

        if (!Component) return null;

        return <Component key={index} {...section.props} />;
      })}
    </>
  );
}
