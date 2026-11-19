// Thông tin dùng chung toàn site. Sửa ở đây, mọi trang tự cập nhật.

export const site = {
  name: 'Cô Záo Trang',
  shortName: 'CZT',
  company: 'Công ty TNHH Dịch Vụ Quốc Tế CZT',
  slogan: 'Tận tâm trong từng bước – Tin cậy trong từng dịch vụ.',
  description:
    'Cô Záo Trang – Công ty TNHH Dịch vụ Quốc tế CZT: hỗ trợ rút Nenkin lần 1 & lần 2, hoàn/giảm thuế Nhật Bản, hồ sơ Visa Gino 2 và dịch thuật. Tận tâm, minh bạch chi phí, theo dõi hồ sơ đến khi hoàn tất.',
  keywords:
    'Cô Záo Trang, CZT, Nenkin, rút Nenkin, hoàn thuế Nhật Bản, Visa Gino 2, Tokutei Gino, dịch thuật Nhật Việt',
  taxCode: '2803234866',
  address: 'Thôn Hùng Tiến, Xã Xuân Bình, Tỉnh Thanh Hóa',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=H%E1%BB%93ng%20Ti%E1%BA%BFn%2C%20Xu%C3%A2n%20B%C3%ACnh%2C%20Thanh%20H%C3%B3a%2C%20Vietnam',
  hotline: '+81 080-5050-8378',
  email: 'dichvuquocteczt@gmail.com',
  supportHours: '9:00–22:00',

  social: {
    messenger: 'https://m.me/tokuteicozaotrang',
    facebook: 'https://www.facebook.com/tokuteicozaotrang',
    facebookReviews: 'https://www.facebook.com/tokuteicozaotrang/reviews/',
    zalo: 'https://zalo.me/g/d9w8djm0zfuvlax0gopg',
    tiktok: 'https://www.tiktok.com/@tokuteicozaotrang',
  },

  // Dán URL Web app của Google Apps Script để form tư vấn gửi dữ liệu thật
  // (xem mục 6 trong plan.md). Để trống: form chỉ kiểm tra dữ liệu, không gửi đi.
  formEndpoint: '',
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Nenkin', href: '/nenkin.html' },
  { label: 'Visa', href: '/visa.html' },
  { label: 'Thuế', href: '/thue.html' },
  { label: 'Dịch vụ khác', href: '/dich-vu-khac.html' },
  { label: 'Về CZT', href: '/ve-czt.html' },
  { label: 'FAQ', href: '/faq.html' },
];

export const footerCols: { title: string; links: NavItem[] }[] = [
  {
    title: 'Dịch vụ',
    links: [
      { label: 'Nenkin', href: '/nenkin.html' },
      { label: 'Visa Gino2', href: '/visa.html' },
      { label: 'Hoàn / Giảm thuế', href: '/thue.html' },
      { label: 'Dịch vụ khác', href: '/dich-vu-khac.html' },
    ],
  },
  {
    title: 'Về CZT',
    links: [
      { label: 'Giới thiệu', href: '/ve-czt.html' },
      { label: 'FAQ', href: '/faq.html' },
      { label: 'Liên hệ', href: '/#contact' },
    ],
  },
  {
    title: 'Chính sách',
    links: [
      { label: 'Chính sách bảo mật', href: '/policy.html#privacy' },
      { label: 'Điều khoản sử dụng', href: '/policy.html#terms' },
      { label: 'Chính sách hoàn tiền', href: '/policy.html#refund' },
    ],
  },
];
