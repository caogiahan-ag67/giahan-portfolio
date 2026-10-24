import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#4F46E5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://caogiahan-portfolio.vercel.app"),
  title: {
    default: "Cao Gia Hân | Associate Accounts Receivable Finance | Shopee Vietnam",
    template: "%s | Cao Gia Hân",
  },
  description:
    "Recruitment Portfolio for Cao Gia Hân - Associate Accounts Receivable Finance & Trade Union Accountant at Shopee Vietnam. 4+ years of expertise in e-commerce reconciliation, SAP ERP, and statutory union financial accounting.",
  keywords: [
    "Cao Gia Hân",
    "Shopee Vietnam",
    "Associate Accounts Receivable",
    "AR Finance",
    "Kế toán Công đoàn",
    "Kế toán công nợ",
    "Reconciliation",
    "SAP ERP",
    "HUB",
    "Đại học Ngân hàng",
  ],
  authors: [{ name: "Cao Gia Hân" }],
  creator: "Cao Gia Hân",
  openGraph: {
    title: "Cao Gia Hân | Associate Accounts Receivable Finance | Shopee Vietnam",
    description:
      "Chuyên viên Tài chính - Kế toán tốt nghiệp HUB với hơn 4 năm kinh nghiệm tại Shopee Việt Nam. Chuyên sâu đối soát doanh thu sàn TMĐT, quản lý công nợ AR và kế toán công đoàn.",
    type: "website",
    locale: "vi_VN",
    images: [
      {
        url: "/images/portrait_cao_gia_han.jpg",
        width: 600,
        height: 800,
        alt: "Cao Gia Hân - Associate AR Finance tại Shopee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cao Gia Hân | Associate Accounts Receivable Finance | Shopee Vietnam",
    description: "Recruitment Portfolio for Cao Gia Hân - Associate AR Finance at Shopee Vietnam.",
    images: ["/images/portrait_cao_gia_han.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className="portfolio-body">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
