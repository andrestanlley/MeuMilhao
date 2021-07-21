let fortuna = 0;
let meses = 1;

while((fortuna > 1000000 && meses%12!=0) || fortuna <= 1000000){
    fortuna += 2200;
    meses++;
}
console.log(fortuna,'-->',meses);