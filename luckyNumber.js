// var arr = []; //khai bao 1 array //ci tri cac phan tu :0 1 2 3

//BT1: nhap vao 1 mang 10 so,tim so lon nhat trong mang vua nhap
// var arr = [];  // tạo mảng rỗng

// //nhap 10 phần tử và đẩy vào mảng
// for(var i = 0;i<10;i++){
//    var number = prompt("Nhap 10 so khac nhau trong mang"+i)
//     arr.push(number)

// }

// var b = arr.sort()  // săp xep tu be den lon
// console.log(b)
// var max = arr[0];  //tạo biến max là vị trí đầu tiên của mảng
// var min = arr[0];  //tạo biến min là vị trí đầu tiên của mảng

// //duyệt mảng và kiểm tra xem các số trong mảng có lớn,hay nhỏ hơn vị trí đầu không nếu lớn hay nhỏ thì gán vào biến
// for(var i = 0 ;i<arr.length;i++){
//    if(arr[i]>max){
//       max = arr[i]
//    }
//    if(arr[i]<min){
//     min = arr[i]
//    }
// }
// console.log("So lon nhat la:"+max)
// console.log("So nho nhat la:"+min)

// arr.map((e,i) =>{  //duyệt mảng với map
//   //e
// })

//BT2: Lucky number

//tao ra 1 so ngau nhien se la con so giai thuong

// cho nguoi dung nhap 5 so trong khaong 0 ->99
//dam bao ko nhap trung so da nhap -> nen dung mang de dua gia tri vua nhap
//kiem tra xem co trung giai ko

//cach cua me
// var luckyNumber = Math.random() * 100;
// var arr = [];

// for (var i = 0; arr.length < 5; i++) {
//   var number = prompt("Moi nguoi dung nhap 5 so trong khoang tu 0 ->99 :");
//   var playerNumber = parseInt(number);
//   if (number >= 0 && number <= 99 && !arr.includes(number)) {
//    arr.push(number);
//   } else {
//     alert(
//       `Moi nguoi dung nhap lai so khac ${number}`
//     );
//   }
 
// }
// var check = false; // gia su ko trung giai
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] == luckyNumber) {
//     console.log("Trung giai");
//     check = true;
//     break;
//   }
// }
// if (check == false) {
//   console.log("tach");
// }

// console.log(arr);





//cach cua thay

// var luckyNumber = [];
// var winner = parseInt(Math.random()*100)
// do{
//     var x = prompt("Nhap 1 gia tri tu 0 -> 99:");
//     x= parseInt(x);
//     if(x>=0&&x<=99 && !luckyNumber.includes(x)){
//         luckyNumber.push(x)
//     }
// }while(luckyNumber.length<5)
// console.log(luckyNumber)

// var check = false;

// for(var i =0 ; i<luckyNumber.length;i++){
//     if(luckyNumber[i] == winner){
//         alert("Da trung giai")
//         check = true;
//         break
//     }
// }
// if(check ==false){
//     alert("Chuc may man lan sau")
// }

