import type { Metadata } from "next";
import { Suspense } from "react";
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

async function ExperienceContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ExperienceDetailPage slug={slug} />;
}

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div
          className="site-wrapper"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ color: "var(--color-primary-600)", fontWeight: 600 }}>
            Loading...
          </div>
        </div>
      }
    >
      <ExperienceContent params={params} />
    </Suspense>
  );
}
