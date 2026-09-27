import "./globals.css";
import Navbar from "./components/Navbar";
import { PlanProvider } from "./context/PlanContext";
import Footer from "./components/Footer";

export const metadata = {
  title: "My Fit App",
  description: "My Next.js App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PlanProvider>
          <Navbar />
          {children}
          <Footer />
        </PlanProvider>
      </body>
    </html>
  );
}
