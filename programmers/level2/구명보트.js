function solution(people, limit) {
    let answer = 0;
    const sortedWeight = people.sort((a,b) => b-a);
    let left = 0;
    let right = sortedWeight.length-1;
    while(left < right){
        if(sortedWeight[left] + sortedWeight[right] > limit){
            left++;
        } else {
            left++;
            right--;
        }
        answer++;
    }
    if(left === right) answer++;
    
    return answer;
}