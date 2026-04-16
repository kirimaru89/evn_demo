# Tư vấn thiết kế

## I. Tiếp nhận kế hoạch phân bổ vốn ĐTXD (Đầu tư xây dựng)
### [TVTK-01] Màn hình danh sách kế hoạch phân bổ vốn ĐTXD (Đầu tư xây dựng)
#### Mục đích
##### Hiển thị danh sách kế hoạch phân bổ vốn ĐTXD (Đầu tư xây dựng)
#### Breadcrumb
##### Home > Phân hệ TƯ VẤN THIẾT KẼ > Kế hoạch phân bổ vốn ĐTXD (Đầu tư xây dựng)
#### Section
##### Title
- "Kế hoạch phân bổ vốn ĐTXD (Đầu tư xây dựng)"
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo tên / mã kế hoạch)
- Dropdown: Trạng thái (Mới | Đã gửi duyệt | Đã duyệt | Từ chối)
- Dropdown: Năm kế hoạch (Lọc theo năm kế hoạch)
- Date range: Năm kế hoạch (Lọc theo năm kế hoạch)
##### Bảng dữ liệu
- Cột: Mã kế hoạch (Tự động sinh sau khi tạo mới thành công)
- Cột: Tên kế hoạch phân bổ vốn
- Cột: Đơn vị quản lý
- Cột: Năm kế hoạch (Định dạng YYYY)
- Cột: Tổng mức vốn ĐTXD (Đầu tư xây dựng) (VNĐ) (Badge màu theo trạng thái)
- Cột: Trạng thái (Icon: Xem chi tiết | Chỉnh sửa | Xóa; Xóa chỉ hiển thị khi trạng thái = Mới)
##### Button Tạo mới
- Mở ra Màn hình tạo mới
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

### [TVTK-02] Màn hình tạo mới kế hoạch phân bổ vốn ĐTXD (Đầu tư xây dựng)
#### Mục đích
##### Nhập và lưu thông tin kế hoạch phân bổ vốn ĐTXD (Đầu tư xây dựng)
#### Breadcrumb
##### Home > Phân hệ TƯ VẤN THIẾT KẼ > Màn hình tạo mới kế hoạch phân bổ vốn ĐTXD (Đầu tư xây dựng)
#### Section
##### Form input
- Tên kế hoạch phân bổ vốn (M) (Nhập chuỗi ký tự)
- Năm kế hoạch (M) (Dropdown / Nhập số năm)
- Tổng mức vốn ĐTXD (Đầu tư xây dựng) (VNĐ) (M) (Nhập số; định dạng tương tiền VNĐ)
- Đơn vị quản lý (M) (Dropdown chọn đơn vị)
- Nguồn vốn (O) (Dropdown: Nguồn NSNN / ODA / Trái phiếu / Khác)
- Ghi chú / Mô tả (O) (Textarea tự nhập)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin; chuyển trạng thái sang "Mới"

### [TVTK-03] Màn hình chi tiết kế hoạch phân bổ vốn ĐTXD (Đầu tư xây dựng)
#### Mục đích
##### Xem chi tiết thông tin kế hoạch phân bổ vốn ĐTXD (Đầu tư xây dựng)
#### Breadcrumb
##### Home > Phân hệ TƯ VẤN THIẾT KẼ > Màn hình chi tiết kế hoạch phân bổ vốn ĐTXD (Đầu tư xây dựng)
#### Section
##### Form Xem chi tiết
- Mã kế hoạch (Không được sửa; Tự động sinh)
- Trạng thái (Không được sửa; Hiển thị badge màu)
- Tên kế hoạch phân bổ vốn (Không được sửa)
- Năm kế hoạch (Không được sửa)
- Tổng mức vốn ĐTXD (Đầu tư xây dựng) (VNĐ) (Không được sửa)
- Đơn vị quản lý (Không được sửa)
- Nguồn vốn (Không được sửa)
- Ghi chú / Mô tả (Không được sửa)
##### icon X
- Tắt màn xem chi tiết để trở về màn danh sách
##### Button: Gửi / Phê duyệt
- Button: Gửi duyệt | Duyệt | Từ chối (Gửi duyệt: trạng thái Mới → Đã gửi duyệt; Duyệt: Đã gửi duyệt → Đã duyệt; Từ chối: Đã gửi duyệt → Từ chối)

## II. Phân bổ TMĐT (Tổng mức đầu tư) & Yêu cầu lập PĐT (Phương án đầu tư)
### [TVTK-04] Màn hình danh sách TMĐT (Tổng mức đầu tư) & yêu cầu lập phương án đầu tư
#### Mục đích
##### Hiển thị danh sách TMĐT (Tổng mức đầu tư) & yêu cầu lập phương án đầu tư
#### Breadcrumb
##### Home > Phân hệ TƯ VẤN THIẾT KẼ > TMĐT (Tổng mức đầu tư) & yêu cầu lập phương án đầu tư
#### Section
##### Title
- "TMĐT (Tổng mức đầu tư) & Yêu cầu lập phương án đầu tư"
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo tên dự án / mã TMĐT)
- Dropdown: Trạng thái (Mới | Đã gửi duyệt | Đã duyệt | Từ chối)
- Dropdown: Loại dự án / giai đoạn (Lọc theo loại dự án)
- Date range: Năm kế hoạch (Lọc theo năm kế hoạch)
##### Bảng dữ liệu
- Cột: Mã TMĐT (Tự động sinh sau khi tạo mới thành công)
- Cột: Tên dự án / công trình
- Cột: Đơn vị quản lý
- Cột: Năm kế hoạch (Định dạng YYYY)
- Cột: Trạng thái (Badge màu theo trạng thái)
- Cột: Thao tác (Icon: Xem chi tiết | Chỉnh sửa | Xóa; Xóa chỉ hiển thị khi trạng thái = Mới)
##### Button Tạo mới
- Mở ra Màn hình tạo mới
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

### [TVTK-05] Màn hình tạo mới TMĐT (Tổng mức đầu tư)
#### Mục đích
##### Nhập và lưu thông tin TMĐT (Tổng mức đầu tư)
#### Breadcrumb
##### Home > Phân hệ TƯ VẤN THIẾT KẼ > Màn hình tạo mới TMĐT (Tổng mức đầu tư)
#### Section
##### Form input
- Tên dự án / công trình (M) (Nhập chuỗi ký tự)
- TMĐT (Tổng mức đầu tư) (VNĐ) (M) (Nhập số; định dạng VNĐ)
- Năm kế hoạch (O) (Dropdown năm)
- Đơn vị quản lý (M) (Dropdown chọn đơn vị)
- Loại công trình (O) (Dropdown: Xây mới / Cải tạo / Nâng cấp)
- Ghi chú / Mô tả (M) (Textarea)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin; chuyển trạng thái sang "Mới"

### [TVTK-06] Màn hình chỉnh sửa TMĐT (Tổng mức đầu tư)
#### Mục đích
##### Chỉnh sửa thông tin TMĐT (Tổng mức đầu tư)
#### Breadcrumb
##### Home > Phân hệ TƯ VẤN THIẾT KẼ > Màn hình chỉnh sửa TMĐT (Tổng mức đầu tư)
#### Section
##### Form chỉnh sửa
- Tên dự án / công trình (M) (Cho phép sửa; Nhập chuỗi ký tự)
- TMĐT (Tổng mức đầu tư) (VNĐ) (M) (Cho phép sửa; Nhập số)
- Năm kế hoạch (O) (Cho phép sửa; Dropdown năm)
- Đơn vị quản lý (M) (Cho phép sửa; Dropdown)
- Loại công trình (O) (Cho phép sửa; Dropdown)
- Ghi chú / Mô tả (M) (Cho phép sửa; Textarea)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa

### [TVTK-07] Màn hình chi tiết TMĐT (Tổng mức đầu tư)
#### Mục đích
##### Xem chi tiết thông tin TMĐT (Tổng mức đầu tư)
#### Breadcrumb
##### Home > Phân hệ TƯ VẤN THIẾT KẼ > Màn hình chi tiết TMĐT (Tổng mức đầu tư)
#### Section
##### Form Xem chi tiết
- Mã TMĐT (Không được sửa; Tự động sinh)
- Trạng thái (Không được sửa; Hiển thị badge màu)
- Tên dự án / công trình (Không được sửa)
- TMĐT (Tổng mức đầu tư) (VNĐ) (Không được sửa)
- Năm kế hoạch (Không được sửa)
- Đơn vị quản lý (Không được sửa)
- Loại công trình (Không được sửa)
- Ghi chú / Mô tả (Không được sửa)
##### icon X
- Tắt màn xem chi tiết để trở về màn danh sách
##### Button: Gửi / Phê duyệt
- Button: Gửi duyệt | Duyệt | Từ chối (Gửi duyệt: trạng thái Mới → Đã gửi duyệt; Duyệt: Đã gửi duyệt → Đã duyệt; Từ chối: Đã gửi duyệt → Từ chối)

## IV. Lập PATTH (Phương án thực hiện) KS-TK (Khảo sát - Thiết kế)
### [TVTK-13] Màn hình danh sách PATTH (Phương án thực hiện) khảo sát thiết kế
#### Mục đích
##### Hiển thị danh sách PATTH (Phương án thực hiện) khảo sát thiết kế
#### Breadcrumb
##### Home > Phân hệ TƯ VẤN THIẾT KẼ > PATTH (Phương án thực hiện) khảo sát thiết kế
#### Section
##### Title
- "PATTH (Phương án thực hiện) khảo sát thiết kế"
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo tên phương án / mã PATTH)
- Dropdown: Trạng thái (Mới | Đã gửi thẩm tra | Đã thẩm tra | Đã duyệt | Từ chối)
- Dropdown: Đơn vị thực hiện (Lọc theo đơn vị thực hiện)
- Date range: Ngày lập phương án (Lọc theo khoảng ngày lập phương án)
##### Bảng dữ liệu
- Cột: Mã PATTH (Phương án thực hiện) (Tự động sinh sau khi tạo mới thành công)
- Cột: Tên phương án / dự án
- Cột: Đơn vị thực hiện
- Cột: Ngày lập phương án (Định dạng DD/MM/YYYY)
- Cột: Trạng thái (Badge màu theo trạng thái)
- Cột: Thao tác (Icon: Xem chi tiết | Chỉnh sửa | Xóa; Xóa chỉ hiển thị khi trạng thái = Mới)
##### Button Tạo mới
- Mở ra Màn hình tạo mới
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

### [TVTK-14] Màn hình tạo mới PATTH (Phương án thực hiện) khảo sát thiết kế
#### Mục đích
##### Nhập và lưu thông tin PATTH (Phương án thực hiện) khảo sát thiết kế
#### Breadcrumb
##### Home > Phân hệ TƯ VẤN THIẾT KẼ > Màn hình tạo mới PATTH (Phương án thực hiện) khảo sát thiết kế
#### Section
##### Form input
- Tên phương án khảo sát thiết kế (M) (Nhập chuỗi ký tự)
- Mô tả phương án (M) (Textarea)
- Ngày lập phương án (O) (Datepicker)
- Đơn vị thực hiện (M) (Dropdown chọn đơn vị)
- Đơn vị thẩm tra (O) (Dropdown chọn đơn vị thẩm tra)
- Tài liệu đính kèm (M) (Upload file; định dạng PDF/DOC/XLS)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin; chuyển trạng thái sang "Mới"

### [TVTK-15] Màn hình chỉnh sửa PATTH (Phương án thực hiện) khảo sát thiết kế
#### Mục đích
##### Chỉnh sửa thông tin PATTH (Phương án thực hiện) khảo sát thiết kế
#### Breadcrumb
##### Home > Phân hệ TƯ VẤN THIẾT KẼ > Màn hình chỉnh sửa PATTH (Phương án thực hiện) khảo sát thiết kế
#### Section
##### Form chỉnh sửa
- Tên phương án khảo sát thiết kế (M) (Cho phép sửa)
- Mô tả phương án (M) (Cho phép sửa)
- Ngày lập phương án (O) (Cho phép sửa; Datepicker)
- Đơn vị thực hiện (M) (Cho phép sửa; Dropdown)
- Đơn vị thẩm tra (O) (Cho phép sửa; Dropdown)
- Tài liệu đính kèm (M) (Cho phép sửa; Upload file)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa

### [TVTK-16] Màn hình chi tiết & phê duyệt PATTH (Phương án thực hiện) khảo sát thiết kế
#### Mục đích
##### Xem chi tiết thông tin & phê duyệt PATTH khảo sát thiết kế
#### Breadcrumb
##### Home > Phân hệ TƯ VẤN THIẾT KẼ > Màn hình chi tiết & phê duyệt PATTH (Phương án thực hiện) khảo sát thiết kế
#### Section
##### Form Xem chi tiết
- Mã PATTH (Phương án thực hiện) (Không được sửa; Tự động sinh)
- Trạng thái (Không được sửa; Hiển thị badge màu)
- Tên phương án khảo sát thiết kế (Không được sửa)
- Mô tả phương án (Không được sửa)
- Ngày lập phương án (Không được sửa)
- Đơn vị thực hiện (Không được sửa)
- Đơn vị thẩm tra (Không được sửa)
- Tài liệu đính kèm (Không được sửa; Link/download file)
##### icon X
- Tắt màn xem chi tiết để trở về màn danh sách
##### Button: Gửi / Phê duyệt
- Button: Gửi thẩm tra | Xác nhận thẩm tra | Gửi duyệt | Duyệt | Từ chối (Gửi thẩm tra: Mới → Đã gửi thẩm tra; Xác nhận thẩm tra: Đã thẩm tra; Gửi duyệt: Đã thẩm tra → Đã gửi duyệt; Duyệt: Đã duyệt; Từ chối: Từ chối)

## IX. Quản lý doanh thu TV (Tư vấn)
### [TVTK-33] Màn hình bảng tổng hợp doanh thu tư vấn
#### Mục đích
##### Hiển thị danh sách bảng tổng hợp doanh thu tư vấn
#### Breadcrumb
##### Home > Phân hệ TƯ VẤN THIẾT KẼ > Bảng tổng hợp doanh thu tư vấn
#### Section
##### Title
- "Bảng tổng hợp doanh thu tư vấn"
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo tên dự án / mã)
- Dropdown: Trạng thái (Mới | Đã gửi duyệt | Đã duyệt | Từ chối)
- Dropdown: Năm / kỳ quyết toán (Lọc theo năm quyết toán)
- Date range: Năm quyết toán (Lọc theo năm)
##### Bảng dữ liệu
- Cột: Mã bảng tổng hợp (Tự động sinh)
- Cột: Tên dự án / công trình
- Cột: Đơn vị tư vấn
- Cột: Tổng giá trị hợp đồng (VNĐ) (Định dạng VNĐ)
- Cột: Đã thanh toán (VNĐ) (Định dạng VNĐ)
- Cột: Còn lại (VNĐ) (Còn lại = Tổng giá trị - Đã thanh toán)
##### Button Tạo mới
- Mở ra Màn hình tạo mới
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

## V. Lập & Quản lý HĐ (Hợp đồng) TV (Tư vấn) & Phụ lục
### [TVTK-17] Màn hình danh sách HĐ (Hợp đồng) tư vấn & phụ lục
#### Mục đích
##### Hiển thị danh sách hợp đồng tư vấn & phụ lục
#### Breadcrumb
##### Home > Phân hệ TƯ VẤN THIẾT KẼ > HĐ (Hợp đồng) tư vấn & phụ lục
#### Section
##### Title
- "Hợp đồng tư vấn (HĐ) & phụ lục"
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo tên hợp đồng / mã HĐ)
- Dropdown: Trạng thái (Ngày soạn thảo | Đã gửi duyệt | Đã duyệt | Đã ký số | Từ chối)
- Dropdown: Loại hợp đồng (Lọc theo loại hợp đồng: HĐ chính / Phụ lục)
- Date range: Ngày ký hợp đồng (Lọc theo khoảng ngày ký)
##### Bảng dữ liệu
- Cột: Mã HĐ (Hợp đồng) (Tự động sinh)
- Cột: Tên hợp đồng
- Cột: Đơn vị tư vấn
- Cột: Ngày ký (Định dạng DD/MM/YYYY)
- Cột: Trạng thái (Badge màu theo trạng thái)
- Cột: Thao tác (Icon: Xem chi tiết | Chỉnh sửa | Xóa)
##### Button Tạo mới
- Mở ra Màn hình tạo mới
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

### [TVTK-18] Màn hình tạo mới hợp đồng tư vấn
#### Mục đích
##### Nhập và lưu thông tin hợp đồng tư vấn
#### Breadcrumb
##### Home > Phân hệ TƯ VẤN THIẾT KẼ > Màn hình tạo mới hợp đồng tư vấn
#### Section
##### Form input
- Tên hợp đồng tư vấn (M) (Nhập chuỗi ký tự)
- Số hợp đồng (M) (Nhập chuỗi ký tự)
- Loại hợp đồng (O) (Dropdown: HĐ (Hợp đồng) chính / Phụ lục)
- Giá trị hợp đồng (VNĐ) (M) (Nhập số; định dạng VNĐ)
- Ngày ký (O) (Datepicker)
- Tài liệu hợp đồng đính kèm / File scan (M) (Upload file PDF/DOC)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin; chuyển trạng thái sang "Mới"

### [TVTK-19] Màn hình chỉnh sửa hợp đồng tư vấn / đính kèm file phụ lục
#### Mục đích
##### Chỉnh sửa thông tin hợp đồng tư vấn/đính kèm file phụ lục
#### Breadcrumb
##### Home > Phân hệ TƯ VẤN THIẾT KẼ > Màn hình chỉnh sửa hợp đồng tư vấn / đính kèm file phụ lục
#### Section
##### Form chỉnh sửa
- Tên hợp đồng tư vấn (M) (Cho phép sửa)
- Số hợp đồng (M) (Cho phép sửa)
- Loại hợp đồng (O) (Cho phép sửa; Dropdown)
- Giá trị hợp đồng (VNĐ) (M) (Cho phép sửa; Nhập số)
- Ngày ký (O) (Cho phép sửa; Datepicker)
- Tài liệu / file phụ lục đính kèm (M) (Cho phép sửa; Upload file)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa

### [TVTK-20] Màn hình chi tiết & ký số HĐ (Hợp đồng) tư vấn
#### Mục đích
##### Xem chi tiết thông tin & ký số hợp đồng tư vấn
#### Breadcrumb
##### Home > Phân hệ TƯ VẤN THIẾT KẼ > Màn hình chi tiết & ký số HĐ (Hợp đồng) tư vấn
#### Section
##### Form Xem chi tiết
- Mã HĐ (Hợp đồng) (Không được sửa; Tự động sinh)
- Trạng thái (Không được sửa; Hiển thị badge màu)
- Tên hợp đồng tư vấn (Không được sửa)
- Số hợp đồng (Không được sửa)
- Loại hợp đồng (Không được sửa)
- Giá trị hợp đồng (VNĐ) (Không được sửa)
- Ngày ký (Không được sửa)
- Tài liệu / file hợp đồng đính kèm (Không được sửa; Link/download file)
##### icon X
- Tắt màn xem chi tiết để trở về màn danh sách
##### Button: Gửi / Phê duyệt
- Button: Gửi duyệt | Duyệt | Từ chối | Trình ký số | Ký số (Gửi duyệt: soạn thảo → Đã gửi duyệt; Duyệt: Đã duyệt; Từ chối: Từ chối; Trình ký: Đã duyệt → Trình ký; Ký số: Đã ký số)

### [TVTK-23] Popup xác nhận xóa hợp đồng tư vấn
#### Hiển thị popup với title "Bạn có chắc chắn xóa hợp đồng tư vấn?" và button "Đồng ý"; "Hủy"
### Popup trình ký
#### Hiển thị popup trình ký số với thông tin người ký và button "Xác nhận"; "Hủy"
### Popup xác nhận ký
#### Hiển thị popup xác nhận ký số với button "Đồng ý"; "Hủy"
## VIII. Nghiệm thu & Thanh toán TV (Tư vấn) + Quyết toán
### [TVTK-30] Màn hình danh sách nghiệm thu & thanh toán tư vấn
#### Mục đích
##### Hiển thị danh sách nghiệm thu & thanh toán tư vấn
#### Breadcrumb
##### Home > Phân hệ TƯ VẤN THIẾT KẼ > Nghiệm thu & thanh toán tư vấn
#### Section
##### Title
- "Nghiệm thu & Thanh toán tư vấn"
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo tên hợp đồng / mã nghiệm thu)
- Dropdown: Trạng thái (Mới | Đã gửi duyệt | Đã duyệt | Từ chối)
- Dropdown: Loại nghiệm thu (Lọc theo loại: Nghiệm thu kỳ / Nghiệm thu hoàn thành)
- Date range: Ngày nghiệm thu (Lọc theo khoảng ngày nghiệm thu)
##### Bảng dữ liệu
- Cột: Mã nghiệm thu (Tự động sinh)
- Cột: Tên hợp đồng liên kết
- Cột: Đơn vị tư vấn
- Cột: Ngày nghiệm thu (Định dạng DD/MM/YYYY)
- Cột: Trạng thái (Badge màu theo trạng thái)
- Cột: Thao tác (Icon: Xem chi tiết | Chỉnh sửa | Xóa; Xóa chỉ hiển thị khi trạng thái = Mới)
##### Button Tạo mới
- Mở ra Màn hình tạo mới
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

### [TVTK-31] Màn hình tạo mới nghiệm thu & thanh toán tư vấn
#### Mục đích
##### Nhập và lưu thông tin nghiệm thu & thanh toán tư vấn
#### Breadcrumb
##### Home > Phân hệ TƯ VẤN THIẾT KẼ > Màn hình tạo mới nghiệm thu & thanh toán tư vấn
#### Section
##### Form input
- Tên hợp đồng liên kết (M) (Dropdown - chọn từ danh sách hợp đồng đã ký)
- Loại nghiệm thu (M) (Dropdown: Nghiệm thu kỳ / Nghiệm thu hoàn thành)
- Ngày nghiệm thu (O) (Datepicker)
- Giá trị nghiệm thu (VNĐ) (M) (Nhập số; định dạng VNĐ)
- Ghi chú / Nội dung nghiệm thu (O) (Textarea)
- Hồ sơ nghiệm thu đính kèm (M) (Upload file PDF/DOC/XLS)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin; chuyển trạng thái sang "Mới"

### [TVTK-32] Màn hình chi tiết & phê duyệt nghiệm thu & thanh toán tư vấn
#### Mục đích
##### Xem chi tiết thông tin & phê duyệt nghiệm thu & thanh toán tư vấn
#### Breadcrumb
##### Home > Phân hệ TƯ VẤN THIẾT KẼ > Màn hình chi tiết & phê duyệt nghiệm thu & thanh toán tư vấn
#### Section
##### Form Xem chi tiết
- Mã nghiệm thu (Không được sửa; Tự động sinh)
- Trạng thái (Không được sửa; Hiển thị badge màu)
- Tên hợp đồng liên kết (Không được sửa)
- Loại nghiệm thu (Không được sửa)
- Ngày nghiệm thu (Không được sửa)
- Giá trị nghiệm thu (VNĐ) (Không được sửa)
- Ghi chú / Nội dung nghiệm thu (Không được sửa)
- Hồ sơ nghiệm thu đính kèm (Không được sửa; Link/download file)
##### icon X
- Tắt màn xem chi tiết để trở về màn danh sách
##### Button: Gửi / Phê duyệt
- Button: Gửi duyệt | Duyệt | Từ chối (Gửi duyệt: Mới → Đã gửi duyệt; Duyệt: Đã duyệt; Từ chối: Từ chối)

### Popup trình ký
#### Hiển thị popup trình ký số với thông tin người ký và button "Xác nhận"; "Hủy"
### Popup xác nhận ký
#### Hiển thị popup xác nhận ký số với button "Đồng ý"; "Hủy"
## X. Quản lý công nợ TV (Tư vấn)
### [TVTK-34] Màn hình danh sách công nợ tư vấn
#### Mục đích
##### Hiển thị danh sách công nợ tư vấn
#### Breadcrumb
##### Home > Phân hệ TƯ VẤN THIẾT KẼ > Công nợ tư vấn
#### Section
##### Title
- "Công nợ tư vấn"
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo tên hợp đồng / mã công nợ)
- Dropdown: Tình trạng công nợ (Chưa thanh toán | Thanh toán một phần | Đã thanh toán | Quá hạn)
- Dropdown: Đơn vị tư vấn (Lọc theo đơn vị tư vấn)
- Date range: Ngày đáo hạn thanh toán (Lọc theo khoảng ngày đáo hạn)
##### Bảng dữ liệu
- Cột: Mã công nợ (Tự động sinh từ hợp đồng và nghiệm thu)
- Cột: Tên hợp đồng / dự án
- Cột: Đơn vị tư vấn
- Cột: Ngày đáo hạn thanh toán (Định dạng DD/MM/YYYY)
- Cột: Giá trị còn lại (VNĐ) (Định dạng VNĐ)
- Cột: Tình trạng công nợ (Badge màu theo tình trạng công nợ)
- Cột: Đơn vị
- Cột: Ngày tạo (Định dạng DD/MM/YYYY)
- Cột: Trạng thái (Badge màu theo trạng thái)
- Cột: Thao tác (Icon: Xem chi tiết | Chỉnh sửa | Xóa)
##### Button Tạo mới
- Không có button Tạo mới (màn danh sách chỉ xem) (Công nợ tự động tổng hợp từ nghiệm thu & thanh toán)
- Mở ra Màn hình tạo mới
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

## I. Quản lý dự án, phân bổ, giao nhiệm vụ
### [TVTK-05] Popup xác nhận xóa dự án
#### Hiển thị popup với title "Bạn có chắc chắn xóa dự án này?" và button "Đồng ý"; "Hủy"
### [TVTK-06] Popup xác nhận gửi duyệt dự án
#### Hiển thị popup với title "Bạn có chắc chắn gửi duyệt dự án này?" và button "Đồng ý"; "Hủy"
### [TVTK-07] Popup xác nhận gửi thẩm tra dự án
#### Hiển thị popup với title "Bạn có chắc chắn gửi thẩm tra dự án này?" và button "Đồng ý"; "Hủy"
## V. Lập Hồ sơ thiết kế
### [TVTK-18a] Màn hình tạo mới Hồ sơ thiết kế
#### Mục đích
##### Nhập và lưu thông tin Hồ sơ thiết kế
#### Breadcrumb
##### Home > Tư vấn thiết kế > Hồ sơ thiết kế > Tạo mới
#### Section
##### Form input
- Tên hồ sơ thiết kế (M)
- Chọn dự án (M) (Dropdown chọn dự án liên quan)
- Loại thiết kế (M) (Dropdown: Thiết kế cơ sở | Thiết kế kỹ thuật | Thiết kế BVTC)
- Đơn vị tư vấn (M)
- Ngày lập (M) (Mặc định ngày hiện tại)
- Ghi chú (O) (Tối đa 500 ký tự)
- Bản vẽ / Văn bản đính kèm (O) (Hỗ trợ PDF/CAD/Word; tối đa 50MB/file)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu hồ sơ; chuyển trạng thái sang "Mới"

### [TVTK-18b] Màn hình chỉnh sửa Hồ sơ thiết kế
#### Mục đích
##### Chỉnh sửa thông tin Hồ sơ thiết kế
#### Breadcrumb
##### Home > Tư vấn thiết kế > Hồ sơ thiết kế > Chỉnh sửa
#### Section
##### Form chỉnh sửa
- Tên hồ sơ thiết kế (M) (Cho phép sửa)
- Loại thiết kế (M) (Cho phép sửa)
- Đơn vị tư vấn (M) (Cho phép sửa)
- Ngày lập (M) (Cho phép sửa)
- Ghi chú (O) (Cho phép sửa)
- Bản vẽ / Văn bản đính kèm (O) (Cho phép thêm/xóa file)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin mới cập nhật

### [TVTK-18c] Màn hình xem chi tiết Hồ sơ thiết kế
#### Mục đích
##### Xem chi tiết và phê duyệt Hồ sơ thiết kế
#### Breadcrumb
##### Home > Tư vấn thiết kế > Hồ sơ thiết kế > Xem chi tiết
#### Section
##### Form Xem chi tiết
- Mã hồ sơ (Không được sửa; tự động sinh)
- Trạng thái (Không được sửa; badge màu)
- Tên hồ sơ thiết kế (Không được sửa)
- Dự án liên quan (Không được sửa)
- Loại thiết kế (Không được sửa)
- Đơn vị tư vấn (Không được sửa)
- Ngày lập (Không được sửa)
- Ghi chú (Không được sửa)
- Bản vẽ / Văn bản đính kèm (Không được sửa; có nút Preview)
##### icon X
- Tắt màn xem chi tiết để trở về màn danh sách
##### Button: Gửi duyệt | Trình ký | Thẩm tra | Phê duyệt | Từ chối
- Thực hiện theo quy trình phê duyệt (Hiển thị nút tương ứng trạng thái và quyền)

### [TVTK-18d] Popup xác nhận xóa Hồ sơ thiết kế
#### Hiển thị popup với title "Bạn có chắc chắn xóa hồ sơ thiết kế này?" và button "Đồng ý"; "Hủy"
### [TVTK-18e] Popup xác nhận gửi duyệt Hồ sơ thiết kế
#### Hiển thị popup với title "Bạn có chắc chắn gửi duyệt hồ sơ thiết kế này?" và button "Đồng ý"; "Hủy"
### [TVTK-18f] Popup xác nhận gửi thẩm tra Hồ sơ thiết kế
#### Hiển thị popup với title "Bạn có chắc chắn gửi thẩm tra hồ sơ thiết kế này?" và button "Đồng ý"; "Hủy"
## VI. Lập BB theo dõi tiến độ thi công
### [TVTK-21] Màn hình danh sách BB theo dõi tiến độ thi công
#### Mục đích
##### Hiển thị danh sách Biên bản theo dõi tiến độ thi công
#### Breadcrumb
##### Home > Tư vấn thiết kế > BB theo dõi tiến độ thi công
#### Section
##### Title
- "BB theo dõi tiến độ thi công"
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo mã / tên dự án)
- Dropdown: Trạng thái (Mới | Đã gửi duyệt | Đã duyệt | Từ chối)
- Dropdown: Dự án
- Date range: Ngày lập
##### Bảng dữ liệu
- Cột: Mã biên bản
- Cột: Tên dự án
- Cột: Đợt theo dõi
- Cột: Người lập
- Cột: Ngày lập
- Cột: Trạng thái
- Cột: Thao tác (Xem chi tiết | Chỉnh sửa | Xóa)
##### Button Tạo mới
- Mở ra Màn hình tạo mới
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

### [TVTK-22] Màn hình tạo mới BB theo dõi tiến độ thi công
#### Mục đích
##### Nhập và lưu thông tin Biên bản theo dõi tiến độ thi công
#### Breadcrumb
##### Home > Tư vấn thiết kế > BB theo dõi tiến độ > Tạo mới
#### Section
##### Form input
- Chọn dự án (M) (Dropdown chọn dự án)
- Đợt theo dõi (M) (Ví dụ: Đợt 1, Đợt 2,...)
- Ngày lập (M) (Mặc định ngày hiện tại)
- Người lập (M)
- Nội dung theo dõi (M) (Tối đa 1000 ký tự)
- Kết luận / Kiến nghị (O) (Tối đa 500 ký tự)
- Văn bản đính kèm (O) (Hỗ trợ PDF/Word; tối đa 20MB/file)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu biên bản; chuyển trạng thái sang "Mới"

### [TVTK-22a] Màn hình chỉnh sửa BB theo dõi tiến độ thi công
#### Mục đích
##### Chỉnh sửa Biên bản theo dõi tiến độ thi công
#### Breadcrumb
##### Home > Tư vấn thiết kế > BB theo dõi tiến độ > Chỉnh sửa
#### Section
##### Form chỉnh sửa
- Đợt theo dõi (M) (Cho phép sửa)
- Ngày lập (M) (Cho phép sửa)
- Nội dung theo dõi (M) (Cho phép sửa)
- Kết luận / Kiến nghị (O) (Cho phép sửa)
- Văn bản đính kèm (O) (Cho phép thêm/xóa file)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin mới cập nhật

### [TVTK-22b] Màn hình xem chi tiết BB theo dõi tiến độ thi công
#### Mục đích
##### Xem chi tiết Biên bản theo dõi tiến độ thi công
#### Breadcrumb
##### Home > Tư vấn thiết kế > BB theo dõi tiến độ > Xem chi tiết
#### Section
##### Form Xem chi tiết
- Mã biên bản (Không được sửa)
- Tên dự án (Không được sửa)
- Đợt theo dõi (Không được sửa)
- Ngày lập (Không được sửa)
- Người lập (Không được sửa)
- Nội dung theo dõi (Không được sửa)
- Kết luận / Kiến nghị (Không được sửa)
- Trạng thái (Không được sửa)
- Văn bản đính kèm (Không được sửa; có nút Preview)
##### icon X
- Tắt màn xem chi tiết để trở về màn danh sách

### [TVTK-22c] Popup xác nhận xóa BB theo dõi tiến độ
#### Hiển thị popup với title "Bạn có chắc chắn xóa biên bản tiến độ này?" và button "Đồng ý"; "Hủy"
### [TVTK-22d] Popup xác nhận gửi duyệt BB theo dõi tiến độ
#### Hiển thị popup với title "Bạn có chắc chắn gửi duyệt biên bản tiến độ này?" và button "Đồng ý"; "Hủy"
### [TVTK-22e] Popup xác nhận gửi thẩm tra BB theo dõi tiến độ
#### Hiển thị popup với title "Bạn có chắc chắn gửi thẩm tra biên bản tiến độ này?" và button "Đồng ý"; "Hủy"
## IX. Lập hồ sơ quyết toán
### [TVTK-35] Màn hình tạo mới Hồ sơ quyết toán
#### Mục đích
##### Nhập và lưu thông tin Hồ sơ quyết toán tư vấn thiết kế
#### Breadcrumb
##### Home > Tư vấn thiết kế > Hồ sơ quyết toán > Tạo mới
#### Section
##### Form input
- Chọn dự án (M) (Dropdown chọn dự án)
- Chọn hợp đồng tư vấn (M) (Dropdown chọn hợp đồng liên quan)
- Tổng giá trị quyết toán (M)
- Ngày lập (M) (Mặc định ngày hiện tại)
- Ghi chú (O) (Tối đa 500 ký tự)
- Văn bản đính kèm (O) (Hỗ trợ PDF/Word; tối đa 20MB/file)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu hồ sơ; chuyển trạng thái sang "Mới"

### [TVTK-36] Màn hình chỉnh sửa Hồ sơ quyết toán
#### Mục đích
##### Chỉnh sửa Hồ sơ quyết toán tư vấn thiết kế
#### Breadcrumb
##### Home > Tư vấn thiết kế > Hồ sơ quyết toán > Chỉnh sửa
#### Section
##### Form chỉnh sửa
- Tổng giá trị quyết toán (M) (Cho phép sửa)
- Ngày lập (M) (Cho phép sửa)
- Ghi chú (O) (Cho phép sửa)
- Văn bản đính kèm (O) (Cho phép thêm/xóa file)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin mới cập nhật

### [TVTK-37] Màn hình xem chi tiết Hồ sơ quyết toán
#### Mục đích
##### Xem chi tiết và phê duyệt Hồ sơ quyết toán tư vấn thiết kế
#### Breadcrumb
##### Home > Tư vấn thiết kế > Hồ sơ quyết toán > Xem chi tiết
#### Section
##### Form Xem chi tiết
- Mã hồ sơ (Không được sửa)
- Trạng thái (Không được sửa; badge màu)
- Dự án (Không được sửa)
- Hợp đồng tư vấn (Không được sửa)
- Tổng giá trị quyết toán (Không được sửa)
- Ngày lập (Không được sửa)
- Ghi chú (Không được sửa)
- Văn bản đính kèm (Không được sửa; có nút Preview)
##### icon X
- Tắt màn xem chi tiết để trở về màn danh sách
##### Button: Gửi duyệt | Trình ký | Thẩm tra | Phê duyệt | Từ chối
- Thực hiện theo quy trình phê duyệt hồ sơ quyết toán (Hiển thị nút tương ứng trạng thái và quyền)

### [TVTK-37.1] Popup xác nhận xóa Hồ sơ quyết toán
#### Hiển thị popup với title "Bạn có chắc chắn xóa hồ sơ quyết toán này?" và button "Đồng ý"; "Hủy"
### [TVTK-37.2] Popup xác nhận gửi duyệt Hồ sơ quyết toán
#### Hiển thị popup với title "Bạn có chắc chắn gửi duyệt hồ sơ quyết toán này?" và button "Đồng ý"; "Hủy"
### [TVTK-37.3] Popup xác nhận gửi thẩm tra Hồ sơ quyết toán
#### Hiển thị popup với title "Bạn có chắc chắn gửi thẩm tra hồ sơ quyết toán này?" và button "Đồng ý"; "Hủy"
## XI. Quản lý hợp đồng
### [TVTK-38] Màn hình danh sách hợp đồng tư vấn thiết kế
#### Mục đích
##### Hiển thị danh sách hợp đồng trong phân hệ Tư vấn thiết kế
#### Breadcrumb
##### Home > Tư vấn thiết kế > Quản lý hợp đồng
#### Section
##### Title
- "Quản lý hợp đồng"
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo mã / tên hợp đồng)
- Dropdown: Trạng thái (Mới | Đã ký | Đang thực hiện | Thanh lý)
- Dropdown: Dự án
- Date range: Ngày ký
##### Bảng dữ liệu
- Cột: Mã hợp đồng
- Cột: Tên hợp đồng
- Cột: Dự án liên quan
- Cột: Giá trị hợp đồng
- Cột: Ngày ký
- Cột: Trạng thái
- Cột: Thao tác (Xem chi tiết)
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

### [TVTK-39] Màn hình xem chi tiết hợp đồng tư vấn thiết kế
#### Mục đích
##### Xem chi tiết thông tin hợp đồng tư vấn thiết kế
#### Breadcrumb
##### Home > Tư vấn thiết kế > Quản lý hợp đồng > Xem chi tiết
#### Section
##### Form Xem chi tiết
- Mã hợp đồng (Không được sửa)
- Tên hợp đồng (Không được sửa)
- Dự án liên quan (Không được sửa)
- Giá trị hợp đồng (Không được sửa)
- Ngày ký (Không được sửa)
- Ngày hết hạn (Không được sửa)
- Đơn vị tư vấn (Không được sửa)
- Trạng thái (Không được sửa)
- Văn bản đính kèm (Không được sửa; có nút Preview)
##### icon X
- Tắt màn xem chi tiết để trở về màn danh sách