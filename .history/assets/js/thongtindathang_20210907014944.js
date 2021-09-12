
function RenderThongTinDatHang(){
    
    const DanhSachSanPham=LayDanhSachItemGioHangDayDuDoiTuongTheoId();
    render="";
    for (var i in DanhSachSanPham){
        var data= DanhSachSanPham[i];
        render = '<div class="san-pham">\n'+
        '                        <div class="san-pham-img">\n'+
        '                            <img src="'+data.img1+'">\n'+
        '                        </div>\n'+
        '                        <div class="san-pham-name">\n'+
        '                            <p>'+data.name+'</p>\n'+
        '                        </div>\n'+
        '                        <div class="san-pham-price">\n'+
        '                            <p>'+data.price+'</p>\n'+
        '                        </div>\n'+
        '                    </div>  ';
        document.getElementById('san-pham').innerHTML+=render;
    }
   
}
RenderThongTinDatHang()