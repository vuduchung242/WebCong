// Nội dung trang chủ. Thêm/bớt phần tử trong mảng là giao diện tự cập nhật.
import type { IconName } from '../components/Icon.astro';

export const stats = [
  { value: '4.000+', label: 'Lượt hồ sơ đã hỗ trợ' },
  { value: '98%', label: 'Khách hàng hài lòng' },
  { value: '5+', label: 'Năm kinh nghiệm' },
];

type Service = {
  key: string;
  icon: IconName;
  tag: string;
  short: string;
  title: string;
  sub: string;
  points: string[];
  href: string;
};

export const services: Service[] = [
  {
    key: 'nenkin',
    icon: 'coins',
    tag: 'NENKIN',
    short: 'Lương hưu Nhật Bản',
    title: 'Nenkin',
    sub: 'Hoàn lương hưu Nhật Bản',
    points: [
      'Kiểm tra điều kiện hưởng Nenkin.',
      'Hợp đồng dịch vụ rõ ràng, minh bạch.',
      'Theo dõi hồ sơ suốt quá trình xử lý.',
      'Hỗ trợ liên hệ cơ quan liên quan khi tiền hoàn về chậm.',
    ],
    href: '/nenkin.html',
  },
  {
    key: 'visa',
    icon: 'passport',
    tag: 'VISA',
    short: 'Tokutei Gino2 · Gia đình · Thăm thân',
    title: 'Visa Nhật Bản',
    sub: 'Visa Gino2 · Gia đình · Thăm thân',
    points: [
      'Tư vấn điều kiện và quy trình.',
      'Kiểm tra hồ sơ trước khi nộp.',
      'Hỗ trợ chuẩn bị giấy tờ.',
      'Đồng hành đến khi hoàn tất thủ tục.',
    ],
    href: '/visa.html',
  },
  {
    key: 'tax',
    icon: 'receipt',
    tag: 'THUẾ',
    short: 'Hoàn thuế · Giảm thuế',
    title: 'Hoàn / Giảm thuế',
    sub: 'Hỗ trợ thủ tục thuế tại Nhật Bản',
    points: [
      'Ước tính số tiền thuế dự kiến được hoàn.',
      'Hỗ trợ chuẩn bị và dịch thuật giấy tờ.',
      'Theo dõi tiến độ hồ sơ.',
      'Hỗ trợ liên hệ cơ quan thuế khi hồ sơ xử lý chậm.',
    ],
    href: '/thue.html',
  },
  {
    key: 'other',
    icon: 'languages',
    tag: 'DỊCH VỤ KHÁC',
    short: 'Dịch thuật · Hành chính',
    title: 'Dịch thuật & Phiên dịch',
    sub: 'Hỗ trợ ngôn ngữ và hồ sơ Nhật – Việt',
    points: [
      'Dịch giấy khai sinh, cư trú, phụng dưỡng.',
      'Dịch thuật hồ sơ hành chính và visa.',
      'Phiên dịch, hỗ trợ trao đổi khi cần.',
      'Hỗ trợ lấy giấy thuế shi cũ.',
    ],
    href: '/dich-vu-khac.html',
  },
];

export const steps: { icon: IconName; title: string; text: string }[] = [
  { icon: 'chat', title: 'Tiếp nhận & tư vấn', text: 'Lắng nghe nhu cầu, tư vấn giải pháp phù hợp miễn phí.' },
  { icon: 'folder', title: 'Chuẩn bị hồ sơ', text: 'Hướng dẫn chi tiết giấy tờ cần thiết, hỗ trợ dịch thuật.' },
  { icon: 'pen', title: 'Ký hợp đồng / Thỏa thuận', text: 'Xác nhận nội dung; hỗ trợ ký trực tuyến hoặc gửi hợp đồng bản gốc về tận nhà.' },
  { icon: 'send', title: 'Nộp hồ sơ', text: 'Nộp hồ sơ tới cơ quan chức năng, theo dõi tiến độ.' },
  { icon: 'bell', title: 'Cập nhật kết quả', text: 'Thông báo tiến độ xử lý thường xuyên cho khách hàng.' },
  { icon: 'handshake', title: 'Bàn giao & hỗ trợ', text: 'Bàn giao kết quả và hỗ trợ các vấn đề phát sinh.' },
];

export const reasons: { icon: IconName; title: string; text: string }[] = [
  { icon: 'route', title: 'Quy trình rõ ràng', text: 'Hướng dẫn từng bước, cập nhật tiến độ hồ sơ thường xuyên.' },
  { icon: 'shield', title: 'Bảo mật thông tin', text: 'Hồ sơ và thông tin cá nhân của khách hàng được bảo mật trong suốt quá trình xử lý.' },
  { icon: 'tag', title: 'Chi phí minh bạch', text: 'Báo phí rõ ràng ngay từ đầu, hạn chế tối đa các khoản phát sinh.' },
  { icon: 'building', title: 'Liên kết văn phòng chuyên môn tại Nhật', text: 'Phối hợp trực tiếp với văn phòng chuyên môn tại Nhật, hỗ trợ chuẩn bị và xử lý hồ sơ đúng quy trình.' },
  { icon: 'heart', title: 'Hỗ trợ tận tâm', text: 'Tiếp nhận và giải đáp thắc mắc hằng ngày trong khung giờ 9:00–22:00.' },
  { icon: 'check-circle', title: 'Theo sát đến khi hoàn thành', text: 'Chủ động theo dõi tiến độ và hỗ trợ xử lý các vấn đề phát sinh.' },
];

export const prices: { service: string; price: string; time: string[]; featured?: boolean }[] = [
  { service: 'Hoàn Nenkin — Dưới 5 năm', price: '1.300.000đ', time: ['Lần 1: 3–6 tháng', 'Lần 2: 1–3 tháng'] },
  { service: 'Hoàn Nenkin — Từ 5 năm trở lên', price: '1.500.000đ', time: ['Lần 1: 3–6 tháng', 'Lần 2: 1–3 tháng'] },
  { service: 'Hoàn / Giảm thuế — Đang ở Nhật', price: '715.000đ', time: ['1–3 tháng'] },
  { service: 'Hoàn / Giảm thuế — Đã về Việt Nam', price: '825.000đ', time: ['1–3 tháng'] },
  { service: 'Visa Tokutei Gino 2', price: '66.000JPY〜', time: ['2 tuần – 2 tháng'], featured: true },
  { service: 'Dịch thuật & Phiên dịch', price: 'Liên hệ báo giá', time: ['Tùy nội dung'] },
  { service: 'Dịch vụ hành chính khác', price: 'Liên hệ báo giá', time: ['Tùy trường hợp'] },
];

export const priceNotes = [
  'Tất cả mức phí trên đã bao gồm thuế giá trị gia tăng (VAT) 10%.',
  'Chi phí có thể thay đổi tùy tình trạng hồ sơ. CZT sẽ kiểm tra và xác nhận trước khi thực hiện.',
  'Phí Visa Tokutei Gino 2 chưa bao gồm lệ phí tem và các chi phí phát sinh theo từng hồ sơ.',
];

export const reviews: { name: string; text: string }[] = [
  { name: 'Phan Chuẩn', text: 'Nơi đáng tin cậy để lấy nenkin, hỗ trợ nhiệt tình, chu đáo, 5 ⭐ cho cô giáo ạ, uy tín nha mn 👍' },
  { name: 'Đạt Nguyễn', text: 'Hỗ trợ nhiệt tình, thanh toán sau quá uy tín nha mn' },
  { name: 'Nga Nguyễn', text: 'Nhiệt tình chu đáo, nhận tiền xong mới thanh toán. Ok nha mn' },
  { name: 'Lê Quốc Anh', text: 'Đỉnh của chóp luôn mn ơi, bạn nào muốn lấy nenkin, làm thuế hoặc xin visa thì nhắn liền cho cô giáo Trang nha! Cô rất nhiệt tình và rất công khai minh bạch mọi thủ tục.' },
  { name: 'Văn Huy', text: 'Mình đã nhờ bên chị làm hồ sơ và được hướng dẫn tận tình! Bao uy tín nhé!' },
  { name: 'Hồ Văn Linh', text: 'Thân thiện hoà nhã, làm việc nhanh gọn, nhiệt tình, uy tín, nhận tiền lần 2 mới thanh toán, rất hài lòng' },
  { name: 'Ý', text: 'Hỗ trợ xin visa ginou2 chi tiết, nhanh gọn. 10đ' },
  { name: 'Quyền', text: 'Uy tín, nhanh gọn. Nhân viên vui tính, nhiệt tình. Phải nói là uy tín số 1 Japan nhé mọi người' },
];

export const collabs: { icon: IconName; title: string; tag: string; desc: string; points: string[] }[] = [
  {
    icon: 'users',
    title: 'Cộng tác viên giới thiệu khách hàng',
    tag: 'Nenkin & Thuế',
    desc: 'Dành cho người có thể kết nối khách hàng có nhu cầu làm Nenkin hoặc hoàn/giảm thuế.',
    points: [
      'Chỉ cần giới thiệu khách hàng.',
      'Không cần tư vấn chuyên sâu hay trực tiếp làm hồ sơ.',
      'Thời gian linh hoạt.',
      'Nhận phí giới thiệu theo từng khách hàng sử dụng dịch vụ thành công.',
    ],
  },
  {
    icon: 'folder',
    title: 'Cộng tác viên hồ sơ Visa Gino 2',
    tag: 'Hỗ trợ hồ sơ',
    desc: 'Dành cho người đã có kinh nghiệm hoặc mong muốn học cách hỗ trợ hồ sơ Visa Gino 2.',
    points: [
      'Ưu tiên người đã có kinh nghiệm xử lý hồ sơ.',
      'Người chưa có kinh nghiệm sẽ được CZT hướng dẫn và đào tạo.',
      'Cộng tác xử lý hồ sơ theo quy trình của CZT.',
      'Nhận thù lao theo từng hồ sơ hoàn thành.',
    ],
  },
];
