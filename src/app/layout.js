import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Rehman Portfolio",
  description: "Abdul Rehman Front end web dveloper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-white bg-[#080510]">
        <Navbar/>
        <div>{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
