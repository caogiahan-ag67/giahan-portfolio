# PLAN: Cao Gia Hân - Finance Portfolio (Associate AR & Trade Union Accountant at Shopee)

## 1. Project Overview & Target Persona
- **Target Role**: Associate Accounts Receivable (AR) Finance & Shopee Trade Union Accountant.
- **Candidate Name**: Cao Gia Hân.
- **Academic Foundation**: Cử nhân Kế toán và Kiểm toán - Trường Đại học Ngân hàng TP. Hồ Chí Minh (HUB).
- **Professional Track Record**: 4+ năm kinh nghiệm tài chính - kế toán tại Shopee Việt Nam.
- **Target Audience**: HR Specialists, Talent Acquisition Managers, Finance Directors.
- **Visual Design Standard**: Electric Avant-Garde design system defined in `docs/DESIGN.md` and `docs/globals.css` (Deep Indigo `#4F46E5`, Deep Violet `#6B21A8`, Surface Tint `#F4F4FE`, Crisp Inter typography, frosted glass header, micro-interactions).

---

## 2. Core Functional Specifications
1. **Header & Navigation**:
   - Wordmark: "Cao Gia Hân" + Badge "Associate AR Finance | Shopee".
   - Navigation links: About, Experience, Skills, Contact.
   - **Bilingual Switcher [VI | EN]**: Instant reactive in-page language switching with `localStorage` and URL query sync (`?lang=vi` / `?lang=en`), smooth transitions without full reload.
2. **Hero Section**:
   - Left Column: Strong punchy headline, professional value proposition summary for AR & Trade Union finance.
   - Action Buttons:
     - Primary: "Download Resume / Tải CV" (linking to mock downloadable PDF at `/Cao_Gia_Han_Resume.pdf`).
     - Secondary: "Connect via LinkedIn / Kết nối qua LinkedIn" (linking to `https://www.linkedin.com/in/caogiahan`).
   - Quick Contact Strip: LinkedIn icon button, Gmail/Email icon button (`caogiahan.finance@gmail.com`), Shopee Vietnam Location.
   - Right Column: High-resolution mock portrait photo frame with soft indigo glow and rounded geometry per `DESIGN.md`.
3. **About Section**:
   - Card 1 (Education): Đại học Ngân hàng TP.HCM (HUB) - Cử nhân Kế toán & Kiểm toán, GPA, chuyên ngành.
   - Card 2 (Experience & Metrics): 4+ năm kinh nghiệm tại Shopee Việt Nam, 99.8% độ chính xác đối soát, khối lượng giao dịch AR và ngân sách công đoàn quản lý.
   - Highlights & Certifications: Chuẩn mực VAS, Chứng chỉ kế toán/kiểm toán, Thành tích nổi bật.
4. **Experience Section (Two-Sided Vertical Timeline)**:
   - Visual structure: Thanh timeline chính giữa, các thẻ kinh nghiệm nằm so le (xen kẽ) hai bên trái - phải.
   - **Role 1 (2022 – Present)**: Associate Accounts Receivable Finance — Shopee Việt Nam.
   - **Role 2 (2024 – Present)**: Kế toán Công đoàn (Trade Union Accountant) — Shopee Việt Nam.
   - **Interactive Navigation**: Nhấp vào mỗi thẻ kinh nghiệm sẽ chuyển hướng sang **trang chi tiết riêng biệt (Dedicated Page)** (ví dụ `/experience/associate-ar-shopee` và `/experience/shopee-trade-union-accountant`), không dùng popup/modal.
5. **Skills Section (4-Tier Finance Matrix)**:
   - `01. Nghiệp vụ Kế toán AR & Công đoàn`: Đối soát doanh thu bán hàng, xử lý tranh chấp & hoàn tiền, đối soát ví ShopeePay/COD, quản lý quỹ và chi phí công đoàn.
   - `02. Hệ thống ERP & Phần mềm kế toán`: SAP ERP (FICO), Shopee Internal Billing/Admin Portal, MISA/Fast Accounting, hệ thống ngân hàng liên kết.
   - `03. Phân tích dữ liệu & Báo cáo`: Advanced Excel (Power Query, XLOOKUP, Pivot Table, Macro/VBA), Power BI, Báo cáo tuổi nợ (Aging AR Report), Dự báo dòng tiền.
   - `04. Chuẩn mực, Thuế & Kỹ năng bổ trợ`: Chuẩn mực kế toán Việt Nam (VAS), Thuế GTGT & Hóa đơn điện tử, Kiểm toán nội bộ, Tiếng Anh thương mại, Kỹ năng đàm phán & giải quyết tranh chấp.
6. **NO Projects Section**: Hoàn toàn loại bỏ mục Projects theo đúng yêu cầu nghiệp vụ.
7. **Footer**:
   - Professional closing statement, bản quyền, liên kết nhanh, nút back to top.

---

## 3. Detailed Phased Roadmap & Task Breakdown

### Phase 1: Specifications & Alignment (/grill-me)
- [x] Analyze `docs/DESIGN.md`, `docs/globals.css`, and reference site architecture.
- [x] Clarify tech stack (Next.js App Router, TypeScript, Vanilla CSS Modules).
- [x] Gather candidate profile info (Cao Gia Hân, HUB, 4+ years at Shopee).
- [x] Clarify Experience timeline structure (2-sided alternating timeline with middle line, 2 dedicated subpages).
- [x] Clarify bilingual switcher requirement (reactive in-page state, URL & localStorage sync).
- [x] Finalize 4-tier skills categorization.
- [x] Document and commit `PLAN.md`.

### Phase 2: Tech Foundation & Project Initialization
- [x] Initialize Next.js project with App Router, TypeScript, and ESLint in non-interactive mode.
- [x] Set up design system tokens in `src/app/globals.css` using tokens from `docs/DESIGN.md` (colors, typography, spacing, glassmorphic elevation).
- [x] Implement `LanguageContext` and dictionaries (`src/locales/vi.ts` and `src/locales/en.ts`) providing typed translations for all UI components.
- [x] Generate mock portrait photo asset (`public/images/portrait_cao_gia_han.jpg`) using professional finance aesthetic.
- [x] Generate mock professional resume PDF file (`public/Cao_Gia_Han_Resume.pdf`).

### Phase 3: Header, Bilingual Navigation & Footer
- [x] Build `Header` component:
  - Sticky glassmorphic navbar with blur backdrop.
  - Wordmark: "Cao Gia Hân" with badge pill "Associate AR | Shopee".
  - Nav links: About, Experience, Skills.
  - Bilingual switcher component (`VI` | `EN`) with active highlight and smooth transition.
- [x] Build `Footer` component with copyright, contact CTA, and quick scroll-to-top.

### Phase 4: Hero Section
- [x] Implement responsive 12-column grid container.
- [x] Left column: Title badge, greeting headline, tailored summary of 4+ years in Shopee AR & Trade Union Finance.
- [x] CTA Action button row:
  - Primary button: "Download Resume / Tải CV" (direct download link to `/Cao_Gia_Han_Resume.pdf`).
  - Secondary button: "Connect via LinkedIn / Kết nối LinkedIn" (`https://www.linkedin.com/in/caogiahan`).
- [x] Quick social strip: LinkedIn and Gmail (`caogiahan.finance@gmail.com`).
- [x] Right column: Portrait card with delicate indigo border and shadow.

### Phase 5: About Section
- [x] Two-card grid layout:
  - **Card 1: Education (HUB)** — Degree, major in Accounting & Auditing, academic strengths.
  - **Card 2: Shopee Career Highlights** — 4+ years tenure, reconciliation volume, SLA KPIs, dual-responsibility recognition.
- [x] Stat metrics grid inside cards:
  - 4+ Years Experience at Shopee
  - 99.8% Accuracy & SLA Compliance
  - Millions of AR Records Reconciled
  - 100% Trade Union Financial Compliance

### Phase 6: Experience Section & Dedicated Subpages
- [x] Construct central vertical timeline component with alternating left/right cards:
  - Card 1 (Left): **Associate Accounts Receivable Finance (2022 – Present)** at Shopee Việt Nam.
  - Card 2 (Right): **Kế toán Công đoàn (2024 – Present)** at Shopee Việt Nam.
  - Badge periods, company tags, summary of key achievements, skill pill tags, and CTA "Xem chi tiết / View Details →".
- [x] Create dedicated subpage 1: `/experience/associate-ar-shopee`:
  - Detailed breakdown: Daily AR reconciliation, seller dispute resolution, payment gateway settlements (ShopeePay, COD), SAP ERP postings, aging AR report automation.
  - Breadcrumb back to home page, bilingual content support.
- [x] Create dedicated subpage 2: `/experience/shopee-trade-union-accountant`:
  - Detailed breakdown: Union fund budgeting, employee welfare disbursements, financial reporting according to Vietnam Trade Union regulations, internal audit & tax compliance.
  - Breadcrumb back to home page, bilingual content support.

### Phase 7: Skills Section (4-Tier Finance Matrix)
- [x] Construct 4-category matrix with numbered labels (`01`, `02`, `03`, `04`):
  - `01. Nghiệp vụ Kế toán AR & Công đoàn` (AR Billing, Seller Reconciliation, Dispute Resolution, Union Budgeting)
  - `02. Hệ thống ERP & Phần mềm kế toán` (SAP ERP, Shopee Admin Portal, MISA, Banking Portals)
  - `03. Phân tích dữ liệu & Báo cáo` (Advanced Excel, Power Query, Power BI, Aging AR Dashboard)
  - `04. Chuẩn mực, Thuế & Kỹ năng bổ trợ` (VAS, VAT & E-Invoicing, Internal Audit, Business English, Stakeholder Negotiation)
- [x] Elegant card grid with specialized SVG icons, hover transitions, and clean typography.

### Phase 8: Testing, Accessibility, SEO & Polish
- [x] Verify instant bilingual switching across all sections and subpages.
- [x] Verify mock PDF resume download and LinkedIn link behavior.
- [x] Test responsive layouts across mobile (iPhone/Android), tablet (iPad), and desktop viewports.
- [x] Run accessibility check (contrast ratio, keyboard focus indicators, aria-labels).
- [x] Run production build (`npm run build`) to ensure zero TypeScript or build errors.

---

## 4. Current Task Status
- **Status**: ALL PHASES COMPLETE (Phase 1 through Phase 8).
- **Result**: Production-ready, bilingual portfolio for Cao Gia Hân (Associate Accounts Receivable Finance & Trade Union Accountant at Shopee Vietnam) with 100% build pass, responsive design, and zero errors.
