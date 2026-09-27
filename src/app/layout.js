import "./globals.css";
import Navbar from "./components/Navbar";
import { PlanProvider } from "./context/PlanContext";

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
        </PlanProvider>
      </body>
    </html>
  );
}
