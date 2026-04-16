# Sửa chữa Máy biến áp

## I. Quản lý Yêu cầu / Phân công công việc
### [MBA-01] Màn hình danh sách yêu cầu
#### Mục đích
##### Hiển thị danh sách các yêu cầu sửa chữa máy biến áp
#### Breadcrumb
##### Home > Phân hệ MBA > Yêu cầu sửa chữa
#### Section
##### Title
- "Yêu cầu Sửa chữa"
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo mã yêu cầu; mô tả hư hỏng)
- Dropdown: Trạng thái (Mới | Đã tiếp nhận)
- Dropdown: Đơn vị yêu cầu (Lọc theo đơn vị gửi yêu cầu)
- Date range: Ngày yêu cầu (Lọc theo khoảng ngày tạo yêu cầu)
##### Bảng dữ liệu
- Mã yêu cầu (tự động sinh sau khi tạo mới thành công)
- Dropdown: Loại yêu cầu (Sửa chữa theo nguồn vốn SCL | Sửa chữa theo nguồn vốn SXKD | Thăm khám rút ruột và phân loại thí nghiệm)
- Cột: Mô tả hư hỏng (Tóm tắt nội dung hư hỏng)
- Cột: Đơn vị yêu cầu (Đơn vị gửi yêu cầu sửa chữa)
- Cột: Đơn vị được giao nhiệm vụ (Đơn vị được giao nhiệm vụ sửa chữa)
- Cột: Ngày yêu cầu (Ngày tạo yêu cầu; định dạng DD/MM/YYYY)
- Cột: Trạng thái (Badge màu: Mới (xanh dương) | Đã tiếp nhận (xanh lá))
- Cột: Thao tác (Icon: Xem chi tiết | Chỉnh Sửa |Xóa)
##### Button Tạo mới
- Mở ra Màn hình tạo mới
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

### [MBA-02] Màn hình tạo mới yêu cầu
#### Mục đích
##### Nhập và lưu các thông tin yêu cầu sửa chữa máy biến áp
#### Breadcrumb
##### Home > Phân hệ MBA > Yêu cầu sửa chữa > Tạo mới yêu cầu
#### Section
##### Form input
- Upload: File đính kèm (O) (Hỗ trợ ảnh/PDF; tối đa 10MB/file; đa file)
- Date picker: Ngày yêu cầu (M) (Mặc định ngày hiện tại; có thể chỉnh sửa)
- Dropdown: Đơn vị được giao nhiệm vụ (M) (Chọn đơn vị được giao nhiệm vụ)
- Dropdown: Đơn vị yêu cầu (M) (Chọn đơn vị gửi yêu cầu)
- Textarea: Mô tả hư hỏng (O) (Nhập mô tả chi tiết tình trạng hư hỏng; maxlength 255)
- Dropdown: Loại yêu cầu (M) (Sửa chữa theo nguồn vốn SCL | Sửa chữa theo nguồn vốn SXKD | Thăm khám; rút ruột và phân loại thí nghiệm)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu yêu cầu; chuyển trạng thái sang "Mới"

### [MBA-03] Màn hình chỉnh sửa yêu cầu
#### Section
##### Form chỉnh sửa
- Upload: File đính kèm (O) (Cho đính kèm file; có icon x ở file đã up để xóa)
- Date picker: Ngày yêu cầu (M) (Cho phép sửa)
- Dropdown: Đơn vị được giao nhiệm vụ (M) (cho phép sửa)
- Dropdown: Đơn vị yêu cầu (M) (cho phép sửa)
- Textarea: Mô tả hư hỏng (O) (cho phép sửa; maxlength 255)
- Dropdown: Loại yêu cầu (M) (Cho phép sửa)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa
#### Breadcrumb
##### Home > Phân hệ MBA > Yêu cầu sửa chữa > Chỉnh sửa yêu cầu
#### Mục đích
##### Chỉnh sửa các thông tin yêu cầu sửa chữa máy biến áp

### [MBA-04] Màn hình chi tiết yêu cầu
#### Section
##### Form Xem chi tiết
- Mã yêu cầu (Không được sửa)
- Trạng thái (Không được sửa)
- Upload: File đính kèm (O) (Không được sửa; có nút xem chi tiết (Preview) file)
- Date picker: Ngày yêu cầu (M) (Không được sửa)
- Dropdown: Đơn vị được giao nhiệm vụ (M) (Không được sửa)
- Dropdown: Đơn vị yêu cầu (M) (Không được sửa)
- Textarea: Mô tả hư hỏng (O) (Không được sửa)
- Dropdown: Loại yêu cầu (M) (Không được sửa)
##### icon X
- Tắt màn xem chi tiết để trở về màn danh sách
##### Button: Gửi yêu cầu
- Yêu cầu được gửi đi thành công sẽ được update trạng thái thành "Đã tiếp nhận"
#### Breadcrumb
##### Home > Phân hệ MBA > Yêu cầu sửa chữa > Xem chi tiết yêu cầu
#### Mục đích
##### Xem chi tiết thông tin yêu cầu sửa chữa máy biến áp

### [MBA-05] Popup xác nhận xóa yêu cầu
#### Hiển thị popup với title "Bạn có chắc chắn xóa bản ghi" và button "Đồng ý"; "Hủy"
### Popup preview file
#### Hiển thị chi tiết file
### Popup xác nhận gửi yêu cầu
#### Hiển thị popup với title "Bạn có chắc chắn gửi yêu cầu" và button "Đồng ý"; "Hủy"
## III. Lập & Phê duyệt PAKT-ĐT
### [MBA-06] Màn hình danh sách PAKT-ĐT
#### Mục đích
##### Hiển thị danh sách Phương án kiểm tra-Dự toán
#### Breadcrumb
##### Home > Phân hệ MBA > Phương án kiểm tra-Dự toán
#### Section
##### Title
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo mã phương án / tên lô MBA)
- Dropdown: Trạng thái (Mới | Đã tiếp nhận | Đã kiểm tra | Đã gửi duyệt | Đã duyệt | Từ chối)
- Dropdown: Đơn vị thực hiện (Lọc theo đơn vị)
- Date range: Ngày lập PAKT-ĐT (Từ ngày – Đến ngày)
##### Bảng dữ liệu
- Cột: Mã phương án (Mã bản ghi định danh)
- Cột: Tên lô MBA
- Cột: Số lượng MBA
- Cột: Đơn vị thực hiện
- Cột: Ngày lập PAKT-ĐT
- Cột: Trạng thái (Mới | Đã tiếp nhận | Đã kiểm tra | Đã gửi duyệt | Đã duyệt | Từ chối)
- Cột: Thao tác (Xem chi tiết | Chỉnh sửa | Xóa)
##### Button Tạo mới
- Mở ra Màn hình tạo mới
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

### [MBA-07] Màn hình tạo mới PAKT-ĐT
#### Mục đích
##### Nhập và lưu các thông tin
#### Breadcrumb
##### Home > Phân hệ MBA > Phương án kiểm tra-Dự toán > Tạo mới PAKT-ĐT
#### Section
##### Form input
- Tên lô máy biến áp (M)
- Số lượng máy biến áp (M)
- Đơn vị thực hiện (M)
- Ngày lập PAKT-DT (M)
- Người kiểm tra PAKT (M)
- Ngày hoàn thành kiểm tra PAKT (O)
- Người kiểm tra DT (M)
- Ngày hoàn thành kiểm tra DT (O)
- Thông tin PAKT (O)
- Thông tin DT (O)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu yêu cầu; chuyển trạng thái sang "Mới"

### [MBA-08] Màn hình chỉnh sửa PAKT-ĐT
#### Mục đích
##### Chỉnh sửa các thông tin
#### Breadcrumb
##### Home > Phân hệ MBA > Phương án kiểm tra-Dự toán > Chỉnh sửa PAKT-ĐT
#### Section
##### Form chỉnh sửa
- Tên lô máy biến áp (M) (Cho phép sửa)
- Số lượng máy biến áp (M) (Cho phép sửa)
- Đơn vị thực hiện (M) (Cho phép sửa)
- Ngày lập PAKT-DT (M) (Cho phép sửa)
- Người kiểm tra PAKT (M) (Cho phép sửa)
- Ngày hoàn thành kiểm tra PAKT (O) (Cho phép sửa)
- Người kiểm tra DT (M) (Cho phép sửa)
- Ngày hoàn thành kiểm tra DT (O) (Cho phép sửa)
- Thông tin PAKT (O) (Cho phép sửa)
- Thông tin DT (O) (Cho phép sửa)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa

### [MBA-09.1] Popup xác nhận duyệt
#### Hiển thị popup với title "Bạn có chắc chắn duyệt" và button "Đồng ý"; "Hủy"
### [MBA-09.2] Popup gửi duyệt
#### Hiển thị popup với title "Bạn có chắc chắn gửi duyệt" và button "Đồng ý"; "Hủy"
### [MBA-09] Màn hình chi tiết & phê duyệt PAKT-ĐT
#### Mục đích
##### Xem chi tiết thông tin
#### Breadcrumb
##### Home > Phân hệ MBA > Phương án kiểm tra-Dự toán > Xem chi tiết PAKT-ĐT
#### Section
##### Form Xem chi tiết
- Mã yêu cầu (Không được sửa)
- Trạng thái (Không được sửa)
- Upload: File đính kèm (O) (Không được sửa; có nút xem chi tiết (Preview) file)
- Date picker: Ngày yêu cầu (M) (Không được sửa)
- Dropdown: Đơn vị được giao nhiệm vụ (M) (Không được sửa)
- Dropdown: Đơn vị yêu cầu (M) (Không được sửa)
- Textarea: Mô tả hư hỏng (O) (Không được sửa)
- Dropdown: Loại yêu cầu (M) (Không được sửa)
##### icon X
- Tắt màn xem chi tiết để trở về màn danh sách
##### Button: Gửi kiểm tra | Xác nhận kiểm tra | Gửi duyệt | PC duyệt | PC từ chối
- Thực hiện theo quy trình phê duyệt (Hiển thị nhóm nút hành động tương ứng với trạng thái hiện tại của bản ghi)

### [MBA-10] Popup xác nhận xóa PAKT-ĐT
#### Hiển thị popup với title "Bạn có chắc chắn xóa" và button "Đồng ý"; "Hủy"
## IV. Lập Biên bản Bàn giao + báo cáo tình trạng hư hỏng
### [MBA-11] Màn hình danh sách biên bản bàn giao
#### Mục đích
##### Hiển thị danh sách biên bản bàn giao
#### Breadcrumb
##### Home > Phân hệ MBA > Biên bản bàn giao
#### Section
##### Title
- "Biên bản bàn giao"
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo tên / mã)
- Dropdown: Trạng thái (Mới | Đã gửi duyệt | Đã kiểm tra | Đã duyệt | Từ chối)
- Dropdown: Bộ lọc
- Date range: Ngày tạo (Lọc theo khoảng ngày tạo)
##### Bảng dữ liệu
- Cột: Mã biên bản (Mã bản ghi định danh)
- Cột: Tên lô MBA
- Cột: Người bàn giao
- Cột: Người nhận bàn giao
- Cột: Thời gian bàn giao
- Cột: Trạng thái (Mới | Đã gửi duyệt | Đã kiểm tra | Đã duyệt | Từ chối)
- Cột: Thao tác (Xem chi tiết | Chỉnh sửa | Xóa)
##### Button Tạo mới
- Mở ra Màn hình tạo mới
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

### [MBA-12] Màn hình tạo mới biên bản bàn giao
#### Mục đích
##### Nhập và lưu thông tin biên bản bàn giao
#### Breadcrumb
##### Home > Phân hệ MBA > Biên bản bàn giao > Tạo mới biên bản bàn giao
#### Section
##### Form input
- Tên lô MBA (M)
- Thông tin thiết bị (M)
- Tình trạng thiết bị (O)
- Số lượng thiết bị (M)
- Người bàn giao (M)
- Người nhận bàn giao (M)
- Thời gian bàn giao (M)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin; chuyển trạng thái sang "Mới"

### [MBA-13] Màn hình chỉnh sửa biên bản bàn giao
#### Mục đích
##### Chỉnh sửa thông tin biên bản bàn giao
#### Breadcrumb
##### Home > Phân hệ MBA > Biên bản bàn giao > Chỉnh sửa biên bản bàn giao
#### Section
##### Form chỉnh sửa
- Tên lô MBA (M) (Cho phép sửa)
- Thông tin thiết bị (M) (Cho phép sửa)
- Tình trạng thiết bị (O) (Cho phép sửa)
- Số lượng thiết bị (M) (Cho phép sửa)
- Người bàn giao (M) (Cho phép sửa)
- Người nhận bàn giao (M) (Cho phép sửa)
##### Thời gian bàn giao (M)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa

### [MBA-14] Màn hình chi tiết biên bản bàn giao
#### Mục đích
##### Xem chi tiết thông tin biên bản bàn giao
#### Breadcrumb
##### Home > Phân hệ MBA > Biên bản bàn giao > Xem chi tiết biên bản bàn giao
#### Section
##### Form Xem chi tiết
- Mã (Không được sửa)
- Trạng thái (Không được sửa)
- Tên lô MBA (Không được sửa)
- Thông tin thiết bị (Không được sửa)
- Tình trạng thiết bị (Không được sửa)
- Số lượng thiết bị (Không được sửa)
- Người bàn giao (Không được sửa)
- Người nhận bàn giao (Không được sửa)
- Thời gian bàn giao (Không được sửa)
##### icon X
- Tắt màn xem chi tiết để trở về màn danh sách
##### Button: Gửi kiểm tra | Xác nhận kiểm tra | Gửi duyệt | PC duyệt | PC từ chối
- Thực hiện theo quy trình phê duyệt (Hiển thị nhóm nút hành động tương ứng với trạng thái)

### [MBA-15] Popup xác nhận xóa biên bản bàn giao
#### Hiển thị popup với title "Bạn có chắc chắn xóa biên bản bàn giao?" và button "Đồng ý"; "Hủy"
## IX. Lập & Phê duyệt PATCTC và BPAT
### [MBA-16] Màn hình danh sách PATCTC
#### Mục đích
##### Hiển thị danh sách PATCTC
#### Breadcrumb
##### Home > Phân hệ MBA > PATCTC
#### Section
##### Title
- "PATCTC"
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo tên / mã)
- Dropdown: Trạng thái (Mới | Đã gửi duyệt | Đã kiểm tra | Đã duyệt | Từ chối)
- Dropdown: Bộ lọc
- Date range: Ngày tạo (Lọc theo khoảng ngày tạo)
##### Bảng dữ liệu
- Cột: Mã bản ghi (Mã định danh duy nhất)
- Cột: Lô MBA
- Cột: Số lượng MBA
- Cột: Đơn vị thực hiện
- Cột: Nhân lực thực hiện
- Cột: Ngày thực hiện
- Cột: Ngày lập phương án
- Cột: Trạng thái (Mới | Đã gửi duyệt | Đã kiểm tra | Đã duyệt | Từ chối)
- Cột: Thao tác (Xem chi tiết | Chỉnh sửa | Xóa)
##### Button Tạo mới
- Mở ra Màn hình tạo mới
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

### [MBA-17] Màn hình tạo mới PATCTC
#### Mục đích
##### Nhập và lưu thông tin pATCTC
#### Breadcrumb
##### Home > Phân hệ MBA > PATCTC > Tạo mới PATCTC
#### Section
##### Form input
- Lô MBA (M)
- Số lượng MBA (M)
- Đơn vị thực hiện (M)
- Hồ sơ pháp lý (O)
- Nhân lực thực hiện (M)
- Quy trình kỹ thuật (M)
- Biện pháp an toàn (M)
- Ngày thực hiện (M)
- Ngày lập phương án (M)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin; chuyển trạng thái sang "Mới"

### [MBA-18] Màn hình chỉnh sửa PATCTC
#### Mục đích
##### Chỉnh sửa thông tin pATCTC
#### Breadcrumb
##### Home > Phân hệ MBA > PATCTC > Chỉnh sửa PATCTC
#### Section
##### Form chỉnh sửa
- Lô MBA (M) (Cho phép sửa)
- Số lượng MBA (M) (Cho phép sửa)
- Đơn vị thực hiện (M) (Cho phép sửa)
- Hồ sơ pháp lý (O) (Cho phép sửa)
- Nhân lực thực hiện (M) (Cho phép sửa)
- Quy trình kỹ thuật (M) (Cho phép sửa)
- Biện pháp an toàn (M) (Cho phép sửa)
- Ngày thực hiện (M) (Cho phép sửa)
- Ngày lập phương án (M) (Cho phép sửa)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa

### [MBA-30.1] Popup xác nhận duyệt
#### Hiển thị popup xác nhận phê duyệt với button "Đồng ý"; "Hủy"
### [MBA-30.2] Popup gửi duyệt
#### Hiển thị popup xác nhận gửi duyệt với button "Đồng ý"; "Hủy"
### [MBA-19] Màn hình chi tiết & phê duyệt PATCTC
#### Mục đích
##### Xem chi tiết thông tin & phê duyệt PATCTC
#### Breadcrumb
##### Home > Phân hệ MBA > PATCTC > Xem chi tiết PATCTC
#### Section
##### Form Xem chi tiết
- Mã (Không được sửa)
- Trạng thái (Không được sửa)
- Lô MBA (Không được sửa)
- Số lượng MBA (Không được sửa)
- Đơn vị thực hiện (Không được sửa)
- Hồ sơ pháp lý (Không được sửa)
- Nhân lực thực hiện (Không được sửa)
- Quy trình kỹ thuật (Không được sửa)
- Biện pháp an toàn (Không được sửa)
- Ngày thực hiện (Không được sửa)
- Ngày lập phương án (Không được sửa)
##### icon X
- Tắt màn xem chi tiết để trở về màn danh sách
##### Button: Gửi kiểm tra | Xác nhận kiểm tra | Gửi duyệt | PC duyệt | PC từ chối
- Thực hiện theo quy trình phê duyệt PATCTC (Hiển thị nhóm nút tương ứng với trạng thái)

### [MBA-20] Popup xác nhận xóa PATCTC
#### Hiển thị popup với title "Bạn có chắc chắn xóa PATCTC?" và button "Đồng ý"; "Hủy"
## VII. Lập & Phê duyệt PATTH & Hợp đồng (Thủ tục pháp lý)
### [MBA-21] Màn hình danh sách PATTH & hợp đồng
#### Mục đích
##### Hiển thị danh sách PATTH & hợp đồng
#### Breadcrumb
##### Home > Phân hệ MBA > PATTH & hợp đồng
#### Section
##### Title
- "PATTH & hợp đồng"
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo tên / mã)
- Dropdown: Trạng thái (Mới | Đã gửi thẩm tra | Đã thẩm tra | PC duyệt | PC từ chối)
- Dropdown: Bộ lọc
- Date range: Ngày tạo (Lọc theo khoảng ngày tạo)
##### Bảng dữ liệu
- Cột: Mã bản ghi (Mã định danh PATTH)
- Cột: Tên PATTH
- Cột: Ngày lập phương án
- Cột: Đơn vị thực hiện
- Cột: Đơn vị thẩm tra
- Cột: Trạng thái (Mới | Đã gửi thẩm tra | Đã thẩm tra | PC duyệt | PC từ chối)
- Cột: Thao tác (Xem chi tiết | Chỉnh sửa | Xóa)
##### Button Tạo mới
- Mở ra Màn hình tạo mới
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

### [MBA-22] Màn hình tạo mới PATTH
#### Mục đích
##### Nhập và lưu thông tin pATTH
#### Breadcrumb
##### Home > Phân hệ MBA > PATTH & hợp đồng > Tạo mới PATTH
#### Section
##### Form input
- Tên PATTH (M)
- Mô tả phương án (O)
- Ngày lập phương án (M)
- Đơn vị thực hiện (M)
- Đơn vị thẩm tra (M)
- Danh sách nhà thầu phụ (O)
- Hồ sơ năng lực (O)
- Tài liệu đính kèm (O)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin; chuyển trạng thái sang "Mới"

### [MBA-23] Màn hình chỉnh sửa PATTH
#### Mục đích
##### Chỉnh sửa thông tin pATTH
#### Breadcrumb
##### Home > Phân hệ MBA > PATTH & hợp đồng > Chỉnh sửa PATTH
#### Section
##### Form chỉnh sửa
- Tên PATTH (M) (Cho phép sửa)
- Mô tả phương án (O) (Cho phép sửa)
- Ngày lập phương án (M) (Cho phép sửa)
- Đơn vị thực hiện (M) (Cho phép sửa)
- Đơn vị thẩm tra (M) (Cho phép sửa)
- Danh sách nhà thầu phụ (O) (Cho phép sửa)
- Hồ sơ năng lực (O) (Cho phép sửa)
- Tài liệu đính kèm (O) (Cho phép sửa)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa

### [MBA-21.1] Popup xác nhận duyệt
#### Hiển thị popup xác nhận phê duyệt với button "Đồng ý"; "Hủy"
### [MBA-21.2] Popup gửi duyệt
#### Hiển thị popup xác nhận gửi duyệt với button "Đồng ý"; "Hủy"
### [MBA-24] Màn hình chi tiết & phê duyệt / ký số PATTH & hợp đồng
#### Mục đích
##### Xem chi tiết thông tin & phê duyệt / ký số PATTH & hợp đồng
#### Breadcrumb
##### Home > Phân hệ MBA > PATTH & hợp đồng > Xem chi tiết PATTH & hợp đồng
#### Section
##### Form Xem chi tiết
- Mã (Không được sửa)
- Trạng thái (Không được sửa)
- Tên PATTH (Không được sửa)
- Mô tả phương án (Không được sửa)
- Ngày lập phương án (Không được sửa)
- Đơn vị thực hiện (Không được sửa)
- Đơn vị thẩm tra (Không được sửa)
- Danh sách nhà thầu phụ (Không được sửa)
- Hồ sơ năng lực (Không được sửa)
- Tài liệu đính kèm (Không được sửa)
##### icon X
- Tắt màn xem chi tiết để trở về màn danh sách
##### Button: Gửi thẩm tra | Xác nhận thẩm tra | Gửi duyệt | PC duyệt | PC từ chối
- Thực hiện theo quy trình phê duyệt PATTH (Hiển thị nhóm nút tương ứng với trạng thái)

### [MBA-25] Popup xác nhận xóa PATTH / hợp đồng
#### Hiển thị popup với title "Bạn có chắc chắn xóa PATTH / hợp đồng?" và button "Đồng ý"; "Hủy"
### Popup trình ký
#### Hiển thị popup trình ký số với thông tin người ký và button "Xác nhận"; "Hủy"
### Popup xác nhận ký
#### Hiển thị popup xác nhận ký số với button "Đồng ý"; "Hủy"
## XI. Quản lý Vật tư & Giá; cấp phát vật tư
### [MBA-26] Màn hình danh sách vật tư & giá
#### Mục đích
##### Hiển thị danh sách vật tư & giá
#### Breadcrumb
##### Home > Phân hệ MBA > Vật tư & giá
#### Section
##### Title
- "Vật tư & giá"
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo tên / mã)
- Dropdown: Trạng thái (Mới | Đã gửi duyệt | Đã duyệt | Từ chối)
- Dropdown: Bộ lọc
- Date range: Ngày tạo (Lọc theo khoảng ngày tạo)
##### Bảng dữ liệu
- Cột: Mã bản ghi (Mã định danh vật tư)
- Cột: Thông tin vật tư (Tên / mã vật tư)
- Cột: Số lượng vật tư
- Cột: Đơn vị thực hiện
- Cột: Ngày thực hiện
- Cột: Trạng thái (Mới | Đã gửi duyệt | Đã duyệt | Từ chối)
- Cột: Thao tác (Xem chi tiết | Chỉnh sửa | Xóa)
##### Button Tạo mới
- Mở ra Màn hình tạo mới
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

### [MBA-27] Màn hình tạo mới vật tư
#### Mục đích
##### Nhập và lưu thông tin vật tư
#### Breadcrumb
##### Home > Phân hệ MBA > Vật tư & giá > Tạo mới vật tư
#### Section
##### Form input
- Thông tin vật tư (M)
- Số lượng vật tư (M)
- Đơn vị thực hiện (M)
- Ngày thực hiện (M)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin; chuyển trạng thái sang "Mới"

### [MBA-28] Màn hình chỉnh sửa vật tư
#### Mục đích
##### Chỉnh sửa thông tin vật tư
#### Breadcrumb
##### Home > Phân hệ MBA > Vật tư & giá > Chỉnh sửa vật tư
#### Section
##### Form chỉnh sửa
- Thông tin vật tư (M) (Cho phép sửa)
- Số lượng vật tư (M) (Cho phép sửa)
- Đơn vị thực hiện (M) (Cho phép sửa)
- Ngày thực hiện (M) (Cho phép sửa)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa

### [MBA-29] Popup xác nhận xóa vật tư
#### Hiển thị popup với title "Bạn có chắc chắn xóa vật tư?" và button "Đồng ý"; "Hủy"
## XIII. Theo dõi tiến độ thi công / sự cố
### [MBA-30] Màn hình danh sách tiến độ thi công
#### Mục đích
##### Hiển thị danh sách tiến độ thi công
#### Breadcrumb
##### Home > Phân hệ MBA > Tiến độ thi công
#### Section
##### Title
- "Tiến độ thi công"
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo tên / mã)
- Dropdown: Trạng thái (Mới | Đang thực hiện | Hoàn thành)
- Dropdown: Bộ lọc
- Date range: Ngày tạo (Lọc theo khoảng ngày tạo)
##### Bảng dữ liệu
- Cột: Mã bản ghi (Mã biên bản tiến độ thi công)
- Cột: Mã công trình / Hợp đồng
- Cột: Đơn vị thực hiện
- Cột: Ngày lập
- Cột: Trạng thái (Mới | Đang thực hiện | Hoàn thành)
- Cột: Thao tác (Xem chi tiết | Chỉnh sửa | Xóa)
##### Button Tạo mới
- Mở ra Màn hình tạo mới
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

### [MBA-31] Màn hình tạo mới BB theo dõi tiến độ thi công
#### Mục đích
##### Nhập và lưu thông tin bB theo dõi tiến độ thi công
#### Breadcrumb
##### Home > Phân hệ MBA > Tiến độ thi công > Tạo mới biên bản tiến độ thi công
#### Section
##### Form input
- Tên lô MBA (M)
- Đơn vị quản lý (M)
- Đơn vị thực hiện (M)
- Thông tin thiết bị (M)
- Ngày đăng ký cắt điện (M)
- Ngày bắt đầu thi công (M)
- Hạng mục đang thực hiện (O)
- Tiến độ thi công (M)
- Tài liệu liên quan (O)
- Sự cố (O)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin; chuyển trạng thái sang "Mới"

## XV. Nghiệm thu công trình / quản lý hồ sơ nghiệm thu+văn bản bảo hành
### [MBA-32] Màn hình danh sách biên bản nghiệm thu công trình
#### Mục đích
##### Hiển thị danh sách biên bản nghiệm thu công trình
#### Breadcrumb
##### Home > Phân hệ MBA > Biên bản nghiệm thu công trình
#### Section
##### Title
- "Biên bản nghiệm thu công trình"
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo tên / mã)
- Dropdown: Trạng thái (Mới | Đã gửi duyệt | Đã duyệt | Từ chối)
- Dropdown: Bộ lọc
- Date range: Ngày tạo (Lọc theo khoảng ngày tạo)
##### Bảng dữ liệu
- Cột: Mã biên bản (Mã biên bản nghiệm thu công trình)
- Cột: Mã công trình / Hợp đồng
- Cột: Đơn vị thực hiện
- Cột: Ngày nghiệm thu
- Cột: Trạng thái (Mới | Đã gửi duyệt | Đã duyệt | Từ chối)
- Cột: Thao tác (Xem chi tiết | Chỉnh sửa | Xóa)
##### Button Tạo mới
- Mở ra Màn hình tạo mới
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

### [MBA-33] Màn hình tạo mới biên bản nghiệm thu công trình
#### Mục đích
##### Nhập và lưu thông tin biên bản nghiệm thu công trình
#### Breadcrumb
##### Home > Phân hệ MBA > Biên bản nghiệm thu công trình > Tạo mới biên bản nghiệm thu
#### Section
##### Form input
- Thông tin tiến độ (M)
- Thông tin bàn giao (M)
- Ngày hoàn thành sửa chữa (M)
- Đơn vị quản lý (M)
- Đơn vị thực hiện (M)
- Trạng thái thẩm tra (O)
- Văn bản đính kèm (O)
- Ngày xuất hóa đơn (O)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin; chuyển trạng thái sang "Mới"

### [MBA-34] Màn hình chỉnh sửa biên bản nghiệm thu công trình
#### Mục đích
##### Chỉnh sửa thông tin biên bản nghiệm thu công trình
#### Breadcrumb
##### Home > Phân hệ MBA > Biên bản nghiệm thu công trình > Chỉnh sửa biên bản nghiệm thu
#### Section
##### Form chỉnh sửa
- Thông tin tiến độ (M) (Cho phép sửa)
- Thông tin bàn giao (M) (Cho phép sửa)
- Ngày hoàn thành sửa chữa (M) (Cho phép sửa)
- Đơn vị quản lý (M) (Cho phép sửa)
- Đơn vị thực hiện (M) (Cho phép sửa)
- Trạng thái thẩm tra (O) (Cho phép sửa)
- Văn bản đính kèm (O) (Cho phép sửa)
- Ngày xuất hóa đơn (O) (Cho phép sửa)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin mới cập nhật; quay về màn danh sách hiển thị theo thông tin đã chỉnh sửa

### [MBA-35] Màn hình chi tiết biên bản nghiệm thu công trình
#### Mục đích
##### Xem chi tiết thông tin biên bản nghiệm thu công trình
#### Breadcrumb
##### Home > Phân hệ MBA > Biên bản nghiệm thu công trình > Xem chi tiết biên bản nghiệm thu
#### Section
##### Form Xem chi tiết
- Mã (Không được sửa)
- Trạng thái (Không được sửa)
- Thông tin tiến độ (Không được sửa)
- Thông tin bàn giao (Không được sửa)
- Ngày hoàn thành sửa chữa (Không được sửa)
- Đơn vị quản lý (Không được sửa)
- Đơn vị thực hiện (Không được sửa)
- Trạng thái thẩm tra (Không được sửa)
- Văn bản đính kèm (Không được sửa)
- Ngày xuất hóa đơn (Không được sửa)
##### icon X
- Tắt màn xem chi tiết để trở về màn danh sách
##### Button: Gửi duyệt | Phê duyệt | Từ chối
- Thực hiện theo quy trình phê duyệt biên bản nghiệm thu (Hiển thị nhóm nút tương ứng với trạng thái)

### [MBA-36] Popup xác nhận xóa biên bản nghiệm thu
#### Hiển thị popup với title "Bạn có chắc chắn xóa biên bản nghiệm thu?" và button "Đồng ý"; "Hủy"
## XVI. Hồ sơ quyết toán
### [MBA-41] Màn hình danh sách Hồ sơ quyết toán
#### Mục đích
##### Hiển thị danh sách Hồ sơ quyết toán
#### Breadcrumb
##### Home > Phân hệ MBA > Hồ sơ quyết toán
#### Section
##### Title
- "Hồ sơ quyết toán"
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo mã / tên hồ sơ)
- Dropdown: Trạng thái (Mới | Đã gửi duyệt | Đã duyệt | Từ chối)
- Dropdown: Đơn vị thực hiện
- Date range: Ngày lập (Lọc theo khoảng thời gian)
##### Bảng dữ liệu
- Cột: Mã hồ sơ (Mã định danh hồ sơ quyết toán)
- Cột: Tên công trình
- Cột: Đơn vị thực hiện
- Cột: Tổng giá trị
- Cột: Ngày lập
- Cột: Trạng thái (Mới | Đã gửi duyệt | Đã duyệt | Từ chối)
- Cột: Thao tác (Xem chi tiết | Chỉnh sửa | Xóa)
##### Button Tạo mới
- Mở ra Màn hình tạo mới
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

### [MBA-42] Màn hình tạo mới Hồ sơ quyết toán
#### Mục đích
##### Nhập và lưu thông tin Hồ sơ quyết toán
#### Breadcrumb
##### Home > Phân hệ MBA > Hồ sơ quyết toán > Tạo mới
#### Section
##### Form input
- Tên công trình (M)
- Đơn vị thực hiện (M)
- Ngày lập (M) (Mặc định ngày hiện tại)
- Tổng giá trị quyết toán (M)
- Ghi chú (O) (Tối đa 500 ký tự)
- Văn bản đính kèm (O) (Hỗ trợ PDF/Word; tối đa 20MB/file)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu hồ sơ; chuyển trạng thái sang "Mới"

### [MBA-43] Màn hình chỉnh sửa Hồ sơ quyết toán
#### Mục đích
##### Chỉnh sửa thông tin Hồ sơ quyết toán
#### Breadcrumb
##### Home > Phân hệ MBA > Hồ sơ quyết toán > Chỉnh sửa
#### Section
##### Form chỉnh sửa
- Tên công trình (M) (Cho phép sửa)
- Đơn vị thực hiện (M) (Cho phép sửa)
- Ngày lập (M) (Cho phép sửa)
- Tổng giá trị quyết toán (M) (Cho phép sửa)
- Ghi chú (O) (Cho phép sửa; tối đa 500 ký tự)
- Văn bản đính kèm (O) (Cho phép thêm/xóa file)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin mới cập nhật

### [MBA-44] Màn hình chi tiết Hồ sơ quyết toán
#### Mục đích
##### Xem chi tiết và phê duyệt Hồ sơ quyết toán
#### Breadcrumb
##### Home > Phân hệ MBA > Hồ sơ quyết toán > Xem chi tiết
#### Section
##### Form Xem chi tiết
- Mã hồ sơ (Không được sửa; tự động sinh)
- Trạng thái (Không được sửa; badge màu theo trạng thái)
- Tên công trình (Không được sửa)
- Đơn vị thực hiện (Không được sửa)
- Ngày lập (Không được sửa)
- Tổng giá trị quyết toán (Không được sửa)
- Ghi chú (Không được sửa)
- Văn bản đính kèm (Không được sửa; có nút Preview)
##### icon X
- Tắt màn xem chi tiết để trở về màn danh sách
##### Button: Gửi duyệt | Trình ký | Thẩm tra | Phê duyệt | Từ chối
- Thực hiện theo quy trình phê duyệt (Hiển thị nút tương ứng với trạng thái và quyền người dùng)

### [MBA-44.1] Popup xác nhận xóa Hồ sơ quyết toán
#### Hiển thị popup với title "Bạn có chắc chắn xóa hồ sơ quyết toán này?" và button "Đồng ý"; "Hủy"
### [MBA-44.2] Popup xác nhận gửi duyệt Hồ sơ quyết toán
#### Hiển thị popup với title "Bạn có chắc chắn gửi duyệt hồ sơ quyết toán này?" và button "Đồng ý"; "Hủy"
### [MBA-44.3] Popup xác nhận gửi thẩm tra Hồ sơ quyết toán
#### Hiển thị popup với title "Bạn có chắc chắn gửi thẩm tra hồ sơ quyết toán này?" và button "Đồng ý"; "Hủy"
## XVII. Đề nghị thanh toán
### [MBA-45] Màn hình danh sách Đề nghị thanh toán
#### Mục đích
##### Hiển thị danh sách Đề nghị thanh toán
#### Breadcrumb
##### Home > Phân hệ MBA > Đề nghị thanh toán
#### Section
##### Title
- "Đề nghị thanh toán"
##### Thanh tìm kiếm/lọc
- Input: Từ khóa (Tìm kiếm theo mã / tên đề nghị)
- Dropdown: Trạng thái (Mới | Đã gửi duyệt | Đã duyệt | Từ chối)
- Dropdown: Đơn vị
- Date range: Ngày tạo
##### Bảng dữ liệu
- Cột: Mã đề nghị
- Cột: Tên công trình
- Cột: Số tiền đề nghị
- Cột: Đơn vị yêu cầu
- Cột: Ngày tạo
- Cột: Trạng thái (Mới | Đã gửi duyệt | Đã duyệt | Từ chối)
- Cột: Thao tác (Xem chi tiết | Chỉnh sửa | Xóa)
##### Button Tạo mới
- Mở ra Màn hình tạo mới
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

### [MBA-46] Màn hình tạo mới Đề nghị thanh toán
#### Mục đích
##### Nhập và lưu thông tin Đề nghị thanh toán
#### Breadcrumb
##### Home > Phân hệ MBA > Đề nghị thanh toán > Tạo mới
#### Section
##### Form input
- Tên công trình (M)
- Số tiền đề nghị thanh toán (M)
- Đơn vị yêu cầu (M)
- Ngày lập (M) (Mặc định ngày hiện tại)
- Nội dung thanh toán (O) (Tối đa 500 ký tự)
- Văn bản đính kèm (O) (Hỗ trợ PDF/Word; tối đa 20MB/file)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu đề nghị; chuyển trạng thái sang "Mới"

### [MBA-47] Màn hình chỉnh sửa Đề nghị thanh toán
#### Mục đích
##### Chỉnh sửa thông tin Đề nghị thanh toán
#### Breadcrumb
##### Home > Phân hệ MBA > Đề nghị thanh toán > Chỉnh sửa
#### Section
##### Form chỉnh sửa
- Tên công trình (M) (Cho phép sửa)
- Số tiền đề nghị thanh toán (M) (Cho phép sửa)
- Đơn vị yêu cầu (M) (Cho phép sửa)
- Ngày lập (M) (Cho phép sửa)
- Nội dung thanh toán (O) (Cho phép sửa; tối đa 500 ký tự)
- Văn bản đính kèm (O) (Cho phép thêm/xóa file)
##### Button: Hủy
- Hủy thao tác; quay lại danh sách
##### Button: Lưu
- Lưu thông tin mới cập nhật

### [MBA-48] Màn hình chi tiết Đề nghị thanh toán
#### Mục đích
##### Xem chi tiết và phê duyệt Đề nghị thanh toán
#### Breadcrumb
##### Home > Phân hệ MBA > Đề nghị thanh toán > Xem chi tiết
#### Section
##### Form Xem chi tiết
- Mã đề nghị (Không được sửa; tự động sinh)
- Trạng thái (Không được sửa; badge màu theo trạng thái)
- Tên công trình (Không được sửa)
- Số tiền đề nghị thanh toán (Không được sửa)
- Đơn vị yêu cầu (Không được sửa)
- Ngày lập (Không được sửa)
- Nội dung thanh toán (Không được sửa)
- Văn bản đính kèm (Không được sửa; có nút Preview)
##### icon X
- Tắt màn xem chi tiết để trở về màn danh sách
##### Button: Gửi duyệt | Phê duyệt | Từ chối
- Thực hiện theo quy trình phê duyệt đề nghị thanh toán (Hiển thị nút tương ứng với trạng thái và quyền người dùng)

### [MBA-48.1] Popup xác nhận xóa Đề nghị thanh toán
#### Hiển thị popup với title "Bạn có chắc chắn xóa đề nghị thanh toán này?" và button "Đồng ý"; "Hủy"
### [MBA-48.2] Popup xác nhận gửi duyệt Đề nghị thanh toán
#### Hiển thị popup với title "Bạn có chắc chắn gửi duyệt đề nghị thanh toán này?" và button "Đồng ý"; "Hủy"
### [MBA-48.3] Popup xác nhận gửi thẩm tra Đề nghị thanh toán
#### Hiển thị popup với title "Bạn có chắc chắn gửi thẩm tra đề nghị thanh toán này?" và button "Đồng ý"; "Hủy"
## XVIII. Quản lý hợp đồng
### [MBA-49] Màn hình danh sách hợp đồng
#### Mục đích
##### Hiển thị danh sách hợp đồng trong phân hệ MBA
#### Breadcrumb
##### Home > Phân hệ MBA > Quản lý hợp đồng
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
- Cột: Đối tác
- Cột: Giá trị hợp đồng
- Cột: Ngày ký
- Cột: Trạng thái
- Cột: Thao tác (Xem chi tiết)
##### Phân trang
- Hiển thị 20 bản ghi/trang; chọn số trang; next/prev; tới trang đầu/cuối

### [MBA-50] Màn hình xem chi tiết hợp đồng
#### Mục đích
##### Xem chi tiết thông tin hợp đồng MBA
#### Breadcrumb
##### Home > Phân hệ MBA > Quản lý hợp đồng > Xem chi tiết
#### Section
##### Form Xem chi tiết
- Mã hợp đồng (Không được sửa)
- Tên hợp đồng (Không được sửa)
- Đối tác (Không được sửa)
- Giá trị hợp đồng (Không được sửa)
- Ngày ký (Không được sửa)
- Ngày hết hạn (Không được sửa)
- Trạng thái (Không được sửa)
- Văn bản đính kèm (Không được sửa; có nút Preview)
##### icon X
- Tắt màn xem chi tiết để trở về màn danh sách