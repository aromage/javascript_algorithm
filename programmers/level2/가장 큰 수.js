function solution(numbers) {
    let answer = numbers.map(number => number+'')
                        .sort((a, b) => {
                            return (b+a) - (a+b);
                        })
                        .join('');
    return answer = (answer[0] === '0') ? '0' : answer;
}