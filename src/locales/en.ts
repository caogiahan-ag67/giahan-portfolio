import { TranslationDictionary } from "@/types/portfolio";

export const en: TranslationDictionary = {
  brand: {
    name: "Cao Gia Han",
    badge: "Associate Assistant Receivable Finance",
  },
  nav: {
    about: "About",
    experience: "Experiences",
    skills: "Skills",
    contact: "Contact",
  },
  hero: {
    badge: "Finance & Accounting Specialist",
    headline: "Hi, I'm Cao Gia Han",
    subheadline: "Associate Accounts Receivable Finance & Trade Union Accountant at Shopee Vietnam",
    summary:
      "Bachelor of Accounting & Auditing graduate from Ho Chi Minh University of Banking (HUB) with 4+ years of hands-on experience at Shopee Vietnam. Specialized in e-commerce revenue reconciliation, accounts receivable (AR) management, e-wallet cash flow balancing, aging AR report automation on SAP ERP, and statutory trade union financial accounting.",
    downloadCV: "Download CV (PDF)",
    connectLinkedIn: "Connect on LinkedIn",
    connectThrough: "Direct Contact Channels",
    location: "Ho Chi Minh City, Vietnam",
    email: "caogiahan.finance@gmail.com",
  },
  about: {
    title: "About Me",
    description:
      "Grounded in academic excellence in Accounting & Auditing from HUB, fortified by 4+ years of handling high-volume financial operations, multi-channel reconciliations, and compliance at Shopee Vietnam.",
    educationCard: {
      title: "Ho Chi Minh University of Banking",
      subtitle: "Bachelor of Accounting & Auditing (HUB)",
      text: "Comprehensive academic training in Vietnam Accounting Standards (VAS), financial auditing workflows, internal control systems, and computer-assisted accounting analytics. Active participant in academic and business finance forums.",
      stats: [
        { val: "8.45 / 10", lbl: "GPA" },
        { val: "2", lbl: "Volunteer Spring Campaign" },
      ],
    },
    experienceCard: {
      title: "Experience & Focus Areas",
      subtitle: "4+ Years at Shopee Vietnam",
      text: "Managing multi-billion VND accounts receivable per cycle, reconciling millions of e-commerce transactions, resolving merchant billing disputes, maintaining a 99.8%+ SLA reconciliation accuracy, and overseeing full Shopee Trade Union financial management.",
      stats: [
        { val: "4+ Years", lbl: "Experience at Shopee" },
        { val: "2+ Years", lbl: "Trade Union Accountant at Shopee" },
      ],
    },
    highlightsTitle: "Key Highlights & Contributions",
    highlights: [
      {
        badge: "Excellence",
        period: "2022 - Present",
        title: "Optimized Seller Accounts Receivable Reconciliation Workflow",
        org: "Shopee Vietnam - Finance AR Team",
        desc: "Streamlined data matching between internal Shopee billing systems and payment gateways, cutting seller billing dispute resolution lead-time by 35%.",
        tags: ["Shopee Billing", "AR Reconciliation", "SAP ERP", "SLA 99.8%"],
      },
      {
        badge: "Trusted Role",
        period: "2024 - Present",
        title: "Appointed as Shopee Trade Union Accountant",
        org: "Shopee Vietnam Trade Union Executive Committee",
        desc: "Entrusted with full statutory accounting oversight of union funds, transparent budget planning, and compliance with Vietnam General Confederation of Labor regulations.",
        tags: ["Union Accounting", "Welfare Budgeting", "VAS", "Internal Audit"],
      },
      {
        badge: "Digitalization",
        period: "2023 - 2024",
        title: "Automated Aging AR Reporting with Power Query",
        org: "Shopee Finance Operations",
        desc: "Built automated data models and dynamic spreadsheets to detect overdue balances rapidly, boosting proactive debt collection efficiency.",
        tags: ["Advanced Excel", "Power Query", "Aging Report", "Cash Flow"],
      },
    ],
  },
  experience: {
    title: "Work Experiences",
    description:
      "4+ years of continuous growth at Shopee Vietnam in two pivotal roles: Associate Accounts Receivable Finance and Trade Union Accountant.",
    roles: [
      {
        slug: "associate-ar-shopee",
        period: "2022 – Present",
        role: "Associate Accounts Receivable Finance",
        company: "Shopee Vietnam (Sea Group)",
        summary:
          "Full ownership of merchant Accounts Receivable (AR) module: seller revenue reconciliation, ShopeePay and COD cash flow settlement, billing dispute resolution, and SAP ERP ledger postings.",
        detailsSummary:
          "Core finance role at Southeast Asia's leading e-commerce platform, overseeing trillions of VND in transactional flows, working closely with Commercial, Operations, and Banking partners.",
        tags: [
          "Accounts Receivable",
          "Shopee Internal Billing",
          "SAP ERP",
          "ShopeePay Reconciliation",
          "VAT E-Invoice",
          "Aging Analysis",
          "Dispute Resolution",
          "Power Query",
        ],
        viewDetail: "View Detailed Breakdown",
        responsibilities: [
          "Execute daily reconciliation between internal transaction data (OMS/WMS) and payment gateways (ShopeePay, credit cards, COD) with accurate postings to SAP ERP.",
          "Supervise, audit, and issue statutory VAT electronic invoices for platform service fees to hundreds of thousands of active sellers.",
          "Track accounts receivable balances, categorize aging profiles (30-60-90+ days), conduct balance confirmations, and partner with legal/CS teams to recover overdue debts.",
          "Collaborate with Operations and Customer Support teams to review and resolve dispute tickets, refunds, and merchant fee adjustments.",
          "Participate in monthly accounting closes (Month-end Closing), reconcile balance sheet AR accounts, and prepare variance reports for Finance Managers.",
        ],
        achievements: [
          "Consistently sustained a 99.8%+ SLA completion rate across 3+ consecutive years.",
          "Spearheaded Power Query data automation templates that reduced month-end data consolidation from 3 days down to 1.5 days.",
          "Successfully investigated and resolved 98%+ of overdue balances stemming from technical checkout anomalies.",
        ],
      },
      {
        slug: "shopee-trade-union-accountant",
        period: "2024 – Present",
        role: "Trade Union Accountant",
        company: "Shopee Vietnam Trade Union",
        summary:
          "Comprehensive management of union financial accounts, annual welfare budgets, and expenditure vouchers, ensuring 100% compliance with Vietnam Trade Union Law and VAS.",
        detailsSummary:
          "Independent accounting stewardship for the union organization representing thousands of Shopee Vietnam employees, administering transparent budgeting and welfare disbursements.",
        tags: [
          "Union Accounting",
          "Vietnam Union Law",
          "Budget Management",
          "Expenditure Vouchers",
          "Statutory Reporting",
          "VAS",
          "Audit Compliance",
        ],
        viewDetail: "View Detailed Breakdown",
        responsibilities: [
          "Prepare annual trade union financial budgets and welfare disbursement plans for all employees across Shopee Vietnam.",
          "Monitor, collect, and reconcile the statutory 2% employer union dues and 1% employee monthly contributions.",
          "Inspect the legal validity and compliance of invoices and vouchers for member care programs (Tet bonuses, birthdays, illness, bereavement, teambuilding).",
          "Maintain accounting ledgers in dedicated trade union software adhering strictly to the chart of accounts specified by the Vietnam General Confederation of Labor.",
          "Prepare semi-annual and annual statutory financial statements, submit to superior union authorities, and facilitate annual financial audits.",
        ],
        achievements: [
          "Achieved 'Excellent Rating' in periodic financial inspection audits conducted by superior trade union bodies.",
          "Achieved 100% transparency in welfare disbursements, creating a digitized review procedure that accelerated employee claim payouts.",
          "Completed annual financial settlements ahead of schedule with zero ledger-to-voucher discrepancy.",
        ],
      },
    ],
  },
  skills: {
    title: "Financial & Technical Skills",
    description:
      "A synergy of corporate accounting expertise, enterprise ERP systems, data analytics proficiency, and compliance standards.",
    categories: [
      {
        num: "01",
        title: "Core AR & Union Accounting",
        desc: "Core capabilities in revenue recognition, e-commerce reconciliation, aging management, and trade union financial administration.",
        items: [
          { name: "Accounts Receivable (AR)", icon: "ledger" },
          { name: "E-Commerce Reconciliation", icon: "reconcile" },
          { name: "E-Wallet & COD Flow", icon: "wallet" },
          { name: "VAT & Electronic Invoicing", icon: "invoice" },
          { name: "Trade Union Accounting", icon: "union" },
          { name: "Dispute & Claim Resolution", icon: "dispute" },
          { name: "Month-End Closing", icon: "closing" },
          { name: "Budgeting & Settlement", icon: "budget" },
        ],
      },
      {
        num: "02",
        title: "ERP & Financial Systems",
        desc: "Proficient in enterprise financial management platforms, internal e-commerce billing engines, and corporate payment portals.",
        items: [
          { name: "SAP ERP (FICO / S4HANA)", icon: "sap" },
          { name: "Shopee Internal Admin Portal", icon: "shopee" },
          { name: "ShopeePay Portal", icon: "payment" },
          { name: "Union Software (MISA / Fast)", icon: "software" },
          { name: "Corporate Banking Portals", icon: "bank" },
          { name: "E-Invoice Systems (VNPT/Viettel)", icon: "einvoice" },
        ],
      },
      {
        num: "03",
        title: "Data Analytics & Reporting",
        desc: "High-volume data manipulation tools for processing millions of transactional lines and visualising key finance metrics.",
        items: [
          { name: "Microsoft Excel (Advanced)", icon: "excel" },
          { name: "Power Query (Data ETL)", icon: "powerquery" },
          { name: "Pivot Tables & XLOOKUP", icon: "pivot" },
          { name: "Aging AR Reports", icon: "chart" },
          { name: "Cash Flow Forecasting", icon: "cashflow" },
          { name: "Power BI Dashboards", icon: "powerbi" },
        ],
      },
      {
        num: "04",
        title: "Standards, Tax & Competencies",
        desc: "Solid regulatory foundation, bilingual communication fluency, and risk mitigation in high-tempo multinational environments.",
        items: [
          { name: "Vietnam Accounting Standards (VAS)", icon: "vas" },
          { name: "Tax Laws & E-Commerce Regs", icon: "tax" },
          { name: "Trade Union Financial Regs", icon: "law" },
          { name: "Internal Audit & Controls", icon: "audit" },
          { name: "Business English (Bilingual)", icon: "english" },
          { name: "Cross-Functional Negotiation", icon: "negotiation" },
        ],
      },
    ],
  },
  footer: {
    rights: "All rights reserved. Designed for HR & Talent Acquisition.",
    backToTop: "Back to Top",
    tagline: "Associate Accounts Receivable Finance & Trade Union Accountant at Shopee Vietnam.",
  },
  experienceDetail: {
    backHome: "← Back to Portfolio",
    roleOverview: "Role Overview",
    keyResponsibilities: "Key Core Responsibilities",
    coreAchievements: "Key Achievements & Impact",
    technologiesUsed: "Systems, Tools & Methodologies",
    companyInfo: "Organization",
  },
};
