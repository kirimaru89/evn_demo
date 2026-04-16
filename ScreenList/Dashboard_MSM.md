# Dashboard_MSM

## I. Dashboard Tổng quan
### [MSM-01] Màn hình dashboard tổng quan
#### Mục đích
##### Tổng hợp KPI và báo cáo tổng quan từ tất cả các phân hệ trong hệ thống MSM
#### Breadcrumb
##### Home > Phân hệ PORTAL MSM > Dashboard tổng quan
#### Bộ lọc
##### Dropdown: Năm
- Chọn năm báo cáo (Mặc định năm hiện tại)
##### Dropdown: Quý / Tháng
- Lọc theo quý hoặc tháng (Tùy chọn: Tất cả | Quý 1-4 | Tháng 1-12)
##### Dropdown: Đơn vị
- Lọc theo đơn vị (XN/PC) (Mặc định: Tất cả)
##### Button: Áp dụng
- Áp dụng bộ lọc và cập nhật toàn bộ dashboard
#### KPI Cards
##### Tổng yêu cầu / hợp đồng
- Tổng số yêu cầu và hợp đồng trong kỳ (tất cả phân hệ) (Hiển thị số + % so với kỳ trước)
##### Tổng doanh thu
- Tổng giá trị hóa đơn đã xuất trong kỳ (Đơn vị: triệu đồng; Hiển thị % tăng trưởng)
##### Tổng giá trị nghiệm thu
- Tổng giá trị BBNT đã phê duyệt trong kỳ
##### Tổng giá trị quyết toán
- Tổng giá trị HSQT đã phê duyệt trong kỳ
##### Tỷ lệ hoàn thành kế hoạch
- % hoàn thành so với kế hoạch năm (Thanh tiến trình (progress bar))
#### Biểu đồ
##### Doanh thu theo thời gian
- Line chart: Doanh thu thực tế theo tháng/quý (Trục X: Thời gian; Trục Y: Giá trị (triệu đồng); Có thể so sánh nhiều năm)
##### Phân bổ theo phân hệ
- Donut chart: Tỷ lệ doanh thu/hợp đồng theo từng phân hệ (TN DT / SCL MBA / CBM / TVTK) (Click vào phần để lọc bảng bên dưới)
##### Tình trạng hồ sơ
- Stacked bar chart: Số hồ sơ theo trạng thái (Mới / Đang xử lý / Hoàn thành / Từ chối) cho từng phân hệ
#### Bảng tóm tắt theo phân hệ
##### Cột: Phân hệ
- TN Tạo DT | SCL MBA | TN CBM | Tư vấn TK
##### Cột: Tổng hợp đồng/kế hoạch
- Số lượng trong kỳ
##### Cột: Hoàn thành
- Số lượng hoàn thành
##### Cột: Đang xử lý
- Số lượng đang xử lý
##### Cột: Doanh thu / Giá trị
- Triệu đồng
##### Cột: Tỷ lệ hoàn thành
- % hoàn thành (Thanh tiến trình mini)
#### Bảng hồ sơ chờ xử lý
##### Cột: STT
##### Cột: Phân hệ
- TN DT / SCL MBA / CBM / TVTK (Badge màu theo phân hệ)
##### Cột: Tên hồ sơ / yêu cầu
##### Cột: Trạng thái
##### Cột: Đơn vị thực hiện
##### Cột: Ngày cập nhật
- Ngày cập nhật gần nhất

## II. Dashboard Sửa chữa MBA
### [MSM-02] Màn hình dashboard sửa chữa MBA
#### Mục đích
##### Tổng hợp tình hình thực hiện sửa chữa lớn máy biến áp (MBA SCL) theo kỳ và đơn vị
#### Breadcrumb
##### Home > Phân hệ PORTAL MSM > Dashboard sửa chữa MBA
#### Bộ lọc
##### Dropdown: Năm
- Chọn năm thực hiện (Mặc định năm hiện tại)
##### Dropdown: Quý / Tháng
- Lọc theo quý hoặc tháng
##### Dropdown: Đơn vị thực hiện
- Lọc theo XN/đơn vị (Mặc định: Tất cả)
##### Dropdown: Trạng thái
- Mới | Đang thực hiện | Hoàn thành | Từ chối
##### Button: Áp dụng
- Cập nhật toàn bộ dashboard
#### KPI Cards
##### Tổng số MBA SCL trong kỳ
- Tổng số MBA được lên kế hoạch SCL (Hiển thị số + % so với cùng kỳ năm trước)
##### Đang thực hiện
- Số MBA đang trong quá trình SCL (Badge trạng thái)
##### Hoàn thành
- Số MBA đã hoàn thành SCL trong kỳ
##### Quá hạn / Chờ duyệt
- Số MBA SCL chưa hoàn thành đúng tiến độ hoặc đang chờ phê duyệt hồ sơ (Badge màu đỏ/cam)
#### Biểu đồ
##### Tiến độ SCL theo đơn vị
- Bar chart: Số lượng MBA SCL hoàn thành / tổng kế hoạch theo từng đơn vị (Click để lọc bảng bên dưới)
##### Xu hướng theo tháng
- Line chart: Số MBA SCL hoàn thành mỗi tháng trong năm (Có đường kế hoạch để so sánh)
##### Phân loại theo loại MBA
- Pie chart: Tỷ lệ MBA SCL theo công suất/loại (110kV, 35kV, 22kV,...)
#### Bảng MBA đang SCL
##### Cột: STT
##### Cột: Mã MBA
##### Cột: Tên MBA / Vị trí
##### Cột: Đơn vị thực hiện
##### Cột: Ngày bắt đầu
- Ngày bắt đầu thực hiện SCL
##### Cột: Ngày dự kiến hoàn thành
##### Cột: Trạng thái
- Đang thực hiện | Chờ nghiệm thu | Chờ quyết toán (Badge màu)
#### Bảng hồ sơ chờ phê duyệt SCL
##### Cột: Loại hồ sơ
- PAKT-DT | BBNT | HSQT | Hóa đơn
##### Cột: Mã hồ sơ
##### Cột: MBA liên quan
##### Cột: Người phụ trách
##### Cột: Ngày trình
##### Cột: Trạng thái duyệt
- Chờ duyệt | Đã duyệt | Từ chối (Badge màu)

## III. Dashboard TN Tạo Doanh thu
### [MSM-03] Màn hình dashboard thí nghiệm tạo doanh thu
#### Mục đích
##### Tổng hợp kết quả thực hiện dịch vụ thí nghiệm tạo doanh thu (khách hàng ngoài và tự thực hiện)
#### Breadcrumb
##### Home > Phân hệ PORTAL MSM > Dashboard thí nghiệm tạo doanh thu
#### Bộ lọc
##### Dropdown: Năm
##### Dropdown: Quý / Tháng
##### Dropdown: Đơn vị
- Lọc theo XN/PC
##### Dropdown: Loại dịch vụ
- Khách hàng ngoài | Tự thực hiện | Tất cả
##### Button: Áp dụng
#### KPI Cards
##### Tổng số hợp đồng
- Tổng hợp đồng thí nghiệm trong kỳ (Số + % so sánh kỳ trước)
##### Tổng doanh thu
- Tổng giá trị hóa đơn xuất trong kỳ (Đơn vị: triệu đồng)
##### Tổng giá trị nghiệm thu
- Tổng giá trị BBNT (Biên bản nghiệm thu) đã phê duyệt
##### Tổng giá trị quyết toán
- Tổng giá trị HSQT được phê duyệt trong kỳ
##### Tỷ lệ thu hồi công nợ
- % giá trị hóa đơn đã thanh toán / tổng hóa đơn xuất (Thanh tiến trình)
#### Biểu đồ
##### Doanh thu theo tháng
- Line/Bar chart: Doanh thu thực tế theo từng tháng trong năm (So sánh năm hiện tại vs năm trước (2 đường))
##### Phân loại theo loại dịch vụ
- Donut chart: Tỷ lệ doanh thu KH ngoài / Tự thực hiện
##### Doanh thu theo đơn vị
- Bar chart ngang: Doanh thu theo từng XN/PC (Sắp xếp giảm dần)
#### Bảng top hợp đồng giá trị cao
##### Cột: STT
##### Cột: Mã hợp đồng
##### Cột: Khách hàng / Đơn vị yêu cầu
##### Cột: Giá trị hợp đồng
- Triệu đồng
##### Cột: Giá trị đã nghiệm thu
- Triệu đồng
##### Cột: Trạng thái
- Đang thực hiện | Hoàn thành | Quyết toán (Badge màu)
#### Bảng trạng thái hóa đơn
##### Cột: Loại hóa đơn
- Ghi nhận DT | Điều chỉnh tăng | Điều chỉnh giảm
##### Cột: Số lượng
- Số hóa đơn theo loại
##### Cột: Tổng giá trị
- Triệu đồng
##### Cột: Đã thanh toán
##### Cột: Chưa thanh toán

## IV. Dashboard TN CBM
### [MSM-04] Màn hình dashboard thí nghiệm CBM
#### Mục đích
##### Tổng hợp tình hình thực hiện bảo trì dựa trên tình trạng thiết bị (CBM) theo kỳ và đơn vị
#### Breadcrumb
##### Home > Phân hệ PORTAL MSM > Dashboard thí nghiệm CBM
#### Bộ lọc
##### Dropdown: Năm
##### Dropdown: Quý / Tháng
##### Dropdown: Đơn vị
##### Dropdown: Loại thiết bị
- Lọc theo loại thiết bị (MBA / TU / TI / Cầu dao / ...)
##### Button: Áp dụng
#### KPI Cards
##### Tổng kế hoạch CBM
- Tổng số kế hoạch CBM trong kỳ (Số + % so sánh kỳ trước)
##### Hoàn thành
- Số kế hoạch CBM đã hoàn thành và phê duyệt
##### Đang thực hiện
- Số kế hoạch CBM đang trong tiến trình
##### Quá hạn
- Số kế hoạch CBM chưa hoàn thành sau ngày dự kiến (Badge đỏ; Click để xem danh sách)
##### Tổng biên bản thí nghiệm
- Số BBTN CBM đã phê duyệt trong kỳ
#### Biểu đồ
##### Tỷ lệ hoàn thành theo đơn vị
- Bar chart: % hoàn thành kế hoạch CBM theo từng XN/PC
##### Xu hướng kế hoạch CBM theo tháng
- Line chart: Số kế hoạch tạo mới / hoàn thành theo tháng
##### Phân loại theo loại thiết bị
- Donut chart: Tỷ lệ số lượng CBM theo loại thiết bị
#### Bảng kế hoạch CBM sắp đến hạn
##### Cột: Mã kế hoạch
##### Cột: Tên thiết bị
##### Cột: Mã thiết bị
##### Cột: Đơn vị thực hiện
##### Cột: Thời gian thực hiện
##### Cột: Trạng thái
- Mới | Đang thực hiện | Quá hạn (Badge màu)
#### Bảng báo cáo CBM gần nhất
##### Cột: Mã báo cáo
##### Cột: Tên thiết bị
##### Cột: Kết quả thí nghiệm
- Đạt | Không đạt | Cần theo dõi (Badge màu)
##### Cột: Ngày thực hiện
##### Cột: Đơn vị

## V. Dashboard Tư vấn Thiết kế
### [MSM-05] Màn hình dashboard tư vấn thiết kế
#### Mục đích
##### Tổng hợp tình hình thực hiện các dự án tư vấn thiết kế (khảo sát, thiết kế, lập dự toán) theo kỳ
#### Breadcrumb
##### Home > Phân hệ PORTAL MSM > Dashboard tư vấn thiết kế
#### Bộ lọc
##### Dropdown: Năm
##### Dropdown: Quý / Tháng
##### Dropdown: Đơn vị
##### Dropdown: Loại dự án
- ĐTXD | SXKD | Tất cả
##### Button: Áp dụng
#### KPI Cards
##### Tổng số dự án TVTK
- Tổng số dự án tư vấn thiết kế trong kỳ (Số + % so sánh kỳ trước)
##### Đang thực hiện
- Số dự án đang trong tiến trình KS-TK
##### Hoàn thành
- Số dự án đã hoàn thành và quyết toán
##### Tổng giá trị đầu tư (TMĐT)
- Tổng mức đầu tư của các dự án trong kỳ (Đơn vị: triệu đồng)
##### Tổng giá trị tư vấn
- Tổng giá trị phí TVTK đã được phê duyệt (Đơn vị: triệu đồng)
#### Biểu đồ
##### Tiến độ dự án theo đơn vị
- Bar chart: Số dự án hoàn thành / tổng theo từng XN/PC
##### Phân loại theo loại dự án
- Donut chart: Tỷ lệ ĐTXD / SXKD
##### Giá trị TMĐT theo tháng
- Bar chart: Tổng mức đầu tư các dự án phê duyệt trong tháng
#### Bảng dự án đang thực hiện
##### Cột: Mã dự án
##### Cột: Tên dự án
##### Cột: Loại dự án
- ĐTXD | SXKD (Badge màu)
##### Cột: Đơn vị thực hiện
##### Cột: Tổng mức đầu tư
- Triệu đồng
##### Cột: Giai đoạn hiện tại
- KS-TK | Thẩm định | Phê duyệt | Thi công
##### Cột: Trạng thái
- Đang thực hiện | Chờ duyệt | Từ chối (Badge màu)
#### Bảng hồ sơ TVTK chờ phê duyệt
##### Cột: Loại hồ sơ
- PAKT-DT | PATTC-TC | BCKL-HT | HSQT | Hóa đơn
##### Cột: Mã hồ sơ
##### Cột: Dự án liên quan
##### Cột: Người phụ trách
##### Cột: Ngày trình
##### Cột: Trạng thái
- Chờ duyệt | Đã duyệt | Từ chối (Badge màu)