import './globals.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Global layout that wraps around all pages
export const metadata = {
  title: "My App",
  description: "Sanika Mamidwar's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
