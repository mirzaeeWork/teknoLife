import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "برتینا بزرگ‌ترین ارائه دهنده خدمات هاستینگ و دامنه و کلیک گوگل در ایران",
  description: "برتینا ارائه دهنده‌ی هاست وردپرس، سرور مجازی، گواهی ssl، تبلیغ در گوگل (Ads)، میزبانی ایمیل ، خرید دامنه (دامین) و هاست ویندوزی و لینوکسی است.",
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
