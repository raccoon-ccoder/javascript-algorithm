function kapreka(num){
    let result = num;
    for(let i=0;i<num.toString().length;i++){
        result += Number(num.toString().substring(i,i+1));
    }
    return  result;
}

let arr = [];

for(let j=1;j<=10000;j++){
    arr.push(Number(j));
}

for(let j=1;j<=10000;j++){
    let findIndex = arr.indexOf(kapreka(j));
    if(findIndex != -1){
        arr.splice(findIndex,1);
        // splice() : 배열의 기존 요소를 삭제 또는 교체하거나 새 요소 추가
        // array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
        // deleteCount, item..(Optional)
    }
}

for(let j=0;j<arr.length;j++){
    console.log(arr[j]);
}