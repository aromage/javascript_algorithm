function solution(clothes) {
    let answer = 1;
    const clothTypeMap = new Map();
    clothes.forEach(cloth => {
        clothTypeMap.has(cloth[1])
        ? clothTypeMap.set(cloth[1], clothTypeMap.get(cloth[1]) + 1)
        : clothTypeMap.set(cloth[1], 1);
    })
    clothTypeMap.forEach(value => {
        answer *= (value+1);
    })
    return answer-1;
}