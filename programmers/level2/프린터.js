function solution(priorities, location) {
    let answer = 0;
    let goal = location;
    
    while(priorities.length > 0){
        const current = priorities.shift();
        
        //현재 출력물 우선순위 체크
        if(priorities.some((priority) => {
            return priority > current;
        })) {
            priorities.push(current);
        } else {
            answer++;
            if(!goal){
                break;
            }
        }
        
        //goal 위치 변경
        goal = (!goal ? priorities.length-1 : goal-1);
    }
    
    return answer;
}