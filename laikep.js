//variable:biến
// var x = 10;

// var y = "hello";

// console.log(5+3)

// //
// if(x>15){
//     console.log("x>15")
//    var msg= prompt("vui long nhap so dien thoai")
//     console.log(msg)
// }else{
//     console.log("x<15")
//     alert('hehe')
//     var msg = prompt("vui long nhap dia chi")
//      console.log(msg)
// }
//

    // var name2 = prompt("Ho va ten:")
    // var sdt = prompt("SDT:")
    // var email =prompt("Gmail:")
    // var address = prompt("Dia chi:")
    // alert(name2+" "+sdt+" "+email+" "+address)

//loop
    
// for(let i=0;i<10;i++){
//     var kq = prompt("Chon 1 so tu 0 ->100:");
//     console.log(kq)
// }


//co 1 so ngau nghien ran trpng 0 ->99

// var ran = parseInt(Math.random()*100)

// su dung loop viet chuong trinh nhap vao 10 so ngau nhien
//sau do kiem tra xem co so nao trung giai hay ko
//neu co thong bao ket qua

// var ran = Math.floor(Math.random()*11)

// for(let i = 0;i<10;i++){
//     let num10 = prompt("Nhap 10 so ngau nhien:")
//     let num10Int = parseInt(num10);
//     if(num10 == ran){
//         console.log("trung giai")
//     }else{
//        console.log("khong trung")
//     }
// }

// //nhap tu 0 ->100
// var ran = parseInt(Math.random()*100)
// // for (var i =0;i<10;i++){
// //     var num100 = prompt("Nhap so tu 0 ->100:")
// //     var kq = parseInt(num10)
// //     for(;kq<0||kq>100;){
// //         var num10 = prompt("Nhap so tu 0 ->100:")
// //         var kq = parseInt(num10)
// //     }
// //         if(kq== ran){
// //            alert("trung giai")
        
// //         }else{
// //            alert("khong trung giai")
// //         }
// // }

// // //khi trung giai dung ga1me luon
// var ran = parseInt(Math.random()*11)
// for (var i =0;i<10;i++){
//     var num100 = prompt("Nhap so tu 0 ->100:")
//     var kq = parseInt(num100)
//     for(;kq<0||kq>100;){
//         var num10 = prompt("Nhap so tu 0 ->100:")
//         var kq = parseInt(num10)
//     }
//         if(kq== ran){
//            alert("trung giai")
//            break
//         }else{
//            alert("khong trung giai")
//         }
// }

//viet chuong trinh nhap vao 1 so tien muon gui ngan hang
//nhap vao gia tri % lai suat theo nam cua ngan hang
//nhap vao so nam muon gui
//thong bao so tien cuoi cung nhan dc(lai cong don)

var money = prompt("Nhap so tien muon gui:")
var money1 = parseInt(money)

var lai = prompt("Gia tri phan % lai suat:")
var lai1 = parseInt(lai)

var year = prompt("Nhap so nam muon gui")
var year1  = parseInt(year)

for(var i=0;i<year1;i++){
    var lai = money1*(lai1/100);
    money1 = money1 + lai
}
console.log(money1)