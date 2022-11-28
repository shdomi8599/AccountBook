const td = document.querySelectorAll('td');

const th = document.querySelector('tbody').querySelectorAll('th');

let answer = 1;

//td를 1부터 35까지 채운 값
for (let tds of th) {
    tds.innerText = answer;
    answer++;
}

//요일이 31일까지이기 때문에 32~35의 값을 지운 것 
for (let i = 31; i <= 34; i++) {
    th[i].innerText = '';
}

//날짜 호출기 제작해보자