
function RenderThongTinDatHang(){
    
    const DanhSachSanPham=LayDanhSachItemGioHangDayDuDoiTuongTheoId();
    render="";
    for (var i in DanhSachSanPham){
        var data= DanhSachSanPham[i];
        render = '<div class="san-pham">\n'+
        '                        <div class="san-pham-img">\n'+
        '                            <img src="assets/img/bosutapnam/nam1.jpg">\n'+
        '                        </div>\n'+
        '                        <div class="san-pham-name">\n'+
        '                            <p>Quần kaki ống rộng dsdsd </p>\n'+
        '                        </div>\n'+
        '                        <div class="san-pham-price">\n'+
        '                            <p>4000000</p>\n'+
        '                        </div>\n'+
        '                    </div>  ';
    }
    document.getElementById('san-pham').innerHTML+=render;
}
RenderThongTinDatHang()