import './globals.css';
// import { Inter } from 'next/font/google';
import { Hahmlet } from 'next/font/google';
import Header from '@/components/forLayout/Header/Header';
import Footer from '@/components/forLayout/Footer/Footer';
import AuthProvider from '@/helpers/AuthProvider/AuthProvider';

const hahmlet = Hahmlet({ subsets: ['latin'] });
// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Магазин автомобільних фар AutoOpti',
  description: 'Разом ми зробимо вашу подорож за кермом незабутньою!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={hahmlet.className}>
        <AuthProvider>
          <Header />
          <main className="container">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
