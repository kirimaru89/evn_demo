# Thí nghiệm tạo doanh thu

## C1. QUẢN LÝ KH NGOÀI
### I. Quản lý yêu cầu Khách hàng/yêu cầu giao nhiệm vụ
#### [C1-05] Popup xác nhận xóa yêu cầu khách hàng
##### Hiển thị popup với title "Bạn có chắc chắn xóa yêu cầu khách hàng?" và button "Đồng ý"; "Hủy"
#### [C1-04] Màn hình chi tiết yêu cầu khách hàng
##### Mục đích
- Xem chi tiết thông tin yêu cầu khách hàng
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Yêu cầu khách hàng > Xem chi tiết yêu cầu khách hàng
##### Section
- Form Xem chi tiết (Mã yêu cầu)
##### icon X (Tắt màn xem chi tiết để trở về màn danh sách)
##### Button: Gửi yêu cầu | Tiếp nhận | Từ chối (Hiển thị nhóm nút hành động tương ứng với trạng thái)
#### [C1-03] Màn hình chỉnh sửa yêu cầu khách hàng
##### Mục đích
- Chỉnh sửa thông tin yêu cầu khách hàng
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Yêu cầu khách hàng > Chỉnh sửa yêu cầu khách hàng
##### Section
- Form chỉnh sửa (Dropdown: Loại yêu cầu (M))
##### Button: Hủy (Hủy thao tác; quay lại danh sách)
##### Button: Lưu (Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa)
#### [C1-02] Màn hình tạo mới yêu cầu khách hàng
##### Mục đích
- Nhập và lưu thông tin yêu cầu khách hàng
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Yêu cầu khách hàng > Tạo mới yêu cầu khách hàng
##### Section
- Form input (Dropdown: Loại yêu cầu (M))
##### Button: Hủy (Hủy thao tác; quay lại danh sách)
##### Button: Lưu (Lưu thông tin; chuyển trạng thái sang "Mới")
#### [C1-01] Màn hình danh sách yêu cầu khách hàng
##### Mục đích
- Hiển thị danh sách yêu cầu khách hàng
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Yêu cầu khách hàng
##### Section
- Title ("Yêu cầu khách hàng")
##### Thanh tìm kiếm/lọc (Input: Từ khóa)
##### Bảng dữ liệu (Cột: Mã yêu cầu)
##### Button Tạo mới (Mở ra Màn hình tạo mới)
##### Phân trang (Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối)

### III. Lập & Phê duyệt Báo giá (đính kèm BB khảo sát)
#### [C1-09.1] Popup xác nhận duyệt
##### Hiển thị popup xác nhận phê duyệt với button "Đồng ý"; "Hủy"
#### [C1-09.2] Popup gửi duyệt
##### Hiển thị popup xác nhận gửi duyệt với button "Đồng ý"; "Hủy"
#### [C1-10] Popup xác nhận xóa báo giá
##### Hiển thị popup với title "Bạn có chắc chắn xóa báo giá?" và button "Đồng ý"; "Hủy"
#### [C1-09] Màn hình chi tiết & phê duyệt báo giá
##### Mục đích
- Xem chi tiết thông tin & phê duyệt báo giá
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Báo giá > Xem chi tiết báo giá
##### Section
- Form Xem chi tiết (Mã báo giá)
##### icon X (Tắt màn xem chi tiết để trở về màn danh sách)
##### Button: Gửi duyệt | Phê duyệt | Từ chối | XN KH chấp thuận | XN KH không chấp thuận (Hiển thị nhóm nút hành động tương ứng với trạng thái)
#### [C1-08] Màn hình chỉnh sửa báo giá
##### Mục đích
- Chỉnh sửa thông tin báo giá
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Báo giá > Chỉnh sửa báo giá
##### Section
- Form chỉnh sửa (Dropdown: Mã yêu cầu KH liên kết (M))
##### Button: Hủy (Hủy thao tác; quay lại danh sách)
##### Button: Lưu (Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa)
#### [C1-07] Màn hình tạo mới báo giá
##### Mục đích
- Nhập và lưu thông tin báo giá
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Báo giá > Tạo mới báo giá
##### Section
- Form input (Dropdown: Mã yêu cầu KH liên kết (M))
##### Button: Hủy (Hủy thao tác; quay lại danh sách)
##### Button: Lưu (Lưu thông tin; chuyển trạng thái sang "Mới")
#### [C1-06] Màn hình danh sách báo giá
##### Mục đích
- Hiển thị danh sách báo giá
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Báo giá
##### Section
- Title ("Báo giá")
##### Thanh tìm kiếm/lọc (Input: Từ khóa)
##### Bảng dữ liệu (Cột: Mã báo giá)
##### Button Tạo mới (Mở ra Màn hình tạo mới)
##### Phân trang (Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối)

## C2. QUẢN LÝ DOANH THU TỰ THỰC HIỆN
### II. Quản lý PATTH (Phương án thực hiện) (nội bộ)
#### [C2-10] Popup xác nhận xóa PATTH (Phương án thực hiện) nội bộ
##### Hiển thị popup với title "Bạn có chắc chắn xóa PATTH (Phương án thực hiện) nội bộ?" và button "Đồng ý"; "Hủy"
#### [C2-09] Màn hình chi tiết PATTH (Phương án thực hiện) nội bộ
##### Mục đích
- Xem chi tiết thông tin PATTH (Phương án thực hiện) nội bộ
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > PATTH (Phương án thực hiện) nội bộ > Xem chi tiết PATTH (Phương án thực hiện) nội bộ
##### Section
- Form Xem chi tiết (Mã PATTH (Phương án thực hiện))
##### icon X (Tắt màn xem chi tiết để trở về màn danh sách)
##### Button: Gửi duyệt | Gửi kiểm tra | XN kiểm tra | Phê duyệt | Từ chối (Hiển thị nhóm nút hành động tương ứng với trạng thái)
#### [C2-08] Màn hình chỉnh sửa PATTH (Phương án thực hiện) nội bộ
##### Mục đích
- Chỉnh sửa thông tin PATTH (Phương án thực hiện) nội bộ
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > PATTH (Phương án thực hiện) nội bộ > Chỉnh sửa PATTH (Phương án thực hiện) nội bộ
##### Section
- Form chỉnh sửa (Input: Tên phương án (M))
##### Button: Hủy (Hủy thao tác; quay lại danh sách)
##### Button: Lưu (Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa)
#### [C2-07] Màn hình tạo mới PATTH (Phương án thực hiện) nội bộ
##### Mục đích
- Nhập và lưu thông tin PATTH (Phương án thực hiện) nội bộ
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > PATTH (Phương án thực hiện) nội bộ > Tạo mới PATTH (Phương án thực hiện) nội bộ
##### Section
- Form input (Input: Tên phương án (M))
##### Button: Hủy (Hủy thao tác; quay lại danh sách)
##### Button: Lưu (Lưu thông tin; chuyển trạng thái sang "Mới")
#### [C2-06] Màn hình danh sách PATTH (Phương án thực hiện) nội bộ
##### Mục đích
- Hiển thị danh sách PATTH (Phương án thực hiện) nội bộ
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > PATTH (Phương án thực hiện) nội bộ
##### Section
- Title ("PATTH (Phương án thực hiện) nội bộ")
##### Thanh tìm kiếm/lọc (Input: Từ khóa)
##### Bảng dữ liệu (Cột: Mã PATTH (Phương án thực hiện))
##### Button Tạo mới (Mở ra Màn hình tạo mới)
##### Phân trang (Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối)

## C3. QUẢN LÝ QUY TRÌNH CHUNG THÍ NGHIỆM TẠO DOANH THU
### I. Lập & Phê duyệt&Ký số đề nghị tạm ứng
#### [C3-05.3] Popup trình ký số
##### Hiển thị popup trình ký số với thông tin người ký và button "Xác nhận"; "Hủy"
#### [C3-05.4] Popup xác nhận ký
##### Hiển thị popup xác nhận ký số với button "Đồng ý"; "Hủy"
#### [C3-05.1] Popup xác nhận duyệt
##### Hiển thị popup xác nhận phê duyệt với button "Đồng ý"; "Hủy"
#### [C3-05.2] Popup gửi duyệt
##### Hiển thị popup xác nhận gửi duyệt với button "Đồng ý"; "Hủy"
#### [C3-05] Popup xác nhận xóa đề nghị tạm ứng
##### Hiển thị popup với title "Bạn có chắc chắn xóa đề nghị tạm ứng?" và button "Đồng ý"; "Hủy"
#### [C3-04] Màn hình chi tiết & phê duyệt đề nghị tạm ứng
##### Mục đích
- Xem chi tiết thông tin & phê duyệt đề nghị tạm ứng
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Đề nghị tạm ứng > Xem chi tiết đề nghị tạm ứng
##### Section
- Form Xem chi tiết (Mã đề nghị tạm ứng)
##### icon X (Tắt màn xem chi tiết để trở về màn danh sách)
##### Button: Gửi duyệt | Phê duyệt | Trình ký số | Ký số | Từ chối (Hiển thị nhóm nút hành động tương ứng với trạng thái)
#### [C3-03] Màn hình chỉnh sửa đề nghị tạm ứng
##### Mục đích
- Chỉnh sửa thông tin đề nghị tạm ứng
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Đề nghị tạm ứng > Chỉnh sửa đề nghị tạm ứng
##### Section
- Form chỉnh sửa (Dropdown: Mã HĐ (Hợp đồng) MSM (Phần mềm quản lý) liên kết (M))
##### Button: Hủy (Hủy thao tác; quay lại danh sách)
##### Button: Lưu (Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa)
#### [C3-02] Màn hình tạo mới đề nghị tạm ứng
##### Mục đích
- Nhập và lưu thông tin đề nghị tạm ứng
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Đề nghị tạm ứng > Tạo mới đề nghị tạm ứng
##### Section
- Form input (Dropdown: Mã HĐ (Hợp đồng) MSM (Phần mềm quản lý) liên kết (M))
##### Button: Hủy (Hủy thao tác; quay lại danh sách)
##### Button: Lưu (Lưu thông tin; chuyển trạng thái sang "Mới")
#### [C3-01] Màn hình danh sách đề nghị tạm ứng
##### Mục đích
- Hiển thị danh sách đề nghị tạm ứng
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Đề nghị tạm ứng
##### Section
- Title ("Đề nghị tạm ứng")
##### Thanh tìm kiếm/lọc (Input: Từ khóa)
##### Bảng dữ liệu (Cột: Mã đề nghị tạm ứng)
##### Button Tạo mới (Mở ra Màn hình tạo mới)
##### Phân trang (Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối)

### II. Lập & Phê duyệt chi phí / chủ trương mua ngoài
#### [C3-10] Popup xác nhận xóa chi phí / chủ trương mua ngoài
##### Hiển thị popup với title "Bạn có chắc chắn xóa chi phí / chủ trương mua ngoài?" và button "Đồng ý"; "Hủy"
#### [C3-10] Popup xác gửi duyệt
##### Hiển thị popup xác nhận gửi duyệt với button "Đồng ý"; "Hủy"
#### [C3-10] Popup xác nhận duyệt
##### Hiển thị popup xác nhận phê duyệt với button "Đồng ý"; "Hủy"
#### [C3-09] Màn hình chi tiết & phê duyệt chi phí / chủ trương mua ngoài
##### Mục đích
- Xem chi tiết thông tin & phê duyệt chi phí / chủ trương mua ngoài
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Chi phí / chủ trương mua ngoài > Xem chi tiết chi phí
##### Section
- Form Xem chi tiết (Mã tờ trình chi phí)
##### icon X (Tắt màn xem chi tiết để trở về màn danh sách)
##### Button: Gửi duyệt | Phê duyệt | Từ chối (Hiển thị nhóm nút hành động tương ứng với trạng thái)
#### [C3-08] Màn hình chỉnh sửa chi phí / chủ trương mua ngoài
##### Mục đích
- Chỉnh sửa thông tin chi phí / chủ trương mua ngoài
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Chi phí / chủ trương mua ngoài > Chỉnh sửa chi phí
##### Section
- Form chỉnh sửa (Dropdown: Mã HĐ (Hợp đồng) MSM (Phần mềm quản lý) liên kết (M))
##### Button: Hủy (Hủy thao tác; quay lại danh sách)
##### Button: Lưu (Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa)
#### [C3-07] Màn hình tạo mới chi phí / chủ trương mua ngoài
##### Mục đích
- Nhập và lưu thông tin chi phí / chủ trương mua ngoài
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Chi phí / chủ trương mua ngoài > Tạo mới chi phí
##### Section
- Form input (Dropdown: Mã HĐ (Hợp đồng) MSM (Phần mềm quản lý) liên kết (M))
##### Button: Hủy (Hủy thao tác; quay lại danh sách)
##### Button: Lưu (Lưu thông tin; chuyển trạng thái sang "Mới")
#### [C3-06] Màn hình danh sách chi phí / chủ trương mua ngoài
##### Mục đích
- Hiển thị danh sách chi phí / chủ trương mua ngoài
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Chi phí / chủ trương mua ngoài
##### Section
- Title ("Chi phí / chủ trương mua ngoài")
##### Thanh tìm kiếm/lọc (Input: Từ khóa)
##### Bảng dữ liệu (Cột: Mã tờ trình)
##### Button Tạo mới (Mở ra Màn hình tạo mới)
##### Phân trang (Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối)

### III. Quản lý giao việc+tiến độ
#### [C3-15] Popup xác nhận xóa giao việc
##### Hiển thị popup với title "Bạn có chắc chắn xóa giao việc?" và button "Đồng ý"; "Hủy"
#### [C3-14] Màn hình chi tiết giao việc
##### Mục đích
- Xem chi tiết thông tin giao việc
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Giao việc > Xem chi tiết giao việc
##### Section
- Form Xem chi tiết (Mã giao việc)
##### icon X (Tắt màn xem chi tiết để trở về màn danh sách)
##### Button: Giao việc | Bắt đầu thực hiện | Hoàn thành (Hiển thị nhóm nút hành động tương ứng với trạng thái)
#### [C3-13] Màn hình chỉnh sửa giao việc
##### Mục đích
- Chỉnh sửa thông tin giao việc
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Giao việc > Chỉnh sửa giao việc
##### Section
- Form chỉnh sửa (Dropdown: Mã HĐ (Hợp đồng) MSM (Phần mềm quản lý) liên kết (M))
##### Button: Hủy (Hủy thao tác; quay lại danh sách)
##### Button: Lưu (Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa)
#### [C3-12] Màn hình tạo mới giao việc
##### Mục đích
- Nhập và lưu thông tin giao việc
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Giao việc > Tạo mới giao việc
##### Section
- Form input (Dropdown: Mã HĐ (Hợp đồng) MSM (Phần mềm quản lý) liên kết (M))
##### Button: Hủy (Hủy thao tác; quay lại danh sách)
##### Button: Lưu (Lưu thông tin; chuyển trạng thái sang "Mới")
#### [C3-11] Màn hình danh sách giao việc
##### Mục đích
- Hiển thị danh sách giao việc
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Giao việc
##### Section
- Title ("Giao việc")
##### Thanh tìm kiếm/lọc (Input: Từ khóa)
##### Bảng dữ liệu (Cột: Mã giao việc)
##### Button Tạo mới (Mở ra Màn hình tạo mới)
##### Phân trang (Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối)

### IX. Quản lý BB Nghiệm thu và sự cố+hồ sơ NT
#### [C3-31] Popup xác nhận xóa biên bản nghiệm thu
##### Hiển thị popup với title "Bạn có chắc chắn xóa biên bản nghiệm thu?" và button "Đồng ý"; "Hủy"
#### [C3-30] Màn hình chi tiết biên bản nghiệm thu
##### Mục đích
- Xem chi tiết thông tin biên bản nghiệm thu
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Biên bản nghiệm thu > Xem chi tiết biên bản nghiệm thu
##### Section
- Form Xem chi tiết (Mã BB nghiệm thu)
##### icon X (Tắt màn xem chi tiết để trở về màn danh sách)
##### Button: Gửi thẩm tra P.KD (Phòng Kinh doanh) | P.KD (Phòng Kinh doanh) xong | Gửi thẩm tra P.KT-AT (Phòng Kỹ thuật an toàn) | P.KT-AT (Phòng Kỹ thuật an toàn) xong | Phê duyệt | Trả lại (Hiển thị nhóm nút hành động tương ứng với trạng thái)
#### [C3-29] Màn hình chỉnh sửa biên bản nghiệm thu
##### Mục đích
- Chỉnh sửa thông tin biên bản nghiệm thu
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Biên bản nghiệm thu > Chỉnh sửa biên bản nghiệm thu
##### Section
- Form chỉnh sửa (Dropdown: Mã HĐ (Hợp đồng) MSM (Phần mềm quản lý) liên kết (M))
##### Button: Hủy (Hủy thao tác; quay lại danh sách)
##### Button: Lưu (Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa)
#### [C3-28] Màn hình tạo mới biên bản nghiệm thu
##### Mục đích
- Nhập và lưu thông tin biên bản nghiệm thu
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Biên bản nghiệm thu > Tạo mới biên bản nghiệm thu
##### Section
- Form input (Dropdown: Mã HĐ (Hợp đồng) MSM (Phần mềm quản lý) liên kết (M))
##### Button: Hủy (Hủy thao tác; quay lại danh sách)
##### Button: Lưu (Lưu thông tin; chuyển trạng thái sang "Mới")
#### [C3-27] Màn hình danh sách biên bản nghiệm thu
##### Mục đích
- Hiển thị danh sách biên bản nghiệm thu
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Biên bản nghiệm thu
##### Section
- Title ("Biên bản nghiệm thu")
##### Thanh tìm kiếm/lọc (Input: Từ khóa)
##### Bảng dữ liệu (Cột: Mã BB nghiệm thu)
##### Button Tạo mới (Mở ra Màn hình tạo mới)
##### Phân trang (Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối)

### Quản lý BB thí nghiệm
#### Màn hình danh sách BBTN
##### Mục đích
- Hiển thị danh sách BBTN (Biên bản thí nghiệm)
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Biên bản thí nghiệm
##### Section
- Title ("BBTN (Biên bản thí nghiệm)")
##### Thanh tìm kiếm/lọc (Input: Từ khóa)
##### Bảng dữ liệu (Cột: Mã BBTN (Biên bản thí nghiệm))
##### Button Tạo mới (Mở ra Màn hình tạo mới)
##### Phân trang (Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối)
#### Màn hình tạo mới BBTN
##### Mục đích
- Nhập và lưu thông tin bBTN
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Biên bản thí nghiệm > Tạo mới biên bản thí nghiệm
##### Section
- Form input (Dropdown: Mã HĐ (Hợp đồng)/Thi công liên kết (M))
##### Button: Hủy (Hủy thao tác; quay lại danh sách)
##### Button: Lưu (Lưu thông tin; chuyển trạng thái sang "Mới")
#### Màn hình chỉnh sửa BBTN
##### Mục đích
- Chỉnh sửa thông tin bBTN
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Biên bản thí nghiệm > Chỉnh sửa biên bản thí nghiệm
##### Section
- Form chỉnh sửa (Dropdown: Mã HĐ (Hợp đồng)/Thi công liên kết (M))
##### Button: Hủy (Hủy thao tác; quay lại danh sách)
##### Button: Lưu (Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa)
#### Màn hình xem chi tiết BBTN
##### Mục đích
- Xem chi tiết thông tin màn hình xem chi tiết BBTN (Biên bản thí nghiệm)
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Biên bản thí nghiệm > Xem chi tiết biên bản thí nghiệm
##### Section
- Form Xem chi tiết (Mã BBTN (Biên bản thí nghiệm))
##### icon X (Tắt màn xem chi tiết để trở về màn danh sách)
##### Button: Trình ký số | Ký số | Từ chối (Hiển thị nhóm nút hành động tương ứng với trạng thái)
#### Popup trình ký số
##### Hiển thị popup trình ký số với thông tin người ký và button "Xác nhận"; "Hủy"
#### Popup xác nhận ký số
##### Hiển thị popup xác nhận ký số với button "Đồng ý"; "Hủy"

### VI. Thi công (Phương án / Phân bổ NL / Kiểm soát CL/Dữ liệu TN)
#### [C3-21] Màn hình cập nhật thi công
##### Mục đích
- Chỉnh sửa thông tin màn hình cập nhật thi công
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Thi công > Cập nhật thi công
##### Section
- Form chỉnh sửa (Dropdown: Mã HĐ (Hợp đồng)/Giao việc liên kết (M))
##### Button: Hủy (Hủy thao tác; quay lại danh sách)
##### Button: Lưu (Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa)
#### [C3-20] Màn hình tạo mới thi công
##### Mục đích
- Nhập và lưu thông tin thi công
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Thi công > Tạo mới thi công
##### Section
- Form input (Dropdown: Mã HĐ (Hợp đồng)/Giao việc liên kết (M))
##### Button: Hủy (Hủy thao tác; quay lại danh sách)
##### Button: Lưu (Lưu thông tin; chuyển trạng thái sang "Mới")
#### [C3-19] Màn hình danh sách thi công
##### Mục đích
- Hiển thị danh sách thi công
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Thi công
##### Section
- Title ("Thi công")
##### Thanh tìm kiếm/lọc (Input: Từ khóa)
##### Bảng dữ liệu (Cột: Mã thi công)
##### Button Tạo mới (Mở ra Màn hình tạo mới)
##### Phân trang (Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối)

### XIII. Lập & Phê duyệt HS quyết toán +thanh lý hợp đồng+đánh giá chất lượng công việc
#### Popup xác nhận duyệt
##### Hiển thị popup xác nhận phê duyệt với button "Đồng ý"; "Hủy"
#### Popup gửi duyệt
##### Hiển thị popup xác nhận gửi duyệt với button "Đồng ý"; "Hủy"
#### Popup xác nhận ký
##### Hiển thị popup xác nhận ký số với button "Đồng ý"; "Hủy"
#### Popup trình ký
##### Hiển thị popup trình ký số với thông tin người ký và button "Xác nhận"; "Hủy"
#### [C3-44] Màn hình chi tiết & phê duyệt hồ sơ quyết toán dự án
##### Mục đích
- Xem chi tiết thông tin & phê duyệt hồ sơ quyết toán dự án
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Hồ sơ quyết toán dự án > Xem chi tiết hồ sơ quyết toán dự án
##### Section
- Form Xem chi tiết (Mã)
##### icon X (Tắt màn xem chi tiết để trở về màn danh sách)
##### Button: Gửi / Phê duyệt (Thực hiện hành động chính trên màn hình chi tiết)
#### [C3-43] Màn hình chỉnh sửa hồ sơ quyết toán dự án
##### Mục đích
- Chỉnh sửa thông tin hồ sơ quyết toán dự án
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Hồ sơ quyết toán dự án > Chỉnh sửa hồ sơ quyết toán dự án
##### Section
- Form chỉnh sửa (Tên hồ sơ quyết toán (M))
##### Button: Hủy (Hủy thao tác; quay lại danh sách)
##### Button: Lưu (Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa)
#### [C3-42] Màn hình tạo mới hồ sơ quyết toán dự án
##### Mục đích
- Nhập và lưu thông tin hồ sơ quyết toán dự án
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Hồ sơ quyết toán dự án > Tạo mới hồ sơ quyết toán dự án
##### Section
- Form input (Tên hồ sơ quyết toán (M))
##### Button: Hủy (Hủy thao tác; quay lại danh sách)
##### Button: Lưu (Lưu thông tin; chuyển trạng thái sang "Mới")
#### [C3-41] Màn hình danh sách hồ sơ quyết toán dự án
##### Mục đích
- Hiển thị danh sách hồ sơ quyết toán dự án
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Hồ sơ quyết toán dự án
##### Section
- Title ("Hồ sơ quyết toán dự án")
##### Thanh tìm kiếm/lọc (Input: Từ khóa)
##### Bảng dữ liệu (Cột: Mã)
##### Button Tạo mới (Mở ra Màn hình tạo mới)
##### Phân trang (Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối)

### XV. Quản lý công nợ
#### [C3-49] Màn hình danh sách công nợ
##### Mục đích
- Hiển thị danh sách công nợ
##### Breadcrumb
- Home > Phân hệ THÍ NGHIỆM TẠO DOANH THU > Công nợ
##### Section
- Title ("Công nợ")
##### Thanh tìm kiếm/lọc (Input: Từ khóa)
##### Bảng dữ liệu (Cột: Mã)
##### Button Tạo mới (Mở ra Màn hình tạo mới)
##### Phân trang (Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối)

## C3 – V. Quản lý tiến độ
### [C3-16] Màn hình danh sách quản lý tiến độ
#### Mục đích
##### Hiển thị danh sách quản lý tiến độ thực hiện hợp đồng
#### Breadcrumb
##### Home > TN Doanh thu > Quản lý tiến độ
#### Section
##### Title
- "Quản lý tiến độ"
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo mã / tên hợp đồng)
- Dropdown: Trạng thái (Mới | Đang thực hiện | Hoàn thành | Từ chối)
- Dropdown: Đơn vị
- Date range: Ngày cập nhật
##### Bảng dữ liệu
- Cột: Mã tiến độ
- Cột: Tên hợp đồng
- Cột: % Hoàn thành
- Cột: Đơn vị thực hiện
- Cột: Ngày cập nhật
- Cột: Trạng thái
- Cột: Thao tác (Xem chi tiết | Cập nhật | Xóa)
##### Button Tạo mới
- Mở ra Màn hình tạo mới tiến độ
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

### [C3-17] Màn hình tạo mới quản lý tiến độ
#### Mục đích
##### Nhập thông tin tiến độ thực hiện hợp đồng
#### Breadcrumb
##### Home > TN Doanh thu > Quản lý tiến độ > Tạo mới
#### Section
##### Form input
- Chọn hợp đồng (M) (Dropdown chọn hợp đồng đang thực hiện)
- % Hoàn thành (M) (Nhập số từ 0-100)
- Ngày cập nhật (M) (Mặc định ngày hiện tại)
- Mô tả tiến độ (O) (Tối đa 500 ký tự)
- Văn bản đính kèm (O) (Hỗ trợ PDF/Word/Excel; tối đa 20MB/file)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu tiến độ; chuyển trạng thái sang "Mới"

### [C3-17.1] Màn hình cập nhật tiến độ
#### Mục đích
##### Cập nhật thông tin tiến độ thực hiện hợp đồng
#### Breadcrumb
##### Home > TN Doanh thu > Quản lý tiến độ > Cập nhật
#### Section
##### Form chỉnh sửa
- % Hoàn thành (M) (Cho phép sửa; nhập số từ 0-100)
- Ngày cập nhật (M) (Cho phép sửa)
- Mô tả tiến độ (O) (Cho phép sửa)
- Văn bản đính kèm (O) (Cho phép thêm/xóa file)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin mới cập nhật

### [C3-17.2] Màn hình xem chi tiết tiến độ
#### Mục đích
##### Xem chi tiết tiến độ thực hiện hợp đồng
#### Breadcrumb
##### Home > TN Doanh thu > Quản lý tiến độ > Xem chi tiết
#### Section
##### Form Xem chi tiết
- Mã tiến độ (Không được sửa)
- Tên hợp đồng (Không được sửa)
- % Hoàn thành (Không được sửa)
- Ngày cập nhật (Không được sửa)
- Mô tả tiến độ (Không được sửa)
- Trạng thái (Không được sửa)
- Văn bản đính kèm (Không được sửa; có nút Preview)
##### icon X
- Tắt màn xem chi tiết để trở về màn danh sách

### [C3-17.3] Popup xác nhận xóa tiến độ
#### Hiển thị popup với title "Bạn có chắc chắn xóa bản ghi tiến độ này?" và button "Đồng ý"; "Hủy"
### [C3-17.4] Popup xác nhận gửi duyệt tiến độ
#### Hiển thị popup với title "Bạn có chắc chắn gửi duyệt tiến độ này?" và button "Đồng ý"; "Hủy"
### [C3-17.5] Popup xác nhận gửi thẩm tra tiến độ
#### Hiển thị popup với title "Bạn có chắc chắn gửi thẩm tra tiến độ này?" và button "Đồng ý"; "Hủy"
## C3 – X. Hồ sơ quyết toán
### [C3-32] Màn hình danh sách Hồ sơ quyết toán
#### Mục đích
##### Hiển thị danh sách Hồ sơ quyết toán TN Doanh thu
#### Breadcrumb
##### Home > TN Doanh thu > Hồ sơ quyết toán
#### Section
##### Title
- "Hồ sơ quyết toán"
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo mã / tên hồ sơ)
- Dropdown: Trạng thái (Mới | Đã gửi duyệt | Đã duyệt | Từ chối)
- Dropdown: Đơn vị thực hiện
- Date range: Ngày lập
##### Bảng dữ liệu
- Cột: Mã hồ sơ
- Cột: Tên hợp đồng liên quan
- Cột: Tổng giá trị quyết toán
- Cột: Đơn vị thực hiện
- Cột: Ngày lập
- Cột: Trạng thái
- Cột: Thao tác (Xem chi tiết | Chỉnh sửa | Xóa)
##### Button Tạo mới
- Mở ra Màn hình tạo mới
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

### [C3-33] Màn hình tạo mới Hồ sơ quyết toán
#### Mục đích
##### Nhập và lưu thông tin Hồ sơ quyết toán TN Doanh thu
#### Breadcrumb
##### Home > TN Doanh thu > Hồ sơ quyết toán > Tạo mới
#### Section
##### Form input
- Chọn hợp đồng (M) (Dropdown chọn hợp đồng cần quyết toán)
- Tổng giá trị quyết toán (M)
- Ngày lập (M) (Mặc định ngày hiện tại)
- Ghi chú (O) (Tối đa 500 ký tự)
- Văn bản đính kèm (O) (Hỗ trợ PDF/Word; tối đa 20MB/file)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu hồ sơ; chuyển trạng thái sang "Mới"

### [C3-34] Màn hình chỉnh sửa Hồ sơ quyết toán
#### Mục đích
##### Chỉnh sửa thông tin Hồ sơ quyết toán TN Doanh thu
#### Breadcrumb
##### Home > TN Doanh thu > Hồ sơ quyết toán > Chỉnh sửa
#### Section
##### Form chỉnh sửa
- Tổng giá trị quyết toán (M) (Cho phép sửa)
- Ngày lập (M) (Cho phép sửa)
- Ghi chú (O) (Cho phép sửa; tối đa 500 ký tự)
- Văn bản đính kèm (O) (Cho phép thêm/xóa file)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin mới cập nhật

### [C3-35] Màn hình xem chi tiết Hồ sơ quyết toán
#### Mục đích
##### Xem chi tiết và phê duyệt Hồ sơ quyết toán
#### Breadcrumb
##### Home > TN Doanh thu > Hồ sơ quyết toán > Xem chi tiết
#### Section
##### Form Xem chi tiết
- Mã hồ sơ (Không được sửa)
- Trạng thái (Không được sửa; badge màu)
- Tên hợp đồng liên quan (Không được sửa)
- Tổng giá trị quyết toán (Không được sửa)
- Ngày lập (Không được sửa)
- Ghi chú (Không được sửa)
- Văn bản đính kèm (Không được sửa; có nút Preview)
##### icon X
- Tắt màn xem chi tiết để trở về màn danh sách
##### Button: Gửi duyệt | Trình ký | Thẩm tra | Phê duyệt | Từ chối
- Thực hiện theo quy trình phê duyệt (Hiển thị nút tương ứng trạng thái và quyền)

### [C3-35.1] Popup xác nhận xóa Hồ sơ quyết toán
#### Hiển thị popup với title "Bạn có chắc chắn xóa hồ sơ quyết toán này?" và button "Đồng ý"; "Hủy"
### [C3-35.2] Popup xác nhận gửi duyệt Hồ sơ quyết toán
#### Hiển thị popup với title "Bạn có chắc chắn gửi duyệt hồ sơ quyết toán này?" và button "Đồng ý"; "Hủy"
### [C3-35.3] Popup xác nhận gửi thẩm tra Hồ sơ quyết toán
#### Hiển thị popup với title "Bạn có chắc chắn gửi thẩm tra hồ sơ quyết toán này?" và button "Đồng ý"; "Hủy"
## C3 – XII. Quản lý hợp đồng
### [C3-40] Màn hình danh sách hợp đồng TN Doanh thu
#### Mục đích
##### Hiển thị danh sách hợp đồng trong phân hệ TN Doanh thu
#### Breadcrumb
##### Home > TN Doanh thu > Quản lý hợp đồng
#### Section
##### Title
- "Quản lý hợp đồng"
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo mã / tên hợp đồng)
- Dropdown: Trạng thái (Mới | Đã ký | Đang thực hiện | Thanh lý)
- Date range: Ngày ký
##### Bảng dữ liệu
- Cột: Mã hợp đồng
- Cột: Tên hợp đồng
- Cột: Khách hàng
- Cột: Giá trị hợp đồng
- Cột: Ngày ký
- Cột: Trạng thái
- Cột: Thao tác (Xem chi tiết)
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

### [C3-41] Màn hình xem chi tiết hợp đồng TN Doanh thu
#### Mục đích
##### Xem chi tiết thông tin hợp đồng TN Doanh thu
#### Breadcrumb
##### Home > TN Doanh thu > Quản lý hợp đồng > Xem chi tiết
#### Section
##### Form Xem chi tiết
- Mã hợp đồng (Không được sửa)
- Tên hợp đồng (Không được sửa)
- Khách hàng (Không được sửa)
- Giá trị hợp đồng (Không được sửa)
- Ngày ký (Không được sửa)
- Ngày hết hạn (Không được sửa)
- Trạng thái (Không được sửa)
- Văn bản đính kèm (Không được sửa; có nút Preview)
##### icon X
- Tắt màn xem chi tiết để trở về màn danh sách