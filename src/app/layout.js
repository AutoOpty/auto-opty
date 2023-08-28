import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/forLayout/Header/Header";
import Footer from "@/components/forLayout/Footer/Footer";
import AuthProvider from "@/components/AuthProvider/AuthProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Магазин автомобільних фар AutoOpti",
  description: "Разом ми зробимо вашу подорож за кермом незабутньою!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
