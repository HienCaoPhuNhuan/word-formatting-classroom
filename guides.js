/* Ảnh giao diện trích từ giáo trình người dùng cung cấp; chú thích là lớp hướng dẫn. */
const wordImages={
 home:{file:'p23-01.png',w:746,h:172},font:{file:'p23-02.png',w:657,h:631},
 advanced:{file:'p25-01.png',w:753,h:435},highlight:{file:'p24-13.png',w:157,h:167},effects:{file:'p24-14.png',w:285,h:367},
 painter:{file:'p25-05.png',w:623,h:420},symbolmenu:{file:'p26-01.png',w:187,h:209},symbol:{file:'p26-02.png',w:593,h:479},special:{file:'p26-03.png',w:593,h:479},
 paragraphbar:{file:'p28-03.png',w:264,h:122},paragraph:{file:'p28-04.png',w:731,h:675},ruler:{file:'p28-06.png',w:718,h:163},pagination:{file:'p29-01.png',w:584,h:392},
 bullets:{file:'p30-01.png',w:313,h:360},newbullet:{file:'p30-02.png',w:417,h:476},numbers:{file:'p30-05.png',w:336,h:612},newnumber:{file:'p30-06.png',w:356,h:550},
 listcontext:{file:'p31-00.png',w:294,h:181},listindents:{file:'p31-02.png',w:276,h:303},numbercontext:{file:'p31-03.png',w:262,h:256},numbervalue:{file:'p31-04.png',w:276,h:262},continue:{file:'p31-06.png',w:276,h:239},
 multilevel:{file:'p32-01.png',w:407,h:605},newmulti:{file:'p32-08.png',w:809,h:623},
 bordermenu:{file:'p33-01.png',w:213,h:486},borders:{file:'p33-02.png',w:769,h:541},shading:{file:'p33-04.png',w:530,h:413},
 columns:{file:'p34-03.png',w:755,h:460},dropcap:{file:'p34-04.png',w:417,h:287},
 tabselector:{file:'p35-08.png',w:288,h:32},tabs:{file:'p36-04.png',w:486,h:377},
 styles:{file:'p43-00.png',w:487,h:113},stylemenu:{file:'p45-09.png',w:720,h:250},newstyle:{file:'p44-06.png',w:667,h:700}
};
function T(caption,image,box,crop,path){return {caption,ribbon:path||'Thao tác trên Word',ui:{image,box,crop},html:'',style:''};}
function K(caption,keys,content=sample){return {caption,ribbon:'Thao tác bàn phím trong Word',ui:{keys,content},html:'',style:''};}
function M(caption,label,items,index){return {caption,ribbon:label,ui:{menu:items,active:index,label},html:'',style:''};}
function O(state,caption){return {...state,caption:caption||('Kết quả: '+state.caption),ui:null};}
function selectText(content=sample){return K('Chọn đúng phần văn bản cần định dạng. Với một đoạn, đặt con trỏ bên trong đoạn đó.', ['Chọn văn bản'],content);}
function home(){return T('Bấm thẻ Home ở đầu thanh Ribbon.','home',[73,0,63,34],[0,0,746,140],'Home');}
function fontOpen(){return T('Trong nhóm Font, bấm mũi tên nhỏ ở góc dưới bên phải.','home',[459,114,24,24],[170,35,320,106],'Home → Font → nút mở hộp thoại ↘');}
function paraOpen(){return T('Trong nhóm Paragraph, bấm mũi tên nhỏ ở góc dưới bên phải.','paragraphbar',[240,96,22,22],[0,0,264,122],'Home → Paragraph → nút mở hộp thoại ↘');}
function fontTab(){return T('Trong hộp thoại Font, chọn thẻ Font.','font',[140,44,72,29],[124,0,533,631],'Font → thẻ Font');}
function paraTab(){return T('Chọn thẻ Indents and Spacing trong hộp thoại Paragraph.','paragraph',[158,42,147,34],[147,0,533,675],'Paragraph → Indents and Spacing');}
function fOK(){return T('Bấm OK để áp dụng định dạng Font cho vùng đã chọn.','font',[428,585,99,30],[124,570,533,60],'Font → OK');}
function pOK(){return T('Bấm OK để áp dụng các thông số Paragraph.','paragraph',[451,629,100,30],[147,610,533,65],'Paragraph → OK');}
function fButton(caption,box){return T(caption,'home',box,[170,35,319,105],'Home → nhóm Font');}
function pButton(caption,box){return T(caption,'paragraphbar',box,[0,0,264,122],'Home → nhóm Paragraph');}
function specialIndent(kind){return T('Mở Special và chọn '+kind+'.','paragraph',kind==='First line'?[424,293,137,18]:[424,310,137,18],[180,214,490,120],'Paragraph → Indentation → Special: '+kind);}
function indentBy(value){return T('Bấm ô By, nhập '+value+' rồi giữ nguyên đơn vị cm.','paragraph',[574,249,77,27],[180,214,490,120],'Paragraph → Special → By: '+value);}
function lineChoice(label,y){return T('Mở Line spacing và chọn '+label+'.','paragraph',[425,y,136,18],[180,350,490,172],'Paragraph → Spacing → Line spacing: '+label);}
function attach(n,steps){const l=lessons[n-1];l.states=steps;l.demoSteps=steps.map(s=>s.caption);}
const originalStates=lessons.map(l=>l.states?.map(s=>({...s})));
attach(2,[selectText('NGÀY HỘI SÁNG TẠO SỐ'),home(),fontOpen(),fontTab(),
 T('Chọn Size và nhập 18.','font',[527,125,84,25],[155,92,470,155],'Font → Size: 18'),
 T('Trong Font style chọn Bold.','font',[421,182,94,19],[155,92,470,155],'Font → Font style: Bold'),fOK(),
 pButton('Bấm Center để căn giữa riêng đoạn tiêu đề.',[34,56,26,26]),O(originalStates[1][1])]);
attach(3,[K('Gõ câu dài: Word tự xuống dòng khi chạm biên soạn thảo.',['Gõ văn bản']),O(originalStates[2][0]),
 K('Nhấn Enter: Word kết thúc đoạn hiện tại và tạo một đoạn mới.',['Enter']),O(originalStates[2][1]),
 K('Trong cùng một đoạn, nhấn Shift + Enter để xuống dòng mà không tạo đoạn mới.',['Shift','Enter']),O(originalStates[2][2])]);
attach(4,[K('Nhấp đôi vào một từ để chọn cả từ.',['Nhấp đôi vào từ'],'Học sinh chủ động sáng tạo.'),
 K('Hoặc giữ Shift và nhấn phím mũi tên để mở rộng vùng chọn.',['Shift','→'],'Học sinh chủ động sáng tạo.'),
 O(originalStates[3][1]),home(),fButton('Bấm B (Bold) trong nhóm Font. Chỉ phần đang chọn được in đậm.',[181,80,24,26]),O(originalStates[3][2])]);
attach(5,[home(),pButton('Bấm nút ¶ (Show/Hide) ở hàng trên của nhóm Paragraph.',[228,18,23,28]),O(originalStates[4][1]),
 K('Cách nhanh: nhấn Ctrl + Shift + 8 để bật hoặc tắt các dấu định dạng.',['Ctrl','Shift','8']),O(originalStates[4][1])]);
attach(6,[selectText('Học tập hôm nay, sáng tạo ngày mai.'),home(),fontOpen(),fontTab(),
 T('Bấm ô Font, nhập Times New Roman hoặc chọn tên trong danh sách.','font',[173,125,236,27],[155,92,470,155],'Font → Font: Times New Roman'),
 T('Bấm ô Size, nhập 14. Không nhập 14 vào ô Font style.','font',[528,125,83,27],[155,92,470,155],'Font → Size: 14'),fOK(),O(originalStates[5][2]),
 fButton('Cách nhanh: ô tên phông nằm ở hàng trên của nhóm Font.',[176,43,118,29]),
 fButton('Ô cỡ chữ nằm ngay bên phải tên phông. Nhập 14 và nhấn Enter.',[294,43,47,29]),O(originalStates[5][2])]);
attach(7,[selectText('Hạn nộp sản phẩm: thứ Sáu.'),home(),
 fButton('Bấm B để bật in đậm cho phần chữ đã chọn.',[181,80,24,26]),O(originalStates[6][1]),
 fButton('Bấm I để thêm in nghiêng; thuộc tính đậm vẫn được giữ.',[208,80,24,26]),O(originalStates[6][2]),
 fButton('Bấm U để thêm gạch chân. Bấm lại U để tắt.',[237,80,26,26]),O(originalStates[6][3])]);
attach(8,[selectText('Lưu ý: nộp đúng hạn.'),home(),
 fButton('Bấm mũi tên bên cạnh A có gạch màu để mở Font Color, rồi chọn màu chữ.',[441,77,38,31]),O(originalStates[7][0]),
 fButton('Bấm mũi tên cạnh bút đánh dấu để mở Text Highlight Color.',[402,77,36,31]),
 T('Trong bảng màu Highlight, chọn ô màu vàng.','highlight',[1,34,29,25],[0,0,157,167],'Text Highlight Color → Yellow'),O(originalStates[7][1]),
 fButton('Chọn chữ cũ rồi bấm abc có nét gạch giữa (Strikethrough).',[274,80,29,26]),O(originalStates[7][2])]);
attach(9,[K('Gõ H2O; chỉ chọn số 2, không chọn H hoặc O.',['Chọn số 2'],'H2O'),home(),
 fButton('Bấm x₂ (Subscript) để tạo chỉ số dưới.',[303,80,26,26]),O(originalStates[8][1]),
 K('Gõ x2 hoặc m2, rồi chỉ chọn số 2.',['Chọn số 2'],'x2     25 m2'),
 fButton('Bấm x² (Superscript) để tạo chỉ số trên.',[330,80,25,26]),O(originalStates[8][2]),
 K('Sau khi gõ chỉ số, tắt nút chỉ số hoặc dùng phím tắt lần nữa để trở lại dòng thường.',['Ctrl','='])]);
attach(10,[selectText('ngày hội sáng tạo số'),home(),
 fButton('Bấm Aa (Change Case) ở hàng trên của nhóm Font.',[405,44,40,27]),M('Chọn dòng UPPERCASE trong menu Change Case.','Home → Font → Change Case',['Sentence case.','lowercase','UPPERCASE','Capitalize Each Word','tOGGLE cASE'],2),O(originalStates[9][1]),
 fButton('Muốn thêm hiệu ứng, bấm chữ A phát sáng (Text Effects).',[365,77,32,30]),
 T('Chọn một mẫu trong bộ sưu tập Text Effects; có thể mở Shadow ở bên dưới.','effects',[14,255,111,24],[0,0,285,367],'Text Effects → Shadow'),O(originalStates[9][2])]);
attach(11,[selectText('PHÚ NHUẬN SÁNG TẠO'),home(),fontOpen(),
 T('Chọn thẻ Advanced.','advanced',[77,45,69,24],[0,8,470,205],'Font → Advanced'),
 T('Mở Spacing và chọn Expanded để giãn khoảng cách kí tự.','advanced',[83,118,179,25],[0,75,470,126],'Advanced → Spacing: Expanded'),
 T('Bấm ô By bên phải Spacing và nhập 1 pt. Không nhập vào ô Position bên dưới.','advanced',[291,118,92,26],[0,75,470,126],'Advanced → Spacing → By: 1 pt'),
 K('Nhấn Enter để xác nhận hộp thoại Font.',['Enter']),O(originalStates[10][1]),
 T('Muốn thu hẹp: chọn Condensed trong chính danh sách Spacing; By là độ thu hẹp.','advanced',[83,118,179,25],[0,75,470,126],'Advanced → Spacing: Condensed'),
 K('Nhấn Enter để xác nhận.',['Enter']),O(originalStates[10][2])]);
attach(12,[K('Chọn phần chữ mẫu có định dạng muốn sao chép.',['Chọn chữ mẫu'],'MẪU: HỌC TẬP CHỦ ĐỘNG'),home(),
 T('Bấm Format Painter trong Home → Clipboard. Nhấp đôi nếu cần quét nhiều nơi.','painter',[44,67,108,29],[0,0,270,126],'Home → Clipboard → Format Painter'),
 K('Kéo quét phần chữ đích để áp dụng định dạng; nội dung chữ đích được giữ nguyên.',['Quét chữ đích'],'ĐÍCH: SÁNG TẠO MỖI NGÀY'),O(originalStates[11][2]),
 K('Nếu đã nhấp đôi Format Painter, nhấn Esc để thoát chế độ cọ.',['Esc'])]);
attach(13,[selectText('Học tập có kế hoạch.'),K('Bỏ định dạng kí tự trực tiếp bằng Ctrl + Space; chữ trở về định dạng theo style.',['Ctrl','Space']),O(originalStates[12][1]),
 K('Bỏ định dạng đoạn trực tiếp bằng Ctrl + Q nếu cần căn hoặc thụt lại theo style.',['Ctrl','Q']),
 fontOpen(),fontTab(),
 T('Hidden nằm trong nhóm Effects. Chọn để ẩn, bỏ chọn để hiện chữ trở lại.','font',[478,372,100,27],[148,310,490,112],'Font → Effects → Hidden'),fOK(),O(originalStates[12][2])]);
attach(14,[selectText('Chèn kí hiệu tại vị trí con trỏ.'),K('Mở thẻ Insert → nhóm Symbols → bấm Symbol.',['Insert','Symbol']),
 T('Trong menu Symbol, chọn More Symbols để mở đầy đủ bảng kí hiệu.','symbolmenu',[1,170,185,39],[0,0,187,209],'Insert → Symbol → More Symbols'),
 T('Chọn Font phù hợp; nhấp kí hiệu trong lưới để chọn.','symbol',[27,75,522,243],[0,0,593,479],'Symbol → Font → chọn kí hiệu'),
 T('Bấm Insert để chèn kí hiệu đang chọn.','symbol',[397,430,91,29],[0,382,593,97],'Symbol → Insert'),
 O(originalStates[13][0]),
 T('Chọn Special Characters để tìm Nonbreaking Space hoặc Nonbreaking Hyphen.','special',[102,41,116,26],[0,0,593,479],'Symbol → Special Characters'),
 K('Cách nhanh: đặt con trỏ giữa số và đơn vị rồi nhấn Ctrl + Shift + Space.',['Ctrl','Shift','Space'],'25 kg'),O(originalStates[13][2])]);
attach(15,[selectText(),home(),
 pButton('Bấm Align Left: căn thẳng phía trái.',[5,56,26,26]),O(originalStates[14][0]),
 pButton('Bấm Center: căn giữa các dòng của đoạn.',[34,56,26,26]),O(originalStates[14][1]),
 pButton('Bấm Align Right: căn thẳng phía phải.',[60,56,26,26]),O(originalStates[14][2]),
 pButton('Bấm Justify: căn đều hai bên; dòng cuối thường không bị kéo giãn.',[87,56,26,26]),O(originalStates[14][3])]);
attach(16,[selectText(),home(),paraOpen(),paraTab(),
 T('Trong Indentation, bấm ô Left và nhập 1 cm.','paragraph',[273,221,79,25],[180,210,490,122],'Paragraph → Indentation → Left: 1 cm'),
 T('Bấm ô Right ngay dưới Left và nhập 1 cm.','paragraph',[273,250,79,25],[180,210,490,122],'Paragraph → Indentation → Right: 1 cm'),pOK(),O(originalStates[15][2])]);
attach(17,[selectText(),home(),paraOpen(),paraTab(),specialIndent('First line'),indentBy('1 cm'),pOK(),O(originalStates[16][1])]);
attach(18,[selectText('Dự án 01: Thiết kế bản tin số của lớp, giới thiệu hoạt động học tập và những sản phẩm sáng tạo tiêu biểu trong tháng.'),home(),paraOpen(),paraTab(),specialIndent('Hanging'),indentBy('1 cm'),pOK(),O(originalStates[17][1])]);
attach(19,[K('Bấm thẻ View, đánh dấu Ruler để hiện thước.',['View','Ruler']),selectText(),
 T('Tam giác trên bên trái điều khiển vị trí dòng đầu (First Line Indent).','ruler',[336,57,23,18],[0,0,718,163],'Ruler → tam giác trên'),
 T('Tam giác dưới bên trái điều khiển các dòng sau (Hanging Indent).','ruler',[336,74,23,18],[0,0,718,163],'Ruler → tam giác dưới'),
 T('Ô vuông dưới hai tam giác dời cả hai dấu bên trái cùng nhau (Left Indent).','ruler',[336,83,23,17],[0,0,718,163],'Ruler → ô vuông'),
 T('Tam giác ở bên phải điều khiển biên phải của đoạn.','ruler',[674,66,23,21],[0,0,718,163],'Ruler → Right Indent'),
 O(originalStates[18][1])]);
attach(20,[selectText(),home(),paraOpen(),paraTab(),
 lineChoice('Single',413),pOK(),O(originalStates[19][0]),paraOpen(),
 lineChoice('1.5 lines',430),pOK(),O(originalStates[19][1]),paraOpen(),
 lineChoice('Double',446),pOK(),O(originalStates[19][2])]);
attach(21,[selectText(),home(),paraOpen(),paraTab(),lineChoice('Multiple',495),
 T('Ở ô At cạnh Line spacing, nhập 1.2 cho hệ số giãn 1,2 lần.','paragraph',[574,387,77,27],[180,348,490,172],'Multiple → At: 1.2'),pOK(),O(originalStates[20][2]),paraOpen(),lineChoice('Exactly',479),
 T('Với Exactly, ô At đo bằng pt: nhập 18 pt nếu đề yêu cầu chiều cao dòng cố định.','paragraph',[574,387,77,27],[180,348,490,172],'Exactly → At: 18 pt'),pOK(),O(originalStates[20][0]),paraOpen(),lineChoice('At least',463),
 T('At least cũng nhập theo pt nhưng có thể nới dòng khi chữ lớn hơn.','paragraph',[574,387,77,27],[180,348,490,172],'At least → At: 18 pt'),pOK(),O(originalStates[20][1])]);
attach(22,[selectText('Đoạn 1: Học tập chủ động.\\nĐoạn 2: Hợp tác hiệu quả.'),home(),paraOpen(),paraTab(),
 T('Before: nhập 0 pt để không thêm khoảng trước đoạn.','paragraph',[273,357,79,26],[180,345,490,100],'Spacing → Before: 0 pt'),
 T('After: nhập 6 pt để thêm khoảng sau đoạn.','paragraph',[273,387,79,26],[180,345,490,100],'Spacing → After: 6 pt'),
 T('Nếu After không tác dụng, kiểm tra và bỏ chọn Don’t add space between paragraphs of the same style.','paragraph',[184,416,240,25],[180,345,490,100],'Spacing → kiểm tra tùy chọn cùng style'),pOK(),O(originalStates[21][1]),
 paraOpen(),T('Muốn thêm khoảng trước riêng đoạn 2: chọn đoạn 2 và tăng Before.','paragraph',[273,357,79,26],[180,345,490,100],'Spacing → Before'),pOK(),O(originalStates[21][2])]);
attach(23,[selectText(sample+'\\nMỗi nhóm hoàn thiện sản phẩm và tự kiểm tra trước khi nộp.'),home(),paraOpen(),paraTab(),
 T('Alignment: chọn Justified (căn đều).','paragraph',[273,180,138,18],[180,90,490,116],'Alignment → Justified'),
 T('Đặt Left và Right đều bằng 0 cm.','paragraph',[273,221,79,55],[180,210,490,122],'Indentation → Left: 0 cm · Right: 0 cm'),
 specialIndent('First line'),indentBy('1 cm'),lineChoice('1.5 lines',430),
 T('Nhập Before: 0 pt và After: 6 pt.','paragraph',[273,357,79,56],[180,345,490,100],'Spacing → Before: 0 pt · After: 6 pt'),pOK(),O(originalStates[22][2])]);
attach(24,[selectText('1. Mục tiêu'),home(),paraOpen(),
 T('Mở thẻ Line and Page Breaks trong Paragraph.','pagination',[153,47,156,32],[0,0,584,392],'Paragraph → Line and Page Breaks'),
 T('Chọn Keep with next để tiêu đề đi cùng đoạn nội dung ngay sau.','pagination',[36,138,163,25],[20,85,545,134],'Pagination → Keep with next'),
 K('Nhấn Enter để áp dụng và quan sát vị trí tiêu đề.',['Enter']),O(originalStates[23][1]),
 paraOpen(),T('Keep lines together giữ các dòng của một đoạn trên cùng trang khi có thể.','pagination',[36,161,163,25],[20,85,545,134],'Pagination → Keep lines together'),
 T('Page break before đưa cả đoạn sang đầu trang mới.','pagination',[36,187,163,25],[20,85,545,134],'Pagination → Page break before'),
 T('Widow/Orphan control tránh một dòng đơn lẻ ở đầu hoặc cuối trang.','pagination',[36,111,163,25],[20,85,545,134],'Pagination → Widow/Orphan control')]);
attach(25,[K('Đặt mỗi mục trên một đoạn riêng bằng Enter; chọn ba đoạn cần lập danh sách.',['Chọn 3 đoạn'],'Chuẩn bị nội dung\\nĐịnh dạng tài liệu\\nKiểm tra và lưu'),home(),
 pButton('Bấm mũi tên bên cạnh Bullets để chọn mẫu kí hiệu.',[8,20,35,24]),
 T('Chọn mẫu dấu chấm trong Bullets Library. None dùng để bỏ Bullets.','bullets',[50,132,42,42],[0,0,313,360],'Bullets Library → chọn mẫu'),
 O(originalStates[24][1]),pButton('Muốn đánh số thứ tự: mở mũi tên cạnh Numbering.',[48,20,35,24]),
 T('Chọn mẫu 1, 2, 3 trong Numbering Library.','numbers',[186,105,69,90],[0,0,336,330],'Numbering Library → 1, 2, 3'),O(originalStates[24][2])]);
attach(26,[selectText('Khái niệm\\nKỹ năng\\nBài tập'),home(),pButton('Mở Numbering bằng mũi tên cạnh biểu tượng số.',[48,20,35,24]),
 T('Ở cuối menu Numbering, chọn Define New Number Format.','numbers',[109,570,203,25],[100,450,230,158],'Numbering → Define New Number Format'),
 T('Trong Number format, giữ trường số tự động, thêm “Bài ” trước số và “:” sau số.','newnumber',[32,145,306,32],[10,45,335,183],'Number format → Bài 1:'),
 T('Bấm OK để tạo kiểu số mới.','newnumber',[97,501,113,31],[10,490,335,58],'Define New Number Format → OK'),O(originalStates[25][0]),
 T('Nhấp phải số đầu danh sách sau, chọn Set Numbering Value.','numbercontext',[44,199,210,33],[0,0,262,256],'Nhấp phải số → Set Numbering Value'),
 T('Muốn bắt đầu từ 5: chọn Start new list rồi nhập 5 vào Set value to.','numbervalue',[26,174,94,37],[0,0,276,262],'Set value to: 5'),
 T('Bấm OK để xác nhận số bắt đầu.','numbervalue',[26,217,89,34],[0,155,276,107],'Set Numbering Value → OK'),
 T('Nếu muốn nối tiếp danh sách trước, nhấp phải số và chọn Continue Numbering.','continue',[85,191,183,39],[0,0,276,239],'Nhấp phải số → Continue Numbering'),O(originalStates[25][2])]);
attach(27,[selectText('Dự án\\nChuẩn bị\\nThực hiện\\nĐánh giá'),home(),pButton('Bấm Multilevel List ở hàng trên, bên phải Numbering.',[88,20,31,24]),
 T('Chọn mẫu phân cấp phù hợp trong List Library.','multilevel',[192,205,83,91],[0,0,407,390],'Multilevel List → List Library'),
 pButton('Đặt con trỏ tại mục con rồi bấm Increase Indent để hạ một cấp.',[157,19,27,26]),O(originalStates[26][1]),
 pButton('Muốn đưa mục lên cấp cha, bấm Decrease Indent.',[131,19,25,26]),
 selectText('Dũng\\nAn\\nBình'),pButton('Với danh sách tên riêng, chọn các đoạn rồi bấm Sort (A→Z).',[197,17,31,29]),
 K('Trong Sort Text: Sort by = Paragraphs, Type = Text, Ascending; chọn OK.',['Sort Text','Ascending','OK'],'Dũng\\nAn\\nBình'),O(originalStates[26][2])]);
attach(28,[selectText('Thông báo quan trọng'),home(),pButton('Mở mũi tên cạnh Borders.',[204,54,34,28]),
 T('Trong menu Borders, chọn Borders and Shading ở cuối menu.','bordermenu',[2,454,206,29],[0,330,213,156],'Borders → Borders and Shading'),
 T('Thẻ Borders: chọn Box để tạo khung kín.','borders',[27,168,124,55],[0,0,769,541],'Borders → Setting: Box'),
 T('Chọn Style, Color và Width để đặt nét, màu và độ dày đường viền.','borders',[174,107,207,299],[163,83,230,330],'Borders → Style / Color / Width'),
 T('Apply to: chọn Text nếu chỉ đóng khung chữ; chọn Paragraph nếu đóng khung cả đoạn.','borders',[407,406,330,66],[393,385,358,102],'Apply to → Text / Paragraph'),
 T('Bấm OK để áp dụng khung.','borders',[511,491,112,31],[390,480,365,60],'Borders and Shading → OK'),O(originalStates[27][1]),
 T('Để tô nền, mở lại hộp thoại và chọn thẻ Shading.','shading',[141,38,77,26],[0,0,530,413],'Borders and Shading → Shading'),
 T('Mở Fill, chọn màu nền. Kiểm tra Apply to là Paragraph cho đoạn đang chọn.','shading',[23,87,124,25],[0,60,265,150],'Shading → Fill'),
 T('Bấm OK để xác nhận màu nền.','shading',[363,380,75,25],[350,370,178,43],'Shading → OK'),O(originalStates[27][2])]);
attach(29,[selectText('Tin học\\t40 tiết\\nTrải nghiệm\\t20 tiết'),home(),paraOpen(),
 T('Trong hộp thoại Paragraph, bấm Tabs ở góc dưới bên trái.','paragraph',[162,629,101,30],[147,610,533,65],'Paragraph → Tabs'),
 T('Tab stop position: nhập 12 cm. Nếu Word dùng inch, nhập kèm đơn vị cm để Word đổi tương ứng.','tabs',[60,55,154,25],[47,3,311,355],'Tabs → Tab stop position: 12 cm'),
 T('Alignment: chọn Right để các giá trị căn theo bên phải điểm dừng.','tabs',[255,179,61,24],[47,160,311,70],'Tabs → Alignment: Right'),
 T('Leader: chọn số 2 để tạo đường dẫn bằng dấu chấm.','tabs',[163,243,68,24],[47,228,311,54],'Tabs → Leader: 2'),
 T('Bấm Set để ghi nhận điểm dừng và thuộc tính.','tabs',[101,287,76,26],[47,279,311,80],'Tabs → Set'),
 T('Bấm OK để đóng hộp thoại Tabs.','tabs',[184,320,77,27],[47,279,311,80],'Tabs → OK'),
 K('Trên từng dòng: gõ tên mục, nhấn Tab một lần, rồi gõ số tiết.',['Tab'],'Tin học → 40 tiết\\nTrải nghiệm → 20 tiết'),O(originalStates[28][2]),
 T('Muốn xóa một điểm dừng: chọn vị trí đó rồi bấm Clear; Clear All xóa tất cả điểm tùy chỉnh.','tabs',[182,287,79,26],[47,279,311,80],'Tabs → chọn điểm dừng → Clear')]);
const columnsLesson={...lessons[29],title:'Chia cột báo: Columns',lead:'Chọn đúng vùng văn bản, đặt số cột và kiểm tra phạm vi áp dụng.',concept:'Columns chia nội dung thành các cột báo. Chỉ vùng được chọn hoặc section được chỉ định chịu tác động.',steps:['Chọn phần nội dung cần chia cột.','Layout → Columns → More Columns; chọn Two.','Kiểm tra Apply to: Selected text → OK; dùng Column Break nếu cần.'],tip:'Không dùng Enter liên tục để sang cột sau. Bật ¶ để kiểm tra section break do Word tạo.',task:'Muốn chuyển sang cột tiếp theo tại vị trí con trỏ?',answer:'Dùng Layout → Breaks → Column hoặc Ctrl + Shift + Enter.',states:[]};
attach(30,[selectText(),K('Đặt con trỏ trong đoạn; bấm Insert → nhóm Text → Drop Cap → Drop Cap Options.',['Insert','Drop Cap','Drop Cap Options']),
 T('Chọn Dropped để chữ đầu nằm trong đoạn. In margin đặt chữ ở lề.','dropcap',[124,73,63,51],[0,0,417,287],'Drop Cap → Position: Dropped'),
 T('Chọn Font nếu muốn đổi phông của chữ lớn đầu đoạn.','dropcap',[57,150,189,26],[0,132,270,104],'Drop Cap → Font'),
 T('Lines to drop: nhập 3 để chữ lớn chiếm ba dòng.','dropcap',[198,177,47,24],[0,132,270,104],'Drop Cap → Lines to drop: 3'),
 T('Distance from text: đặt khoảng cách giữa chữ đầu và nội dung; ví dụ 0.1 cm.','dropcap',[198,201,47,24],[0,132,270,104],'Drop Cap → Distance from text'),
 T('Bấm OK. Muốn bỏ chữ lớn đầu đoạn, chọn Drop Cap → None.','dropcap',[107,259,76,23],[0,238,270,49],'Drop Cap → OK'),O(originalStates[29][0])]);
lessons[29].title='Chữ lớn đầu đoạn: Drop Cap';
lessons[29].lead='Quan sát vị trí và các tùy chọn tạo chữ lớn đầu đoạn.';
lessons[29].steps=['Đặt con trỏ trong đoạn → Insert → Text → Drop Cap.','Chọn Drop Cap Options → Dropped.','Chỉnh Font, Lines to drop, Distance from text → OK.'];
columnsLesson.states=[selectText(),K('Bấm Layout → Columns → More Columns. Một số ảnh trong giáo trình dùng tên Page Layout.',['Layout','Columns','More Columns']),
 T('Chọn Two để chia thành hai cột.','columns',[310,69,49,72],[167,0,529,459],'Columns → Presets: Two'),
 T('Equal column width: bật để hai cột rộng bằng nhau.','columns',[192,331,172,27],[179,187,320,224],'Columns → Equal column width'),
 T('Spacing: nhập khoảng cách giữa hai cột, chẳng hạn 1.27 cm.','columns',[355,229,111,34],[179,187,320,224],'Columns → Width and spacing → Spacing'),
 T('Apply to: chọn Selected text để chỉ chia phần đã bôi đen.','columns',[245,370,162,28],[179,328,320,83],'Columns → Apply to: Selected text'),
 T('Bấm OK để áp dụng chia cột.','columns',[466,410,100,33],[179,405,510,54],'Columns → OK'),O(originalStates[29][1]),
 K('Muốn ngắt tại con trỏ sang cột kế: Ctrl + Shift + Enter.',['Ctrl','Shift','Enter'])];
attach(31,[selectText(),home(),paraOpen(),paraTab(),T('Alignment: chọn Justified.','paragraph',[273,180,138,18],[180,90,490,116],'Alignment → Justified'),
 specialIndent('First line'),indentBy('1 cm'),lineChoice('1.5 lines',430),T('Nhập After: 6 pt; Before: 0 pt.','paragraph',[273,357,79,56],[180,345,490,100],'Spacing → Before: 0 pt · After: 6 pt'),pOK(),O(originalStates[22][2])]);
Object.assign(lessons[30],{title:'Phối hợp định dạng: làm trọn quy trình',lead:'Thực hiện lần lượt các lựa chọn trong cùng một hộp thoại Paragraph.',concept:lessons[22].concept,steps:lessons[22].steps,tip:'Mỗi khung chỉ dẫn tương ứng một thao tác. Quan sát khung đỏ và nhãn hành động.',task:lessons[22].task,answer:lessons[22].answer,page:'21–22'});
attach(32,[K('Đặt con trỏ trong đoạn tiêu đề cần áp dụng style.',['Chọn tiêu đề'],'1. Mục tiêu'),home(),
 T('Home → Styles: bấm Heading 1 cho tiêu đề cấp 1.','styles',[272,12,102,66],[0,0,487,113],'Home → Styles → Heading 1'),O(originalStates[31][1]),
 T('Nhấp phải vào Heading 1 trong thư viện Styles, chọn Modify.','stylemenu',[43,145,494,27],[30,112,680,120],'Nhấp phải Heading 1 → Modify'),
 T('Trong Modify Style, chỉnh Font, Size, Bold hoặc màu; bấm Format để mở Paragraph khi cần.','newstyle',[84,186,467,99],[60,148,525,230],'Modify Style → Formatting / Format'),
 T('Bấm OK để cập nhật style và các đoạn đang dùng style đó.','newstyle',[432,656,97,28],[60,633,525,67],'Modify Style → OK')]);
attach(33,[home(),pButton('Bật ¶ trước để tìm đoạn trống hoặc ngắt dòng sai.',[228,18,23,28]),O(originalStates[32][0]),
 selectText(),paraOpen(),T('Đoạn cách quá xa: kiểm tra Before và After trước khi chèn thêm Enter.','paragraph',[273,357,79,56],[180,345,490,100],'Paragraph → Spacing'),
 T('Chữ bị cắt: kiểm tra Line spacing và giá trị At; Exactly quá thấp là một nguyên nhân.','paragraph',[424,385,228,29],[180,348,490,172],'Paragraph → Line spacing / At'),
 T('Tiêu đề nhảy trang: kiểm tra Keep with next và Page break before.','pagination',[36,138,164,72],[20,85,545,134],'Paragraph → Line and Page Breaks'),
 K('Xóa các đoạn trống dư; dùng After để tạo khoảng cách đúng cấu trúc.',['¶','After']),O(originalStates[32][1])]);
for(let i=lessons.length-1;i>=0;i--)if(['shortcuts','guide','sources','checklist'].includes(lessons[i].type))lessons.splice(i,1);
lessons.splice(30,0,columnsLesson);
for(const l of lessons){if(l.states){l.demoSteps=l.states.map(s=>s.caption);l.tip=l.tip?.replace(/Mỗi bước giữ 7 giây/g,'Mỗi bước 1,7 giây');}}
