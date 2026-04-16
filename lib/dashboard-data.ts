export type DashboardTabId = "overview" | "mba" | "tndt" | "cbm" | "tvtk";

export type DashboardKpi = {
  label: string;
  value: string;
  delta?: string;
  tone?: "default" | "positive" | "warning";
  progress?: number;
};

export type DashboardChart =
  | {
      type: "line";
      title: string;
      subtitle: string;
      labels: string[];
      series: Array<{ name: string; values: number[]; color: string }>;
    }
  | {
      type: "donut";
      title: string;
      subtitle: string;
      segments: Array<{ label: string; value: number; color: string }>;
    }
  | {
      type: "bar";
      title: string;
      subtitle: string;
      items: Array<{ label: string; value: number; color: string; helper?: string }>;
    }
  | {
      type: "stacked";
      title: string;
      subtitle: string;
      rows: Array<{
        label: string;
        segments: Array<{ label: string; value: number; color: string }>;
      }>;
    };

export type DashboardTable = {
  title: string;
  subtitle: string;
  columns: string[];
  rows: string[][];
};

export type DashboardSection = {
  id: DashboardTabId;
  code: string;
  title: string;
  subtitle: string;
  kpis: DashboardKpi[];
  charts: DashboardChart[];
  tables: DashboardTable[];
};

export const dashboardFilterOptions = {
  years: ["2026", "2025", "2024"],
  periods: ["Tất cả", "Quý 1", "Quý 2", "Quý 3", "Quý 4", "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4"],
  units: ["Tất cả", "PC Hà Nội", "PC Hải Dương", "PC Quảng Ninh", "XN SCL MBA", "Trung tâm Thí nghiệm"],
  serviceTypes: ["Tất cả", "Khách hàng ngoài", "Tự thực hiện"],
  statuses: ["Tất cả", "Mới", "Đang thực hiện", "Hoàn thành", "Từ chối"],
  projectTypes: ["Tất cả", "ĐTXD", "SXKD"],
  assetTypes: ["Tất cả", "MBA", "TU", "TI", "Cầu dao"]
};

export const dashboardSections: DashboardSection[] = [
  {
    id: "overview",
    code: "MSM-01",
    title: "Dashboard tổng quan",
    subtitle: "Tổng hợp KPI và báo cáo vận hành từ tất cả các phân hệ MSM.",
    kpis: [
      { label: "Tổng yêu cầu / hợp đồng", value: "1.284", delta: "+12.4%", tone: "positive" },
      { label: "Tổng doanh thu", value: "186.4 tỷ", delta: "+8.1%", tone: "positive" },
      { label: "Giá trị nghiệm thu", value: "142.9 tỷ", delta: "+5.2%", tone: "positive" },
      { label: "Giá trị quyết toán", value: "118.6 tỷ", delta: "+3.9%", tone: "positive" },
      { label: "Tỷ lệ hoàn thành kế hoạch", value: "78%", progress: 78, delta: "Cao hơn 6% so với kế hoạch quý" }
    ],
    charts: [
      {
        type: "line",
        title: "Doanh thu theo thời gian",
        subtitle: "So sánh doanh thu thực tế giữa 2 năm theo tháng.",
        labels: ["T1", "T2", "T3", "T4", "T5", "T6"],
        series: [
          { name: "2026", values: [18, 22, 29, 27, 35, 41], color: "#2563eb" },
          { name: "2025", values: [14, 19, 21, 24, 29, 33], color: "#22c55e" }
        ]
      },
      {
        type: "donut",
        title: "Phân bổ theo phân hệ",
        subtitle: "Tỷ lệ doanh thu / hợp đồng theo từng phân hệ.",
        segments: [
          { label: "TN Doanh thu", value: 34, color: "#2563eb" },
          { label: "SCL MBA", value: 24, color: "#f97316" },
          { label: "TN CBM", value: 18, color: "#14b8a6" },
          { label: "TVTK", value: 24, color: "#7c3aed" }
        ]
      },
      {
        type: "stacked",
        title: "Tình trạng hồ sơ",
        subtitle: "Số hồ sơ theo trạng thái của từng phân hệ.",
        rows: [
          { label: "TN DT", segments: [{ label: "Mới", value: 18, color: "#93c5fd" }, { label: "Đang xử lý", value: 42, color: "#2563eb" }, { label: "Hoàn thành", value: 31, color: "#22c55e" }, { label: "Từ chối", value: 9, color: "#ef4444" }] },
          { label: "SCL MBA", segments: [{ label: "Mới", value: 12, color: "#fdba74" }, { label: "Đang xử lý", value: 38, color: "#f97316" }, { label: "Hoàn thành", value: 24, color: "#22c55e" }, { label: "Từ chối", value: 5, color: "#ef4444" }] },
          { label: "CBM", segments: [{ label: "Mới", value: 16, color: "#99f6e4" }, { label: "Đang xử lý", value: 27, color: "#14b8a6" }, { label: "Hoàn thành", value: 21, color: "#22c55e" }, { label: "Từ chối", value: 3, color: "#ef4444" }] },
          { label: "TVTK", segments: [{ label: "Mới", value: 10, color: "#c4b5fd" }, { label: "Đang xử lý", value: 33, color: "#7c3aed" }, { label: "Hoàn thành", value: 19, color: "#22c55e" }, { label: "Từ chối", value: 6, color: "#ef4444" }] }
        ]
      }
    ],
    tables: [
      {
        title: "Bảng tóm tắt theo phân hệ",
        subtitle: "Tổng hợp nhanh kết quả vận hành trong kỳ.",
        columns: ["Phân hệ", "Tổng HĐ / KH", "Hoàn thành", "Đang xử lý", "Doanh thu / Giá trị", "Tỷ lệ HT"],
        rows: [
          ["TN Tạo DT", "342", "211", "98", "64.2 tỷ", "82%"],
          ["SCL MBA", "128", "76", "39", "41.8 tỷ", "74%"],
          ["TN CBM", "204", "132", "54", "23.5 tỷ", "79%"],
          ["Tư vấn TK", "168", "91", "52", "56.9 tỷ", "73%"]
        ]
      },
      {
        title: "Hồ sơ chờ xử lý",
        subtitle: "Các đầu việc cần theo dõi ngay trong ngày.",
        columns: ["STT", "Phân hệ", "Tên hồ sơ / yêu cầu", "Trạng thái", "Đơn vị", "Ngày cập nhật"],
        rows: [
          ["1", "TN DT", "Đề nghị tạm ứng gói Hoàng Long", "Đã duyệt", "Phòng Kế toán", "2026-04-24"],
          ["2", "SCL MBA", "BBNT MBA T2 Phả Lại", "Chờ nghiệm thu", "XN SCL MBA", "2026-04-24"],
          ["3", "CBM", "Báo cáo DGA Gia Lâm", "Đã gửi duyệt", "Trung tâm TN", "2026-04-23"],
          ["4", "TVTK", "Hồ sơ quyết toán Cầu Giấy", "Đã thẩm tra", "Phòng Kế toán DA", "2026-04-24"]
        ]
      }
    ]
  },
  {
    id: "mba",
    code: "MSM-02",
    title: "Dashboard sửa chữa MBA",
    subtitle: "Tổng hợp tiến độ SCL MBA theo kỳ, đơn vị và tình trạng hồ sơ.",
    kpis: [
      { label: "Tổng MBA SCL", value: "86", delta: "+9.3%", tone: "positive" },
      { label: "Đang thực hiện", value: "29", delta: "11 hồ sơ chờ nghiệm thu", tone: "warning" },
      { label: "Hoàn thành", value: "41", delta: "+6 so với tháng trước", tone: "positive" },
      { label: "Quá hạn / Chờ duyệt", value: "7", delta: "2 hồ sơ quá hạn > 5 ngày", tone: "warning" }
    ],
    charts: [
      {
        type: "bar",
        title: "Tiến độ SCL theo đơn vị",
        subtitle: "Hoàn thành / tổng kế hoạch theo từng đơn vị.",
        items: [
          { label: "XN SCL MBA 1", value: 82, color: "#f97316", helper: "18/22 MBA" },
          { label: "XN SCL MBA 2", value: 74, color: "#fb923c", helper: "14/19 MBA" },
          { label: "PC Hà Nội", value: 69, color: "#fdba74", helper: "11/16 MBA" }
        ]
      },
      {
        type: "line",
        title: "Xu hướng hoàn thành theo tháng",
        subtitle: "So sánh kế hoạch và thực tế hoàn thành SCL.",
        labels: ["T1", "T2", "T3", "T4", "T5", "T6"],
        series: [
          { name: "Kế hoạch", values: [4, 8, 12, 16, 19, 22], color: "#94a3b8" },
          { name: "Thực tế", values: [3, 7, 11, 13, 17, 20], color: "#f97316" }
        ]
      },
      {
        type: "donut",
        title: "Phân loại theo loại MBA",
        subtitle: "Tỷ trọng MBA theo cấp điện áp / công suất.",
        segments: [
          { label: "110kV", value: 42, color: "#f97316" },
          { label: "35kV", value: 28, color: "#fb923c" },
          { label: "22kV", value: 18, color: "#fdba74" },
          { label: "Khác", value: 12, color: "#fed7aa" }
        ]
      }
    ],
    tables: [
      {
        title: "MBA đang SCL",
        subtitle: "Danh sách MBA đang nằm trong dây chuyền xử lý.",
        columns: ["STT", "Mã MBA", "Tên MBA / Vị trí", "Đơn vị thực hiện", "Ngày bắt đầu", "Ngày dự kiến HT", "Trạng thái"],
        rows: [
          ["1", "MBA-PL-02", "MBA T2 Phả Lại", "XN SCL MBA 1", "2026-04-02", "2026-05-10", "Chờ nghiệm thu"],
          ["2", "MBA-GA-01", "MBA T1 Gia Lâm", "XN SCL MBA 2", "2026-04-07", "2026-05-14", "Đang thực hiện"],
          ["3", "MBA-DH-03", "MBA T3 Đông Anh", "PC Hà Nội", "2026-04-11", "2026-05-18", "Chờ quyết toán"]
        ]
      },
      {
        title: "Hồ sơ chờ phê duyệt SCL",
        subtitle: "Theo dõi hồ sơ đang ở bước phê duyệt.",
        columns: ["Loại hồ sơ", "Mã hồ sơ", "MBA liên quan", "Người phụ trách", "Ngày trình", "Trạng thái duyệt"],
        rows: [
          ["PAKT-DT", "PAKT-021", "MBA T2 Phả Lại", "Lê Quang Huy", "2026-04-24", "Chờ duyệt"],
          ["BBNT", "BBNT-014", "MBA T1 Gia Lâm", "Đỗ Văn Khôi", "2026-04-23", "Đã duyệt"],
          ["HSQT", "HSQT-009", "MBA T3 Đông Anh", "Nguyễn Anh Đức", "2026-04-22", "Từ chối"]
        ]
      }
    ]
  },
  {
    id: "tndt",
    code: "MSM-03",
    title: "Dashboard thí nghiệm tạo doanh thu",
    subtitle: "Theo dõi dịch vụ thí nghiệm khách hàng ngoài và tự thực hiện.",
    kpis: [
      { label: "Tổng số hợp đồng", value: "342", delta: "+15.1%", tone: "positive" },
      { label: "Tổng doanh thu", value: "64.2 tỷ", delta: "+11.6%", tone: "positive" },
      { label: "Giá trị nghiệm thu", value: "51.3 tỷ", delta: "+7.8%", tone: "positive" },
      { label: "Giá trị quyết toán", value: "44.7 tỷ", delta: "+5.4%", tone: "positive" },
      { label: "Tỷ lệ thu hồi công nợ", value: "71%", progress: 71, delta: "Cần theo dõi 18 tỷ công nợ đến hạn" }
    ],
    charts: [
      {
        type: "line",
        title: "Doanh thu theo tháng",
        subtitle: "So sánh năm hiện tại với năm trước.",
        labels: ["T1", "T2", "T3", "T4", "T5", "T6"],
        series: [
          { name: "2026", values: [8, 11, 13, 12, 15, 18], color: "#2563eb" },
          { name: "2025", values: [6, 8, 10, 9, 12, 14], color: "#38bdf8" }
        ]
      },
      {
        type: "donut",
        title: "Phân loại theo loại dịch vụ",
        subtitle: "Tỷ lệ doanh thu khách hàng ngoài và tự thực hiện.",
        segments: [
          { label: "Khách hàng ngoài", value: 61, color: "#2563eb" },
          { label: "Tự thực hiện", value: 39, color: "#38bdf8" }
        ]
      },
      {
        type: "bar",
        title: "Doanh thu theo đơn vị",
        subtitle: "Sắp xếp giảm dần theo doanh thu.",
        items: [
          { label: "PC Hà Nội", value: 86, color: "#2563eb", helper: "18.6 tỷ" },
          { label: "PC Hải Dương", value: 71, color: "#3b82f6", helper: "14.1 tỷ" },
          { label: "Trung tâm TN", value: 54, color: "#60a5fa", helper: "10.8 tỷ" }
        ]
      }
    ],
    tables: [
      {
        title: "Top hợp đồng giá trị cao",
        subtitle: "Ưu tiên theo dõi các hợp đồng có giá trị lớn.",
        columns: ["STT", "Mã hợp đồng", "Khách hàng / Đơn vị", "Giá trị HĐ", "Đã nghiệm thu", "Trạng thái"],
        rows: [
          ["1", "HDTN-014", "Công ty Hoàng Long", "2.8 tỷ", "2.1 tỷ", "Đang thực hiện"],
          ["2", "HDTN-019", "PC Hải Dương", "2.3 tỷ", "2.3 tỷ", "Hoàn thành"],
          ["3", "HDTN-022", "PC Hà Nội", "1.9 tỷ", "1.5 tỷ", "Quyết toán"]
        ]
      },
      {
        title: "Trạng thái hóa đơn",
        subtitle: "Tổng hợp số lượng và giá trị theo loại hóa đơn.",
        columns: ["Loại hóa đơn", "Số lượng", "Tổng giá trị", "Đã thanh toán", "Chưa thanh toán"],
        rows: [
          ["Ghi nhận DT", "42", "18.6 tỷ", "13.2 tỷ", "5.4 tỷ"],
          ["Điều chỉnh tăng", "7", "1.4 tỷ", "1.1 tỷ", "0.3 tỷ"],
          ["Điều chỉnh giảm", "5", "0.8 tỷ", "0.5 tỷ", "0.3 tỷ"]
        ]
      }
    ]
  },
  {
    id: "cbm",
    code: "MSM-04",
    title: "Dashboard thí nghiệm CBM",
    subtitle: "Theo dõi kế hoạch CBM, báo cáo gần hạn và thiết bị trọng yếu.",
    kpis: [
      { label: "Tổng kế hoạch CBM", value: "204", delta: "+10.2%", tone: "positive" },
      { label: "Hoàn thành", value: "132", delta: "64.7% đã phê duyệt", tone: "positive" },
      { label: "Đang thực hiện", value: "54", delta: "16 hồ sơ đang kiểm tra", tone: "warning" },
      { label: "Quá hạn", value: "9", delta: "Cần rà soát ngay", tone: "warning" },
      { label: "Tổng BBTN CBM", value: "167", delta: "+13.5%", tone: "positive" }
    ],
    charts: [
      {
        type: "bar",
        title: "Tỷ lệ hoàn thành theo đơn vị",
        subtitle: "% hoàn thành kế hoạch CBM theo từng đơn vị.",
        items: [
          { label: "PC Hà Nội", value: 84, color: "#14b8a6", helper: "42/50 kế hoạch" },
          { label: "PC Hải Dương", value: 76, color: "#2dd4bf", helper: "31/41 kế hoạch" },
          { label: "PC Quảng Ninh", value: 69, color: "#5eead4", helper: "26/38 kế hoạch" }
        ]
      },
      {
        type: "line",
        title: "Xu hướng kế hoạch CBM",
        subtitle: "Số kế hoạch tạo mới và hoàn thành theo tháng.",
        labels: ["T1", "T2", "T3", "T4", "T5", "T6"],
        series: [
          { name: "Tạo mới", values: [12, 18, 21, 24, 28, 31], color: "#14b8a6" },
          { name: "Hoàn thành", values: [8, 13, 17, 20, 22, 27], color: "#22c55e" }
        ]
      },
      {
        type: "donut",
        title: "Phân loại theo loại thiết bị",
        subtitle: "Tỷ lệ kế hoạch CBM theo loại thiết bị.",
        segments: [
          { label: "MBA", value: 48, color: "#14b8a6" },
          { label: "TU", value: 17, color: "#2dd4bf" },
          { label: "TI", value: 15, color: "#5eead4" },
          { label: "Khác", value: 20, color: "#99f6e4" }
        ]
      }
    ],
    tables: [
      {
        title: "Kế hoạch CBM sắp đến hạn",
        subtitle: "Ưu tiên các hồ sơ cần triển khai ngay.",
        columns: ["Mã kế hoạch", "Tên thiết bị", "Mã thiết bị", "Đơn vị thực hiện", "Thời gian thực hiện", "Trạng thái"],
        rows: [
          ["KHCBM-021", "MBA T1 Gia Lâm", "MBA-GL-001", "Đội CBM 1", "2026-04-27", "Mới"],
          ["KHCBM-025", "TU 220kV Uông Bí", "TU-UB-004", "Đội CBM 2", "2026-04-28", "Đang thực hiện"],
          ["KHCBM-031", "TI 110kV Đông Anh", "TI-DA-002", "Trung tâm TN", "2026-04-29", "Quá hạn"]
        ]
      },
      {
        title: "Báo cáo CBM gần nhất",
        subtitle: "Kết quả thí nghiệm được cập nhật gần đây.",
        columns: ["Mã báo cáo", "Tên thiết bị", "Kết quả", "Ngày thực hiện", "Đơn vị"],
        rows: [
          ["BCCBM-041", "MBA T1 Gia Lâm", "Cần theo dõi", "2026-04-24", "Trung tâm TN"],
          ["BCCBM-039", "TU 220kV Uông Bí", "Đạt", "2026-04-24", "Đội CBM 2"],
          ["BCCBM-036", "TI 110kV Đông Anh", "Không đạt", "2026-04-23", "Đội CBM 1"]
        ]
      }
    ]
  },
  {
    id: "tvtk",
    code: "MSM-05",
    title: "Dashboard tư vấn thiết kế",
    subtitle: "Tổng hợp tiến độ dự án TVTK, TMĐT và hồ sơ chờ phê duyệt.",
    kpis: [
      { label: "Tổng số dự án TVTK", value: "168", delta: "+7.9%", tone: "positive" },
      { label: "Đang thực hiện", value: "74", delta: "24 hồ sơ ở giai đoạn KS-TK", tone: "warning" },
      { label: "Hoàn thành", value: "49", delta: "+5 dự án đã quyết toán", tone: "positive" },
      { label: "Tổng giá trị TMĐT", value: "2.860 tỷ", delta: "+9.1%", tone: "positive" },
      { label: "Tổng giá trị tư vấn", value: "56.9 tỷ", delta: "+4.6%", tone: "positive" }
    ],
    charts: [
      {
        type: "bar",
        title: "Tiến độ dự án theo đơn vị",
        subtitle: "Số dự án hoàn thành / tổng dự án theo từng đơn vị.",
        items: [
          { label: "Ban QLDA 1", value: 79, color: "#7c3aed", helper: "27/34 dự án" },
          { label: "Ban QLDA 2", value: 68, color: "#8b5cf6", helper: "21/31 dự án" },
          { label: "PC Hà Nội", value: 62, color: "#a78bfa", helper: "18/29 dự án" }
        ]
      },
      {
        type: "donut",
        title: "Phân loại theo loại dự án",
        subtitle: "Tỷ lệ ĐTXD và SXKD trong kỳ.",
        segments: [
          { label: "ĐTXD", value: 66, color: "#7c3aed" },
          { label: "SXKD", value: 34, color: "#a78bfa" }
        ]
      },
      {
        type: "line",
        title: "Giá trị TMĐT theo tháng",
        subtitle: "TMĐT phê duyệt theo tháng trong năm.",
        labels: ["T1", "T2", "T3", "T4", "T5", "T6"],
        series: [{ name: "TMĐT", values: [220, 310, 295, 420, 390, 515], color: "#7c3aed" }]
      }
    ],
    tables: [
      {
        title: "Dự án đang thực hiện",
        subtitle: "Các dự án TVTK đang nằm trong pipeline triển khai.",
        columns: ["Mã dự án", "Tên dự án", "Loại dự án", "Đơn vị thực hiện", "TMĐT", "Giai đoạn", "Trạng thái"],
        rows: [
          ["TVTK-081", "Trạm 110kV Cầu Giấy", "ĐTXD", "Ban QLDA 1", "420 tỷ", "KS-TK", "Đang thực hiện"],
          ["TVTK-077", "Ngầm hóa lưới Hoàn Kiếm", "SXKD", "PC Hà Nội", "185 tỷ", "Thẩm định", "Chờ duyệt"],
          ["TVTK-072", "Cải tạo lưới Gia Lâm", "ĐTXD", "Ban QLDA 2", "260 tỷ", "Phê duyệt", "Từ chối"]
        ]
      },
      {
        title: "Hồ sơ TVTK chờ phê duyệt",
        subtitle: "Các hồ sơ đang chờ xử lý trong ngày.",
        columns: ["Loại hồ sơ", "Mã hồ sơ", "Dự án liên quan", "Người phụ trách", "Ngày trình", "Trạng thái"],
        rows: [
          ["PATTH", "PATTH-031", "Trạm 110kV Cầu Giấy", "Nguyễn Hải Nam", "2026-04-24", "Chờ duyệt"],
          ["HSQT", "HSQT-021", "Ngầm hóa lưới Hoàn Kiếm", "Trần Thùy Linh", "2026-04-24", "Đã duyệt"],
          ["Hóa đơn", "HD-014", "Cải tạo lưới Gia Lâm", "Phạm Quốc Bảo", "2026-04-23", "Từ chối"]
        ]
      }
    ]
  }
];
