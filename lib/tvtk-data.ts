export type TvtkFieldType = "text" | "textarea" | "date" | "select" | "number";

export type TvtkField = {
  key: string;
  label: string;
  type: TvtkFieldType;
  required?: boolean;
  options?: string[];
  helper?: string;
};

export type TvtkRecord = {
  id: string;
  code: string;
  title: string;
  subtitle?: string;
  unit: string;
  date: string;
  status: string;
  values: Record<string, string>;
};

export type TvtkSection = {
  slug: string;
  codeRange: string;
  title: string;
  shortTitle: string;
  description: string;
  breadcrumb: string;
  statusOptions: string[];
  createCode?: string;
  editCode?: string;
  detailCode?: string;
  deleteCode?: string;
  approvalCode?: string;
  reviewCode?: string;
  fields?: TvtkField[];
  records: TvtkRecord[];
  readOnly?: boolean;
};

export type TvtkTimelineItem = {
  title: string;
  note: string;
};

export type TvtkDetailMetric = {
  label: string;
  value: string;
};

export type TvtkAttachmentItem = {
  name: string;
  type: string;
  note: string;
};

function pad(value: number, size = 3) {
  return String(value).padStart(size, "0");
}

function cycleValue<T>(items: readonly T[], index: number) {
  return items[index % items.length];
}

function shiftDate(baseDate: string, offset: number) {
  const date = new Date(`${baseDate}T00:00:00`);
  date.setDate(date.getDate() + offset);
  return date.toISOString().slice(0, 10);
}

function mutateValue(key: string, value: string, index: number) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return shiftDate(value, index);
  }

  if (/^\d+$/.test(value)) {
    return String(Number(value) + index * 1000000);
  }

  if (key === "progressBatch") {
    return `Đợt ${index + 1}`;
  }

  if (key === "attachments") {
    return `${value.replace(/\.\w+$/, "")}-${pad(index + 1, 2)}.pdf`;
  }

  return `${value} ${index + 1}`;
}

const approvalStatuses = ["Mới", "Đã gửi duyệt", "Đã duyệt", "Từ chối"] as const;
const reviewStatuses = ["Mới", "Đã gửi thẩm tra", "Đã thẩm tra", "Đã gửi duyệt", "Đã duyệt", "Từ chối"] as const;
const signStatuses = ["Soạn thảo", "Đã gửi duyệt", "Đã duyệt", "Đã ký số", "Từ chối"] as const;
const debtStatuses = ["Chưa thanh toán", "Thanh toán một phần", "Đã thanh toán", "Quá hạn"] as const;
const contractMgmtStatuses = ["Mới", "Đã ký", "Đang thực hiện", "Thanh lý"] as const;

const seeds: TvtkSection[] = [
  {
    slug: "capital-plans",
    codeRange: "TVTK-01 .. TVTK-03",
    title: "Kế hoạch phân bổ vốn ĐTXD",
    shortTitle: "Kế hoạch vốn",
    description: "Tiếp nhận và phê duyệt kế hoạch phân bổ vốn đầu tư xây dựng.",
    breadcrumb: "Home > Phân hệ TƯ VẤN THIẾT KẾ > Kế hoạch phân bổ vốn ĐTXD",
    statusOptions: [...approvalStatuses],
    createCode: "TVTK-02",
    editCode: "TVTK-02",
    detailCode: "TVTK-03",
    approvalCode: "TVTK-03",
    fields: [
      { key: "planName", label: "Tên kế hoạch phân bổ vốn", type: "text", required: true },
      { key: "planYear", label: "Năm kế hoạch", type: "number", required: true },
      { key: "totalCapital", label: "Tổng mức vốn ĐTXD (VNĐ)", type: "number", required: true },
      { key: "managementUnit", label: "Đơn vị quản lý", type: "select", required: true, options: ["Ban QLDA 1", "Ban QLDA 2", "PC Hà Nội"] },
      { key: "capitalSource", label: "Nguồn vốn", type: "select", options: ["Nguồn NSNN", "ODA", "Trái phiếu", "Khác"] },
      { key: "notes", label: "Ghi chú / Mô tả", type: "textarea" }
    ],
    records: [
      {
        id: "capital-1",
        code: "KHV-001",
        title: "Kế hoạch vốn cải tạo lưới 2026",
        subtitle: "Phân bổ vốn cho các công trình ưu tiên",
        unit: "Ban QLDA 1",
        date: "2026-04-17",
        status: "Mới",
        values: {
          planName: "Kế hoạch vốn cải tạo lưới 2026",
          planYear: "2026",
          totalCapital: "125000000000",
          managementUnit: "Ban QLDA 1",
          capitalSource: "Nguồn NSNN",
          notes: "Ưu tiên công trình chống quá tải khu vực nội thành."
        }
      }
    ]
  },
  {
    slug: "investment-plans",
    codeRange: "TVTK-04 .. TVTK-07",
    title: "TMĐT & Yêu cầu lập phương án đầu tư",
    shortTitle: "TMĐT",
    description: "Phân bổ tổng mức đầu tư và theo dõi yêu cầu lập phương án đầu tư.",
    breadcrumb: "Home > Phân hệ TƯ VẤN THIẾT KẾ > TMĐT & yêu cầu lập phương án đầu tư",
    statusOptions: [...approvalStatuses],
    createCode: "TVTK-05",
    editCode: "TVTK-06",
    detailCode: "TVTK-07",
    deleteCode: "TVTK-05",
    approvalCode: "TVTK-07",
    fields: [
      { key: "projectName", label: "Tên dự án / công trình", type: "text", required: true },
      { key: "totalInvestment", label: "TMĐT (VNĐ)", type: "number", required: true },
      { key: "planYear", label: "Năm kế hoạch", type: "number" },
      { key: "managementUnit", label: "Đơn vị quản lý", type: "select", required: true, options: ["Ban QLDA 1", "Ban QLDA 2", "PC Hà Nội"] },
      { key: "projectType", label: "Loại công trình", type: "select", options: ["Xây mới", "Cải tạo", "Nâng cấp"] },
      { key: "notes", label: "Ghi chú / Mô tả", type: "textarea", required: true }
    ],
    records: [
      {
        id: "investment-1",
        code: "TMDT-001",
        title: "Nâng cấp trạm 110kV Đông Anh",
        subtitle: "Yêu cầu lập phương án đầu tư nâng cấp thiết bị chính",
        unit: "Ban QLDA 2",
        date: "2026-04-18",
        status: "Đã gửi duyệt",
        values: {
          projectName: "Nâng cấp trạm 110kV Đông Anh",
          totalInvestment: "215000000000",
          planYear: "2026",
          managementUnit: "Ban QLDA 2",
          projectType: "Nâng cấp",
          notes: "Mở rộng ngăn lộ và bổ sung MBA dự phòng."
        }
      }
    ]
  },
  {
    slug: "design-patth",
    codeRange: "TVTK-13 .. TVTK-16",
    title: "PATTH khảo sát thiết kế",
    shortTitle: "PATTH KS-TK",
    description: "Lập, thẩm tra và phê duyệt phương án thực hiện khảo sát thiết kế.",
    breadcrumb: "Home > Phân hệ TƯ VẤN THIẾT KẾ > PATTH khảo sát thiết kế",
    statusOptions: [...reviewStatuses],
    createCode: "TVTK-14",
    editCode: "TVTK-15",
    detailCode: "TVTK-16",
    deleteCode: "TVTK-13",
    reviewCode: "TVTK-16",
    approvalCode: "TVTK-16",
    fields: [
      { key: "planName", label: "Tên phương án khảo sát thiết kế", type: "text", required: true },
      { key: "description", label: "Mô tả phương án", type: "textarea", required: true },
      { key: "planDate", label: "Ngày lập phương án", type: "date" },
      { key: "executionUnit", label: "Đơn vị thực hiện", type: "select", required: true, options: ["Trung tâm Tư vấn 1", "Trung tâm Tư vấn 2"] },
      { key: "reviewUnit", label: "Đơn vị thẩm tra", type: "select", options: ["PC Hà Nội", "Ban QLDA 1", "Ban Kỹ thuật"] },
      { key: "attachments", label: "Tài liệu đính kèm", type: "textarea", helper: "PDF/DOC/XLS" }
    ],
    records: [
      {
        id: "patth-1",
        code: "PATTH-TV-001",
        title: "PATTH khảo sát tuyến cáp ngầm Hoàn Kiếm",
        subtitle: "Khảo sát địa hình, hiện trạng và phương án thiết kế sơ bộ",
        unit: "Trung tâm Tư vấn 1",
        date: "2026-04-19",
        status: "Đã thẩm tra",
        values: {
          planName: "PATTH khảo sát tuyến cáp ngầm Hoàn Kiếm",
          description: "Khảo sát tuyến cáp hiện hữu và đề xuất phương án cải tạo đồng bộ.",
          planDate: "2026-04-19",
          executionUnit: "Trung tâm Tư vấn 1",
          reviewUnit: "Ban Kỹ thuật",
          attachments: "patth-hoan-kiem.pdf"
        }
      }
    ]
  },
  {
    slug: "consulting-contracts",
    codeRange: "TVTK-17 .. TVTK-20, TVTK-23",
    title: "Hợp đồng tư vấn & phụ lục",
    shortTitle: "HĐ tư vấn",
    description: "Quản lý hợp đồng tư vấn, phụ lục và quy trình ký số.",
    breadcrumb: "Home > Phân hệ TƯ VẤN THIẾT KẾ > Hợp đồng tư vấn & phụ lục",
    statusOptions: [...signStatuses],
    createCode: "TVTK-18",
    editCode: "TVTK-19",
    detailCode: "TVTK-20",
    deleteCode: "TVTK-23",
    approvalCode: "TVTK-20",
    fields: [
      { key: "contractName", label: "Tên hợp đồng tư vấn", type: "text", required: true },
      { key: "contractNumber", label: "Số hợp đồng", type: "text", required: true },
      { key: "contractType", label: "Loại hợp đồng", type: "select", options: ["HĐ chính", "Phụ lục"] },
      { key: "contractValue", label: "Giá trị hợp đồng (VNĐ)", type: "number", required: true },
      { key: "signDate", label: "Ngày ký", type: "date" },
      { key: "attachments", label: "Tài liệu / file đính kèm", type: "textarea", required: true }
    ],
    records: [
      {
        id: "contract-1",
        code: "HDTV-001",
        title: "Hợp đồng tư vấn thiết kế trạm 110kV Cầu Giấy",
        subtitle: "HĐ chính",
        unit: "Trung tâm Tư vấn 2",
        date: "2026-04-20",
        status: "Đã duyệt",
        values: {
          contractName: "Hợp đồng tư vấn thiết kế trạm 110kV Cầu Giấy",
          contractNumber: "TVTK-2026-001",
          contractType: "HĐ chính",
          contractValue: "8400000000",
          signDate: "2026-04-20",
          attachments: "hop-dong-tv-cau-giay.pdf"
        }
      }
    ]
  },
  {
    slug: "design-dossiers",
    codeRange: "TVTK-18a .. TVTK-18f",
    title: "Hồ sơ thiết kế",
    shortTitle: "HS thiết kế",
    description: "Lập hồ sơ thiết kế, thẩm tra, gửi duyệt và kiểm soát file bản vẽ theo từng dự án.",
    breadcrumb: "Home > Phân hệ TƯ VẤN THIẾT KẾ > Hồ sơ thiết kế",
    statusOptions: [...reviewStatuses],
    createCode: "TVTK-18a",
    editCode: "TVTK-18b",
    detailCode: "TVTK-18c",
    deleteCode: "TVTK-18d",
    approvalCode: "TVTK-18e",
    reviewCode: "TVTK-18f",
    fields: [
      { key: "dossierName", label: "Tên hồ sơ thiết kế", type: "text", required: true },
      { key: "projectName", label: "Dự án liên quan", type: "select", required: true, options: ["Trạm 110kV Cầu Giấy", "Ngầm hóa lưới Hoàn Kiếm", "Cải tạo lưới Gia Lâm"] },
      { key: "designType", label: "Loại thiết kế", type: "select", required: true, options: ["Thiết kế cơ sở", "Thiết kế kỹ thuật", "Thiết kế BVTC"] },
      { key: "consultingUnit", label: "Đơn vị tư vấn", type: "select", required: true, options: ["Trung tâm Tư vấn 1", "Trung tâm Tư vấn 2", "Trung tâm Tư vấn 3"] },
      { key: "createdDate", label: "Ngày lập", type: "date", required: true },
      { key: "notes", label: "Ghi chú", type: "textarea" },
      { key: "attachments", label: "Bản vẽ / văn bản đính kèm", type: "textarea", helper: "PDF/CAD/Word, tối đa 50MB/file" }
    ],
    records: [
      {
        id: "design-dossier-1",
        code: "HSTK-001",
        title: "Hồ sơ thiết kế BVTC trạm 110kV Cầu Giấy",
        subtitle: "Gồm bản vẽ kiến trúc, điện nhị thứ và thuyết minh",
        unit: "Trung tâm Tư vấn 2",
        date: "2026-04-24",
        status: "Đã gửi thẩm tra",
        values: {
          dossierName: "Hồ sơ thiết kế BVTC trạm 110kV Cầu Giấy",
          projectName: "Trạm 110kV Cầu Giấy",
          designType: "Thiết kế BVTC",
          consultingUnit: "Trung tâm Tư vấn 2",
          createdDate: "2026-04-24",
          notes: "Ưu tiên hoàn thành khối lượng bản vẽ nhà điều khiển và sân phân phối.",
          attachments: "ho-so-thiet-ke-cau-giay.pdf"
        }
      }
    ]
  },
  {
    slug: "progress-minutes",
    codeRange: "TVTK-21 .. TVTK-22e",
    title: "Biên bản theo dõi tiến độ thi công",
    shortTitle: "BB tiến độ",
    description: "Theo dõi đợt kiểm tra tiến độ, kết luận hiện trường và luồng phê duyệt biên bản.",
    breadcrumb: "Home > Phân hệ TƯ VẤN THIẾT KẾ > BB theo dõi tiến độ thi công",
    statusOptions: [...reviewStatuses],
    createCode: "TVTK-22",
    editCode: "TVTK-22a",
    detailCode: "TVTK-22b",
    deleteCode: "TVTK-22c",
    approvalCode: "TVTK-22d",
    reviewCode: "TVTK-22e",
    fields: [
      { key: "projectName", label: "Tên dự án", type: "select", required: true, options: ["Trạm 110kV Cầu Giấy", "Ngầm hóa lưới Hoàn Kiếm", "Cải tạo lưới Gia Lâm"] },
      { key: "progressBatch", label: "Đợt theo dõi", type: "text", required: true },
      { key: "createdDate", label: "Ngày lập", type: "date", required: true },
      { key: "author", label: "Người lập", type: "text", required: true },
      { key: "progressContent", label: "Nội dung theo dõi", type: "textarea", required: true },
      { key: "recommendation", label: "Kết luận / Kiến nghị", type: "textarea" },
      { key: "attachments", label: "Văn bản đính kèm", type: "textarea", helper: "PDF/Word, tối đa 20MB/file" }
    ],
    records: [
      {
        id: "progress-1",
        code: "BBTD-001",
        title: "Biên bản tiến độ ngầm hóa lưới Hoàn Kiếm",
        subtitle: "Đợt 1 kiểm tra khối lượng đào rãnh và hoàn trả mặt bằng",
        unit: "Phòng Giám sát thi công",
        date: "2026-04-25",
        status: "Mới",
        values: {
          projectName: "Ngầm hóa lưới Hoàn Kiếm",
          progressBatch: "Đợt 1",
          createdDate: "2026-04-25",
          author: "Nguyễn Hải Nam",
          progressContent: "Đã hoàn thành 65% khối lượng tuyến ngầm chính, còn vướng mặt bằng tại 2 vị trí giao cắt.",
          recommendation: "Yêu cầu nhà thầu bổ sung ca đêm và cập nhật kế hoạch khắc phục trong 48 giờ.",
          attachments: "bb-tien-do-hoan-kiem.pdf"
        }
      }
    ]
  },
  {
    slug: "acceptance-payments",
    codeRange: "TVTK-30 .. TVTK-32",
    title: "Nghiệm thu & thanh toán tư vấn",
    shortTitle: "Nghiệm thu TV",
    description: "Quản lý hồ sơ nghiệm thu, thanh toán và phê duyệt tư vấn.",
    breadcrumb: "Home > Phân hệ TƯ VẤN THIẾT KẾ > Nghiệm thu & thanh toán tư vấn",
    statusOptions: [...approvalStatuses],
    createCode: "TVTK-31",
    editCode: "TVTK-31",
    detailCode: "TVTK-32",
    deleteCode: "TVTK-30",
    approvalCode: "TVTK-32",
    fields: [
      { key: "linkedContract", label: "Tên hợp đồng liên kết", type: "select", required: true, options: ["HĐ Cầu Giấy", "HĐ Đông Anh", "HĐ Gia Lâm"] },
      { key: "acceptanceType", label: "Loại nghiệm thu", type: "select", required: true, options: ["Nghiệm thu kỳ", "Nghiệm thu hoàn thành"] },
      { key: "acceptanceDate", label: "Ngày nghiệm thu", type: "date" },
      { key: "acceptanceValue", label: "Giá trị nghiệm thu (VNĐ)", type: "number", required: true },
      { key: "notes", label: "Ghi chú / Nội dung nghiệm thu", type: "textarea" },
      { key: "attachments", label: "Hồ sơ nghiệm thu đính kèm", type: "textarea", required: true }
    ],
    records: [
      {
        id: "acceptance-1",
        code: "NTTV-001",
        title: "Nghiệm thu đợt 1 HĐ Cầu Giấy",
        subtitle: "Nghiệm thu kỳ",
        unit: "Trung tâm Tư vấn 2",
        date: "2026-04-21",
        status: "Mới",
        values: {
          linkedContract: "HĐ Cầu Giấy",
          acceptanceType: "Nghiệm thu kỳ",
          acceptanceDate: "2026-04-21",
          acceptanceValue: "2500000000",
          notes: "Nghiệm thu hồ sơ khảo sát và thiết kế cơ sở.",
          attachments: "ho-so-nghiem-thu-dot-1.pdf"
        }
      }
    ]
  },
  {
    slug: "consulting-revenue",
    codeRange: "TVTK-33",
    title: "Bảng tổng hợp doanh thu tư vấn",
    shortTitle: "Doanh thu TV",
    description: "Theo dõi doanh thu tư vấn theo dự án và kỳ quyết toán.",
    breadcrumb: "Home > Phân hệ TƯ VẤN THIẾT KẾ > Bảng tổng hợp doanh thu tư vấn",
    statusOptions: [...approvalStatuses],
    detailCode: "TVTK-33",
    readOnly: true,
    records: [
      {
        id: "revenue-1",
        code: "DHTV-001",
        title: "Doanh thu dự án Cầu Giấy",
        subtitle: "Tổng hợp doanh thu theo hợp đồng và thanh toán",
        unit: "Trung tâm Tư vấn 2",
        date: "2026-04-22",
        status: "Đã duyệt",
        values: {
          projectName: "Dự án Cầu Giấy",
          consultingUnit: "Trung tâm Tư vấn 2",
          contractValue: "8400000000",
          paidValue: "5200000000",
          remainingValue: "3200000000"
        }
      }
    ]
  },
  {
    slug: "consulting-debts",
    codeRange: "TVTK-34",
    title: "Công nợ tư vấn",
    shortTitle: "Công nợ TV",
    description: "Danh sách công nợ tư vấn tổng hợp từ hợp đồng và nghiệm thu.",
    breadcrumb: "Home > Phân hệ TƯ VẤN THIẾT KẾ > Công nợ tư vấn",
    statusOptions: [...debtStatuses],
    detailCode: "TVTK-34",
    readOnly: true,
    records: [
      {
        id: "debt-1",
        code: "CNTV-001",
        title: "Công nợ HĐ Cầu Giấy",
        subtitle: "Đáo hạn theo đợt nghiệm thu quý II",
        unit: "Trung tâm Tư vấn 2",
        date: "2026-05-15",
        status: "Thanh toán một phần",
        values: {
          contractName: "HĐ tư vấn thiết kế Cầu Giấy",
          consultingUnit: "Trung tâm Tư vấn 2",
          dueDate: "2026-05-15",
          remainingValue: "3200000000",
          debtStatus: "Thanh toán một phần"
        }
      }
    ]
  },
  {
    slug: "settlement-dossiers",
    codeRange: "TVTK-35 .. TVTK-37.3",
    title: "Hồ sơ quyết toán",
    shortTitle: "HS quyết toán",
    description: "Lập bộ hồ sơ quyết toán tư vấn thiết kế, gửi thẩm tra, trình duyệt và quản lý file quyết toán.",
    breadcrumb: "Home > Phân hệ TƯ VẤN THIẾT KẾ > Hồ sơ quyết toán",
    statusOptions: [...reviewStatuses],
    createCode: "TVTK-35",
    editCode: "TVTK-36",
    detailCode: "TVTK-37",
    deleteCode: "TVTK-37.1",
    approvalCode: "TVTK-37.2",
    reviewCode: "TVTK-37.3",
    fields: [
      { key: "projectName", label: "Dự án", type: "select", required: true, options: ["Trạm 110kV Cầu Giấy", "Ngầm hóa lưới Hoàn Kiếm", "Cải tạo lưới Gia Lâm"] },
      { key: "linkedContract", label: "Hợp đồng tư vấn", type: "select", required: true, options: ["HĐ TVTK Cầu Giấy", "HĐ TVTK Hoàn Kiếm", "HĐ TVTK Gia Lâm"] },
      { key: "settlementValue", label: "Tổng giá trị quyết toán (VNĐ)", type: "number", required: true },
      { key: "createdDate", label: "Ngày lập", type: "date", required: true },
      { key: "notes", label: "Ghi chú", type: "textarea" },
      { key: "attachments", label: "Văn bản đính kèm", type: "textarea", helper: "PDF/Word, tối đa 20MB/file" }
    ],
    records: [
      {
        id: "settlement-1",
        code: "HSQT-001",
        title: "Hồ sơ quyết toán tư vấn trạm 110kV Cầu Giấy",
        subtitle: "Tổng hợp nghiệm thu, phụ lục và khối lượng phát sinh",
        unit: "Phòng Kế toán dự án",
        date: "2026-04-26",
        status: "Đã thẩm tra",
        values: {
          projectName: "Trạm 110kV Cầu Giấy",
          linkedContract: "HĐ TVTK Cầu Giấy",
          settlementValue: "8350000000",
          createdDate: "2026-04-26",
          notes: "Chờ hoàn thiện biên bản đối chiếu công nợ trước khi trình duyệt.",
          attachments: "ho-so-quyet-toan-cau-giay.pdf"
        }
      }
    ]
  },
  {
    slug: "contract-management",
    codeRange: "TVTK-38 .. TVTK-39",
    title: "Quản lý hợp đồng",
    shortTitle: "QL hợp đồng",
    description: "Danh sách và chi tiết hợp đồng tư vấn thiết kế trong phân hệ.",
    breadcrumb: "Home > Phân hệ TƯ VẤN THIẾT KẾ > Quản lý hợp đồng",
    statusOptions: [...contractMgmtStatuses],
    detailCode: "TVTK-39",
    readOnly: true,
    records: [
      {
        id: "mgmt-contract-1",
        code: "QLHD-001",
        title: "Hợp đồng quản lý Cầu Giấy",
        subtitle: "Dự án liên quan: Cầu Giấy",
        unit: "Trung tâm Tư vấn 2",
        date: "2026-04-10",
        status: "Đang thực hiện",
        values: {
          contractName: "Hợp đồng quản lý Cầu Giấy",
          relatedProject: "Dự án Cầu Giấy",
          contractValue: "8400000000",
          signDate: "2026-04-10",
          expireDate: "2026-12-31",
          consultingUnit: "Trung tâm Tư vấn 2",
          attachments: "qlhd-cau-giay.pdf"
        }
      }
    ]
  }
];

export const tvtkSections: TvtkSection[] = seeds.map((section) => ({
  ...section,
  records: Array.from({ length: 24 }, (_, index) => {
    const seed = section.records[index % section.records.length];
    const nextStatus = cycleValue(section.statusOptions, index);
    const nextDate = shiftDate(seed.date, index);
    const nextValues = Object.fromEntries(
      Object.entries(seed.values).map(([key, value]) => [key, mutateValue(key, value, index)])
    ) as Record<string, string>;

    return {
      ...seed,
      id: `${seed.id}-${index + 1}`,
      code: `${seed.code}-${pad(index + 1, 2)}`,
      title: `${seed.title} ${index + 1}`,
      subtitle: seed.subtitle ? `${seed.subtitle} • hồ sơ ${index + 1}` : undefined,
      unit: index % 2 === 0 ? seed.unit : `${seed.unit} / đơn vị ${index + 1}`,
      date: nextDate,
      status: nextStatus,
      values: nextValues
    };
  })
}));

export function getTvtkSection(slug: string) {
  return tvtkSections.find((section) => section.slug === slug);
}

export function getTvtkRecord(sectionSlug: string, id: string) {
  return getTvtkSection(sectionSlug)?.records.find((record) => record.id === id);
}

export function getTvtkFieldLabel(section: TvtkSection, key: string) {
  return section.fields?.find((field) => field.key === key)?.label ?? key;
}

export function getTvtkAvailableActions(section: TvtkSection, status: string) {
  if (section.readOnly) return [];

  if (["design-patth", "design-dossiers", "progress-minutes", "settlement-dossiers"].includes(section.slug)) {
    if (status === "Mới") return ["Gửi thẩm tra"];
    if (status === "Đã thẩm tra") return ["Gửi duyệt"];
    if (status === "Đã gửi duyệt") return ["Duyệt", "Từ chối"];
    return [];
  }

  if (section.slug === "consulting-contracts") {
    if (status === "Soạn thảo") return ["Gửi duyệt"];
    if (status === "Đã gửi duyệt") return ["Duyệt", "Từ chối"];
    if (status === "Đã duyệt") return ["Trình ký số", "Ký số"];
    return [];
  }

  if (["capital-plans", "investment-plans", "acceptance-payments"].includes(section.slug)) {
    if (status === "Mới") return ["Gửi duyệt"];
    if (status === "Đã gửi duyệt") return ["Duyệt", "Từ chối"];
    return [];
  }

  return [];
}

export function getTvtkNextStatus(section: TvtkSection, currentStatus: string, action: string) {
  if (action === "Gửi thẩm tra") return "Đã gửi thẩm tra";
  if (action === "Trình ký số") return "Đã duyệt";
  if (action === "Ký số") return "Đã ký số";
  if (action === "Gửi duyệt") return "Đã gửi duyệt";
  if (action === "Duyệt") return "Đã duyệt";
  if (action === "Từ chối") return "Từ chối";
  return currentStatus;
}

export function getTvtkActionCode(section: TvtkSection, action: string) {
  if (action === "Gửi thẩm tra") return section.reviewCode ?? section.detailCode;
  if (action === "Gửi duyệt") return section.approvalCode ?? section.detailCode;
  if (action === "Duyệt" || action === "Từ chối" || action === "Trình ký số" || action === "Ký số") return section.detailCode;
  return section.detailCode ?? section.codeRange;
}

export function getTvtkDeleteCode(section: TvtkSection) {
  return section.deleteCode ?? section.codeRange;
}

export function getTvtkTimeline(section: TvtkSection, record: TvtkRecord): TvtkTimelineItem[] {
  const items: TvtkTimelineItem[] = [
    {
      title: "Khởi tạo hồ sơ",
      note: `${record.code} được tạo trong nhóm ${section.shortTitle.toLowerCase()}.`
    }
  ];

  if (record.values.attachments) {
    items.push({
      title: "Bổ sung tài liệu",
      note: `Có tài liệu đính kèm: ${record.values.attachments}.`
    });
  }

  if (section.slug === "design-dossiers") {
    items.push({
      title: "Kiểm soát phiên bản bản vẽ",
      note: `Theo dõi loại thiết kế ${record.values.designType ?? "chưa cập nhật"} và bộ file hồ sơ tương ứng.`
    });
  }

  if (section.slug === "progress-minutes") {
    items.push({
      title: "Theo dõi hiện trường",
      note: `Biên bản ghi nhận ${record.values.progressBatch ?? "đợt theo dõi"} cho dự án ${record.values.projectName ?? record.title}.`
    });
  }

  if (section.slug === "settlement-dossiers") {
    items.push({
      title: "Đối chiếu quyết toán",
      note: `Hồ sơ gắn với hợp đồng ${record.values.linkedContract ?? "chưa cập nhật"} để phục vụ quyết toán.`
    });
  }

  if (!["Mới", "Soạn thảo"].includes(record.status)) {
    items.push({
      title: "Cập nhật trạng thái",
      note: `Hồ sơ hiện ở trạng thái "${record.status}".`
    });
  }

  return items;
}

export function getTvtkDetailMetrics(section: TvtkSection, record: TvtkRecord): TvtkDetailMetric[] {
  if (section.slug === "design-dossiers") {
    return [
      { label: "Loại thiết kế", value: record.values.designType ?? "-" },
      { label: "Dự án", value: record.values.projectName ?? "-" },
      { label: "Đơn vị tư vấn", value: record.values.consultingUnit ?? "-" },
      { label: "Ngày lập", value: record.values.createdDate ?? record.date }
    ];
  }

  if (section.slug === "progress-minutes") {
    return [
      { label: "Dự án", value: record.values.projectName ?? "-" },
      { label: "Đợt theo dõi", value: record.values.progressBatch ?? "-" },
      { label: "Người lập", value: record.values.author ?? "-" },
      { label: "Ngày lập", value: record.values.createdDate ?? record.date }
    ];
  }

  if (section.slug === "settlement-dossiers") {
    return [
      { label: "Dự án", value: record.values.projectName ?? "-" },
      { label: "Hợp đồng", value: record.values.linkedContract ?? "-" },
      { label: "Giá trị quyết toán", value: record.values.settlementValue ?? "-" },
      { label: "Ngày lập", value: record.values.createdDate ?? record.date }
    ];
  }

  if (section.slug === "consulting-contracts") {
    return [
      { label: "Số hợp đồng", value: record.values.contractNumber ?? "-" },
      { label: "Loại hợp đồng", value: record.values.contractType ?? "-" },
      { label: "Giá trị", value: record.values.contractValue ?? "-" },
      { label: "Ngày ký", value: record.values.signDate ?? record.date }
    ];
  }

  return [
    { label: "Đơn vị", value: record.unit },
    { label: "Ngày cập nhật", value: record.date },
    { label: "Trạng thái", value: record.status },
    { label: "Mã hồ sơ", value: record.code }
  ];
}

export function getTvtkAttachments(section: TvtkSection, record: TvtkRecord): TvtkAttachmentItem[] {
  const attachments = record.values.attachments;
  if (!attachments) return [];

  if (section.slug === "design-dossiers") {
    return [
      { name: attachments, type: "Bộ hồ sơ chính", note: "Bản vẽ và thuyết minh thiết kế" },
      { name: `${record.code}-review-note.docx`, type: "Phiếu thẩm tra", note: "Ý kiến rà soát kỹ thuật nội bộ" }
    ];
  }

  if (section.slug === "progress-minutes") {
    return [
      { name: attachments, type: "Biên bản", note: "Biên bản theo dõi tiến độ có chữ ký tổ giám sát" },
      { name: `${record.code}-site-photo.zip`, type: "Ảnh hiện trường", note: "Ảnh minh chứng tiến độ từng hạng mục" }
    ];
  }

  if (section.slug === "settlement-dossiers") {
    return [
      { name: attachments, type: "Hồ sơ quyết toán", note: "Tập hồ sơ tổng hợp giá trị quyết toán" },
      { name: `${record.code}-debt-reconcile.xlsx`, type: "Đối chiếu công nợ", note: "Bảng đối chiếu thanh toán và công nợ" }
    ];
  }

  return [{ name: attachments, type: "Tài liệu đính kèm", note: "File hồ sơ gốc" }];
}
