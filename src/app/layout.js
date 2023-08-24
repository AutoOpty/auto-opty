import Header from "@/components/forLayout/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/forLayout/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Магазин автомобільних фар AutoOpti",
  description: "Разом ми зробимо вашу подорож за кермом незабутньою!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
