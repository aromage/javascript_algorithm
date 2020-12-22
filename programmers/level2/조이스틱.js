function upDown(character){
    let value = character.charCodeAt() - 'A'.charCodeAt();
    return value > 13 ? 26-value : value;
}

function toLeft(arr, cursor){
    let distance = 0;
    while(arr[cursor] === 0){
        distance++;
        cursor = cursor > 0 ? cursor-1 : arr.length-1;
    } 
    return [distance,cursor];
}

function toRight(arr, cursor){
    let distance = 0;
    while(arr[cursor] === 0){
        distance++;
        cursor = cursor < arr.length -1 ? cursor+1 : 0;
    } 
    return [distance,cursor];
}


function solution(name) {
    let answer = 0;
    let cursor = 0;
    let distance = 0;
    const distanceArray = name.split('').map(character => upDown(character));
    
    while(distanceArray.some(value => value !== 0)){
        const [rd, rc] = toRight(distanceArray, cursor);
        const [ld, lc] = toLeft(distanceArray, cursor);
        
        if(rd > ld){
            distance += ld;
            cursor = lc;
        } else {
            distance += rd;
            cursor = rc;
        }
        answer += distanceArray[cursor];
        distanceArray[cursor] = 0;
    }
    answer += distance;
    
    return answer;
}