# Kế hoạch: Website tĩnh clone czt.vn

## 1. Phân tích website gốc (czt.vn)

| Hạng mục | Hiện trạng czt.vn |
|---|---|
| Công nghệ | HTML + CSS + JavaScript thuần, viết tay, không framework |
| CSS | 1 file `css/style.css` ~224KB |
| JS | 1 file `js/script.js` ~20KB, vanilla JS + script inline riêng từng trang |
| Hosting | Shared hosting (LiteSpeed), chỉ phục vụ file tĩnh |
| Dữ liệu động | Tra cứu hồ sơ Nenkin: Google Sheet + Google Apps Script |

**8 trang:** `index`, `nenkin`, `visa`, `thue`, `dich-vu-khac`, `ve-czt`, `faq`, `policy`.

**Tính năng:** header sticky + menu mobile, cụm nút nổi (Zalo/Messenger/TikTok/lên đầu trang), FAQ accordion,
carousel đánh giá, gallery ảnh tự nạp (`fb-1..40`), lightbox phóng to ảnh, modal mẫu giấy tờ,
máy tính Nenkin dự kiến, tra cứu tình trạng hồ sơ (Apps Script), form đặt lịch (chưa có backend).

## 2. Cách làm

**Clone nguyên bản bằng Astro**: giữ nguyên CSS, JS, nội dung và ảnh gốc, để giao diện y hệt czt.vn.
Astro chỉ dùng để gom phần lặp lại (head, header, menu, nút nổi, footer) vào 1 chỗ,
build ra HTML tĩnh thuần.

## 3. Cấu trúc thư mục

```
WebCong/
├─ astro.config.mjs          # site + base (/WebCong cho GitHub Pages)
├─ .github/workflows/deploy.yml  # tự build + deploy GitHub Pages khi push main
├─ public/                   # copy nguyên trạng ra site
│  ├─ css/style.css          # CSS gốc czt.vn
│  ├─ js/script.js           # JS gốc czt.vn (máy tính Nenkin, tra cứu, carousel...)
│  └─ assets/                # logo, banner, ảnh mẫu giấy tờ, ảnh đánh giá
└─ src/
   ├─ layouts/SiteLayout.astro    # <head> chung, header, nút nổi, footer, script.js
   ├─ components/
   │  ├─ Header.astro             # logo + menu (tự tô mục đang xem)
   │  ├─ Footer.astro
   │  └─ FloatingActions.astro    # nút Zalo/Messenger/TikTok/lên đầu trang
   ├─ partials/                   # NỘI DUNG từng trang (HTML thuần, sửa trực tiếp)
   │  ├─ <trang>.head.html        # title, meta, Open Graph, JSON-LD
   │  ├─ <trang>.main.html        # nội dung chính
   │  ├─ <trang>.modal.html       # popup đặt sau footer (nếu có)
   │  └─ <trang>.scripts.html     # script riêng của trang (nếu có)
   └─ pages/<trang>.astro         # ghép layout + partials (không cần sửa)
```

**Quy tắc:** link và ảnh trong partials dùng đường dẫn tương đối (`assets/...`, `nenkin.html`),
không bắt đầu bằng `/`, để site chạy được cả ở thư mục con `/WebCong/` lẫn tên miền riêng.

**Sửa nội dung:** mở `src/partials/<trang>.main.html`.
**Sửa menu/footer:** `src/components/Header.astro`, `Footer.astro` (sửa 1 lần, áp dụng mọi trang).
**Thêm ảnh:** bỏ vào `public/assets/...`.

## 4. Lộ trình

### Giai đoạn 1: Clone toàn bộ site ✅
- [x] Tải 8 trang + CSS + JS + 89 ảnh (gồm ảnh gallery nạp động)
- [x] Tách head/header/nút nổi/footer thành component dùng chung
- [x] 8 trang build thành công, đối chiếu giao diện desktop + mobile
- [x] Máy tính Nenkin, gallery, FAQ accordion chạy đúng; không ảnh lỗi, không lỗi console
- [x] Trang `policy` dùng header/footer chuẩn như các trang khác (bản gốc dùng menu cũ)
- [x] Footer mọi trang có thêm link "Câu hỏi thường gặp" (bản gốc chỉ trang FAQ có)

### Giai đoạn 2: Hoàn thiện
- [ ] Form đặt lịch: nối Google Apps Script → Google Sheet (bản gốc chưa gửi dữ liệu đi đâu)
- [ ] Nén ảnh lớn (`calc-art-person.png` 1.8MB, `visa/banner-desktop.png` 1.9MB, `home/bg-desktop.png` 2.5MB) → WebP
- [ ] Gallery: thay cơ chế dò `fb-1..40` (gây nhiều request 404) bằng danh sách ảnh cố định lúc build
- [ ] Sitemap, ảnh OG

### Giai đoạn 3: Triển khai
- [x] GitHub Pages (bản test): https://vuduchung242.github.io/WebCong/
  - Repo: https://github.com/vuduchung242/WebCong (public)
  - Yêu cầu 1 lần: Settings → Pages → Source = **GitHub Actions**
  - Mỗi lần push lên `main`, workflow tự build và đăng lại (1–2 phút)
- [ ] Bản chính thức: gắn tên miền riêng (đổi `site`, xoá `base` trong `astro.config.mjs`) hoặc upload `dist/` lên hosting

## 5. Lệnh thường dùng

```bash
npm install        # cài thư viện (lần đầu)
npm run dev        # chạy thử tại http://localhost:4321/WebCong/
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
4. Trong `public/js/script.js`, phần `Booking form`, thêm `fetch(URL, { method: 'POST', mode: 'no-cors', body: new URLSearchParams(data) })`.
