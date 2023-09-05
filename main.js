var a=[];
var size=prompt("enter the number of value");
for(let i=0;i<size;i++){
 a[i]=prompt("enter the value "+(i+1));
}
console.log(a)
var b;
var d=[];
var count=0;
function palindromenum(){
for(i=0;i<a.length;i++){
    var temp=a[i];
   var c=0;
    while(a[i]>0){
        b=a[i]%10;
        a[i]=parseInt(a[i]/10);
        c=c*10+b;

    }
   
  if(temp==c){
    
    d.push(temp);
    count++
   
} 
 
}
return count
}
var x=(palindromenum());
document.write(x);



