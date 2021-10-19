let ordinal =['rd','th','nd','st'];
let color =["Blue","Green","Red","Black","Yellow","Orange","White","Purple","Violet","Indio","gray","Pink"];
let result= color.map((item,index)=>{
    if(index===0){
       return  `${index+1}${ordinal[3]} choice is ${item}`;
    }else if(index ===1){
        return `${index+1}${ordinal[2]} choice is ${item} `;
    }else if(index===2){
       return  `${index+1}${ordinal[0]} choice is ${item} `;
    }else{
        return `${index+1}${ordinal[1]} choice is ${item} `;
    }
})
console.log(result);