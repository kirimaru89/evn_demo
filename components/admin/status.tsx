import { Badge } from "../ui/badge";

export function StatusBadge({ value }: { value: string }) {
  if (["Đang hoạt động", "Đã duyệt", "Thành công"].includes(value)) {
    return <Badge tone="success">{value}</Badge>;
  }

  if (["Mới", "Đã tiếp nhận"].includes(value)) {
    return <Badge tone="info">{value}</Badge>;
  }

  if (["Ngừng sử dụng", "Cảnh báo"].includes(value)) {
    return <Badge tone="warning">{value}</Badge>;
  }

  if (["Vô hiệu hóa", "Từ chối"].includes(value)) {
    return <Badge tone="danger">{value}</Badge>;
  }

  return <Badge>{value}</Badge>;
}
