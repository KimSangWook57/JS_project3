
//폭탄이 있는 위치를 나타내는 배열
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
let num = [0,0,0,0,0,0,0,0,1];

//박스를 선택한 순서를 기록하는 배열
let selNum = [];

//박스를 선택한 개수를 기록하는 변수
// let cnt = 0 ;

//폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;

// 메시지 표시 함수
const showMsg = (m) => {
    document.querySelector("#msg").innerHTML = m;
}

// 보드 초기화 함수
const boardClear = () => {
    const board = document.querySelectorAll(".boardBox") ;
    for(let item of board) {
        item.innerHTML = " " ;
        // cnt = 0;
        selNum.length = 0;
    }
    console.log(board);
}

// 보드 전체를 하트로 만들기.

const showAll = () => {
    /*
    let idx = num.indexOf(1) + 1;
    document.querySelectorAll("#box" + idx).innerHTML = '<img src="./images/heart.png" />' ;
    */
    const board = document.querySelectorAll(".boardBox")
    for(let item of board) {
        item.innerHTML = `<img src="./images/heart.png" />` 
    }
}



// 보드의 숫자를 누른 결과를 보여주는 함수
const show = (n) => {
    if(!shuffleFlag) {
        showMsg("폭탄 섞기 버튼을 눌러 주세요.")
        // boxShuffle();
        return;
    }
    // 버튼이 중복으로 눌리지 않게 하는 코드.
    if (selNum.indexOf(n) != -1) {
        return;
    }

    // cnt++;   // 누른 회수
    selNum.push(n);     // 눌려진 버튼의 정보 저장.
    console.log(selNum);
    
    // 누른 결과에 따라 이미지를 삽입한다.
    let img;
    if(num[n-1] == 1) {
        // 버튼 위치에 폭탄 출력.
        img = 'boom';
        showMsg("실패!");
        shuffleFlag = false;
    }
    else {
        // 버튼 위치에 하트 출력.
        img = 'heart';
    }
    document.querySelector("#box" + n).innerHTML = `<img src="./images/${img}.png" />`

    // 모든 하트를 찾아냈다면...
    if(selNum.length == 8) {
        showAll();
        showMsg("성공!");
        shuffleFlag = false;
        return;
    }

}

// 폭탄 섞기 함수
const boxShuffle = () => {
    showMsg("게임을 시작합니다.");
    // 버튼을 한번 눌렀다면, 더는 눌리지 않도록 해야 한다.
    if (shuffleFlag) {
        showMsg("이미 폭탄을 섞었습니다. 게임을 진행해 주세요.")
        return;
    }
    num.sort(() => Math.random() - 0.5);
    shuffleFlag = true;
    boardClear();
    console.log(num);
}

/* DOM이 로드된 후에 클릭이벤트 연결*/
/*
document.addEventListener("DOMContentLoaded", ()=>{
   
});
*/