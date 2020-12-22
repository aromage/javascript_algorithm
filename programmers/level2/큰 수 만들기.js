function solution(number, k) {
    const result = [];
    number.split('').forEach((num, idx) => {
        const current = num;
        while(k > 0 && current > result[result.length-1]){
            result.pop();
            k--;
        }
        result.push(current);
    })
    
    result.splice(result.length-k, k);
    return result.join('');
}