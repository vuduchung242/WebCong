// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Đang host trên GitHub Pages: https://vuduchung242.github.io/WebCong/
  // Khi chuyển sang tên miền riêng: đổi `site` thành tên miền đó và xoá dòng `base`.
  site: 'https://vuduchung242.github.io',
  base: '/WebCong',
  // Xuất ra /nenkin.html thay vì /nenkin/index.html, giống cấu trúc site gốc.
  build: { format: 'file' },
});
