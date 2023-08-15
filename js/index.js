// BT1: Tìm Ngày Tháng Năm
document.getElementById("timNgayKeTiep").onclick = function () {
    //B1: Input
    var day = +document.getElementById('day').value;
    var month = +document.getElementById('month').value;
    var year = +document.getElementById('year').value;
    //B2: Xử lý
    var nextDay = day;
    var nextMonth = month;
    var nextYear = year;
    if (month === 2){
        if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
            if (day >= 1 && day <= 28){
                nextDay = day + 1;
            }else if (day === 29){
                nextDay = 1;
                nextMonth = month + 1;
            }
        }else {
            if (day >= 1 && day <= 27){
                nextDay = day + 1;
            }else if(day === 28){
                nextDay = 1
                nextMonth = month + 1;
            }
        }
    }
    else if (month === 4 ||
        month === 6 ||
        month === 9 ||
        month === 11
    ){
        if (day >= 1 && day <= 29) {
            nextDay = day + 1;
        } else if (day === 30) {
            nextDay = 1;
            nextMonth = month + 1;
        }
    } else if (month === 1 ||
        month === 3 ||
        month === 5 ||
        month === 7 ||
        month === 8 ||
        month === 10 ||
        month === 12 ){
        if (day >= 1 && day <= 30) {
            nextDay = day + 1;
        } else if (day === 31) {
            nextDay = 1;
            if (month === 12){
                nextMonth = 1;
                nextYear = year + 1;
            }else {
                nextMonth = month + 1;
            }
        }
    }
//B3: Kết Quả
    document.getElementById("resultBT1__next").innerHTML = (`
    ${nextDay}/${nextMonth}/${nextYear}`);
}
//BT2: Tìm số ngày
document.getElementById('timNgay').onclick = function(){
//B1: Input
var thang = +document.getElementById('thang').value;
console.log('thang: ', thang);
var nam = +document.getElementById('nam').value;
console.log('nam: ', nam);
var ngay;
//B2: Xử lý
switch (thang) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        ngay = "31 Ngày";
      break;
    case 2:
        if((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0){
        ngay = "29 Ngày";
        }else {
            ngay = "28 Ngày";
        }
        // ngay = "28 Hoặc 29 Ngày";
      break;
    case 4: case 6: case 9: case 11:
        ngay = "30 Ngày";
      break;
    default:
        ngay = alert('Nhập từ 1-12');
  }
//B3: Output
  document.getElementById("resultBT2").innerHTML = ngay;
}
//BT3: Đọc chữ số
document.getElementById('docSo').onclick = function(){
//B1: Input
var number = +document.getElementById('number').value;
//B2: Xử lý
var hundreds = Math.floor(number / 100);
var tens = Math.floor((number % 100) / 10);
var units = number % 10;
var equation;
if((number <= 0) || (number > 999)){
    equation = alert("Nhập vào số có 3 chữ số")
}else{
    switch(hundreds){
        case 1:{
            hundreds = "Một Trăm";
            break;
        }
        case 2:{
            hundreds = "Hai Trăm";
            break;
        }
        case 3:{
            hundreds = "Ba Trăm";
            break;
        }
        case 4:{
            hundreds = "Bốn Trăm";
            break;
        }
        case 5:{
            hundreds = "Năm Trăm";
            break;
        }
        case 6:{
            hundreds = "Sáu Trăm";
            break;
        }
        case 7:{
            hundreds = "Bảy Trăm";
            break;
        }
        case 8:{
            hundreds = "Tám Trăm";
            break;
        }
        case 9:{
            hundreds = "Chín Trăm";
            break;
        }
    }
    if (tens % 10 == 0 && units != 0){
        tens = " Lẻ";
    }
    switch(tens){
        case 1:{
            tens = " Mười";
            break;
        }
        case 2:{
            tens = " Hai Mươi";
            break;
        }
        case 3:{
            tens = " Ba Mươi";
            break;
        }
        case 4:{
            tens = " Bốn Mươi";
            break;
        }
        case 5:{
            tens = " Năm Mươi";
            break;
        }
        case 6:{
            tens = " Sáu Mươi";
            break;
        }
        case 7:{
            tens = "Bảy Mươi";
            break;
        }
        case 8:{
            tens = " Tám Mươi";
            break;
        }
        case 9:{
            tens = " Chín Mươi";
            break;
        }
    }
    switch(units){
        case 1:{
            units = " Mốt";
            break;
        }
        case 2:{
            units = " Hai";
            break;
        }
        case 3:{
            units = " Ba";
            break;
        }
        case 4:{
            units = " Bốn";
            break;
        }
        case 5:{
            units = " Lăm";
            break;
        }
        case 6:{
            units = " Sáu";
            break;
        }
        case 7:{
            units = " Bảy";
            break;
        }
        case 8:{
            units = " Tám";
            break;
        }
        case 9:{
            units = " Chín";
            break;
        }
    }
}
// if (hundreds > 0){
//     equation += hundreds + "trăm"
// }
// if(tens > 0){
//     equation += tens + "chục"
// }
// if(units > 0){
//     equation += units
// }
//B3: Output
document.getElementById('resultBT3').innerHTML = hundreds + tens + units;
}
//BT4: Tìm Tọa Độ
document.getElementById('timToaDo').onclick = function(){
    //B1: Input
    var sinhVien = [
        { ten: 'Sinh viên A', x: document.getElementById('sinhVien1x').value, y: document.getElementById('sinhVien1y').value },
        { ten: 'Sinh viên B', x: document.getElementById('sinhVien2x').value, y: document.getElementById('sinhVien2y').value },
        { ten: 'Sinh viên C', x: document.getElementById('sinhVien3x').value, y: document.getElementById('sinhVien3y').value }
    ];
    var toaDoTruong = {x: document.getElementById('truongHocx').value, y: document.getElementById('truongHocy').value};
    //B2: Xử lý
    var maxKhoangCach = 0;
    for (var i = 0; i < sinhVien.length; i++) {
        var khoangCach = Math.sqrt(Math.pow(sinhVien[i].x - toaDoTruong.x, 2) + Math.pow(sinhVien[i].y - toaDoTruong.y, 2));
        if (khoangCach > maxKhoangCach) {
            maxKhoangCach = khoangCach;
            tenXaTruongNhat = sinhVien[i].ten;
        }
    }
    document.getElementById('resultBT4').innerHTML = tenXaTruongNhat;
}