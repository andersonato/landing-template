import Hero from "./Hero";
import Features from "./Features";
import Services from "./Services";

const components = {
  hero: Hero,
  features: Features,
  services: Services,
};

export default function SectionRenderer({ sections = [] }) {
  return (
    <>
      {sections.map((section, index) => {
        const Component = components[section.type];
        if (!Component) return null;
        return <Component key={index} {...section.props} />;
      })}
    </>
  );
}
