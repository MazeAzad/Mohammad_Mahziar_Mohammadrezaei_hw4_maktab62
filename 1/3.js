function depth(array){
    return Array.isArray(array) ? 1 + Math.max(...array.map(depth)) : 0;
}
let array = [[[[1]]],[2]];
console.log(depth(array));