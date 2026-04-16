"use client";

import { Button } from "./button";
import { Card } from "./card";

export function usePagination<T>(items: T[], pageSize = 20) {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));

  function slice(page: number) {
    const safePage = Math.min(totalPages, Math.max(1, page));
    const start = (safePage - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }

  return { totalPages, slice, pageSize };
}

export function PaginationBar({
  page,
  totalPages,
  onPageChange,
  pageSize,
  totalItems
}: {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageSize: number;
  totalItems: number;
}) {
  const currentPage = Math.min(totalPages, Math.max(1, page));

  return (
    <Card style={{ padding: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ color: "var(--color-text-soft)", fontSize: 13 }}>
          Hiển thị {pageSize} bản ghi/trang. Tổng {totalItems} bản ghi, {totalPages} trang.
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Button variant="secondary" onClick={() => onPageChange(1)} disabled={currentPage === 1}>
            Trang đầu
          </Button>
          <Button variant="secondary" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
            Prev
          </Button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <Button
              key={pageNumber}
              variant={pageNumber === currentPage ? "primary" : "secondary"}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </Button>
          ))}
          <Button variant="secondary" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </Button>
          <Button variant="secondary" onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}>
            Trang cuối
          </Button>
        </div>
      </div>
    </Card>
  );
}
