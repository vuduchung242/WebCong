# Kế hoạch: Website tĩnh tương tự czt.vn

## 1. Phân tích website gốc (czt.vn)

| Hạng mục | Hiện trạng czt.vn |
|---|---|
| Công nghệ | HTML + CSS + JavaScript thuần, viết tay, không framework |
| CSS | 1 file `style.css` ~224KB, không Bootstrap/Tailwind |
| JS | 1 file `script.js` ~20KB, vanilla JS |
| Font | Google Fonts: Be Vietnam Pro, Noto Serif JP, Comfortaa, Dancing Script |
| Hosting | Shared hosting (LiteSpeed), chỉ phục vụ file tĩnh |
| SEO | meta description/keywords, Open Graph, JSON-LD |
| Dữ liệu động | Chỉ có tra cứu hồ sơ: Google Sheet + Google Apps Script (Web app) |

**Các trang:** `index`, `nenkin`, `visa`, `thue`, `dich-vu-khac`, `ve-czt`, `faq`, `policy`.

**Tính năng:**
- Header dính (sticky) + đổ bóng khi cuộn, menu mobile (hamburger) có dropdown
- Nút "về đầu trang"
- FAQ dạng accordion
- Carousel đánh giá khách hàng: tự chạy, lặp vô hạn, nút trước/sau, vuốt trên mobile
- Modal xem mẫu giấy tờ, lightbox phóng to ảnh
- Máy tính Nenkin dự kiến (tính trên trình duyệt theo hệ số 脱退一時金, chia 79,58% / 20,42%)
- Tra cứu tình trạng hồ sơ Nenkin (fetch Google Apps Script, hiển thị stepper 6 bước)
- Form đặt lịch tư vấn: **chưa có backend** (chỉ validate, dữ liệu không được gửi đi)

## 2. Lựa chọn công nghệ

**Astro (static site generator) + CSS thuần + vanilla JS (TypeScript).**

Lý do:
- Header/footer/khối giao diện viết thành component, dùng lại cho mọi trang (HTML thuần phải sửa 8 file mỗi lần đổi menu).
- Nội dung (dịch vụ, bảng giá, đánh giá, FAQ) tách ra file dữ liệu `src/data/*.ts`, sửa nội dung không động vào giao diện.
- Build ra HTML/CSS/JS tĩnh thuần, upload được lên shared hosting như hiện tại hoặc Netlify / Cloudflare Pages / GitHub Pages.
- Mặc định không gửi JS thừa xuống trình duyệt, tải nhanh, tốt cho SEO.

Phần cần "backend" dùng dịch vụ ngoài, không cần server riêng:
- Tra cứu hồ sơ: Google Sheet + Apps Script (giữ như bản gốc).
- Form tư vấn: Google Apps Script ghi vào Google Sheet (hoặc Formspree).

Không dùng: WordPress (cần PHP + DB), React/Next.js (quá nặng cho site giới thiệu dịch vụ).

## 3. Cấu trúc thư mục

```
WebCong/
├─ plan.md
├─ package.json
├─ astro.config.mjs
├─ public/                  # file copy nguyên trạng: favicon, ảnh, logo
│  └─ assets/
└─ src/
   ├─ data/
   │  ├─ site.ts            # thông tin công ty, menu, mạng xã hội, endpoint form
   │  └─ home.ts            # nội dung trang chủ: dịch vụ, quy trình, bảng giá, đánh giá...
   ├─ layouts/
   │  └─ BaseLayout.astro   # <head>, SEO, JSON-LD, Header, Footer, nút về đầu trang
   ├─ components/
   │  ├─ Header.astro       # logo, menu, menu mobile, sticky
   │  ├─ Footer.astro
   │  ├─ SectionHead.astro  # tiêu đề section (tag + title + sub)
   │  ├─ Icon.astro         # bộ icon SVG inline
   │  └─ home/              # các section của trang chủ
   │     ├─ Hero.astro
   │     ├─ Services.astro
   │     ├─ Process.astro
   │     ├─ Why.astro
   │     ├─ Pricing.astro
   │     ├─ Testimonials.astro
   │     ├─ Collab.astro
   │     └─ Contact.astro   # kênh liên hệ + form tư vấn
   ├─ styles/
   │  └─ global.css         # biến màu, typography, utility
   └─ pages/
      └─ index.astro        # trang chủ
```

## 4. Lộ trình

### Giai đoạn 1: Khung + trang chủ (đang làm)
- [x] Phân tích czt.vn
- [x] Khởi tạo dự án Astro
- [x] Layout chung: Header (sticky, menu mobile), Footer, nút về đầu trang, SEO + JSON-LD
- [x] Trang chủ: Hero + số liệu, Dịch vụ, Quy trình 6 bước, Vì sao chọn, Bảng giá, Đánh giá (carousel), Cộng tác viên, Liên hệ + form
- [ ] Thay ảnh banner + logo thật vào `public/assets/`

### Giai đoạn 2: Các trang dịch vụ
- [ ] `nenkin`: điều kiện, giấy tờ, **máy tính Nenkin**, **tra cứu hồ sơ** (Apps Script), modal mẫu giấy tờ, FAQ
- [ ] `visa`: Tokutei Gino 2, gia đình, thăm thân; danh sách giấy tờ
- [ ] `thue`: hoàn/giảm thuế; đang ở Nhật / đã về VN
- [ ] `dich-vu-khac`: dịch thuật, phiên dịch, hành chính
- [ ] `ve-czt`: giới thiệu, hình ảnh hồ sơ (lightbox)
- [ ] `faq`: accordion, dữ liệu từ `src/data/faq.ts`
- [ ] `policy`: bảo mật, điều khoản, hoàn tiền (anchor)

### Giai đoạn 3: Backend nhẹ + hoàn thiện
- [ ] Apps Script nhận form tư vấn → ghi Google Sheet (+ gửi email/Telegram báo có khách)
- [ ] Apps Script tra cứu hồ sơ (chỉ trả về đúng 1 dòng theo mã hồ sơ)
- [ ] Sitemap (`@astrojs/sitemap`), ảnh OG, tối ưu ảnh (`astro:assets`)
- [ ] Kiểm tra Lighthouse (mục tiêu ≥ 90), test mobile

### Giai đoạn 4: Triển khai
- [ ] `npm run build` → upload thư mục `dist/` lên hosting (hoặc nối Git với Netlify/Cloudflare Pages)

## 5. Lệnh thường dùng

```bash
npm install        # cài thư viện (lần đầu)
npm run dev        # chạy thử tại http://localhost:4321
npm run build      # build ra thư mục dist/
npm run preview    # xem bản build
```

## 6. Form tư vấn: Google Apps Script mẫu

1. Tạo Google Sheet, hàng 1: `thoi_gian | ho_ten | dien_thoai | dich_vu | noi_dung`.
2. Extensions → Apps Script, dán:

```js
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const p = e.parameter;
  sheet.appendRow([new Date(), p.fullname, p.phone, p.service, p.message]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Deploy → New deployment → Web app (Execute as: Me, Who has access: Anyone).
4. Dán Web app URL vào `formEndpoint` trong `src/data/site.ts`.
