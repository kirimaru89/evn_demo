export type UserStatus = "Mới" | "Đang hoạt động" | "Vô hiệu hóa";

export type UserRecord = {
  id: string;
  code: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  title: string;
  role: string;
  createdAt: string;
  status: UserStatus;
};

export type RoleRecord = {
  id: string;
  code: string;
  name: string;
  description: string;
  scope: string;
  permissions: string[];
  note: string;
  createdAt: string;
  status: "Đang hoạt động" | "Vô hiệu hóa";
};

export type DepartmentRecord = {
  id: string;
  code: string;
  name: string;
  parent: string;
  createdAt: string;
  status: "Đang hoạt động" | "Vô hiệu hóa";
};

export type MaterialCategoryRecord = {
  id: string;
  code: string;
  name: string;
  unit: string;
  createdAt: string;
  status: "Đang hoạt động" | "Ngừng sử dụng";
};

export type AuditLogRecord = {
  id: string;
  action: string;
  actor: string;
  module: string;
  target: string;
  createdAt: string;
  status: "Thành công" | "Cảnh báo";
  details: string;
};

function pad(value: number, size = 3) {
  return String(value).padStart(size, "0");
}

function cycleValue<T>(items: readonly T[], index: number) {
  return items[index % items.length];
}

function buildCollection<T>(count: number, factory: (index: number) => T) {
  return Array.from({ length: count }, (_, index) => factory(index));
}

export const appModules: Array<{ name: string; href: string; description: string; disabled?: boolean }> = [
  { name: "Portal MSM", href: "/home", description: "Điểm vào chung để điều hướng các phân hệ nghiệp vụ." },
  { name: "Tư vấn thiết kế", href: "/tvtk/capital-plans", description: "Kế hoạch vốn, TMĐT, PATTH, hợp đồng, quyết toán." },
  { name: "Thí nghiệm tạo doanh thu", href: "/tndt/customer-requests", description: "Yêu cầu khách hàng, báo giá, giao việc, tiến độ, công nợ." },
  { name: "Thí nghiệm CBM", href: "/cbm/plans", description: "Kế hoạch, báo cáo và biên bản CBM." },
  { name: "Sửa chữa máy biến áp", href: "/mba/requests", description: "Yêu cầu sửa chữa, phương án, vật tư, nghiệm thu, hợp đồng." },
  { name: "Quản lý user và phân quyền", href: "/admin/users", description: "Quản lý người dùng, vai trò, danh mục hệ thống và audit log." }
];

export const roles = [
  "Quản trị hệ thống",
  "Điều phối nghiệp vụ",
  "Chuyên viên kiểm tra",
  "Kế toán",
  "Lãnh đạo đơn vị"
] as const;

export const permissionGroups = [
  "Xem danh sách",
  "Tạo mới",
  "Chỉnh sửa",
  "Phê duyệt",
  "Ký số",
  "Xóa bản ghi",
  "Xuất báo cáo"
];

const departmentNames = [
  "Phòng Quản lý vận hành",
  "Phòng Kỹ thuật",
  "Phòng Tài chính",
  "Phòng Điều độ",
  "Phòng An toàn",
  "Ban QLDA"
] as const;

const titles = ["Trưởng phòng", "Phó phòng", "Chuyên viên", "Kế toán tổng hợp", "Điều phối viên", "Kỹ sư hiện trường"] as const;

const people = [
  "Nguyễn Đức Minh",
  "Trần Thu Hà",
  "Phạm Khánh Linh",
  "Lê Quốc Bảo",
  "Đỗ Thị Lan",
  "Vũ Mạnh Hùng",
  "Ngô Thu Trang",
  "Bùi Hoàng Nam"
] as const;

const materialNames = [
  ["Dầu cách điện", "Lít"],
  ["Sứ xuyên MBA", "Bộ"],
  ["Bulong chịu lực", "Cái"],
  ["Gioăng cao su", "Bộ"],
  ["Van xả dầu", "Cái"],
  ["Cáp điều khiển", "Mét"]
] as const;

const actions = [
  "Đăng nhập hệ thống",
  "Cập nhật quyền vai trò",
  "Vô hiệu hóa người dùng",
  "Tạo mới đơn vị",
  "Chỉnh sửa danh mục vật tư",
  "Xuất báo cáo audit"
] as const;

export const departments: DepartmentRecord[] = buildCollection(24, (index) => ({
  id: `dept-${index + 1}`,
  code: `PB-${pad(index + 1)}`,
  name: `${cycleValue(departmentNames, index)} ${index + 1}`,
  parent: index % 4 === 0 ? "Tổng công ty EVN NPC" : "EVN NPC",
  createdAt: `2026-02-${pad((index % 28) + 1, 2)}`,
  status: index % 7 === 0 ? "Vô hiệu hóa" : "Đang hoạt động"
}));

export const users: UserRecord[] = buildCollection(27, (index) => {
  const name = `${cycleValue(people, index)} ${index + 1}`;
  const department = cycleValue(departments, index).name;
  const role = cycleValue(roles, index);

  return {
    id: `usr-${index + 1}`,
    code: `USR-${pad(index + 1, 4)}`,
    name,
    email: `user${index + 1}@msm.local`,
    phone: `09${String(10000000 + index * 379).slice(0, 8)}`,
    department,
    title: cycleValue(titles, index),
    role,
    createdAt: `2026-03-${pad((index % 28) + 1, 2)}`,
    status: cycleValue(["Đang hoạt động", "Mới", "Vô hiệu hóa"] as const, index)
  };
});

export const roleRecords: RoleRecord[] = buildCollection(22, (index) => ({
  id: `role-${index + 1}`,
  code: `ROLE-${pad(index + 1)}`,
  name: `${cycleValue(roles, index)} ${index + 1}`,
  description: `Vai trò ${cycleValue(roles, index).toLowerCase()} dùng cho nhóm nghiệp vụ số ${index + 1}.`,
  scope: cycleValue(["Toàn hệ thống", "Phân hệ nghiệp vụ", "Audit + tra cứu"] as const, index),
  permissions: permissionGroups.filter((_, permissionIndex) => permissionIndex <= (index % permissionGroups.length)),
  note: index % 3 === 0 ? "Chỉ áp dụng trong phạm vi đơn vị." : "Áp dụng theo cấu hình hiện hành.",
  createdAt: `2026-02-${pad((index % 28) + 1, 2)}`,
  status: index % 5 === 0 ? "Vô hiệu hóa" : "Đang hoạt động"
}));

export const materialCategories: MaterialCategoryRecord[] = buildCollection(24, (index) => ({
  id: `mat-${index + 1}`,
  code: `VT-${pad(index + 1)}`,
  name: `${cycleValue(materialNames, index)[0]} ${index + 1}`,
  unit: cycleValue(materialNames, index)[1],
  createdAt: `2026-02-${pad((index % 28) + 1, 2)}`,
  status: index % 6 === 0 ? "Ngừng sử dụng" : "Đang hoạt động"
}));

export const auditLogs: AuditLogRecord[] = buildCollection(32, (index) => ({
  id: `log-${index + 1}`,
  action: cycleValue(actions, index),
  actor: cycleValue(users, index).name,
  module: cycleValue(["authentication", "ADMIN / Users", "ADMIN / Role", "ADMIN / Audit"] as const, index),
  target: cycleValue(["Tài khoản", "ROLE", "Đơn vị", "Danh mục"] as const, index) + ` ${index + 1}`,
  createdAt: `2026-04-${pad((index % 28) + 1, 2)} ${pad(8 + (index % 10), 2)}:${pad((index * 7) % 60, 2)}`,
  status: index % 4 === 0 ? "Cảnh báo" : "Thành công",
  details: `Bản ghi audit số ${index + 1} cho thao tác ${cycleValue(actions, index).toLowerCase()}.`
}));

export const findUserById = (id: string) => users.find((record) => record.id === id);
export const findRoleById = (id: string) => roleRecords.find((record) => record.id === id);
export const findDepartmentById = (id: string) => departments.find((record) => record.id === id);
export const findMaterialCategoryById = (id: string) => materialCategories.find((record) => record.id === id);
export const findAuditLogById = (id: string) => auditLogs.find((record) => record.id === id);
