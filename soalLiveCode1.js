/*
======================
Highest Global Minimum
======================
Name : Bagus Dzikri Hidayat
[INSTRUCTIONS]
highestGlobalMinimum adalah sebuah function yang menerima dua parameter, dan keduanya merupakan array of number.
Function akan mendapatkan angka minimum dari masing-masing array yang diinput sebagai parameter, kemudian bandingkan kedua angka tersebut.
Function akan me-return salah satu dari angka minimum yang paling besar.
[RULE]
- WAJIB menuliskan PSEUDOCODE. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while dan if-else untuk pemecahan masalah.
- Penggunaan sintaks Math.min, simbol ..., dan function .apply tidak diperbolehkan.
- Penggunaan sintaks .sort() array tidak diperbolehkan.
[]
[EXAMPLE]
highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])
firstArr = [1, 1, 1]
secondArr = [8, 15, 17, 9]
nilai minimum dari firstArr = 1
nilai minimum dari secondArr = 8
karena 1 < 8, maka function highestGlobalMinimum akan me-return 8.
*/

function highestGlobalMinimum(firstArr, secondArr) {
  // only write code here
  /* 1. Inisialisasi nilai minimum dari masing-masing array */
  var minFirst = 0
  var minSecond = 0
  
  /* 2. Mencari nilai minimum dari semua elemen array yang pertama */
  for (var i = 0; i < firstArr.length; i++) {
     if (firstArr[i] < firstArr[i + 1]) {
        minFirst = firstArr[i]
     } else {
        minFirst = firstArr[i + 1]
     }
     return minFirst
  }

  /* 3. Mencari nilai minimum dari semua elemen array yang kedua */
  for (var j = 0; j < secondArr.length; j++) {
     if (secondArr[i] < secondArr[i + 1]) {
        minSecond = secondArr[i]
     } else {
        minSecond = secondArr[i + 1]
     }
     return minSecond
  }

  /* 4. Mencari nilai maksimum dari nilai minimum kedua array */
  if (minFirst < minSecond) {
     return minSecond
  } else {
     return minFirst
  }
}

console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
