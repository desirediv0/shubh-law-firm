import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shubh Legal Offices - Professional Legal Services Since 2017",
  description:
    "Shubh Legal Offices provides expert legal services in civil law, family law, and criminal law. Founded in 2017 by Deepak Singh Dhaliwal, serving clients in S-147 Bar room -1 Civil Side Tishazari-110054 and 16 Mukharjee Nagar-110009.",
  keywords:
    "law firm, legal services, civil law, family law, criminal law, attorney, lawyer, Delhi, Tishazari, Mukharjee Nagar, Deepak Singh Dhaliwal",
  authors: [{ name: "Shubh Legal Offices" }],
  openGraph: {
    title: "Shubh Legal Offices - Professional Legal Services Since 2017",
    description:
      "Expert legal services with 8+ years of experience in civil law, family law, and criminal law. Led by Deepak Singh Dhaliwal in Delhi.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
