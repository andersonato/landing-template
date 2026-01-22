import Hero from "./Hero";
import Features from "./Features";
import Services from "./Services";
import Gallery from "./Gallery";

const components = {
  hero: Hero,
  features: Features,
  services: Services,
  gallery: Gallery,
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
