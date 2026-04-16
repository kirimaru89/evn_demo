export type CbmFieldType = "text" | "textarea" | "date" | "select";

export type CbmField = {
  key: string;
  label: string;
  type: CbmFieldType;
  required?: boolean;
  options?: string[];
  helper?: string;
};

export type CbmRecord = {
  id: string;
  code: string;
  title: string;
  subtitle?: string;
  assetName: string;
  assetCode: string;
  unit: string;
  executionDate: string;
  status: string;
  values: Record<string, string>;
};

export type CbmSection = {
  slug: string;
  codeRange: string;
  title: string;
  shortTitle: string;
  description: string;
  breadcrumb: string;
  statusOptions: string[];
  createCode: string;
  editCode: string;
  detailCode: string;
  deleteCode: string;
  fields: CbmField[];
  records: CbmRecord[];
};

export type CbmTimelineItem = {
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

const planStatuses = ["Mới", "Đã gửi kế hoạch", "Đã kiểm tra", "Đã gửi duyệt", "Đã duyệt", "Từ chối"] as const;
const reportStatuses = ["Mới", "Đã gửi kiểm tra", "Đã kiểm tra", "Đã gửi duyệt", "Đã duyệt", "Từ chối"] as const;

const planSeeds: CbmSection[] = [
  {
    slug: "plans",
    codeRange: "CBM-01 .. CBM-05",
    title: "Kế hoạch CBM",
    shortTitle: "Kế hoạch CBM",
    description: "Lập, theo dõi, kiểm tra và phê duyệt kế hoạch CBM.",
    breadcrumb: "Home > Phân hệ THÍ NGHIỆM CBM > Kế hoạch CBM",
    statusOptions: [...planStatuses],
    createCode: "CBM-02",
    editCode: "CBM-03",
    detailCode: "CBM-04",
    deleteCode: "CBM-05",
    fields: [
      { key: "planName", label: "Tên kế hoạch", type: "text", required: true },
      { key: "planInfo", label: "Thông tin kế hoạch", type: "textarea" },
      { key: "assetName", label: "Tên thiết bị", type: "text", required: true },
      { key: "assetCode", label: "Mã thiết bị", type: "text", required: true },
      { key: "serialNumber", label: "Số seri", type: "text" },
      { key: "managementUnit", label: "Đơn vị quản lý", type: "select", required: true, options: ["PC Hà Nội", "PC Hải Dương", "PC Quảng Ninh"] },
      { key: "location", label: "Vị trí lắp đặt", type: "text" },
      { key: "specs", label: "Thông số kỹ thuật", type: "textarea" },
      { key: "executionUnit", label: "Đơn vị thực hiện", type: "select", required: true, options: ["Đội CBM 1", "Đội CBM 2", "Trung tâm thí nghiệm"] },
      { key: "executionDate", label: "Thời gian thực hiện", type: "date", required: true },
      { key: "attachments", label: "File đính kèm", type: "textarea" },
      { key: "notes", label: "Ghi chú", type: "textarea" }
    ],
    records: [
      {
        id: "cbm-plan-1",
        code: "KHCBM-001",
        title: "Kế hoạch CBM trạm 110kV Gia Lâm",
        subtitle: "Kiểm tra khí hòa tan, nhiệt độ và cách điện",
        assetName: "MBA T1 - Gia Lâm",
        assetCode: "MBA-GL-001",
        unit: "Đội CBM 1",
        executionDate: "2026-04-18",
        status: "Mới",
        values: {
          planName: "Kế hoạch CBM trạm 110kV Gia Lâm",
          planInfo: "Triển khai thí nghiệm định kỳ và đánh giá xu hướng suy giảm cách điện.",
          assetName: "MBA T1 - Gia Lâm",
          assetCode: "MBA-GL-001",
          serialNumber: "SN-GL-1188",
          managementUnit: "PC Hà Nội",
          location: "Trạm 110kV Gia Lâm",
          specs: "110kV / 40MVA",
          executionUnit: "Đội CBM 1",
          executionDate: "2026-04-18",
          attachments: "ke-hoach-cbm-gia-lam.pdf",
          notes: "Ưu tiên lấy mẫu dầu trước 10h sáng."
        }
      }
    ]
  },
  {
    slug: "reports",
    codeRange: "CBM-06 .. CBM-10",
    title: "Báo cáo CBM",
    shortTitle: "Báo cáo CBM",
    description: "Lập, kiểm tra, phê duyệt báo cáo CBM sau thí nghiệm.",
    breadcrumb: "Home > Phân hệ THÍ NGHIỆM CBM > Báo cáo CBM",
    statusOptions: [...reportStatuses],
    createCode: "CBM-07",
    editCode: "CBM-08",
    detailCode: "CBM-09",
    deleteCode: "CBM-10",
    fields: [
      { key: "reportName", label: "Tên báo cáo", type: "text", required: true },
      { key: "reportType", label: "Loại biên bản", type: "select", required: true, options: ["DGA", "PD", "FRA", "Nhiệt độ dầu"] },
      { key: "assetName", label: "Tên thiết bị", type: "text", required: true },
      { key: "assetCode", label: "Mã thiết bị", type: "text", required: true },
      { key: "managementUnit", label: "Đơn vị quản lý", type: "select", required: true, options: ["PC Hà Nội", "PC Hải Dương", "PC Quảng Ninh"] },
      { key: "executionUnit", label: "Đơn vị thực hiện", type: "select", required: true, options: ["Đội CBM 1", "Đội CBM 2", "Trung tâm thí nghiệm"] },
      { key: "location", label: "Vị trí lắp đặt", type: "text" },
      { key: "executionDate", label: "Ngày thực hiện", type: "date", required: true },
      { key: "testResult", label: "Kết quả thí nghiệm", type: "textarea", required: true },
      { key: "assessment", label: "Kết quả đánh giá", type: "textarea" },
      { key: "attachments", label: "File đính kèm", type: "textarea" }
    ],
    records: [
      {
        id: "cbm-report-1",
        code: "BCCBM-001",
        title: "Báo cáo DGA trạm 110kV Gia Lâm",
        subtitle: "Biên bản khí hòa tan trong dầu",
        assetName: "MBA T1 - Gia Lâm",
        assetCode: "MBA-GL-001",
        unit: "Trung tâm thí nghiệm",
        executionDate: "2026-04-20",
        status: "Mới",
        values: {
          reportName: "Báo cáo DGA trạm 110kV Gia Lâm",
          reportType: "DGA",
          assetName: "MBA T1 - Gia Lâm",
          assetCode: "MBA-GL-001",
          managementUnit: "PC Hà Nội",
          executionUnit: "Trung tâm thí nghiệm",
          location: "Trạm 110kV Gia Lâm",
          executionDate: "2026-04-20",
          testResult: "Hàm lượng H2 và C2H2 tăng nhẹ so với kỳ trước.",
          assessment: "Khuyến nghị theo dõi tiếp trong chu kỳ 30 ngày.",
          attachments: "bao-cao-dga-gia-lam.pdf"
        }
      }
    ]
  }
];

export const cbmSections: CbmSection[] = planSeeds.map((section) => ({
  ...section,
  records: Array.from({ length: 24 }, (_, index) => {
    const seed = section.records[index % section.records.length];
    const nextStatus = cycleValue(section.statusOptions, index);
    const nextDate = shiftDate(seed.executionDate, index);
    const nextValues = Object.fromEntries(
      Object.entries(seed.values).map(([key, value]) => {
        if (value.match(/^\d{4}-\d{2}-\d{2}$/)) {
          return [key, shiftDate(value, index)];
        }
        return [key, `${value} ${index + 1}`];
      })
    ) as Record<string, string>;

    return {
      ...seed,
      id: `${seed.id}-${index + 1}`,
      code: `${seed.code}-${pad(index + 1, 2)}`,
      title: `${seed.title} ${index + 1}`,
      subtitle: seed.subtitle ? `${seed.subtitle} • kỳ ${index + 1}` : undefined,
      assetName: `${seed.assetName} ${index + 1}`,
      assetCode: `${seed.assetCode}-${pad(index + 1, 2)}`,
      unit: index % 2 === 0 ? seed.unit : `${seed.unit} / nhóm ${index + 1}`,
      executionDate: nextDate,
      status: nextStatus,
      values: nextValues
    };
  })
}));

export function getCbmSection(slug: string) {
  return cbmSections.find((section) => section.slug === slug);
}

export function getCbmRecord(sectionSlug: string, id: string) {
  return getCbmSection(sectionSlug)?.records.find((record) => record.id === id);
}

export function getCbmAvailableActions(section: CbmSection, status: string) {
  if (section.slug === "plans") {
    if (status === "Mới") return ["Gửi kiểm tra"];
    if (status === "Đã kiểm tra") return ["Gửi duyệt"];
    if (status === "Đã gửi duyệt") return ["PC duyệt", "PC từ chối"];
    return [];
  }

  if (section.slug === "reports") {
    if (status === "Mới") return ["Gửi kiểm tra"];
    if (status === "Đã kiểm tra") return ["Gửi duyệt"];
    if (status === "Đã gửi duyệt") return ["PC duyệt", "PC từ chối", "Ký số"];
    return [];
  }

  return [];
}

export function getCbmNextStatus(section: CbmSection, currentStatus: string, action: string) {
  if (action === "Gửi kiểm tra") {
    return section.slug === "plans" ? "Đã gửi kế hoạch" : "Đã gửi kiểm tra";
  }

  if (action === "Gửi duyệt") return "Đã gửi duyệt";
  if (action === "PC duyệt") return "Đã duyệt";
  if (action === "PC từ chối") return "Từ chối";
  if (action === "Ký số") return "Đã duyệt";

  return currentStatus;
}

export function getCbmTimeline(section: CbmSection, record: CbmRecord): CbmTimelineItem[] {
  const items: CbmTimelineItem[] = [
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
      title: "Đính kèm tài liệu",
      note: `Có file đính kèm: ${record.values.attachments}.`
    });
  }

  if (record.status === "Đã duyệt") {
    items.push({
      title: "Phê duyệt hoàn tất",
      note: "Hồ sơ CBM đã được duyệt hoàn tất."
    });
  }

  if (record.status === "Từ chối") {
    items.push({
      title: "Từ chối phê duyệt",
      note: "Cần cập nhật lại nội dung trước khi gửi duyệt lại."
    });
  }

  return items;
}
