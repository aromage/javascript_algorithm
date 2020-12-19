//멱집합을 찾는다.
function superSet(numberSet) {
    return numberSet.reduce(
        (subsets, current) => subsets.concat(
            subsets.map(set => [...set, current])
        ),
        [[]]
    )
}
//순열 집합을 구한다.
function permutation(numberSet) {
    let permutationSet = [];
    const permute = (set, select = []) => {
        if (set.length === 0) {
            permutationSet.push(select)
        } else {
            for (let i = 0; i < set.length; i++) {
                const remainNumber = set.slice();
                const selectedNumber = remainNumber.splice(i, 1);
                permute(remainNumber.slice(), select.concat(selectedNumber))
            }
        }
    }
    permute(numberSet)
    return permutationSet;
}
//소수인지 판별한다. (에라토스테네스의 체- 제일쉬우니까..)
function checkPrime(number){
    if ( number < 2) return false;
    if ( number === 2 ) return true;
    for (let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0) return false; 
    }
    return true;
}

function solution(numbers) {
    let answer = 0;
    const possibleNumbers = new Set();
    
    superSet([...numbers]).forEach(subset => {
        permutation(subset).forEach(set => {
            const number = set.reduce((acc, cur) => acc+cur, '') * 1;
            possibleNumbers.add(number)
        });
    })
    
    possibleNumbers.forEach(number => {
        if(checkPrime(number)) answer++;
    });
    
    return answer;
}