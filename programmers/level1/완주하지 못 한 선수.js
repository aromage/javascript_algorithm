function solution(participant, completion) {
    let answer = '';
    const uncompletion = new Map();
    for(const name of participant){
        uncompletion.has(name)
        ? uncompletion.set(name, uncompletion.get(name) + 1) 
        : uncompletion.set(name, 1);
    }
    for(const name of completion){
        uncompletion.has(name)
        ? uncompletion.set(name, uncompletion.get(name) -1 )
        : null; //삼항연산자가 아무것도 안할 때는 어떤식으로 비워두는게 좋을까?
    }
    uncompletion.forEach((value, key) => {
        if(value > 0){
            answer = key;
        }
    })
    
    return answer;
}