export type MbaFieldType = "text" | "textarea" | "date" | "select" | "number";

export type MbaField = {
  key: string;
  label: string;
  type: MbaFieldType;
  required?: boolean;
  options?: string[];
  helper?: string;
};

export type MbaRecord = {
  id: string;
  code: string;
  title: string;
  subtitle?: string;
  unit: string;
  date: string;
  status: string;
  values: Record<string, string>;
};

export type MbaSection = {
  slug: string;
  codeRange: string;
  title: string;
  shortTitle: string;
  description: string;
  breadcrumb: string;
  statusOptions: string[];
  actionLabels?: string[];
  createCode: string;
  editCode: string;
  detailCode: string;
  deletePopupCode?: string;
  fields: MbaField[];
  records: MbaRecord[];
};

export type MbaTimelineItem = {
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

const requestTypes = [
  "Sửa chữa theo nguồn vốn SCL",
  "Sửa chữa theo nguồn vốn SXKD",
  "Thăm khám rút ruột và phân loại thí nghiệm"
];

const genericStatuses = ["Mới", "Đã gửi duyệt", "Đã kiểm tra", "Đã duyệt", "Từ chối"];

const mbaSectionSeeds: MbaSection[] = [
  {
    slug: "requests",
    codeRange: "MBA-01 .. MBA-05",
    title: "Yêu cầu sửa chữa",
    shortTitle: "Yêu cầu",
    description: "Quản lý yêu cầu sửa chữa máy biến áp và phân công công việc.",
    breadcrumb: "Home > Phân hệ MBA > Yêu cầu sửa chữa",
    statusOptions: ["Mới", "Đã tiếp nhận"],
    actionLabels: ["Gửi yêu cầu"],
    createCode: "MBA-02",
    editCode: "MBA-03",
    detailCode: "MBA-04",
    deletePopupCode: "MBA-05",
    fields: [
      { key: "requestDate", label: "Ngày yêu cầu", type: "date", required: true },
      { key: "assignedUnit", label: "Đơn vị được giao nhiệm vụ", type: "select", required: true, options: ["Xưởng MBA Bắc Ninh", "Xưởng MBA Hải Phòng", "Phòng Kỹ thuật"] },
      { key: "requestUnit", label: "Đơn vị yêu cầu", type: "select", required: true, options: ["PC Hà Nội", "PC Hải Dương", "PC Quảng Ninh"] },
      { key: "requestType", label: "Loại yêu cầu", type: "select", required: true, options: requestTypes },
      { key: "damageDescription", label: "Mô tả hư hỏng", type: "textarea", helper: "Mô tả chi tiết tình trạng hư hỏng, tối đa 255 ký tự." },
      { key: "attachments", label: "File đính kèm", type: "text", helper: "Demo UI: nhập tên file hoặc mô tả tệp." }
    ],
    records: [
      {
        id: "req-1",
        code: "MBA-YC-001",
        title: "Rò rỉ dầu tại sứ xuyên cao áp",
        subtitle: "Sửa chữa theo nguồn vốn SXKD",
        unit: "PC Hà Nội -> Xưởng MBA Bắc Ninh",
        date: "2026-04-10",
        status: "Mới",
        values: {
          requestDate: "2026-04-10",
          assignedUnit: "Xưởng MBA Bắc Ninh",
          requestUnit: "PC Hà Nội",
          requestType: "Sửa chữa theo nguồn vốn SXKD",
          damageDescription: "MBA T2 có hiện tượng rò rỉ dầu tại đầu sứ xuyên cao áp, cần kiểm tra và xử lý gấp.",
          attachments: "anh-ro-ri-dau.pdf"
        }
      },
      {
        id: "req-2",
        code: "MBA-YC-002",
        title: "Kiểm tra tiếng ồn bất thường",
        subtitle: "Thăm khám rút ruột và phân loại thí nghiệm",
        unit: "PC Quảng Ninh -> Phòng Kỹ thuật",
        date: "2026-04-12",
        status: "Đã tiếp nhận",
        values: {
          requestDate: "2026-04-12",
          assignedUnit: "Phòng Kỹ thuật",
          requestUnit: "PC Quảng Ninh",
          requestType: "Thăm khám rút ruột và phân loại thí nghiệm",
          damageDescription: "Phát hiện tiếng ồn tăng cao khi mang tải lớn, cần đánh giá tình trạng nội bộ MBA.",
          attachments: "video-hien-truong.mp4"
        }
      }
    ]
  },
  {
    slug: "pakt-dt",
    codeRange: "MBA-06 .. MBA-10",
    title: "Phương án kiểm tra - Dự toán",
    shortTitle: "PAKT-ĐT",
    description: "Lập, kiểm tra, gửi duyệt và phê duyệt phương án kiểm tra - dự toán.",
    breadcrumb: "Home > Phân hệ MBA > Phương án kiểm tra-Dự toán",
    statusOptions: ["Mới", "Đã tiếp nhận", "Đã kiểm tra", "Đã gửi duyệt", "Đã duyệt", "Từ chối"],
    actionLabels: ["Gửi kiểm tra", "Xác nhận kiểm tra", "Gửi duyệt", "PC duyệt", "PC từ chối"],
    createCode: "MBA-07",
    editCode: "MBA-08",
    detailCode: "MBA-09",
    deletePopupCode: "MBA-10",
    fields: [
      { key: "lotName", label: "Tên lô máy biến áp", type: "text", required: true },
      { key: "quantity", label: "Số lượng máy biến áp", type: "number", required: true },
      { key: "executionUnit", label: "Đơn vị thực hiện", type: "select", required: true, options: ["Xưởng MBA Bắc Ninh", "Xưởng MBA Hải Phòng"] },
      { key: "planDate", label: "Ngày lập PAKT-DT", type: "date", required: true },
      { key: "paktInspector", label: "Người kiểm tra PAKT", type: "text", required: true },
      { key: "paktInspectionDate", label: "Ngày hoàn thành kiểm tra PAKT", type: "date" },
      { key: "dtInspector", label: "Người kiểm tra DT", type: "text", required: true },
      { key: "dtInspectionDate", label: "Ngày hoàn thành kiểm tra DT", type: "date" },
      { key: "paktInfo", label: "Thông tin PAKT", type: "textarea" },
      { key: "dtInfo", label: "Thông tin DT", type: "textarea" }
    ],
    records: [
      {
        id: "pakt-1",
        code: "PAKT-001",
        title: "Lô MBA 110kV Đông Anh",
        subtitle: "2 MBA - kiểm tra và dự toán vật tư",
        unit: "Xưởng MBA Bắc Ninh",
        date: "2026-04-13",
        status: "Đã kiểm tra",
        values: {
          lotName: "Lô MBA 110kV Đông Anh",
          quantity: "2",
          executionUnit: "Xưởng MBA Bắc Ninh",
          planDate: "2026-04-13",
          paktInspector: "Đỗ Mạnh Cường",
          paktInspectionDate: "2026-04-14",
          dtInspector: "Trần Thị Dung",
          dtInspectionDate: "2026-04-15",
          paktInfo: "Kiểm tra hệ thống làm mát, đầu sứ xuyên, van xả và hiện trạng dầu cách điện.",
          dtInfo: "Dự toán thay gioăng, dầu bù và nhân công trong 3 ngày."
        }
      }
    ]
  },
  {
    slug: "handover-minutes",
    codeRange: "MBA-11 .. MBA-15",
    title: "Biên bản bàn giao",
    shortTitle: "Bàn giao",
    description: "Lập biên bản bàn giao và báo cáo tình trạng hư hỏng.",
    breadcrumb: "Home > Phân hệ MBA > Biên bản bàn giao",
    statusOptions: genericStatuses,
    actionLabels: ["Gửi kiểm tra", "Xác nhận kiểm tra", "Gửi duyệt", "PC duyệt", "PC từ chối"],
    createCode: "MBA-12",
    editCode: "MBA-13",
    detailCode: "MBA-14",
    deletePopupCode: "MBA-15",
    fields: [
      { key: "lotName", label: "Tên lô MBA", type: "text", required: true },
      { key: "equipmentInfo", label: "Thông tin thiết bị", type: "textarea", required: true },
      { key: "equipmentState", label: "Tình trạng thiết bị", type: "textarea" },
      { key: "equipmentQuantity", label: "Số lượng thiết bị", type: "number", required: true },
      { key: "handoverBy", label: "Người bàn giao", type: "text", required: true },
      { key: "receivedBy", label: "Người nhận bàn giao", type: "text", required: true },
      { key: "handoverAt", label: "Thời gian bàn giao", type: "date", required: true }
    ],
    records: [
      {
        id: "handover-1",
        code: "BBBG-001",
        title: "Bàn giao lô MBA trạm 110kV Gia Lâm",
        subtitle: "Biên bản tiếp nhận thiết bị phục vụ sửa chữa",
        unit: "PC Hà Nội / Xưởng MBA Bắc Ninh",
        date: "2026-04-11",
        status: "Mới",
        values: {
          lotName: "Lô MBA trạm 110kV Gia Lâm",
          equipmentInfo: "01 MBA 110kV công suất 40MVA, kèm phụ kiện tháo rời.",
          equipmentState: "Có rò dầu nhẹ, sơn vỏ bong tróc cục bộ.",
          equipmentQuantity: "1",
          handoverBy: "Nguyễn Trung Hiếu",
          receivedBy: "Phạm Văn Lâm",
          handoverAt: "2026-04-11"
        }
      }
    ]
  },
  {
    slug: "patctc",
    codeRange: "MBA-16 .. MBA-20",
    title: "PATCTC",
    shortTitle: "PATCTC",
    description: "Phương án tổ chức thi công và biện pháp an toàn.",
    breadcrumb: "Home > Phân hệ MBA > PATCTC",
    statusOptions: genericStatuses,
    actionLabels: ["Gửi kiểm tra", "Xác nhận kiểm tra", "Gửi duyệt", "PC duyệt", "PC từ chối"],
    createCode: "MBA-17",
    editCode: "MBA-18",
    detailCode: "MBA-19",
    deletePopupCode: "MBA-20",
    fields: [
      { key: "lotName", label: "Lô MBA", type: "text", required: true },
      { key: "quantity", label: "Số lượng MBA", type: "number", required: true },
      { key: "executionUnit", label: "Đơn vị thực hiện", type: "select", required: true, options: ["Xưởng MBA Bắc Ninh", "Xưởng MBA Hải Phòng"] },
      { key: "legalDocs", label: "Hồ sơ pháp lý", type: "textarea" },
      { key: "workforce", label: "Nhân lực thực hiện", type: "textarea", required: true },
      { key: "technicalProcess", label: "Quy trình kỹ thuật", type: "textarea", required: true },
      { key: "safetyPlan", label: "Biện pháp an toàn", type: "textarea", required: true },
      { key: "executionDate", label: "Ngày thực hiện", type: "date", required: true },
      { key: "planDate", label: "Ngày lập phương án", type: "date", required: true }
    ],
    records: [
      {
        id: "patctc-1",
        code: "PATCTC-001",
        title: "PATCTC lô MBA Đông Anh",
        subtitle: "Tổ chức nhân lực, quy trình kỹ thuật và biện pháp an toàn",
        unit: "Xưởng MBA Bắc Ninh",
        date: "2026-04-15",
        status: "Đã gửi duyệt",
        values: {
          lotName: "Lô MBA Đông Anh",
          quantity: "2",
          executionUnit: "Xưởng MBA Bắc Ninh",
          legalDocs: "Quyết định giao nhiệm vụ, hồ sơ công trình, biên bản khảo sát hiện trạng.",
          workforce: "01 chỉ huy trưởng, 02 kỹ sư điện, 04 công nhân cơ khí.",
          technicalProcess: "Tháo phụ kiện, kiểm tra lõi thép, thay gioăng, thí nghiệm sau sửa chữa.",
          safetyPlan: "Phong tỏa vùng làm việc, kiểm soát nâng hạ, cắt điện và treo biển cảnh báo.",
          executionDate: "2026-04-18",
          planDate: "2026-04-15"
        }
      }
    ]
  },
  {
    slug: "patth-contracts",
    codeRange: "MBA-21 .. MBA-25",
    title: "PATTH & hợp đồng",
    shortTitle: "PATTH & hợp đồng",
    description: "Lập PATTH, thẩm tra, phê duyệt và ký số hồ sơ thủ tục pháp lý.",
    breadcrumb: "Home > Phân hệ MBA > PATTH & hợp đồng",
    statusOptions: ["Mới", "Đã gửi thẩm tra", "Đã thẩm tra", "PC duyệt", "PC từ chối"],
    actionLabels: ["Gửi thẩm tra", "Xác nhận thẩm tra", "Gửi duyệt", "PC duyệt", "PC từ chối", "Ký số"],
    createCode: "MBA-22",
    editCode: "MBA-23",
    detailCode: "MBA-24",
    deletePopupCode: "MBA-25",
    fields: [
      { key: "planName", label: "Tên PATTH", type: "text", required: true },
      { key: "description", label: "Mô tả phương án", type: "textarea" },
      { key: "planDate", label: "Ngày lập phương án", type: "date", required: true },
      { key: "executionUnit", label: "Đơn vị thực hiện", type: "select", required: true, options: ["Xưởng MBA Bắc Ninh", "Xưởng MBA Hải Phòng"] },
      { key: "reviewUnit", label: "Đơn vị thẩm tra", type: "select", required: true, options: ["PC Hà Nội", "PC Quảng Ninh", "Ban QLDA"] },
      { key: "subcontractors", label: "Danh sách nhà thầu phụ", type: "textarea" },
      { key: "capacityDocs", label: "Hồ sơ năng lực", type: "textarea" },
      { key: "attachments", label: "Tài liệu đính kèm", type: "textarea" }
    ],
    records: [
      {
        id: "patth-1",
        code: "PATTH-001",
        title: "PATTH cải tạo MBA Gia Lâm",
        subtitle: "Hồ sơ thủ tục pháp lý và hợp đồng",
        unit: "Xưởng MBA Hải Phòng / Ban QLDA",
        date: "2026-04-12",
        status: "Đã gửi thẩm tra",
        values: {
          planName: "PATTH cải tạo MBA Gia Lâm",
          description: "Phương án thực hiện sửa chữa tổng thể và triển khai hợp đồng theo gói.",
          planDate: "2026-04-12",
          executionUnit: "Xưởng MBA Hải Phòng",
          reviewUnit: "Ban QLDA",
          subcontractors: "Nhà thầu phụ nâng hạ, đơn vị vận chuyển chuyên dụng.",
          capacityDocs: "Hồ sơ năng lực nhà thầu, chứng chỉ thiết bị nâng hạ.",
          attachments: "hop-dong-du-thao.pdf; hsnl.zip"
        }
      }
    ]
  },
  {
    slug: "materials-pricing",
    codeRange: "MBA-26 .. MBA-29",
    title: "Vật tư & giá",
    shortTitle: "Vật tư & giá",
    description: "Quản lý vật tư, giá và cấp phát vật tư cho sửa chữa MBA.",
    breadcrumb: "Home > Phân hệ MBA > Vật tư & giá",
    statusOptions: ["Mới", "Đã gửi duyệt", "Đã duyệt", "Từ chối"],
    createCode: "MBA-27",
    editCode: "MBA-28",
    detailCode: "MBA-28",
    deletePopupCode: "MBA-29",
    fields: [
      { key: "materialInfo", label: "Thông tin vật tư", type: "text", required: true },
      { key: "quantity", label: "Số lượng vật tư", type: "number", required: true },
      { key: "executionUnit", label: "Đơn vị thực hiện", type: "select", required: true, options: ["Xưởng MBA Bắc Ninh", "Xưởng MBA Hải Phòng"] },
      { key: "executionDate", label: "Ngày thực hiện", type: "date", required: true }
    ],
    records: [
      {
        id: "material-1",
        code: "VTG-001",
        title: "Gioăng cao su nắp thùng MBA",
        subtitle: "Mã vật tư: GK-MBA-01",
        unit: "Xưởng MBA Bắc Ninh",
        date: "2026-04-09",
        status: "Đã duyệt",
        values: {
          materialInfo: "Gioăng cao su nắp thùng MBA / GK-MBA-01",
          quantity: "12",
          executionUnit: "Xưởng MBA Bắc Ninh",
          executionDate: "2026-04-09"
        }
      }
    ]
  },
  {
    slug: "progress-tracking",
    codeRange: "MBA-30 .. MBA-31",
    title: "Tiến độ thi công",
    shortTitle: "Tiến độ thi công",
    description: "Theo dõi tiến độ thi công và sự cố phát sinh.",
    breadcrumb: "Home > Phân hệ MBA > Tiến độ thi công",
    statusOptions: ["Mới", "Đang thực hiện", "Hoàn thành"],
    createCode: "MBA-31",
    editCode: "MBA-31",
    detailCode: "MBA-31",
    fields: [
      { key: "lotName", label: "Tên lô MBA", type: "text", required: true },
      { key: "managementUnit", label: "Đơn vị quản lý", type: "select", required: true, options: ["PC Hà Nội", "PC Hải Dương", "PC Quảng Ninh"] },
      { key: "executionUnit", label: "Đơn vị thực hiện", type: "select", required: true, options: ["Xưởng MBA Bắc Ninh", "Xưởng MBA Hải Phòng"] },
      { key: "equipmentInfo", label: "Thông tin thiết bị", type: "textarea", required: true },
      { key: "outageDate", label: "Ngày đăng ký cắt điện", type: "date", required: true },
      { key: "startDate", label: "Ngày bắt đầu thi công", type: "date", required: true },
      { key: "currentWork", label: "Hạng mục đang thực hiện", type: "textarea" },
      { key: "progress", label: "Tiến độ thi công", type: "textarea", required: true },
      { key: "relatedDocs", label: "Tài liệu liên quan", type: "textarea" },
      { key: "incident", label: "Sự cố", type: "textarea" }
    ],
    records: [
      {
        id: "progress-1",
        code: "TDTC-001",
        title: "Công trình sửa chữa MBA Đông Anh",
        subtitle: "Hợp đồng số HD-2026-09",
        unit: "Xưởng MBA Bắc Ninh",
        date: "2026-04-16",
        status: "Đang thực hiện",
        values: {
          lotName: "Lô MBA Đông Anh",
          managementUnit: "PC Hà Nội",
          executionUnit: "Xưởng MBA Bắc Ninh",
          equipmentInfo: "02 MBA 110kV - hiện trường ngoài trạm.",
          outageDate: "2026-04-17",
          startDate: "2026-04-18",
          currentWork: "Đang tháo kiểm tra đầu sứ xuyên.",
          progress: "Đạt 45% khối lượng kế hoạch.",
          relatedDocs: "bien-ban-cat-dien.pdf",
          incident: "Chưa phát sinh."
        }
      }
    ]
  },
  {
    slug: "acceptance-minutes",
    codeRange: "MBA-32 .. MBA-36",
    title: "Biên bản nghiệm thu công trình",
    shortTitle: "Nghiệm thu công trình",
    description: "Nghiệm thu công trình, quản lý hồ sơ nghiệm thu và văn bản bảo hành.",
    breadcrumb: "Home > Phân hệ MBA > Biên bản nghiệm thu công trình",
    statusOptions: ["Mới", "Đã gửi duyệt", "Đã duyệt", "Từ chối"],
    actionLabels: ["Gửi duyệt", "PC duyệt", "PC từ chối"],
    createCode: "MBA-33",
    editCode: "MBA-34",
    detailCode: "MBA-35",
    deletePopupCode: "MBA-36",
    fields: [
      { key: "progressInfo", label: "Thông tin tiến độ", type: "textarea", required: true },
      { key: "handoverInfo", label: "Thông tin bàn giao", type: "textarea", required: true },
      { key: "completionDate", label: "Ngày hoàn thành sửa chữa", type: "date", required: true },
      { key: "acceptanceDate", label: "Ngày nghiệm thu", type: "date", required: true },
      { key: "warrantyDocs", label: "Văn bản bảo hành", type: "textarea" }
    ],
    records: [
      {
        id: "accept-1",
        code: "NTCT-001",
        title: "Nghiệm thu công trình MBA Gia Lâm",
        subtitle: "Hồ sơ nghiệm thu sau sửa chữa tổng thể",
        unit: "Xưởng MBA Hải Phòng",
        date: "2026-04-20",
        status: "Mới",
        values: {
          progressInfo: "Đã hoàn thành các hạng mục thay gioăng, xử lý rò dầu, sơn hoàn thiện.",
          handoverInfo: "Đã bàn giao lại thiết bị cho đơn vị quản lý trạm.",
          completionDate: "2026-04-19",
          acceptanceDate: "2026-04-20",
          warrantyDocs: "Bảo hành 12 tháng cho vật tư thay thế."
        }
      }
    ]
  },
  {
    slug: "settlements",
    codeRange: "MBA-41 .. MBA-44.3",
    title: "Hồ sơ quyết toán",
    shortTitle: "Hồ sơ quyết toán",
    description: "Lập, gửi duyệt và gửi thẩm tra hồ sơ quyết toán.",
    breadcrumb: "Home > Phân hệ MBA > Hồ sơ quyết toán",
    statusOptions: ["Mới", "Đã gửi duyệt", "Đã gửi thẩm tra", "Đã duyệt", "Từ chối"],
    actionLabels: ["Gửi duyệt", "Gửi thẩm tra"],
    createCode: "MBA-42",
    editCode: "MBA-43",
    detailCode: "MBA-44",
    deletePopupCode: "MBA-44.1",
    fields: [
      { key: "projectCode", label: "Mã công trình / hợp đồng", type: "text", required: true },
      { key: "costSummary", label: "Tổng hợp chi phí", type: "textarea", required: true },
      { key: "finalizationDate", label: "Ngày lập hồ sơ", type: "date", required: true },
      { key: "attachments", label: "Tài liệu quyết toán", type: "textarea" }
    ],
    records: [
      {
        id: "settlement-1",
        code: "HSQT-001",
        title: "Quyết toán công trình Đông Anh",
        subtitle: "Chi phí nhân công, vật tư và thí nghiệm sau sửa chữa",
        unit: "Phòng Tài chính",
        date: "2026-04-22",
        status: "Đã gửi thẩm tra",
        values: {
          projectCode: "HD-2026-09",
          costSummary: "Tổng chi phí 1,25 tỷ VNĐ; vật tư 46%, nhân công 32%, thí nghiệm 22%.",
          finalizationDate: "2026-04-22",
          attachments: "bang-tong-hop-chi-phi.xlsx; hsqt.pdf"
        }
      }
    ]
  },
  {
    slug: "payment-requests",
    codeRange: "MBA-45 .. MBA-48.3",
    title: "Đề nghị thanh toán",
    shortTitle: "Đề nghị thanh toán",
    description: "Lập, gửi duyệt và gửi thẩm tra đề nghị thanh toán.",
    breadcrumb: "Home > Phân hệ MBA > Đề nghị thanh toán",
    statusOptions: ["Mới", "Đã gửi duyệt", "Đã gửi thẩm tra", "Đã duyệt", "Từ chối"],
    actionLabels: ["Gửi duyệt", "Gửi thẩm tra"],
    createCode: "MBA-46",
    editCode: "MBA-47",
    detailCode: "MBA-48",
    deletePopupCode: "MBA-48.1",
    fields: [
      { key: "contractCode", label: "Mã công trình / hợp đồng", type: "text", required: true },
      { key: "paymentAmount", label: "Giá trị đề nghị thanh toán", type: "number", required: true },
      { key: "proposalDate", label: "Ngày lập đề nghị", type: "date", required: true },
      { key: "notes", label: "Ghi chú", type: "textarea" }
    ],
    records: [
      {
        id: "payment-1",
        code: "DNTT-001",
        title: "Thanh toán đợt 1 công trình Gia Lâm",
        subtitle: "Theo hợp đồng HD-2026-11",
        unit: "Phòng Tài chính",
        date: "2026-04-23",
        status: "Mới",
        values: {
          contractCode: "HD-2026-11",
          paymentAmount: "780000000",
          proposalDate: "2026-04-23",
          notes: "Thanh toán đợt 1 theo khối lượng nghiệm thu hoàn thành."
        }
      }
    ]
  },
  {
    slug: "contracts",
    codeRange: "MBA-49 .. MBA-50",
    title: "Hợp đồng",
    shortTitle: "Hợp đồng",
    description: "Danh sách và chi tiết hợp đồng của phân hệ sửa chữa MBA.",
    breadcrumb: "Home > Phân hệ MBA > Hợp đồng",
    statusOptions: ["Đang hiệu lực", "Đã hoàn thành", "Tạm dừng"],
    actionLabels: ["Xem hợp đồng"],
    createCode: "MBA-49",
    editCode: "MBA-49",
    detailCode: "MBA-50",
    fields: [
      { key: "contractName", label: "Tên hợp đồng", type: "text", required: true },
      { key: "contractor", label: "Nhà thầu", type: "text", required: true },
      { key: "signDate", label: "Ngày ký", type: "date", required: true },
      { key: "contractValue", label: "Giá trị hợp đồng", type: "number", required: true },
      { key: "scope", label: "Phạm vi công việc", type: "textarea" }
    ],
    records: [
      {
        id: "contract-1",
        code: "HD-2026-11",
        title: "Hợp đồng sửa chữa MBA Gia Lâm",
        subtitle: "Nhà thầu chính: Xưởng MBA Hải Phòng",
        unit: "Ban QLDA",
        date: "2026-04-08",
        status: "Đang hiệu lực",
        values: {
          contractName: "Hợp đồng sửa chữa MBA Gia Lâm",
          contractor: "Xưởng MBA Hải Phòng",
          signDate: "2026-04-08",
          contractValue: "2150000000",
          scope: "Sửa chữa tổng thể MBA, thay thế vật tư chính và thực hiện thí nghiệm sau sửa chữa."
        }
      }
    ]
  }
];

export const mbaSections: MbaSection[] = mbaSectionSeeds.map((section) => ({
  ...section,
  records: Array.from({ length: 24 }, (_, index) => {
    const seed = section.records[index % section.records.length];
    const nextStatus = cycleValue(section.statusOptions, index);
    const nextDate = shiftDate(seed.date, index);
    const nextValues = Object.fromEntries(
      Object.entries(seed.values).map(([key, value]) => {
        if (value.match(/^\d{4}-\d{2}-\d{2}$/)) {
          return [key, shiftDate(value, index)];
        }
        if (key === "quantity" || key === "equipmentQuantity") {
          return [key, String((Number(value) || 1) + (index % 5))];
        }
        if (key === "paymentAmount" || key === "contractValue") {
          return [key, String((Number(value) || 0) + index * 1000000)];
        }
        return [key, `${value} ${index + 1}`];
      })
    ) as Record<string, string>;

    return {
      ...seed,
      id: `${seed.id}-${index + 1}`,
      code: `${seed.code}-${pad(index + 1, 2)}`,
      title: `${seed.title} ${index + 1}`,
      subtitle: seed.subtitle ? `${seed.subtitle} • đợt ${index + 1}` : undefined,
      unit: index % 2 === 0 ? seed.unit : `${seed.unit} / ca ${index + 1}`,
      date: nextDate,
      status: nextStatus,
      values: nextValues
    };
  })
}));

export function getMbaSection(slug: string) {
  return mbaSections.find((section) => section.slug === slug);
}

export function getMbaRecord(sectionSlug: string, id: string) {
  return getMbaSection(sectionSlug)?.records.find((record) => record.id === id);
}

export function getMbaAvailableActions(section: MbaSection, status: string) {
  if (section.slug === "requests") {
    return status === "Mới" ? ["Gửi yêu cầu"] : [];
  }

  if (section.slug === "materials-pricing") {
    if (status === "Mới") return ["Gửi duyệt"];
    if (status === "Đã gửi duyệt") return ["PC duyệt", "PC từ chối"];
    return [];
  }

  if (section.slug === "progress-tracking") {
    if (status === "Mới") return ["Bắt đầu thi công"];
    if (status === "Đang thực hiện") return ["Hoàn thành"];
    return [];
  }

  if (section.slug === "contracts") {
    return ["Xem hợp đồng"];
  }

  if (section.slug === "patth-contracts") {
    if (status === "Mới") return ["Gửi thẩm tra"];
    if (status === "Đã gửi thẩm tra") return ["Xác nhận thẩm tra"];
    if (status === "Đã thẩm tra") return ["Gửi duyệt"];
    if (status === "PC duyệt") return ["Ký số"];
    return ["PC duyệt", "PC từ chối"].includes(status) ? [] : ["PC duyệt", "PC từ chối"];
  }

  if (["pakt-dt", "handover-minutes", "patctc"].includes(section.slug)) {
    if (status === "Mới" || status === "Đã tiếp nhận") return ["Gửi kiểm tra"];
    if (status === "Đã kiểm tra") return ["Gửi duyệt"];
    if (status === "Đã gửi duyệt") return ["PC duyệt", "PC từ chối"];
    return [];
  }

  if (["acceptance-minutes", "settlements", "payment-requests"].includes(section.slug)) {
    if (status === "Mới") return ["Gửi duyệt"];
    if (status === "Đã gửi duyệt") return ["Gửi thẩm tra"];
    if (status === "Đã gửi thẩm tra") return ["PC duyệt", "PC từ chối"];
    return [];
  }

  return section.actionLabels ?? [];
}

export function getMbaNextStatus(section: MbaSection, currentStatus: string, action: string) {
  const transitions: Record<string, string> = {
    "Gửi yêu cầu": "Đã tiếp nhận",
    "Gửi kiểm tra": "Đã kiểm tra",
    "Xác nhận kiểm tra": "Đã kiểm tra",
    "Gửi thẩm tra": "Đã gửi thẩm tra",
    "Xác nhận thẩm tra": "Đã thẩm tra",
    "Gửi duyệt": "Đã gửi duyệt",
    "PC duyệt": "Đã duyệt",
    "PC từ chối": "Từ chối",
    "Ký số": "Đã duyệt",
    "Bắt đầu thi công": "Đang thực hiện",
    "Hoàn thành": "Hoàn thành"
  };

  if (section.slug === "patth-contracts" && action === "PC duyệt") {
    return "PC duyệt";
  }

  if (section.slug === "patth-contracts" && action === "PC từ chối") {
    return "PC từ chối";
  }

  if (section.slug === "contracts" && action === "Xem hợp đồng") {
    return currentStatus;
  }

  return transitions[action] ?? currentStatus;
}

export function getMbaTimeline(section: MbaSection, record: MbaRecord): MbaTimelineItem[] {
  const base = [
    {
      title: "Khởi tạo hồ sơ",
      note: `${record.code} được tạo trong nhóm ${section.shortTitle.toLowerCase()}.`
    }
  ];

  if (record.status !== "Mới") {
    base.push({
      title: "Cập nhật trạng thái",
      note: `Hồ sơ hiện ở trạng thái "${record.status}".`
    });
  }

  if (record.values.attachments) {
    base.push({
      title: "Đính kèm tài liệu",
      note: `Có tài liệu đính kèm: ${record.values.attachments}.`
    });
  }

  if (record.status === "Đã duyệt" || record.status === "PC duyệt" || record.status === "Hoàn thành") {
    base.push({
      title: "Hoàn tất phê duyệt",
      note: "Hồ sơ đã đi qua bước phê duyệt cuối."
    });
  }

  if (record.status === "Từ chối" || record.status === "PC từ chối") {
    base.push({
      title: "Từ chối xử lý",
      note: "Hồ sơ đang chờ cập nhật lại để tiếp tục quy trình."
    });
  }

  return base;
}
