// Ghép đường dẫn nội bộ với `base` trong astro.config.mjs.
// Ví dụ khi base = '/WebCong': url('/nenkin.html') -> '/WebCong/nenkin.html'.
// Link ngoài (https:, mailto:, tel:) và link neo (#contact) giữ nguyên.
// Luôn dùng url('/...') cho link nội bộ để đổi hosting/tên miền không phải sửa code.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path: string): string {
  if (/^([a-z]+:|#)/i.test(path)) return path;
  return base + (path.startsWith('/') ? path : `/${path}`);
}
