function solution(citations) {
    let answer = citations.sort((a,b) => b-a)
                        .findIndex((h, index) => {
                            return index + 1 > h
                        });
    
    return answer == -1 ? citations.length : answer
}