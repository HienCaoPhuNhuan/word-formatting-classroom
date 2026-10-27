/* Một nguồn dữ liệu cho file Word và kết quả đối chiếu trên web. */
const practiceBase=sample;
const practiceExtra='Các nhóm trình bày ý tưởng, nhận góp ý và hoàn thiện sản phẩm trước khi chia sẻ với lớp.';
const practiceProject='Ngày hội là dịp để các nhóm giới thiệu sản phẩm, chia sẻ kinh nghiệm và tiếp nhận góp ý. Mỗi nhóm tự kiểm tra nội dung trước khi nộp bài.';
const practiceTasks=[];
function P(section,raw,requirements,expected,html,style=''){practiceTasks.push({section,raw,requirements,expected,html,style});}
const plainP=s=>'<p style="margin:0 0 .65em">'+s+'</p>';
P(2,['NGÀY HỘI SÁNG TẠO SỐ','Học sinh giới thiệu sản phẩm học tập.','Thời gian: 8 giờ, thứ Bảy.'],[
'Định dạng tiêu đề: Times New Roman, 18 pt, đậm, màu xanh #08796F; căn giữa; không thụt dòng đầu.',
'Giữ hai dòng nội dung ở Arial 12 pt, căn trái. Chỉ in đậm cụm “Thời gian:”.'
],'Tiêu đề nổi bật và căn giữa; “Thời gian:” đậm, các chữ còn lại bình thường.',
'<p style="font-family:Times New Roman,serif;font-weight:700;font-size:1.4em;color:#08796f;text-align:center">NGÀY HỘI SÁNG TẠO SỐ</p><p>Học sinh giới thiệu sản phẩm học tập.</p><p><b>Thời gian:</b> 8 giờ, thứ Bảy.</p>');
P(3,['Học sinh chủ động học tập. Mỗi sản phẩm cần rõ ràng.','TRƯỜNG THPT PHÚ NHUẬN TỔ TIN HỌC'],[
'Đặt con trỏ trước “Mỗi sản phẩm” rồi nhấn Enter để tách thành hai đoạn.',
'Ở đoạn tên trường, thay khoảng trắng trước “TỔ TIN HỌC” bằng Shift + Enter. Bật ¶ để kiểm tra.'
],'Hai câu là hai đoạn có dấu ¶ riêng; tên trường và tổ có ↵ ở giữa và chỉ một dấu ¶ cuối.',
'<p>Học sinh chủ động học tập.<span class="mark">¶</span></p><p>Mỗi sản phẩm cần rõ ràng.<span class="mark">¶</span></p><p>TRƯỜNG THPT PHÚ NHUẬN<span class="mark">↵</span><br>TỔ TIN HỌC<span class="mark">¶</span></p>');
P(4,['Học sinh chủ động sáng tạo.'],['Chỉ chọn cụm “chủ động”; in đậm cụm đó. Không in đậm các chữ khác.'],'Chỉ “chủ động” đậm.','<p>Học sinh <b>chủ động</b> sáng tạo.</p>');
P(5,['Họ tên:     Nguyễn Minh','','Lớp:\t10A1'],['Bật Show/Hide ¶. Xác định năm dấu cách sau dấu hai chấm ở dòng Họ tên, một đoạn trống và một Tab ở dòng Lớp.',
'Chưa xóa hoặc thay thế các dấu ở bài này. Khi đối chiếu, giữ chế độ hiện dấu định dạng.'
],'Nhìn thấy dấu cách ·, đoạn trống ¶ và Tab →.',
'<p class="sample">Họ·tên:·····Nguyễn·Minh<span class="mark">¶</span>\n<span class="mark">¶</span>\nLớp:<span class="mark">→</span>10A1<span class="mark">¶</span></p>');
P(6,['Học tập hôm nay, sáng tạo ngày mai.'],['Đổi toàn bộ câu thành Times New Roman, cỡ 14 pt. Giữ chữ thường, không đậm, không nghiêng, không gạch chân.'],'Times New Roman 14 pt; nội dung không đổi.','<p>Học tập hôm nay, sáng tạo ngày mai.</p>','font-family:"Times New Roman",serif;font-size:1.2em');
P(7,['Hạn nộp sản phẩm: thứ Sáu.'],['Chỉ chọn “thứ Sáu”. Lần lượt bật Bold, Italic và Underline để cụm đó vừa đậm, vừa nghiêng, vừa gạch chân.'],'Chỉ “thứ Sáu” có đủ ba kiểu định dạng.','<p>Hạn nộp sản phẩm: <b><i><u>thứ Sáu</u></i></b>.</p>');
P(8,['Lưu ý: nộp đúng hạn.','Lưu ý: nộp đúng hạn.','Hạn nộp: thứ Năm → thứ Sáu.'],[
'Ở dòng 1, đổi màu chữ “nộp đúng hạn” thành đỏ #A33215.',
'Ở dòng 2, tô sáng màu vàng riêng cụm “nộp đúng hạn”; không đổi màu chữ.',
'Ở dòng 3, gạch giữa “thứ Năm” và in đậm “thứ Sáu”.'
],'Phân biệt được màu chữ đỏ, tô sáng vàng và gạch giữa.',
'<p>Lưu ý: <span style="color:#a33215">nộp đúng hạn</span>.</p><p>Lưu ý: <mark>nộp đúng hạn</mark>.</p><p>Hạn nộp: <s>thứ Năm</s> → <b>thứ Sáu</b>.</p>');
P(9,['H2O','x2','25 m2'],['Chuyển số 2 trong H2O thành chỉ số dưới. Chuyển số 2 trong x2 và m2 thành chỉ số trên.','Không thay số 2 bằng kí tự đặc biệt; dùng định dạng Subscript và Superscript.'],'H₂O, x² và 25 m², còn các kí tự khác giữ vị trí bình thường.','<p>H<sub>2</sub>O</p><p>x<sup>2</sup></p><p>25 m<sup>2</sup></p>');
P(10,['ngày hội sáng tạo số'],['Dùng Change Case để đổi cả cụm thành UPPERCASE. Không gõ lại nội dung.','Đặt màu chữ #134C66. Có thể thử Text Effects rồi bỏ hiệu ứng trang trí trước khi lưu để giữ mẫu dễ đọc.'],'NGÀY HỘI SÁNG TẠO SỐ viết hoa, chữ màu #134C66.','<p style="color:#134c66">NGÀY HỘI SÁNG TẠO SỐ</p>');
P(11,['PHÚ NHUẬN SÁNG TẠO','PHÚ NHUẬN SÁNG TẠO','PHÚ NHUẬN SÁNG TẠO'],[
'Giữ dòng 1 ở Spacing: Normal.',
'Dòng 2: Font → Advanced → Spacing: Expanded, By: 1 pt.',
'Dòng 3: Spacing: Condensed, By: 1 pt. Không gõ thêm hoặc xóa Space giữa các chữ.'
],'Ba dòng có cùng nội dung; dòng 2 giãn kí tự, dòng 3 thu hẹp kí tự.',
'<p>PHÚ NHUẬN SÁNG TẠO</p><p style="letter-spacing:.15em">PHÚ NHUẬN SÁNG TẠO</p><p style="letter-spacing:-.055em">PHÚ NHUẬN SÁNG TẠO</p>');
P(12,['HỌC TẬP CHỦ ĐỘNG','SÁNG TẠO MỖI NGÀY'],[
'Định dạng dòng mẫu đầu: Times New Roman 16 pt, đậm, màu #08796F.',
'Dùng Format Painter sao chép định dạng kí tự sang dòng thứ hai. Giữ nguyên nội dung hai dòng.'
],'Hai dòng cùng phông, cỡ, kiểu chữ và màu.',
'<p>HỌC TẬP CHỦ ĐỘNG</p><p>SÁNG TẠO MỖI NGÀY</p>','font-family:"Times New Roman",serif;font-size:1.25em;font-weight:bold;color:#08796f');
P(13,['Học tập có kế hoạch.','Nội dung chính. Ghi chú dành cho giáo viên.'],[
'Với dòng 1, tự áp dụng đậm, nghiêng, màu đỏ và Expanded 1 pt; sau đó dùng Ctrl + Space để bỏ định dạng kí tự trực tiếp.',
'Với dòng 2, chỉ bật Hidden cho “Ghi chú dành cho giáo viên.”; bật ¶ để kiểm tra, rồi bỏ Hidden để hiện lại.',
'Khi lưu kết quả cuối, tất cả chữ phải hiện, Arial 12 pt, không đậm/nghiêng/màu hoặc giãn kí tự trực tiếp.'
],'Hai dòng hiện đầy đủ ở định dạng nền Arial 12 pt.',
'<p>Học tập có kế hoạch.</p><p>Nội dung chính. Ghi chú dành cho giáo viên.</p>');
P(14,['Sản phẩm học tập của lớp','Khối lượng: 25 kg','Trường-Phú-Nhuận'],[
'Chèn © ở đầu dòng 1 và ✓ ở cuối dòng 1 bằng Insert → Symbol.',
'Thay Space giữa 25 và kg bằng Nonbreaking Space. Thay hai dấu gạch nối ở dòng 3 bằng Nonbreaking Hyphen.',
'Thu hẹp vùng soạn thảo để kiểm tra “25 kg” và cụm tên trường không bị tách tại các kí tự vừa thay.'
],'Dòng 1 có © và ✓; 25 kg và Trường‑Phú‑Nhuận dùng kí tự không ngắt.',
'<p>© Sản phẩm học tập của lớp ✓</p><p>Khối lượng: 25&nbsp;kg</p><p>Trường&#8209;Phú&#8209;Nhuận</p>');
P(15,[practiceBase,practiceBase,practiceBase,practiceBase],[
'Căn đoạn 1 theo trái, đoạn 2 ở giữa, đoạn 3 theo phải, đoạn 4 đều hai bên.',
'Chỉ thay Alignment. Giữ Left/Right Indent 0 cm và Special: None.'
],'Bốn bản của cùng nội dung lần lượt căn trái, giữa, phải và đều.',
['left','center','right','justify'].map(a=>'<p style="text-align:'+a+';margin:0 0 .8em">'+practiceBase+'</p>').join(''));
P(16,[practiceBase],['Đặt Left Indent 1 cm và Right Indent 1 cm; Special: None; căn trái. Không thay lề trang.'],'Toàn bộ các dòng thu vào từ cả hai biên, dòng đầu không thụt riêng.',plainP(practiceBase),'margin-left:1.4em;margin-right:1.4em');
P(17,[practiceBase],['Đặt Left/Right Indent 0 cm; Special: First line; By: 1 cm; căn trái. Không dùng Tab hoặc Space để đẩy dòng đầu.'],'Chỉ dòng đầu thụt vào 1 cm.',plainP(practiceBase),'text-indent:1.8em');
P(18,['Dự án 01: Thiết kế bản tin số của lớp, giới thiệu hoạt động học tập và những sản phẩm sáng tạo tiêu biểu trong tháng.'],[
'Đặt Left/Right Indent 0 cm; Special: Hanging; By: 1 cm; căn trái.'
],'Dòng đầu nhô ra; các dòng từ dòng thứ hai lùi vào 1 cm.',
plainP('Dự án 01: Thiết kế bản tin số của lớp, giới thiệu hoạt động học tập và những sản phẩm sáng tạo tiêu biểu trong tháng.'),'padding-left:1.8em;text-indent:-1.8em');
P(19,[practiceBase],['Bật View → Ruler. Dùng các dấu trên thước để tạo Left Indent 0 cm, Right Indent 0 cm và First line 1 cm.','Mở Paragraph kiểm tra lại số đo sau khi kéo thước.'],'Kết quả giống section 17 nhưng thao tác bằng thước.',plainP(practiceBase),'text-indent:1.8em');
P(20,[practiceBase,practiceBase,practiceBase],[
'Đoạn 1: Single; đoạn 2: 1.5 lines; đoạn 3: Double.',
'Đặt Before/After của cả ba đoạn bằng 0 pt để quan sát riêng ảnh hưởng của giãn dòng.'
],'Cùng nội dung nhưng khoảng cách dòng tăng từ đoạn 1 đến đoạn 3.',
[1.1,1.65,2.2].map(v=>'<p style="line-height:'+v+';margin:0 0 .8em">'+practiceBase+'</p>').join(''));
P(21,[practiceBase,practiceBase,practiceBase],[
'Đoạn 1: Line spacing Multiple, At 1.2. Đoạn 2: Exactly, At 18 pt. Đoạn 3: At least, At 18 pt.',
'Đặt Before/After 0 pt. Thử tăng cỡ một từ lên 28 pt để quan sát Exactly và At least, rồi trả từ đó về 12 pt trước khi lưu.'
],'Ba đoạn giữ đúng các thông số Multiple 1.2, Exactly 18 pt và At least 18 pt.',
'<p style="line-height:1.45">'+practiceBase+'</p><p style="line-height:1.5">'+practiceBase+'</p><p style="line-height:1.5">'+practiceBase+'</p>');
P(22,['Đoạn 1: Học tập chủ động.','Đoạn 2: Hợp tác hiệu quả.'],[
'Đoạn 1: Before 0 pt, After 6 pt. Đoạn 2: Before 0 pt, After 0 pt. Cả hai giãn dòng Single.',
'Không chèn đoạn trống. Nếu khoảng cách không đổi, kiểm tra tùy chọn Don’t add space between paragraphs of the same style.'
],'Có khoảng sau đoạn 1; chỉ có hai dấu kết thúc đoạn, không có đoạn trống.',
'<p style="margin:0 0 1em">Đoạn 1: Học tập chủ động.<span class="mark">¶</span></p><p style="margin:0">Đoạn 2: Hợp tác hiệu quả.<span class="mark">¶</span></p>');
P(23,[practiceBase,'Mỗi nhóm hoàn thiện sản phẩm và tự kiểm tra trước khi nộp.'],[
'Chọn đúng hai đoạn mẫu. Đặt căn đều; Left/Right 0 cm; Special: First line, By 1 cm.',
'Đặt Line spacing 1.5 lines; Before 0 pt; After 6 pt. Không tạo đoạn trống.'
],'Hai đoạn cùng cấu trúc, thụt dòng đầu và có khoảng cách đoạn.',
'<p style="margin:0 0 1em">'+practiceBase+'</p><p style="margin:0">Mỗi nhóm hoàn thiện sản phẩm và tự kiểm tra trước khi nộp.</p>','text-align:justify;text-indent:1.8em;line-height:1.65');
P(24,['1. Mục tiêu','Học sinh biết định dạng văn bản.'],[
'Ở tiêu đề “1. Mục tiêu”, bật Keep with next và Widow/Orphan control. Ở đoạn nội dung, bật Keep lines together.',
'Để thử ngắt trang, sao chép cặp mẫu sang trang riêng và thêm nội dung ở phía trước đến khi tiêu đề gần cuối trang. Quan sát tiêu đề đi cùng đoạn nội dung.',
'Thử Page break before trên tiêu đề, quan sát rồi tắt tùy chọn đó trước khi lưu kết quả cuối.'
],'Tiêu đề không đứng một mình cuối trang; không dùng Enter để đẩy tiêu đề.',
'<div class="page-pair"><div class="mini-page"><div class="ghostline"></div><div class="ghostline"></div></div><div class="mini-page"><b>1. Mục tiêu</b><p>Học sinh biết định dạng văn bản.</p></div></div>');
P(25,['Chuẩn bị nội dung','Định dạng tài liệu','Kiểm tra và lưu','Chuẩn bị nội dung','Định dạng tài liệu','Kiểm tra và lưu'],[
'Ba đoạn đầu: tạo Bullets dấu chấm. Ba đoạn sau: tạo Numbering 1, 2, 3.',
'Không gõ kí hiệu hoặc số thứ tự bằng tay. Chèn thử một mục ở giữa để kiểm tra số tự cập nhật, sau đó hoàn tác.'
],'Một danh sách dấu chấm và một danh sách số cùng ba mục.',
'<ul><li>Chuẩn bị nội dung</li><li>Định dạng tài liệu</li><li>Kiểm tra và lưu</li></ul><ol><li>Chuẩn bị nội dung</li><li>Định dạng tài liệu</li><li>Kiểm tra và lưu</li></ol>');
P(26,['Định dạng kí tự','Định dạng đoạn','Danh sách và Tab'],[
'Tạo Numbering tự động theo mẫu “Bài 1:”, “Bài 2:”, “Bài 3:”; giữ trường số khi dùng Define New Number Format.',
'Thử Set Numbering Value cho đoạn cuối bắt đầu từ 5, rồi dùng Continue Numbering để trở lại Bài 3.',
'Kết quả cuối phải đánh số liên tục từ Bài 1 đến Bài 3.'
],'Ba mục tự động nối tiếp, có tiền tố Bài và dấu hai chấm.',
'<p>Bài 1: Định dạng kí tự</p><p>Bài 2: Định dạng đoạn</p><p>Bài 3: Danh sách và Tab</p>');
P(27,['Dự án','Chuẩn bị','Thực hiện','Đánh giá','Dũng','An','Bình'],[
'Bốn đoạn đầu: tạo Multilevel List; “Dự án” là mục 1, “Chuẩn bị” là 1.1, “Thực hiện” là 1.2, “Đánh giá” là mục 2.',
'Chọn riêng ba tên người cuối; dùng Sort → Text → Ascending để sắp xếp thành An, Bình, Dũng.'
],'Đúng quan hệ cha con và đúng thứ tự tên.',
'<p class="sample">1. Dự án\n    1.1. Chuẩn bị\n    1.2. Thực hiện\n2. Đánh giá</p><p>An<br>Bình<br>Dũng</p>');
P(28,['Thông báo quan trọng','Thông báo quan trọng'],[
'Đoạn 1: Borders and Shading → Box; nét liền, màu #08796F, rộng 1 pt; Apply to: Text. Shading màu vàng nhạt #F5DF9D, Apply to: Text.',
'Đoạn 2: dùng cùng kiểu nét và màu nền nhưng Apply to: Paragraph. Giữ Left/Right 0 cm để thấy khác biệt phạm vi.'
],'Khung thứ nhất chỉ theo phần chữ; khung thứ hai theo vùng đoạn.',
'<p><span style="background:#f5df9d;border:2px solid #08796f;padding:4px">Thông báo quan trọng</span></p><p style="background:#f5df9d;border:2px solid #08796f;padding:16px">Thông báo quan trọng</p>');
P(29,['Tin học\t40 tiết','Trải nghiệm\t20 tiết'],[
'Chọn hai đoạn. Đặt Tab stop position 12 cm; Alignment Right; Leader 2; nhấn Set rồi OK.',
'Mỗi dòng chỉ có một Tab giữa tên môn và số tiết. Không gõ thêm dấu chấm hoặc Space để căn.'
],'Hai giá trị số tiết thẳng bên phải và có dấu chấm dẫn.',
'<p class="tabline"><span>Tin học</span><span class="dots"></span><span>40 tiết</span></p><p class="tabline"><span>Trải nghiệm</span><span class="dots"></span><span>20 tiết</span></p>');
P(30,[practiceBase],[
'Đặt con trỏ trong đoạn → Drop Cap Options → Dropped; Font Times New Roman; Lines to drop 3; Distance from text 0.1 cm.'
],'Chữ H đầu đoạn lớn chiếm ba dòng, phần còn lại chạy bên cạnh.',
'<p><span style="float:left;font:76px "Times New Roman",serif;line-height:.9;margin:8px 10px 0 0">H</span>'+practiceBase.slice(1)+'</p>');
P(31,[practiceBase,practiceBase],[
'Chọn riêng hai đoạn mẫu. Layout → Columns → More Columns → Two; Equal column width; Spacing 1.27 cm; Apply to Selected text.',
'Bật ¶ để xem section break. Thử Column Break tại một vị trí trong nội dung rồi hoàn tác để kết quả cuối là văn bản tự chảy qua hai cột.'
],'Chỉ hai đoạn mẫu chia hai cột báo, không chia phần yêu cầu bên dưới.',
'<div style="column-count:2;column-gap:1.3em;column-rule:1px solid #c4ceca;font-size:.85em">'+practiceBase+' '+practiceBase+'</div>');
P(32,[practiceBase,practiceExtra],[
'Đặt Times New Roman 14 pt cho cả hai đoạn. Trong Paragraph: Justified, Left/Right 0 cm, First line 1 cm.',
'Đặt 1.5 lines; Before 0 pt; After 6 pt; kiểm tra toàn bộ thông số trước khi bấm OK.'
],'Hai đoạn thống nhất phông và định dạng đoạn.',
'<p style="margin:0 0 1em">'+practiceBase+'</p><p style="margin:0">'+practiceExtra+'</p>','font-family:"Times New Roman",serif;font-size:1.1em;text-align:justify;text-indent:1.8em;line-height:1.65');
P(33,['1. Mục tiêu','2. Chuẩn bị','3. Thực hiện'],[
'Áp dụng Heading 1 cho cả ba đoạn, không chỉ tăng cỡ hoặc in đậm thủ công.',
'Modify Heading 1: Times New Roman 16 pt, đậm, màu #08796F; căn trái. Cả ba tiêu đề phải được cập nhật theo cùng style.'
],'Ba đoạn cùng Heading 1 và có hình thức nhất quán.',
'<p>1. Mục tiêu</p><p>2. Chuẩn bị</p><p>3. Thực hiện</p>','font-family:"Times New Roman",serif;font-size:1.25em;font-weight:bold;color:#08796f');
P(34,['Nội dung đoạn thứ nhất.','','','Nội dung đoạn thứ hai.'],[
'Bật ¶, xóa hai đoạn trống ở giữa; chỉ giữ hai đoạn nội dung.',
'Đoạn 1 After 6 pt; đoạn 2 After 0 pt; cả hai Before 0 pt, Single. Không dùng Enter tạo khoảng trống.'
],'Hai đoạn nội dung có khoảng cách sau đoạn 1; không còn ¶ dư.',
'<p style="margin:0 0 1em">Nội dung đoạn thứ nhất.<span class="mark">¶</span></p><p style="margin:0">Nội dung đoạn thứ hai.<span class="mark">¶</span></p>');
P(35,['NGÀY HỘI SÁNG TẠO SỐ',practiceBase,practiceProject,'Chuẩn bị nội dung','Định dạng tài liệu','Kiểm tra và lưu','Tin học\t40 tiết','Trải nghiệm\t20 tiết','Diện tích gian trưng bày: 25 m2.','Ví dụ trong phần giới thiệu khoa học: H2O.'],[
'Tiêu đề: Times New Roman 18 pt, đậm, màu #184A71; căn giữa, không thụt dòng đầu.',
'Hai đoạn nội dung: Times New Roman 14 pt; căn đều; Left/Right 0 cm; First line 1 cm; 1.5 lines; Before 0 pt; After 6 pt.',
'Ba bước công việc: Numbering tự động. Hai dòng môn học: Right Tab 12 cm và Leader 2.',
'Chuyển 25 m2 thành 25 m² và H2O thành H₂O bằng Superscript/Subscript. Bật ¶ kiểm tra rồi lưu bài.'
],'Đối chiếu bản tin hoàn chỉnh ở section 35.','');
for(const p of practiceTasks){
 const l=lessons[p.section-1]; if(!l)throw Error('Section không tồn tại: '+p.section);
 p.title=l.title.replaceAll('\n',' '); l.practice=p;
 if(l.states&&p.html){l.states.push({caption:'Kết quả thực hành section '+p.section+': '+p.expected,html:p.html,style:p.style,ribbon:'KẾT QUẢ ĐỐI CHIẾU · SECTION '+p.section,practiceResult:true});}
}
