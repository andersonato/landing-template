import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.uptovai.com"),
  title: "Elissandra Oliveira | Architectural Technical Support",
  description:
    "Remote architectural technical support for architecture practices: technical drafting, 3D modelling, visualisation and flexible project collaboration.",
  openGraph: {
    title: "Elissandra Oliveira | Architectural Technical Support",
    description:
      "Remote architectural technical support for architecture practices, including technical documentation, 3D modelling and visualisation.",
    url: "https://www.uptovai.com",
    siteName: "Elissandra Oliveira",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
