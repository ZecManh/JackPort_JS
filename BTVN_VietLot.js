//VietLot
//nguoi choi se mua 5 so khac nhau tu 0 ->45
//he thong se ngau nhien sinh ra 5 so khac nhau tu 0 ->45
//doi chieu 5 so nguoi choi chon voi bo 5 so ngau nhien kia
//khong nhat thiet dung thu tu
//neu trung 3/5 so:10 tr
//neu trung 4/5 so:100 tr
//neu trung 5/5 so:Jackpot
var ran = [];
var play = [];
//tao mang random 5 so khac nhau

for (let i = 0;i < 5; i++) {
    var ranNumber = parseInt(Math.random()*46)
  if(!ran.includes(ranNumber)){
  ran.push(ranNumber);
  }
}
//tao mang nguoi dung nhap 5 so khac nhau
for (let i = 0; play.length < 5; i++) {
  var number = prompt("Mời nhập 5 số khác nhau :");
  var luckyNumber = parseInt(number);
  if (luckyNumber >= 0 && luckyNumber <= 45 && !play.includes(luckyNumber)) {
    play.push(luckyNumber);
  } else {
    alert(`Mời nhập lại số khác số ${luckyNumber}`);
  }
}

console.log(ran);
console.log(play);

var dem = 0;
for (var i = 0; i < ran.length; i++) {
  for (var j = 0; j < play.length; j++) {
    if (ran[i] == play[j]) {
      dem++;
    } 
  }
}
if(dem==3){
alert("10tr")
}else if(dem==4){
    alert("100tr")
}else if(dem==5){
    alert("JackPort")
}else{
    alert("Chuc ban may man lan sau")
}


