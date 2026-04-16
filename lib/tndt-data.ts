export type TndtFieldType = "text" | "textarea" | "date" | "select" | "number";

export type TndtField = {
  key: string;
  label: string;
  type: TndtFieldType;
  required?: boolean;
  options?: string[];
  helper?: string;
};

export type TndtRecord = {
  id: string;
  code: string;
  title: string;
  subtitle?: string;
  partner: string;
  unit: string;
  date: string;
  status: string;
  values: Record<string, string>;
};

export type TndtSection = {
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
  signCode?: string;
  fields?: TndtField[];
  records: TndtRecord[];
  readOnly?: boolean;
};

export type TndtTimelineItem = {
  title: string;
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

  if (key === "progressPercent") {
    return String(Math.min(100, Number(value) + index * 3));
  }

  if (key === "attachments") {
    return `${value.replace(/\.\w+$/, "")}-${pad(index + 1, 2)}.pdf`;
  }

  return `${value} ${index + 1}`;
}

const requestStatuses = ["Mới", "Đã gửi yêu cầu", "Đã tiếp nhận", "Từ chối"] as const;
const quotationStatuses = ["Mới", "Đã gửi duyệt", "Đã duyệt", "KH chấp thuận", "KH không chấp thuận", "Từ chối"] as const;
const reviewStatuses = ["Mới", "Đã gửi kiểm tra", "Đã kiểm tra", "Đã gửi duyệt", "Đã duyệt", "Từ chối"] as const;
const signStatuses = ["Mới", "Đã gửi duyệt", "Đã duyệt", "Đã trình ký", "Đã ký số", "Từ chối"] as const;
const taskStatuses = ["Mới", "Đã giao việc", "Đang thực hiện", "Hoàn thành"] as const;
const contractStatuses = ["Mới", "Đã ký", "Đang thực hiện", "Thanh lý"] as const;
const debtStatuses = ["Chưa thanh toán", "Thanh toán một phần", "Đã thanh toán", "Quá hạn"] as const;

const seeds: TndtSection[] = [
  {
    slug: "customer-requests",
    codeRange: "C1-01 .. C1-05",
    title: "Yêu cầu khách hàng",
    shortTitle: "YC khách hàng",
    description: "Tiếp nhận yêu cầu khách hàng và luồng tiếp nhận hoặc từ chối yêu cầu.",
    breadcrumb: "Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Yêu cầu khách hàng",
    statusOptions: [...requestStatuses],
    createCode: "C1-02",
    editCode: "C1-03",
    detailCode: "C1-04",
    deleteCode: "C1-05",
    fields: [
      { key: "requestType", label: "Loại yêu cầu", type: "select", required: true, options: ["Thí nghiệm định kỳ", "Khảo sát hiện trường", "Xử lý sự cố", "Hiệu chỉnh thiết bị"] },
      { key: "customerName", label: "Khách hàng", type: "text", required: true },
      { key: "contact", label: "Người liên hệ", type: "text", required: true },
      { key: "receivedDate", label: "Ngày tiếp nhận", type: "date", required: true },
      { key: "requestContent", label: "Nội dung yêu cầu", type: "textarea", required: true },
      { key: "attachments", label: "File đính kèm", type: "textarea" }
    ],
    records: [
      {
        id: "request-1",
        code: "YCKH-001",
        title: "Yêu cầu thí nghiệm MBA khách hàng Hoàng Long",
        subtitle: "Kiểm tra cách điện và dầu cách điện trước vận hành",
        partner: "Công ty Hoàng Long",
        unit: "Phòng Kinh doanh TN",
        date: "2026-04-17",
        status: "Mới",
        values: {
          requestType: "Thí nghiệm định kỳ",
          customerName: "Công ty Hoàng Long",
          contact: "Nguyễn Văn Hòa",
          receivedDate: "2026-04-17",
          requestContent: "Đề nghị thực hiện thí nghiệm MBA 22kV trước đóng điện vận hành lại.",
          attachments: "yeu-cau-hoang-long.pdf"
        }
      }
    ]
  },
  {
    slug: "quotations",
    codeRange: "C1-06 .. C1-10",
    title: "Báo giá",
    shortTitle: "Báo giá",
    description: "Lập báo giá, gửi duyệt nội bộ và xác nhận khách hàng chấp thuận.",
    breadcrumb: "Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Báo giá",
    statusOptions: [...quotationStatuses],
    createCode: "C1-07",
    editCode: "C1-08",
    detailCode: "C1-09",
    deleteCode: "C1-10",
    approvalCode: "C1-09.2",
    fields: [
      { key: "linkedRequest", label: "Mã yêu cầu KH liên kết", type: "select", required: true, options: ["YCKH-001", "YCKH-002", "YCKH-003"] },
      { key: "quotationName", label: "Tên báo giá", type: "text", required: true },
      { key: "customerName", label: "Khách hàng", type: "text", required: true },
      { key: "quotationValue", label: "Giá trị báo giá (VNĐ)", type: "number", required: true },
      { key: "quotationDate", label: "Ngày lập", type: "date", required: true },
      { key: "attachments", label: "BB khảo sát / file đính kèm", type: "textarea" }
    ],
    records: [
      {
        id: "quotation-1",
        code: "BG-001",
        title: "Báo giá thí nghiệm MBA Hoàng Long",
        subtitle: "Kèm biên bản khảo sát hiện trường",
        partner: "Công ty Hoàng Long",
        unit: "Phòng Kinh doanh TN",
        date: "2026-04-18",
        status: "Đã gửi duyệt",
        values: {
          linkedRequest: "YCKH-001",
          quotationName: "Báo giá thí nghiệm MBA Hoàng Long",
          customerName: "Công ty Hoàng Long",
          quotationValue: "185000000",
          quotationDate: "2026-04-18",
          attachments: "bao-gia-hoang-long.pdf"
        }
      }
    ]
  },
  {
    slug: "internal-patth",
    codeRange: "C2-06 .. C2-10",
    title: "PATTH nội bộ",
    shortTitle: "PATTH nội bộ",
    description: "Lập phương án thực hiện nội bộ, kiểm tra và phê duyệt trước khi triển khai.",
    breadcrumb: "Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > PATTH nội bộ",
    statusOptions: [...reviewStatuses],
    createCode: "C2-07",
    editCode: "C2-08",
    detailCode: "C2-09",
    deleteCode: "C2-10",
    reviewCode: "C2-09",
    approvalCode: "C2-09",
    fields: [
      { key: "planName", label: "Tên phương án", type: "text", required: true },
      { key: "linkedQuotation", label: "Báo giá liên kết", type: "select", required: true, options: ["BG-001", "BG-002", "BG-003"] },
      { key: "executionUnit", label: "Đơn vị thực hiện", type: "select", required: true, options: ["Đội TN 1", "Đội TN 2", "Trung tâm TN"] },
      { key: "inspectionUnit", label: "Đơn vị kiểm tra", type: "select", options: ["Phòng Kỹ thuật", "Ban Chất lượng"] },
      { key: "planDate", label: "Ngày lập", type: "date", required: true },
      { key: "description", label: "Mô tả phương án", type: "textarea", required: true },
      { key: "attachments", label: "File đính kèm", type: "textarea" }
    ],
    records: [
      {
        id: "patth-1",
        code: "PATTH-001",
        title: "PATTH triển khai gói thí nghiệm Hoàng Long",
        subtitle: "Phân công đội TN và lịch khảo sát hiện trường",
        partner: "Công ty Hoàng Long",
        unit: "Đội TN 1",
        date: "2026-04-19",
        status: "Đã kiểm tra",
        values: {
          planName: "PATTH triển khai gói thí nghiệm Hoàng Long",
          linkedQuotation: "BG-001",
          executionUnit: "Đội TN 1",
          inspectionUnit: "Phòng Kỹ thuật",
          planDate: "2026-04-19",
          description: "Triển khai 2 tổ công tác, hoàn thành trong 3 ngày làm việc.",
          attachments: "patth-hoang-long.pdf"
        }
      }
    ]
  },
  {
    slug: "advance-requests",
    codeRange: "C3-01 .. C3-05.4",
    title: "Đề nghị tạm ứng",
    shortTitle: "Tạm ứng",
    description: "Lập đề nghị tạm ứng, phê duyệt và trình ký số theo hợp đồng MSM liên kết.",
    breadcrumb: "Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Đề nghị tạm ứng",
    statusOptions: [...signStatuses],
    createCode: "C3-02",
    editCode: "C3-03",
    detailCode: "C3-04",
    deleteCode: "C3-05",
    approvalCode: "C3-05.2",
    signCode: "C3-05.3",
    fields: [
      { key: "linkedContract", label: "Mã HĐ MSM liên kết", type: "select", required: true, options: ["HDTN-001", "HDTN-002", "HDTN-003"] },
      { key: "advanceName", label: "Tên đề nghị tạm ứng", type: "text", required: true },
      { key: "advanceValue", label: "Giá trị tạm ứng (VNĐ)", type: "number", required: true },
      { key: "requestDate", label: "Ngày lập", type: "date", required: true },
      { key: "reason", label: "Lý do tạm ứng", type: "textarea", required: true },
      { key: "attachments", label: "File đính kèm", type: "textarea" }
    ],
    records: [
      {
        id: "advance-1",
        code: "DNTU-001",
        title: "Đề nghị tạm ứng gói Hoàng Long",
        subtitle: "Tạm ứng chi phí nhân công và vật tư khảo sát",
        partner: "Công ty Hoàng Long",
        unit: "Phòng Kế toán",
        date: "2026-04-20",
        status: "Đã duyệt",
        values: {
          linkedContract: "HDTN-001",
          advanceName: "Đề nghị tạm ứng gói Hoàng Long",
          advanceValue: "80000000",
          requestDate: "2026-04-20",
          reason: "Tạm ứng cho chi phí triển khai hiện trường và vật tư tiêu hao ban đầu.",
          attachments: "de-nghi-tam-ung-hoang-long.pdf"
        }
      }
    ]
  },
  {
    slug: "expense-proposals",
    codeRange: "C3-06 .. C3-10",
    title: "Chi phí / Chủ trương mua ngoài",
    shortTitle: "Chi phí MN",
    description: "Quản lý tờ trình chi phí hoặc chủ trương mua ngoài gắn với hợp đồng TN doanh thu.",
    breadcrumb: "Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Chi phí / chủ trương mua ngoài",
    statusOptions: ["Mới", "Đã gửi duyệt", "Đã duyệt", "Từ chối"],
    createCode: "C3-07",
    editCode: "C3-08",
    detailCode: "C3-09",
    deleteCode: "C3-10",
    approvalCode: "C3-10",
    fields: [
      { key: "linkedContract", label: "Mã HĐ MSM liên kết", type: "select", required: true, options: ["HDTN-001", "HDTN-002", "HDTN-003"] },
      { key: "proposalName", label: "Tên tờ trình chi phí", type: "text", required: true },
      { key: "expenseValue", label: "Giá trị đề xuất (VNĐ)", type: "number", required: true },
      { key: "proposalDate", label: "Ngày lập", type: "date", required: true },
      { key: "notes", label: "Mô tả nội dung", type: "textarea", required: true },
      { key: "attachments", label: "File đính kèm", type: "textarea" }
    ],
    records: [
      {
        id: "expense-1",
        code: "TTCP-001",
        title: "Tờ trình chi phí thuê xe chuyên dụng",
        subtitle: "Phục vụ vận chuyển thiết bị đo hiện trường",
        partner: "Công ty Hoàng Long",
        unit: "Phòng Điều phối",
        date: "2026-04-21",
        status: "Mới",
        values: {
          linkedContract: "HDTN-001",
          proposalName: "Tờ trình chi phí thuê xe chuyên dụng",
          expenseValue: "25000000",
          proposalDate: "2026-04-21",
          notes: "Thuê xe cẩu và xe tải nhỏ để vận chuyển thiết bị thí nghiệm.",
          attachments: "to-trinh-chi-phi.pdf"
        }
      }
    ]
  },
  {
    slug: "tasks",
    codeRange: "C3-12 .. C3-15",
    title: "Giao việc",
    shortTitle: "Giao việc",
    description: "Giao việc cho đội thực hiện, theo dõi tiến độ bắt đầu và hoàn thành công việc.",
    breadcrumb: "Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Giao việc",
    statusOptions: [...taskStatuses],
    createCode: "C3-12",
    editCode: "C3-13",
    detailCode: "C3-14",
    deleteCode: "C3-15",
    fields: [
      { key: "linkedContract", label: "HĐ / giao việc liên kết", type: "select", required: true, options: ["HDTN-001", "HDTN-002", "HDTN-003"] },
      { key: "taskName", label: "Tên giao việc", type: "text", required: true },
      { key: "assignedUnit", label: "Đơn vị thực hiện", type: "select", required: true, options: ["Đội TN 1", "Đội TN 2", "Đội TN 3"] },
      { key: "startDate", label: "Ngày bắt đầu", type: "date", required: true },
      { key: "dueDate", label: "Hạn hoàn thành", type: "date", required: true },
      { key: "scope", label: "Phạm vi công việc", type: "textarea", required: true }
    ],
    records: [
      {
        id: "task-1",
        code: "GV-001",
        title: "Giao việc thí nghiệm hiện trường Hoàng Long",
        subtitle: "Khảo sát, đo đạc và lập BBTN",
        partner: "Công ty Hoàng Long",
        unit: "Đội TN 1",
        date: "2026-04-22",
        status: "Đã giao việc",
        values: {
          linkedContract: "HDTN-001",
          taskName: "Giao việc thí nghiệm hiện trường Hoàng Long",
          assignedUnit: "Đội TN 1",
          startDate: "2026-04-22",
          dueDate: "2026-04-25",
          scope: "Triển khai đo cách điện, lấy mẫu dầu và lập biên bản thí nghiệm hiện trường."
        }
      }
    ]
  },
  {
    slug: "progress-management",
    codeRange: "C3-16 .. C3-17.5",
    title: "Quản lý tiến độ",
    shortTitle: "Tiến độ",
    description: "Theo dõi % hoàn thành hợp đồng, cập nhật tiến độ và quản lý hồ sơ minh chứng.",
    breadcrumb: "Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Quản lý tiến độ",
    statusOptions: ["Mới", "Đang thực hiện", "Hoàn thành", "Từ chối"],
    createCode: "C3-17",
    editCode: "C3-17.1",
    detailCode: "C3-17.2",
    deleteCode: "C3-17.3",
    approvalCode: "C3-17.4",
    reviewCode: "C3-17.5",
    fields: [
      { key: "linkedContract", label: "Hợp đồng liên kết", type: "select", required: true, options: ["HDTN-001", "HDTN-002", "HDTN-003"] },
      { key: "progressPercent", label: "% Hoàn thành", type: "number", required: true },
      { key: "updatedDate", label: "Ngày cập nhật", type: "date", required: true },
      { key: "progressNote", label: "Mô tả tiến độ", type: "textarea" },
      { key: "attachments", label: "Văn bản đính kèm", type: "textarea" }
    ],
    records: [
      {
        id: "progress-1",
        code: "TD-001",
        title: "Tiến độ hợp đồng Hoàng Long",
        subtitle: "Cập nhật khối lượng hiện trường đợt 1",
        partner: "Công ty Hoàng Long",
        unit: "Đội TN 1",
        date: "2026-04-23",
        status: "Đang thực hiện",
        values: {
          linkedContract: "HDTN-001",
          progressPercent: "45",
          updatedDate: "2026-04-23",
          progressNote: "Đã hoàn thành kiểm tra tại 2/4 vị trí, chờ xác nhận lịch cắt điện cho đợt tiếp theo.",
          attachments: "tien-do-hoang-long.pdf"
        }
      }
    ]
  },
  {
    slug: "settlement-dossiers",
    codeRange: "C3-32 .. C3-35.3",
    title: "Hồ sơ quyết toán",
    shortTitle: "HS quyết toán",
    description: "Lập, thẩm tra, phê duyệt hồ sơ quyết toán TN doanh thu.",
    breadcrumb: "Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Hồ sơ quyết toán",
    statusOptions: ["Mới", "Đã gửi thẩm tra", "Đã thẩm tra", "Đã gửi duyệt", "Đã duyệt", "Từ chối"],
    createCode: "C3-33",
    editCode: "C3-34",
    detailCode: "C3-35",
    deleteCode: "C3-35.1",
    approvalCode: "C3-35.2",
    reviewCode: "C3-35.3",
    fields: [
      { key: "linkedContract", label: "Hợp đồng liên quan", type: "select", required: true, options: ["HDTN-001", "HDTN-002", "HDTN-003"] },
      { key: "settlementValue", label: "Tổng giá trị quyết toán (VNĐ)", type: "number", required: true },
      { key: "createdDate", label: "Ngày lập", type: "date", required: true },
      { key: "notes", label: "Ghi chú", type: "textarea" },
      { key: "attachments", label: "Văn bản đính kèm", type: "textarea" }
    ],
    records: [
      {
        id: "settlement-1",
        code: "HSQT-001",
        title: "Hồ sơ quyết toán hợp đồng Hoàng Long",
        subtitle: "Tổng hợp chi phí, nghiệm thu và thanh lý hợp đồng",
        partner: "Công ty Hoàng Long",
        unit: "Phòng Kế toán",
        date: "2026-04-24",
        status: "Đã thẩm tra",
        values: {
          linkedContract: "HDTN-001",
          settlementValue: "178000000",
          createdDate: "2026-04-24",
          notes: "Đã đối chiếu công nợ, chờ phê duyệt chính thức.",
          attachments: "ho-so-quyet-toan-hoang-long.pdf"
        }
      }
    ]
  },
  {
    slug: "contract-management",
    codeRange: "C3-40 .. C3-41",
    title: "Quản lý hợp đồng",
    shortTitle: "QL hợp đồng",
    description: "Danh sách và chi tiết hợp đồng TN doanh thu.",
    breadcrumb: "Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Quản lý hợp đồng",
    statusOptions: [...contractStatuses],
    detailCode: "C3-41",
    readOnly: true,
    records: [
      {
        id: "contract-1",
        code: "HDTN-001",
        title: "Hợp đồng TN MBA Hoàng Long",
        subtitle: "Khách hàng: Công ty Hoàng Long",
        partner: "Công ty Hoàng Long",
        unit: "Phòng Kinh doanh TN",
        date: "2026-04-15",
        status: "Đang thực hiện",
        values: {
          contractName: "Hợp đồng TN MBA Hoàng Long",
          customerName: "Công ty Hoàng Long",
          contractValue: "185000000",
          signDate: "2026-04-15",
          expireDate: "2026-05-30",
          attachments: "hop-dong-hoang-long.pdf"
        }
      }
    ]
  },
  {
    slug: "debts",
    codeRange: "C3-49",
    title: "Công nợ",
    shortTitle: "Công nợ",
    description: "Danh sách công nợ tổng hợp theo hợp đồng và hồ sơ thanh toán.",
    breadcrumb: "Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Công nợ",
    statusOptions: [...debtStatuses],
    detailCode: "C3-49",
    readOnly: true,
    records: [
      {
        id: "debt-1",
        code: "CN-001",
        title: "Công nợ hợp đồng Hoàng Long",
        subtitle: "Theo dõi công nợ đến hạn tháng 5",
        partner: "Công ty Hoàng Long",
        unit: "Phòng Kế toán",
        date: "2026-05-10",
        status: "Thanh toán một phần",
        values: {
          contractName: "Hợp đồng TN MBA Hoàng Long",
          customerName: "Công ty Hoàng Long",
          dueDate: "2026-05-10",
          remainingValue: "65000000",
          debtStatus: "Thanh toán một phần"
        }
      }
    ]
  }
];

export const tndtSections: TndtSection[] = seeds.map((section) => ({
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
      partner: `${seed.partner} ${index + 1}`,
      unit: index % 2 === 0 ? seed.unit : `${seed.unit} / nhóm ${index + 1}`,
      date: nextDate,
      status: nextStatus,
      values: nextValues
    };
  })
}));

export function getTndtSection(slug: string) {
  return tndtSections.find((section) => section.slug === slug);
}

export function getTndtRecord(sectionSlug: string, id: string) {
  return getTndtSection(sectionSlug)?.records.find((record) => record.id === id);
}

export function getTndtFieldLabel(section: TndtSection, key: string) {
  return section.fields?.find((field) => field.key === key)?.label ?? key;
}

export function getTndtAvailableActions(section: TndtSection, status: string) {
  if (section.readOnly) return [];

  if (section.slug === "customer-requests") {
    if (status === "Mới") return ["Gửi yêu cầu"];
    if (status === "Đã gửi yêu cầu") return ["Tiếp nhận", "Từ chối"];
    return [];
  }

  if (section.slug === "quotations") {
    if (status === "Mới") return ["Gửi duyệt"];
    if (status === "Đã gửi duyệt") return ["Phê duyệt", "Từ chối"];
    if (status === "Đã duyệt") return ["XN KH chấp thuận", "XN KH không chấp thuận"];
    return [];
  }

  if (["internal-patth", "settlement-dossiers"].includes(section.slug)) {
    if (status === "Mới") return ["Gửi kiểm tra"];
    if (status === "Đã kiểm tra" || status === "Đã thẩm tra") return ["Gửi duyệt"];
    if (status === "Đã gửi duyệt") return ["Phê duyệt", "Từ chối"];
    return [];
  }

  if (section.slug === "advance-requests") {
    if (status === "Mới") return ["Gửi duyệt"];
    if (status === "Đã duyệt") return ["Trình ký số", "Ký số"];
    if (status === "Đã gửi duyệt") return ["Phê duyệt", "Từ chối"];
    return [];
  }

  if (section.slug === "expense-proposals") {
    if (status === "Mới") return ["Gửi duyệt"];
    if (status === "Đã gửi duyệt") return ["Phê duyệt", "Từ chối"];
    return [];
  }

  if (section.slug === "tasks") {
    if (status === "Mới") return ["Giao việc"];
    if (status === "Đã giao việc") return ["Bắt đầu thực hiện"];
    if (status === "Đang thực hiện") return ["Hoàn thành"];
    return [];
  }

  if (section.slug === "progress-management") {
    if (status === "Mới") return ["Gửi thẩm tra"];
    if (status === "Đang thực hiện") return ["Hoàn thành", "Từ chối"];
    return [];
  }

  return [];
}

export function getTndtNextStatus(section: TndtSection, currentStatus: string, action: string) {
  if (action === "Gửi yêu cầu") return "Đã gửi yêu cầu";
  if (action === "Tiếp nhận") return "Đã tiếp nhận";
  if (action === "Gửi kiểm tra") return section.slug === "settlement-dossiers" ? "Đã gửi thẩm tra" : "Đã gửi kiểm tra";
  if (action === "Gửi duyệt") return "Đã gửi duyệt";
  if (action === "Phê duyệt") return "Đã duyệt";
  if (action === "Trình ký số") return "Đã trình ký";
  if (action === "Ký số") return "Đã ký số";
  if (action === "XN KH chấp thuận") return "KH chấp thuận";
  if (action === "XN KH không chấp thuận") return "KH không chấp thuận";
  if (action === "Giao việc") return "Đã giao việc";
  if (action === "Bắt đầu thực hiện") return "Đang thực hiện";
  if (action === "Hoàn thành") return "Hoàn thành";
  if (action === "Gửi thẩm tra") return "Đang thực hiện";
  if (action === "Từ chối") return "Từ chối";
  return currentStatus;
}

export function getTndtActionCode(section: TndtSection, action: string) {
  if (action === "Gửi duyệt") return section.approvalCode ?? section.detailCode ?? section.codeRange;
  if (action === "Gửi kiểm tra" || action === "Gửi thẩm tra") return section.reviewCode ?? section.detailCode ?? section.codeRange;
  if (action === "Trình ký số" || action === "Ký số") return section.signCode ?? section.detailCode ?? section.codeRange;
  return section.detailCode ?? section.codeRange;
}

export function getTndtDeleteCode(section: TndtSection) {
  return section.deleteCode ?? section.codeRange;
}

export function getTndtTimeline(section: TndtSection, record: TndtRecord): TndtTimelineItem[] {
  const items: TndtTimelineItem[] = [
    {
      title: "Khởi tạo hồ sơ",
      note: `${record.code} được tạo trong nhóm ${section.shortTitle.toLowerCase()}.`
    }
  ];

  if (record.status !== "Mới") {
    items.push({
      title: "Cập nhật trạng thái",
      note: `Hồ sơ hiện ở trạng thái "${record.status}".`
    });
  }

  if (record.values.attachments) {
    items.push({
      title: "Bổ sung tài liệu",
      note: `Có file đính kèm: ${record.values.attachments}.`
    });
  }

  if (section.slug === "progress-management") {
    items.push({
      title: "Ghi nhận tiến độ",
      note: `Tiến độ hiện tại đạt ${record.values.progressPercent ?? "0"}%.`
    });
  }

  return items;
}
