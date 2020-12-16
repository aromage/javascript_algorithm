function solution(progresses, speeds) {
    var answer = [];
    
    while(progresses.length > 0){
        if(progresses[0] >= 100){
            let count = 0;
            while(progresses[0] >=100){
                progresses.shift();
                speeds.shift();
                count++;
            }
            answer.push(count);
        }
        progresses.forEach((value, key) => {
            progresses[key] += speeds[key]
        })
    }
    
    return answer;
}