import "./globals.css";

export const metadata = {
  title: "Raksha Navhule | Video Editor & Content Creator",
  description: "A premium aesthetic portfolio showcasing video editing and creative storytelling.",
};

import CustomCursor from "./components/CustomCursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}