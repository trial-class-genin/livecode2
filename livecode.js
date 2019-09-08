NOMOR 2
The Alphabetical Express
========================
Name :_____________
[INSTRUCTIONS]
formTrainSeating adalah sebuah function yang menerima satu parameter berupa string.
Ini adalah sebuah simulasi penempatan penumpang di dalam gerbong kereta.
Gerbong terdiri dari 5, yaitu gerbong A, gerbong B, C, D, dan E.
Function akan membentuk kereta dalam bentuk multidimension array.
Kereta direpresentasikan sebagai sebuah array yang berisi gerbong.
Gerbong adalah sebuah array yang berisi huruf tiap penumpang.
Setiap gerbong hanya boleh menampung penumpang dengan nama yang sesuai dengan nama gerbong.
Setiap penumpang direpresentasikan dengan satu huruf, antara A, B, C, D, atau E.
Bentuk Kereta:
[ GERBONG A, GERBONG B, GERBONG C, GERBONG D, GERBONG E ]
Bentuk Gerbong:
Contoh bentuk gerbong A
[ 'A', 'A' ]
Contoh bentuk gerbong B
[ 'B', 'B' ]
Kumpulan penumpang direpresentasikan dalam string.
Contoh:
input: 'ABCA'
maka, ada penumpang A, B, C, dan A.
Kita masukkan setiap penumpang ke masing-masing gerbong.
output: [ ['A', 'A'], ['B'], ['C'], [], []]
gerbong A berisi dua A,
gerbong B berisi satu B,
gerbong C berisi satu C,
gerbong D kosong,
dan gerbong E kosong.
Function akan me-return array kereta yang telah dibentuk.
[RULE]
Tidak perlu pseudocode!
Dilarang menggunakan sintaks .split()!
*/
​
function formTrainSeating(passengers) 
  
  function formTrainSeating(passengers) {
  var a = [];
  var b = [];
  var c = [];
  var d = [];
  var e = [];
  var hasil = [];
  for (i = 0; i < passengers.length; i++) {
    if (passengers[i] === 'A') {
      a.push('A');
    } else if (passengers[i] === 'B') {
      b.push('B');
    } else if (passengers[i] === 'C') {
      c.push('C');
    } else if (passengers[i] === 'D') {
      d.push('D');
    } else {
      e.push('E');
    }
  }
  hasil.push(a, b, c, d, e);
  return hasil;
}

console.log(formTrainSeating('ABDCCCE')); // [['A'], ['B'], ['C', 'C', 'C'], ['D'], ['E']]
console.log(formTrainSeating('ABC')); // [['A'], ['B'], ['C'], [], []]
console.log(formTrainSeating('E')); // [[], [], [], [], ['E']]
console.log(formTrainSeating('EAB')); // [['A'], ['B'], [], [], ['E']]
console.log(formTrainSeating('BBABB')); // [['A'], ['B', 'B', 'B', 'B'], [], [], []]
​
console.log(formTrainSeating('ABDCCCE')); // [['A'], ['B'], ['C', 'C', 'C'], ['D'], ['E']]
console.log(formTrainSeating('ABC')); // [['A'], ['B'], ['C'], [], []]
console.log(formTrainSeating('E')); // [[], [], [], [], ['E']]
console.log(formTrainSeating('EAB')); // [['A'], ['B'], [], [], ['E']]
console.log(formTrainSeating('BBABB')); // [['A'], ['B', 'B', 'B', 'B'], [], [], []]






/**PSEUDOCODE
 * 1. Tentukan variable 'minArr1' sama dengan 0
 * 2. Tentukan variable 'minArr2' sama dengan 0
 * 3. FOR pertambahan 1 dengan index awal = 0 dan index akhir = panjang 'firstArr'-1 :
 *      IF index saat ini = 0, THEN:
 *        Tentukan 'minArr1' = variable 'firstArr' dengan index 0
 *      ENDIF
 *      IF variable di 'firstArr' pada index saat ini lebih kecil dari pada 'minArr1', THEN:
 *        Tentukan 'minArr1' = variable 'firstArr' dengan index saat ini
 *      ENDIF
 *    ENDFOR
 * 4. FOR pertambahan 1 dengan index awal = 0 dan index akhir = panjang 'secondArr'-1 :
 *      IF index saat ini = 0, THEN:
 *        Tentukan 'minArr2' = variable 'secondArr' dengan index 0
 *      ENDIF
 *      IF variable di 'firstArr' pada index saat ini lebih kecil dari pada 'minArr2', THEN:
 *        Tentukan 'minArr2' = variable 'secondArr' dengan index saat ini
 *      ENDIF
 *    ENDFOR
 * 5. IF nilai pada 'minArr1' lebih besar dari pada nilai pada 'minArr2', THEN:
 *      return 'minArr1'
 *    ELSE IF nilai pada 'minArr1' lebih kecil dari pada nilai pada 'minArr2', THEN:
 *      return 'minArr2'
 */
 
 	NOMOR 1 
 function highestGlobalMinimum(firstArr, secondArr) {
    var tempFirstArr = 0;
    var tempSecondArr = 0;
    
    for (var i=0; i<=firstArr.length-1; i++){
      if (i===0){
        tempFirstArr = firstArr[i];
      }else{
        if(firstArr[i]<tempFirstArr){
          tempFirstArr = firstArr[i];
        }
      }
    }
    
    for (var j=0; j<=secondArr.length-1; j++){
      if (j===0){
        tempSecondArr = secondArr[j];
      }else{
        if(secondArr[j]<tempSecondArr){
          tempSecondArr = secondArr[j];
        }
      }
    }
    
    if(tempFirstArr>tempSecondArr){
      return tempFirstArr;
    }else{
      return tempSecondArr;
    }
    
    
}

console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5