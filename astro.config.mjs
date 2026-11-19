// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Đổi thành tên miền thật khi triển khai (dùng cho canonical URL, sitemap).
  site: 'https://example.com',
  // Xuất ra /nenkin.html thay vì /nenkin/index.html, giống cấu trúc site gốc.
  build: { format: 'file' },
});
