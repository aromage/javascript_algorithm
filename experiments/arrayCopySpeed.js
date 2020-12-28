//궁금증 배열을 새로 만드는 것에 있어서 slice는 얼만큼의 성능이 날까


const array = [];
for(let i = 0; i< 1000000; i++){
    array.push(i);
}

const start = new Date();
const newarray = array.slice();
console.log(new Date() - start + 'ms');

const start2 = new Date();
const newarray2 = array.map(el => el);
console.log(new Date() - start2 + 'ms');

const start3 = new Date();
const newarray3 = JSON.parse(JSON.stringify(array));
console.log(new Date() - start3 + 'ms');

const start4 = new Date();
const newarray4 = [...array];
console.log(new Date() - start4 + 'ms');

//결과 평균 : spread랑 slice가 또이또이 나머지 둘은 확연히 느리다(map과 JSON)