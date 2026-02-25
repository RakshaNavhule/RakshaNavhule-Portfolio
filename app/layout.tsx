import "./globals.css";
import CustomCursor from "./components/CustomCursor";

export const metadata = {
  title: "Rakshaa Navhule | Video Editor & Content Creator",
  description: "A premium gamified portfolio showcasing video editing and creative storytelling.",
};

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