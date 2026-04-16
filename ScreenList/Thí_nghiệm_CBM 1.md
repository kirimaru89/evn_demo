# Thí nghiệm CBM

## I. Lập & Phê duyệt&theo dõi Kế hoạch CBM
### [CBM-01] Màn hình danh sách kế hoạch CBM
#### Mục đích
##### Hiển thị danh sách kế hoạch CBM
#### Breadcrumb
##### Home > Phân hệ THÍ NGHIỆM CBM > Kế hoạch CBM
#### Section
##### Title
- "Kế hoạch CBM"
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo tên / mã)
- Dropdown: Trạng thái (Mới | Đã gửi kế hoạch | Đã kiểm tra | Đã gửi duyệt | Đã duyệt | Từ chối)
- Dropdown: Bộ lọc
- Date range: Ngày tạo (Lọc theo khoảng ngày tạo)
##### Bảng dữ liệu
- Cột: STT
- Cột: Tên kế hoạch
- Cột: Tên thiết bị
- Cột: Mã thiết bị
- Cột: Đơn vị thực hiện (Badge màu theo trạng thái)
- Cột: Thời gian thực hiện (Icon: Xem chi tiết | Chỉnh sửa | Xóa)
#### Bảng dữ liệu
##### Bảng dữ liệu
- Cột: Số seri
- Cột: Đơn vị quản lý
- Cột: Trạng thái (Badge màu theo trạng thái: Mới (xám) | Đã gửi kế hoạch (xanh nhạt) | Đã kiểm tra (xanh) | Đã gửi duyệt (cam) | Đã duyệt (xanh lá) | Từ chối (đỏ))
#### Section
##### Button Tạo mới
- Mở ra Màn hình tạo mới
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

### [CBM-02] Màn hình tạo mới kế hoạch CBM
#### Mục đích
##### Nhập và lưu thông tin kế hoạch CBM
#### Breadcrumb
##### Home > Phân hệ THÍ NGHIỆM CBM > Kế hoạch CBM > Tạo mới kế hoạch CBM
#### Section
##### Form input
- Tên kế hoạch (M)
- Thông tin kế hoạch (O)
- Tên thiết bị (M)
- Mã thiết bị (M)
- Số seri (O)
- Đơn vị quản lý (M)
- Vị trí lắp đặt (O)
- Thông số kỹ thuật (O)
- Đơn vị thực hiện (M)
- Thời gian thực hiện (M)
- File đính kèm (O) (Cho phép upload nhiều file)
- Ghi chú (O)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin; chuyển trạng thái sang "Mới"

### [CBM-03] Màn hình chỉnh sửa kế hoạch CBM
#### Mục đích
##### Chỉnh sửa thông tin kế hoạch CBM
#### Breadcrumb
##### Home > Phân hệ THÍ NGHIỆM CBM > Kế hoạch CBM > Chỉnh sửa kế hoạch CBM
#### Section
##### Form chỉnh sửa
- Tên kế hoạch (M) (Cho phép sửa)
- Thông tin kế hoạch (O) (Cho phép sửa)
- Tên thiết bị (M) (Cho phép sửa)
- Mã thiết bị (M) (Cho phép sửa)
- Số seri (O) (Cho phép sửa)
- Đơn vị quản lý (M) (Cho phép sửa)
- Vị trí lắp đặt (O) (Cho phép sửa)
- Thông số kỹ thuật (O) (Cho phép sửa)
- Đơn vị thực hiện (M) (Cho phép sửa)
- Thời gian thực hiện (M) (Cho phép sửa)
- File đính kèm (O) (Cho phép upload nhiều file)
- Ghi chú (O) (Cho phép sửa)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa

### [CBM-04.1] Popup xác nhận duyệt
#### Hiển thị popup xác nhận phê duyệt với button "Đồng ý"; "Hủy"
### [CBM-04.2] Popup gửi duyệt
#### Hiển thị popup xác nhận gửi duyệt với button "Đồng ý"; "Hủy"
### [CBM-04] Màn hình chi tiết & phê duyệt kế hoạch CBM
#### Mục đích
##### Xem chi tiết thông tin & phê duyệt kế hoạch CBM
#### Breadcrumb
##### Home > Phân hệ THÍ NGHIỆM CBM > Kế hoạch CBM > Xem chi tiết kế hoạch CBM
#### Section
##### Form Xem chi tiết
- Mã kế hoạch (Không được sửa)
- Trạng thái (Không được sửa)
- Tên kế hoạch (Không được sửa)
- Thông tin kế hoạch (Không được sửa)
- Tên thiết bị (Không được sửa)
- Mã thiết bị (Không được sửa)
- Số seri (Không được sửa)
- Đơn vị quản lý (Không được sửa)
- Vị trí lắp đặt (Không được sửa)
- Thông số kỹ thuật (Không được sửa)
- Đơn vị thực hiện (Không được sửa)
- Thời gian thực hiện (Không được sửa)
- File đính kèm (Không được sửa)
- Ghi chú (Không được sửa)
##### icon X
- Tắt màn xem chi tiết để trở về màn danh sách
##### Button: Gửi kiểm tra
- Gửi kế hoạch cho kỹ thuật viên kiểm tra; hiển thị popup xác nhận (Hiển thị khi trạng thái = Mới)
##### Button: Gửi duyệt
- Gửi kế hoạch cho PC (Công ty Điện lực) duyệt; hiển thị popup xác nhận (Hiển thị khi trạng thái = Đã kiểm tra)
##### Button: PC (Công ty Điện lực) duyệt
- Duyệt kế hoạch; chuyển trạng thái sang Đã duyệt (Hiển thị khi trạng thái = Đã gửi duyệt)
##### Button: PC (Công ty Điện lực) từ chối
- Từ chối kế hoạch; chuyển trạng thái sang Từ chối; yêu cầu nhập lý do (Hiển thị khi trạng thái = Đã gửi duyệt)

### [CBM-05] Popup xác nhận xóa kế hoạch CBM
#### Popup
##### Xác nhận xóa kế hoạch CBM
- Title: "Bạn có chắc chắn xóa kế hoạch CBM?" | Button: Đồng ý | Hủy

### Popup xác nhận Gửi kiểm tra
#### Popup
##### Xác nhận gửi kiểm tra kế hoạch CBM
- Title: "Bạn có chắc chắn gửi kiểm tra kế hoạch CBM?" | Button: Đồng ý | Hủy

### Popup xác nhận gửi duyệt
#### Popup
##### Xác nhận gửi duyệt kế hoạch CBM
- Title: "Bạn có chắc chắn gửi duyệt kế hoạch CBM?" | Button: Đồng ý | Hủy

## III. Lập & Phê duyệt Báo cáo CBM
### [CBM-06] Màn hình danh sách báo cáo
#### Mục đích
##### Hiển thị danh sách báo cáo CBM
#### Breadcrumb
##### Home > Phân hệ THÍ NGHIỆM CBM > báo cáo CBM
#### Section
##### Title
- "báo cáo CBM"
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo tên / mã)
- Dropdown: Trạng thái (Mới | Đã gửi kiểm tra | Đã kiểm tra | Đã gửi duyệt | Đã duyệt | Từ chối)
- Dropdown: Bộ lọc
- Date range: Ngày tạo (Lọc theo khoảng ngày tạo)
##### Bảng dữ liệu
- Cột: STT
- Cột: Tên báo cáo
- Cột: Loại biên bản
- Cột: Tên thiết bị
- Cột: Đơn vị thực hiện
- Cột: Ngày thực hiện (Định dạng DD/MM/YYYY)
- Cột: Trạng thái (Badge màu theo trạng thái: Mới (xám) | Đã gửi kiểm tra (xanh nhạt) | Đã kiểm tra (xanh) | Đã gửi duyệt (cam) | Đã duyệt (xanh lá) | Từ chối (đỏ))
- Cột: Thao tác (Icon: Xem chi tiết | Chỉnh sửa | Xóa)
##### Button Tạo mới
- Mở ra Màn hình tạo mới
- Mở ra Màn hình tạo mới
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

### [CBM-07] Màn hình tạo mới báo cáo CBM
#### Mục đích
##### Nhập và lưu thông tin báo cáo CBM
#### Breadcrumb
##### Home > Phân hệ THÍ NGHIỆM CBM > báo cáo CBM > Tạo mới báo cáo CBM
#### Section
##### Form input
- Tên báo cáo (M)
- Loại biên bản (M) (Dropdown chọn loại biên bản)
- Tên thiết bị (M)
- Mã thiết bị (M)
- Đơn vị quản lý (M)
- Đơn vị thực hiện (M)
- Vị trí lắp đặt (O)
- Ngày thực hiện (M) (Date picker)
- Kết quả thí nghiệm (M)
- Kết quả đánh giá (O)
- File đính kèm (O) (Cho phép upload nhiều file)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin; chuyển trạng thái sang "Mới"

### [CBM-08] Màn hình chỉnh sửa báo cáo CBM
#### Mục đích
##### Chỉnh sửa thông tin báo cáo CBM
#### Breadcrumb
##### Home > Phân hệ THÍ NGHIỆM CBM > báo cáo CBM > Chỉnh sửa báo cáo CBM
#### Section
##### Form chỉnh sửa
- Tên báo cáo (M) (Cho phép sửa)
- Loại biên bản (M) (Dropdown chọn loại biên bản; Cho phép sửa)
- Tên thiết bị (M) (Cho phép sửa)
- Mã thiết bị (M) (Cho phép sửa)
- Đơn vị quản lý (M) (Cho phép sửa)
- Đơn vị thực hiện (M) (Cho phép sửa)
- Vị trí lắp đặt (O) (Cho phép sửa)
- Ngày thực hiện (M) (Date picker; Cho phép sửa)
- Kết quả thí nghiệm (M) (Cho phép sửa)
- Kết quả đánh giá (O) (Cho phép sửa)
- File đính kèm (O) (Cho phép upload nhiều file)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa

### [CBM-11.1] Popup xác nhận duyệt
#### Hiển thị popup xác nhận phê duyệt với button "Đồng ý"; "Hủy"
### [CBM-11.2] Popup gửi duyệt
#### Hiển thị popup xác nhận gửi duyệt với button "Đồng ý"; "Hủy"
### [CBM-09] Màn hình chi tiết & phê duyệt báo cáo CBM
#### Mục đích
##### Xem chi tiết thông tin & phê duyệt báo cáo CBM
#### Breadcrumb
##### Home > Phân hệ THÍ NGHIỆM CBM > báo cáo CBM > Xem chi tiết báo cáo CBM
#### Section
##### Form Xem chi tiết
- Mã báo cáo (Không được sửa)
- Trạng thái (Không được sửa)
- Tên báo cáo (Không được sửa)
- Loại biên bản (Không được sửa)
- Tên thiết bị (Không được sửa)
- Mã thiết bị (Không được sửa)
- Đơn vị quản lý (Không được sửa)
- Đơn vị thực hiện (Không được sửa)
- Vị trí lắp đặt (Không được sửa)
- Ngày thực hiện (Không được sửa)
- Kết quả thí nghiệm (Không được sửa)
- Kết quả đánh giá (Không được sửa)
- File đính kèm (Không được sửa)
##### icon X
- Tắt màn xem chi tiết để trở về màn danh sách
##### Button: Gửi kiểm tra
- Gửi báo cáo cho kỹ thuật viên kiểm tra; hiển thị popup xác nhận (Hiển thị khi trạng thái = Mới)
##### Button: Gửi duyệt
- Gửi báo cáo cho PC (Công ty Điện lực) duyệt; hiển thị popup xác nhận (Hiển thị khi trạng thái = Đã kiểm tra)
##### Button: PC (Công ty Điện lực) duyệt
- Duyệt báo cáo; chuyển trạng thái sang Đã duyệt (Hiển thị khi trạng thái = Đã gửi duyệt)
##### Button: PC (Công ty Điện lực) từ chối
- Từ chối báo cáo; chuyển trạng thái sang Từ chối; yêu cầu nhập lý do (Hiển thị khi trạng thái = Đã gửi duyệt)

### [CBM-10] Popup xác nhận xóa báo cáo CBM
#### Popup
##### Xác nhận xóa báo cáo CBM
- Title: "Bạn có chắc chắn xóa báo cáo CBM?" | Button: Đồng ý | Hủy

### Popup trình ký
#### Popup
##### Trình ký số
- Hiển thị popup trình ký số với thông tin người ký | Button: Xác nhận | Hủy

### Popup xác nhận ký
#### Popup
##### Xác nhận ký số
- Hiển thị popup xác nhận ký số | Button: Đồng ý | Hủy

## IV. Biên bản thí nghiệm CBM
### Màn hình Danh sách Biên bản thí nghiệm CBM
#### Mục đích
##### Hiển thị danh sách biên bản thí nghiệm CBM
#### Breadcrumb
##### Home > Phân hệ THÍ NGHIỆM CBM > Biên bản thí nghiệm CBM
#### Section
##### Title
- "Biên bản thí nghiệm CBM"
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo tên / mã biên bản)
- Dropdown: Trạng thái (Mới | Đã gửi kiểm tra | Đã kiểm tra | Đã gửi duyệt | Đã duyệt | Từ chối)
- Dropdown: Loại biên bản
- Date range: Ngày thực hiện (Lọc theo khoảng ngày thực hiện thí nghiệm)
##### Bảng dữ liệu
- Cột: STT
- Cột: Tên biên bản
- Cột: Loại biên bản
- Cột: Tên thiết bị
- Cột: Đơn vị quản lý
- Cột: Đơn vị thực hiện
- Cột: Ngày thực hiện (Định dạng DD/MM/YYYY)
- Cột: Trạng thái (Badge màu theo trạng thái: Mới (xám) | Đã gửi KT (xanh nhạt) | Đã KT (xanh) | Đã gửi duyệt (cam) | Đã duyệt (xanh lá) | Từ chối (đỏ))
- Cột: Thao tác (Icon: Xem chi tiết | Chỉnh sửa | Xóa)
##### Button Tạo mới
- Mở ra Màn hình tạo mới biên bản
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

### Màn hình tạo mới Biên bản thí nghiệm CBM
#### Mục đích
##### Nhập và lưu thông tin biên bản thí nghiệm CBM
#### Breadcrumb
##### Home > Phân hệ THÍ NGHIỆM CBM > Biên bản thí nghiệm CBM > Tạo mới biên bản
#### Section
##### Form input
- Tên biên bản (M)
- Loại biên bản (M) (Dropdown chọn loại biên bản)
- Tên thiết bị (M)
- Mã thiết bị (M)
- Thông số kỹ thuật (O)
- Vị trí lắp đặt (O)
- Đơn vị quản lý (M)
- Đơn vị thực hiện (M)
- Ngày thực hiện thí nghiệm (M) (Date picker)
- Tình trạng thí nghiệm (O)
- Kết quả thí nghiệm (M)
- File đính kèm (O) (Cho phép upload nhiều file)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách biên bản
##### Button: Lưu
- Lưu thông tin; chuyển trạng thái sang "Mới"

### Màn hình Chỉnh sửa Biên bản thí nghiệm CBM
#### Mục đích
##### Chỉnh sửa thông tin biên bản thí nghiệm CBM
#### Breadcrumb
##### Home > Phân hệ THÍ NGHIỆM CBM > Biên bản thí nghiệm CBM > Chỉnh sửa biên bản
#### Section
##### Form chỉnh sửa
- Tên biên bản (M) (Cho phép sửa)
- Loại biên bản (M) (Dropdown; Cho phép sửa)
- Tên thiết bị (M) (Cho phép sửa)
- Mã thiết bị (M) (Cho phép sửa)
- Thông số kỹ thuật (O) (Cho phép sửa)
- Vị trí lắp đặt (O) (Cho phép sửa)
- Đơn vị quản lý (M) (Cho phép sửa)
- Đơn vị thực hiện (M) (Cho phép sửa)
- Ngày thực hiện thí nghiệm (M) (Date picker; Cho phép sửa)
- Tình trạng thí nghiệm (O) (Cho phép sửa)
- Kết quả thí nghiệm (M) (Cho phép sửa)
- File đính kèm (O) (Cho phép upload nhiều file)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách biên bản
##### Button: Lưu
- Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa

### Màn hình xem chi tiết Biên bản thí nghiệm CBM
#### Mục đích
##### Xem chi tiết thông tin & phê duyệt biên bản thí nghiệm CBM
#### Breadcrumb
##### Home > Phân hệ THÍ NGHIỆM CBM > Biên bản thí nghiệm CBM > Xem chi tiết biên bản
#### Section
##### Form Xem chi tiết
- Mã biên bản (Không được sửa)
- Trạng thái (Không được sửa)
- Tên biên bản (Không được sửa)
- Loại biên bản (Không được sửa)
- Tên thiết bị (Không được sửa)
- Mã thiết bị (Không được sửa)
- Thông số kỹ thuật (Không được sửa)
- Vị trí lắp đặt (Không được sửa)
- Đơn vị quản lý (Không được sửa)
- Đơn vị thực hiện (Không được sửa)
- Ngày thực hiện thí nghiệm (Không được sửa)
- Tình trạng thí nghiệm (Không được sửa)
- Kết quả thí nghiệm (Không được sửa)
- File đính kèm (Không được sửa)
##### icon X
- Tắt màn xem chi tiết để trở về màn danh sách
##### Button: Gửi kiểm tra
- Gửi biên bản cho kỹ thuật viên kiểm tra; hiển thị popup xác nhận (Hiển thị khi trạng thái = Mới)
##### Button: Gửi duyệt
- Gửi biên bản cho PC (Công ty Điện lực) duyệt; hiển thị popup xác nhận (Hiển thị khi trạng thái = Đã kiểm tra)
##### Button: PC (Công ty Điện lực) duyệt
- Duyệt biên bản; chuyển trạng thái sang Đã duyệt (Hiển thị khi trạng thái = Đã gửi duyệt)
##### Button: PC (Công ty Điện lực) từ chối
- Từ chối biên bản; chuyển trạng thái sang Từ chối; yêu cầu nhập lý do (Hiển thị khi trạng thái = Đã gửi duyệt)

### Popup Xác nhận gửi kiểm tra biên bản
#### Title: "Bạn có chắc chắn gửi kiểm tra biên bản này?" | Button: Đồng ý | Hủy
### Popup Xác nhận gửi duyệt biên bản
#### Title: "Bạn có chắc chắn gửi duyệt biên bản này?" | Button: Đồng ý | Hủy
### Popup Xác nhận xóa biên bản
#### Title: "Bạn có chắc chắn xóa biên bản này?" | Button: Đồng ý | Hủy