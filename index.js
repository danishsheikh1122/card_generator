let str = "1212121212121212";
let arr = str.split("");
console.log(arr);
let arr_new=Array();
let temp=4;
for(let i=0;i<4;i++){
    for(let j=0;j<temp;j++){
        arr_new.push(arr[0])
        console.log(temp);
        arr.shift()
        }arr_new.push("\t")
}
console.log(arr_new.join(""));
// let a="";
// for (let i = 0; i < arr.length; i++) {
//     if (i%4== 0) {
//         a += " ";
//         a += arr[i];
//     }
//     else{
//         a+=arr[i]
// }
// }
// let b=a.trim()
// console.log(b);

