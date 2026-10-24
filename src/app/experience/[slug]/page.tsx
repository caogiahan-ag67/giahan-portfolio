import type { Metadata } from "next";
import ExperienceDetailPage from "@/components/ExperienceDetailPage";

export function generateStaticParams() {
  return [
    { slug: "associate-ar-shopee" },
    { slug: "shopee-trade-union-accountant" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "associate-ar-shopee") {
    return {
      title: "Associate Accounts Receivable Finance | Shopee Vietnam",
      description:
        "Chi tiết kinh nghiệm Associate Accounts Receivable Finance tại Shopee Việt Nam của Cao Gia Hân: đối soát doanh thu TMĐT, ShopeePay, hóa đơn VAT và SAP ERP.",
    };
  }
  return {
    title: "Kế toán Công đoàn (Trade Union Accountant) | Shopee Vietnam",
    description:
      "Chi tiết kinh nghiệm Kế toán Công đoàn tại Shopee Việt Nam của Cao Gia Hân: quản lý ngân sách phúc lợi, quyết toán tài chính VAS và kiểm toán.",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ExperienceDetailPage slug={slug} />;
}
