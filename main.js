var age = 32;
if (age > 0 && age <= 100) {
  if (age <= 17) console.log("Учеба");
  else if (age <= 64) console.log("Работа");
  else console.log("Пенсия");
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var str = '';
for  (var i in arr) {
  switch (arr[i]) {
    case 1: str = "разработчик"; break;
    case 2:
    case 3:
    case 4: str = "разработчика"; break;
    default: str = "разработчиков"; break;
  };
  console.log(arr[i] +' '+ str);
}
