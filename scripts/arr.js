/* 배열 선언 */
let arr = []; // 추천 방식
let arr2 = new Array(); 

/* 배열 추가 삭제 :뒤에서 */
// push(추가)와 pop(삭제) 추천.
arr.push('🍕');
arr.push('🍔');
arr.push('🍟');

console.log(arr);
// 맨 끝의 내용 빼내기.
arr.pop();
console.log(arr);

/* 배열 추가 삭제 :앞에서 */
arr.unshift('😀');
console.log(arr);

arr.shift();
console.log(arr);

/* 배열 순회 */
// for
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} 

// let - of
for(let i of arr) {
    console.log(i);
}
/* 배열의 length 속성*/
// .length()가 변경될 수 있다.
console.log(arr);
console.log(arr.length);
arr.length = 1;
console.log(arr);
console.log(arr.length);

//배열 비우기
arr.length = 0;
console.log(arr);

/* 배열을 문자열로 반환*/
arr = ['🍕','🍔','🍗','🍜',] ;
let s = String(arr)
console.log(s);

/* 문자열을 split하면 배열반환*/
let sarr = s.split(',');
console.log(sarr);

/* 배열 정렬 */
// sort를 이용해서 정렬한다.
let num = [1,3,5,2,4];
// 내림차순 정렬은 return b-a.
num.sort((a, b) => { return b-a } );
console.log(num);

/* 배열 섞기*/
// Math.random을 sort에 넣어서 섞는다.
num.sort(() => Math.random() - 0.5)
console.log(num);


/* filter : 주어진 함수의 조건을 만족하는 요소를 모아 새로운 배열로 반환*/
//3보다 큰수 집합 


/* 실습 : 합집합, 교집합, 차집합 */
let setA = [1,2,3,4,5];
let setB = [4,5,6,7,8];

//합집합
let union = [...setA, ...setB] 
console.log(union);

//교집합
// filter는 일부만 가지고 온다.
let intersection = setA.filter((item) => setB.includes(item)); 
console.log(intersection);

// map은 모든 값을 가져와서 새로운 배열을 만든다.
let setA2 = setA.map((item) => item * 2);
console.log(setA2);

//차집합
let difference = setA.filter((item) => !setB.includes(item));
console.log(difference);

//합집합 수정.
union = [...difference, ...setB] 
console.log(union);



