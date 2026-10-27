# Word Formatting Classroom

Bài giảng tương tác về định dạng kí tự và đoạn văn trong Word 2019, dành cho máy giáo viên THPT Phú Nhuận.

## Mở bài giảng

Trang trực tuyến (sau khi bật GitHub Pages): https://HienCaoPhuNhuan.github.io/word-formatting-classroom/

Hoặc tải mã nguồn, giải nén và mở `index.html`. Không cần build, cài thư viện hay kết nối Internet khi mở bản tải về; toàn bộ phông dùng sẵn trên hệ thống. Các liên kết tham khảo cần Internet.

## Điều khiển

- Phần tiếp / trước: PageDown / PageUp, các phím mũi tên. Space sang phần tiếp.
- Home / End: đầu / cuối bài; M: mục lục; F: toàn màn hình; B hoặc dấu chấm: che màn hình.
- P: chạy / dừng ví dụ; R: đưa ví dụ về bước đầu. Ví dụ tự chạy theo bước, dừng khi kết thúc, khi đổi tab hoặc chuyển phần.
- Khi con trỏ ở ô nhập / danh sách chọn, phím điều hướng dành cho ô đó. Nhấp vùng trống để tiếp tục dùng bút.
- Liên kết `#18` mở trực tiếp phần 18. Chế độ Netop được lưu trên máy hiện tại nếu trình duyệt cho phép.

## Nội dung và nguồn

Biên soạn dựa trên **GIÁO TRÌNH MOS WORD 2019 - 2526**, Trường THPT Phú Nhuận, Tổ Tin học: trang in 17–30, 37–40; bổ sung giải thích và thực hành. Không đính kèm PDF lưu hành nội bộ.

Mô phỏng HTML/CSS giải thích thuộc tính tương đối, không tái tạo chính xác dàn trang Word. Kiến thức bổ sung được phân biệt trên màn hình và liệt kê ở phần cuối.

Đối chiếu Microsoft Support:

- https://support.microsoft.com/en-us/word/adjust-indents-and-spacing
- https://support.microsoft.com/en-us/word/line-and-page-breaks
- https://support.microsoft.com/en-us/word/keep-text-together-in-word

## Trình chiếu qua Netop

Mở trang trên máy giáo viên, bật toàn màn hình, sử dụng chức năng trình diễn màn hình giáo viên của phiên bản Netop tại phòng máy. Chọn **Chế độ Netop** để tắt chuyển động CSS. Ví dụ chỉ thay đổi từng trạng thái sau 3,5 / 5 / 7 giây khi giáo viên chủ động bật. Không video nền, âm thanh, thư viện hoặc tài nguyên CDN. Không thu thập dữ liệu học sinh. Chưa kiểm thử trên hệ thống Netop cụ thể của trường.

## Cấu trúc

- `index.html`: khung trang và điều khiển.
- `style.css`: bố cục màn hình lớn, responsive, kiểu in.
- `lessons.js`: nội dung, bước hướng dẫn và trạng thái minh họa.
- `app.js`: điều hướng, tự chạy, phòng thử và tải văn bản thực hành.

Bật Pages ở **Settings → Pages → Deploy from a branch → main → /(root)**. Không cần GitHub Actions.
