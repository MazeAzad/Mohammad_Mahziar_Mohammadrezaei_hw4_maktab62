let array=[[[[1]]],[2]];
let newArray=[];
function flt(array){
    array.map((item)=>{
        if(Array.isArray(item)){
            flt(item);
            
        }else{
            newArray.push(item);
        }
    })
   return newArray;
}
console.log(flt(array));
