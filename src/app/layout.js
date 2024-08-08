import "./globals.css";

export const metadata = {
  title: "Rehman — Front-End Web Developer",
  description: "Abdul Rehman Front end web dveloper, Crafting stunning sites in ReactJs/NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-white bg-[#080510]">{children}</body>
    </html>
  );
}
