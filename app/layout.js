import Navbar from "./components/Navbar";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: "400",
});

export const metadata = {
  title: "Wiki Rocket",
  description: "Made by EmTeaZy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-gray-400`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
