/*
PROGRAM 
Highlest Global Minimum
DEKLARASI
var nialai1, nilai2)
ALGORITMA
- tentukan nilai minimum dari var nilai1 dan var nilai2 menggunakan for
- bandingkan nilai dari hasil antara dua variabel tersebut untuk mencari hasil yg terbesar
- return hasil dari proses bandingan tersebut  
*/
 
 function nilai(nilai1, nilai2){
  for(var i = 0; i < nilai1.length;i++){    
             if(i == 0){ 
              var nilai1Min = nilai1[i];
             }
             else{
                    if(nilai1[i] < nilai1Min)
                    {
                      nilai1Min = nilai1[i];
                    }
             }              
        }
  for(var a = 0; a<nilai2.length;a++){    
             if(a == 0){ 
              var nilai2Min = nilai2[a];
             }
             else{
                    if(nilai2[a] < nilai2Min)
                    {
                      nilai2Min = nilai2[a];
                    }
             }              
        }

  if (nilai1Min < nilai2Min ){
    return nilai2Min
  }


}

console.log(nilai([1,1,1],[8,  15, 17, 9]))
console.log(nilai([4, 8, 9, 12],[33, 88, 99, 11]))
console.log(nilai([1, 2, 5, 2, 2],[67, 45, 55]))
console.log(nilai([6, 2, 4, 10, 8, 2],[6, 5, 13, 23]))
