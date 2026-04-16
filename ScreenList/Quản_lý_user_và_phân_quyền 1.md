# Quản lý user và phân quyền

### I. Quản lý người dùng
#### [ADM-01] Màn hình danh sách người dùng
##### Mục đích
- Hiển thị danh sách người dùng
##### Breadcrumb
- Home > Phân hệ ADMIN > Người dùng
##### Section
- Title ("Người dùng")
- Thanh tìm kiếm/lọc (Input: Từ khóa)
- Thanh tìm kiếm/lọc (Dropdown: Trạng thái)
- Thanh tìm kiếm/lọc (Dropdown: Bộ lọc)
- Thanh tìm kiếm/lọc (Date range: Ngày tạo)
- Bảng dữ liệu (Cột: Mã)
- Bảng dữ liệu (Cột: Tên / Mô tả)
- Bảng dữ liệu (Cột: Đơn vị)
- Bảng dữ liệu (Cột: Ngày tạo)
- Bảng dữ liệu (Cột: Trạng thái)
- Bảng dữ liệu (Cột: Thao tác)
- Button Tạo mới (Mở ra Màn hình tạo mới)
- Phân trang (Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối)
#### [ADM-02] Màn hình tạo mới người dùng
##### Mục đích
- Nhập và lưu thông tin người dùng
##### Breadcrumb
- Home > Phân hệ ADMIN > Người dùng > Tạo mới người dùng
##### Section
- Form input (Tên người dùng (M))
- Form input (Email (M))
- Form input (Số điện thoại (O))
- Form input (Đơn vị / Phòng ban (M))
- Form input (Chức vụ (O))
- Form input (Role (M))
- Button: Hủy (Hủy thao tác; quay lại danh sách)
- Button: Lưu (Lưu thông tin; chuyển trạng thái sang "Mới")
#### [ADM-03] Màn hình chỉnh sửa người dùng
##### Mục đích
- Chỉnh sửa thông tin người dùng
##### Breadcrumb
- Home > Phân hệ ADMIN > Người dùng > Chỉnh sửa người dùng
##### Section
- Form chỉnh sửa (Tên người dùng (M))
- Form chỉnh sửa (Email (M))
- Form chỉnh sửa (Số điện thoại (O))
- Form chỉnh sửa (Đơn vị / Phòng ban (M))
- Form chỉnh sửa (Chức vụ (O))
- Form chỉnh sửa (Role (M))
- Button: Hủy (Hủy thao tác; quay lại danh sách)
- Button: Lưu (Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa)
#### [ADM-04] Popup xác nhận vô hiệu hóa / kích hoạt người dùng
##### Hiển thị popup với title "Bạn có chắc chắn thực hiện thao tác này?" và button "Đồng ý"; "Hủy"

### II. Quản lý Role & Phân quyền
#### [ADM-05] Màn hình danh sách role
##### Mục đích
- Hiển thị danh sách role
##### Breadcrumb
- Home > Phân hệ ADMIN > Role
##### Section
- Title ("Role")
- Thanh tìm kiếm/lọc (Input: Từ khóa)
- Thanh tìm kiếm/lọc (Dropdown: Trạng thái)
- Thanh tìm kiếm/lọc (Dropdown: Bộ lọc)
- Thanh tìm kiếm/lọc (Date range: Ngày tạo)
- Bảng dữ liệu (Cột: Mã)
- Bảng dữ liệu (Cột: Tên / Mô tả)
- Bảng dữ liệu (Cột: Đơn vị)
- Bảng dữ liệu (Cột: Ngày tạo)
- Bảng dữ liệu (Cột: Trạng thái)
- Bảng dữ liệu (Cột: Thao tác)
- Button Tạo mới (Mở ra Màn hình tạo mới)
- Phân trang (Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối)
#### [ADM-06] Màn hình tạo mới role & phân quyền
##### Mục đích
- Nhập và lưu thông tin role & phân quyền
##### Breadcrumb
- Home > Phân hệ ADMIN > Role > Tạo mới role & phân quyền
##### Section
- Form input (Mã role (M))
- Form input (Tên role (M))
- Form input (Mô tả (O))
- Form input (Phân hệ áp dụng (M))
- Form input (Danh sách quyền (M))
- Form input (Ghi chú (O))
- Button: Hủy (Hủy thao tác; quay lại danh sách)
- Button: Lưu (Lưu thông tin; chuyển trạng thái sang "Mới")
#### [ADM-07] Màn hình chỉnh sửa role & phân quyền
##### Mục đích
- Chỉnh sửa thông tin role & phân quyền
##### Breadcrumb
- Home > Phân hệ ADMIN > Role > Chỉnh sửa role & phân quyền
##### Section
- Form chỉnh sửa (Mã role (M))
- Form chỉnh sửa (Tên role (M))
- Form chỉnh sửa (Mô tả (O))
- Form chỉnh sửa (Phân hệ áp dụng (M))
- Form chỉnh sửa (Danh sách quyền (M))
- Form chỉnh sửa (Ghi chú (O))
- Button: Hủy (Hủy thao tác; quay lại danh sách)
- Button: Lưu (Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa)
#### [ADM-08] Popup xác nhận xóa role
##### Hiển thị popup với title "Bạn có chắc chắn xóa role?" và button "Đồng ý"; "Hủy"

### III. Quản lý danh mục hệ thống
#### [ADM-09] Màn hình danh sách đơn vị / phòng ban
##### Mục đích
- Hiển thị danh sách đơn vị / phòng ban
##### Breadcrumb
- Home > Phân hệ ADMIN > Đơn vị / phòng ban
##### Section
- Title ("Đơn vị / phòng ban")
- Thanh tìm kiếm/lọc (Input: Từ khóa)
- Thanh tìm kiếm/lọc (Dropdown: Trạng thái)
- Thanh tìm kiếm/lọc (Dropdown: Bộ lọc)
- Thanh tìm kiếm/lọc (Date range: Ngày tạo)
- Bảng dữ liệu (Cột: Mã)
- Bảng dữ liệu (Cột: Tên / Mô tả)
- Bảng dữ liệu (Cột: Đơn vị)
- Bảng dữ liệu (Cột: Ngày tạo)
- Bảng dữ liệu (Cột: Trạng thái)
- Bảng dữ liệu (Cột: Thao tác)
- Button Tạo mới (Mở ra Màn hình tạo mới)
- Phân trang (Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối)
#### [ADM-10] Màn hình tạo mới đơn vị
##### Mục đích
- Nhập và lưu thông tin đơn vị
##### Breadcrumb
- Home > Phân hệ ADMIN > Đơn vị / phòng ban > Tạo mới đơn vị
##### Section
- Form input (Mã đơn vị (M))
- Form input (Tên đơn vị (M))
- Form input (Mô tả (O))
- Form input (Đơn vị cấp trên (O))
- Form input (Trạng thái (M))
- Form input (Ghi chú (O))
- Button: Hủy (Hủy thao tác; quay lại danh sách)
- Button: Lưu (Lưu thông tin; chuyển trạng thái sang "Mới")
#### [ADM-11] Màn hình chỉnh sửa đơn vị
##### Mục đích
- Chỉnh sửa thông tin đơn vị
##### Breadcrumb
- Home > Phân hệ ADMIN > Đơn vị / phòng ban > Chỉnh sửa đơn vị
##### Section
- Form chỉnh sửa (Mã đơn vị (M))
- Form chỉnh sửa (Tên đơn vị (M))
- Form chỉnh sửa (Mô tả (O))
- Form chỉnh sửa (Đơn vị cấp trên (O))
- Form chỉnh sửa (Trạng thái (M))
- Form chỉnh sửa (Ghi chú (O))
- Button: Hủy (Hủy thao tác; quay lại danh sách)
- Button: Lưu (Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa)
#### [ADM-12] Màn hình danh sách danh mục vật tư
##### Mục đích
- Hiển thị danh sách danh mục vật tư
##### Breadcrumb
- Home > Phân hệ ADMIN > Danh mục vật tư
##### Section
- Title ("Danh mục vật tư")
- Thanh tìm kiếm/lọc (Input: Từ khóa)
- Thanh tìm kiếm/lọc (Dropdown: Trạng thái)
- Thanh tìm kiếm/lọc (Dropdown: Bộ lọc)
- Thanh tìm kiếm/lọc (Date range: Ngày tạo)
- Bảng dữ liệu (Cột: Mã)
- Bảng dữ liệu (Cột: Tên / Mô tả)
- Bảng dữ liệu (Cột: Đơn vị)
- Bảng dữ liệu (Cột: Ngày tạo)
- Bảng dữ liệu (Cột: Trạng thái)
- Bảng dữ liệu (Cột: Thao tác)
- Button Tạo mới (Mở ra Màn hình tạo mới)
- Phân trang (Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối)
#### [ADM-13] Màn hình tạo mới danh mục vật tư
##### Mục đích
- Nhập và lưu thông tin danh mục vật tư
##### Breadcrumb
- Home > Phân hệ ADMIN > Danh mục vật tư > Tạo mới danh mục vật tư
##### Section
- Form input (Mã vật tư (M))
- Form input (Tên vật tư (M))
- Form input (Đơn vị tính (M))
- Form input (Loại vật tư (O))
- Form input (Mô tả (O))
- Form input (Ghi chú (O))
- Button: Hủy (Hủy thao tác; quay lại danh sách)
- Button: Lưu (Lưu thông tin; chuyển trạng thái sang "Mới")
#### [ADM-14] Màn hình chỉnh sửa danh mục vật tư
##### Mục đích
- Chỉnh sửa thông tin danh mục vật tư
##### Breadcrumb
- Home > Phân hệ ADMIN > Danh mục vật tư > Chỉnh sửa danh mục vật tư
##### Section
- Form chỉnh sửa (Mã vật tư (M))
- Form chỉnh sửa (Tên vật tư (M))
- Form chỉnh sửa (Đơn vị tính (M))
- Form chỉnh sửa (Loại vật tư (O))
- Form chỉnh sửa (Mô tả (O))
- Form chỉnh sửa (Ghi chú (O))
- Button: Hủy (Hủy thao tác; quay lại danh sách)
- Button: Lưu (Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa)

### V. Nhật ký hệ thống
#### [ADM-15] Màn hình danh sách nhật ký hệ thống (audit log)
##### Mục đích
- Hiển thị danh sách nhật ký hệ thống (audit log)
##### Breadcrumb
- Home > Phân hệ ADMIN > Nhật ký hệ thống (audit log)
##### Section
- Title ("Nhật ký hệ thống (audit log)")
- Thanh tìm kiếm/lọc (Input: Từ khóa)
- Thanh tìm kiếm/lọc (Dropdown: Trạng thái)
- Thanh tìm kiếm/lọc (Dropdown: Bộ lọc)
- Thanh tìm kiếm/lọc (Date range: Ngày tạo)
- Bảng dữ liệu (Cột: Mã)
- Bảng dữ liệu (Cột: Tên / Mô tả)
- Bảng dữ liệu (Cột: Đơn vị)
- Bảng dữ liệu (Cột: Ngày tạo)
- Bảng dữ liệu (Cột: Trạng thái)
- Bảng dữ liệu (Cột: Thao tác)
- Button Tạo mới (Mở ra Màn hình tạo mới)
- Phân trang (Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối)
#### [ADM-16] Màn hình chi tiết nhật ký hệ thống
##### Mục đích
- Xem chi tiết thông tin nhật ký hệ thống
##### Breadcrumb
- Home > Phân hệ ADMIN > Nhật ký hệ thống > Xem chi tiết nhật ký hệ thống
##### Section
- Form Xem chi tiết (Mã)
- Form Xem chi tiết (Trạng thái)
- Form Xem chi tiết (Người thực hiện)
- Form Xem chi tiết (Hành động / Loại thao tác)
- Form Xem chi tiết (Đối tượng bị tác động)
- Form Xem chi tiết (Thời gian thực hiện)
- Form Xem chi tiết (Địa chỉ IP)
- Form Xem chi tiết (Chi tiết thay đổi)
- icon X (Tắt màn xem chi tiết để trở về màn danh sách)
- Button: Gửi / Phê duyệt (Thực hiện hành động chính trên màn hình chi tiết)