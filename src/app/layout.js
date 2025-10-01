import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "تکنو لایف",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body >
        <div >
          <Header />
          <main>{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
