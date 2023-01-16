function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }
    else{
        let half = Math.round(arr.length/2);
        let leftArr= arr.slice(0, half);
        let rightArr = arr.slice(half, arr.length);
        return merge(mergeSort(leftArr), mergeSort(rightArr));
    }
}
function merge(left, right){
    let sortedArr = []
    let lp =0;
    let rp=0;
    let m = left.length-1;
    let n = right.length-1;
    while(lp<=m&&rp<=n){
        if(left[lp]<right[rp]){
            sortedArr.push(left[lp++]);
        }
        else{
            sortedArr.push(right[rp++]);
        }
    }
    for(;lp<= m; lp++){
        sortedArr.push(left[lp]);
    }
    for(;rp<=n;rp++){
        sortedArr.push(right[rp]);
    }
    return sortedArr;
}
console.log(mergeSortRec([])) // []
console.log(mergeSortRec([10, 7, 8, 9, 1, 5])); // [1, 5, 7, 8, 9, 10]
console.log(mergeSortRec([30, 20, 10, 50, 22, 33, 55])); //[10, 20, 22, 30, 33, 50, 55]