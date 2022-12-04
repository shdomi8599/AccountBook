var td = document.querySelectorAll('td');

var th = document.querySelector('tbody').querySelectorAll('th');

const fh1 = document.querySelector('#fh1');

const tears = document.querySelector('#tears');

const tears2 = document.querySelector('#tears2');

let dataReset = document.querySelector('#dataReset');

let thss = document.querySelector('tbody').querySelectorAll('th');

let tdss = document.querySelector('tbody').querySelectorAll('td');

function newtd() {
    document.querySelector('#tears2').appendChild(document.createElement('td'));
}

function newth() {
    document.querySelector('#tears').appendChild(document.createElement('th'));
}

function newtd2() {
    document.querySelector('#tears4').appendChild(document.createElement('td'));
}

function newth2() {
    document.querySelector('#tears3').appendChild(document.createElement('th'));
}
const today = new Date();

const monthy = () => {
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    if (month < 10) {
        return `${year}-0${month}`
    } else {
        return `${year}-${month}`
    }
}

fh1.value = monthy();

let answer = 1;

// //td를 1부터 35까지 채운 값
// for (let tds of th) {
//     tds.innerText = answer;
//     answer++;
// }

// //요일이 31일까지이기 때문에 32~35의 값을 지운 것 
// for (let i = 31; i <= 36; i++) {
//     th[i].innerText = '';
// }

//날짜 호출기 제작해보자
//document.querySelector('#fh1').value를 통해서 년도와 월까지 호출가능
var day = document.querySelectorAll('input')[0].value;
var day2 = `${day}-01`

function getWeek(day2) {

    const week = ['일', '월', '화', '수', '목', '금', '토'];

    const dayOfWeek = week[new Date(day2).getDay()];

    return dayOfWeek;

}

let day3 = new Date(day2);
let nextMonth = new Date(day3.setMonth(day3.getMonth() + 1));
let lastday = new Date(nextMonth.setDate(nextMonth.getDate() - 1));

function lastdayCall() {
    day = document.querySelectorAll('input')[0].value;
    day2 = `${day}-01`
    day3 = new Date(day2);
    nextMonth = new Date(day3.setMonth(day3.getMonth() + 1));
    lastday = new Date(nextMonth.setDate(nextMonth.getDate() - 1));
    th = document.querySelector('tbody').querySelectorAll('th');
    td = document.querySelectorAll('td');
    thss = document.querySelector('tbody').querySelectorAll('th')
    tdss = document.querySelector('tbody').querySelectorAll('td')
    return lastday.getDate();
}



var last = 0;

switch (getWeek(day2)) {
    case '일':
        lastdayCall();
        last = lastdayCall();
        for (let i = 0; i < last; i++) {
            th[i].innerText = answer;
            answer++;
        };
        for (let i = last; i < th.length; i++) {
            th[i].remove();
            td[i].remove();
        }
        break;
    case '월':
        lastdayCall();
        last = lastdayCall();
        for (let i = 1; i < last + 1; i++) {
            th[i].innerText = answer;
            answer++;
        };
        for (let i = last + 1; i < th.length; i++) {
            th[i].remove();
            td[i].remove();
        }
        break;
    case '화':
        lastdayCall();
        last = lastdayCall();
        for (let i = 2; i < last + 2; i++) {
            th[i].innerText = answer;
            answer++;
        };
        for (let i = last + 2; i < th.length; i++) {
            th[i].remove();
            td[i].remove();
        }
        break;
    case '수':
        lastdayCall();
        last = lastdayCall();
        for (let i = 3; i < last + 3; i++) {
            th[i].innerText = answer;
            answer++;
        };
        for (let i = last + 3; i < th.length; i++) {
            th[i].remove();
            td[i].remove();
        }
        break;
    case '목':
        lastdayCall();
        last = lastdayCall();
        for (let i = 4; i < last + 4; i++) {
            th[i].innerText = answer;
            answer++;
        };
        for (let i = last + 4; i < th.length; i++) {
            th[i].remove();
            td[i].remove();
        }
        break;
    case '금':
        lastdayCall();
        last = lastdayCall();
        for (let i = 5; i < last + 5; i++) {
            th[i].innerText = answer;
            answer++;
        };
        for (let i = last + 5; i < th.length; i++) {
            th[i].remove();
            td[i].remove();
        }
        break;
    case '토':
        lastdayCall();
        last = lastdayCall();
        for (let i = 6; i < last + 6; i++) {
            th[i].innerText = answer;
            answer++;
        };
        for (let i = last + 6; i < th.length; i++) {
            th[i].remove();
            td[i].remove();
        }
        break;
}



fh1.addEventListener('input', function () {

    day = document.querySelectorAll('input')[0].value;
    day2 = `${day}-01`

    function getWeek() {

        const week = ['일', '월', '화', '수', '목', '금', '토'];

        const dayOfWeek = week[new Date(day2).getDay()];

        return dayOfWeek;
    }
    switch (getWeek()) {
        case '일':
            lastdayCall();
            for (let i = document.querySelector('#tears').children.length; i < 7; i++) {
                newtd();
                newth();
            }
            for (let i = 0; i < 2; i++) {
                newtd2();
                newth2();
            }
            last = lastdayCall();
            answer = 1;
            for (let ths of th) {
                ths.innerText = '';
            }
            for (let i = 0; i < last; i++) {
                th[i].innerText = answer;
                answer++;
            };
            for (let i = last; i < th.length; i++) {
                th[i].remove();
                td[i].remove();
            }
            tdssDelete();
            tdSetting();
            break;
        case '월':
            lastdayCall();
            for (let i = document.querySelector('#tears').children.length; i < 7; i++) {
                newtd();
                newth();
            }
            for (let i = 0; i < 2; i++) {
                newtd2();
                newth2();
            }
            last = lastdayCall();
            answer = 1;
            for (let ths of th) {
                ths.innerText = '';
            }
            for (let i = 1; i < last + 1; i++) {
                th[i].innerText = answer;
                answer++;
            };
            for (let i = last + 1; i < th.length; i++) {
                th[i].remove();
                td[i].remove();
            }
            tdssDelete();
            tdSetting();
            break;
        case '화':
            lastdayCall();
            for (let i = document.querySelector('#tears').children.length; i < 7; i++) {
                newtd();
                newth();
            }
            for (let i = 0; i < 2; i++) {
                newtd2();
                newth2();
            }
            last = lastdayCall();
            answer = 1;
            for (let ths of th) {
                ths.innerText = '';
            }
            for (let i = 2; i < last + 2; i++) {
                th[i].innerText = answer;
                answer++;
            };
            for (let i = last + 2; i < th.length; i++) {
                th[i].remove();
                td[i].remove();
            }
            tdssDelete();
            tdSetting();
            break;
        case '수':
            lastdayCall();
            for (let i = document.querySelector('#tears').children.length; i < 7; i++) {
                newtd();
                newth();
            }
            for (let i = 0; i < 2; i++) {
                newtd2();
                newth2();
            }
            last = lastdayCall();
            answer = 1;
            for (let ths of th) {
                ths.innerText = '';
            }
            for (let i = 3; i < last + 3; i++) {
                th[i].innerText = answer;
                answer++;
            };
            for (let i = last + 3; i < th.length; i++) {
                th[i].remove();
                td[i].remove();
            }
            tdssDelete();
            tdSetting();
            break;
        case '목':
            lastdayCall();
            for (let i = document.querySelector('#tears').children.length; i < 7; i++) {
                newtd();
                newth();
            }
            for (let i = 0; i < 2; i++) {
                newtd2();
                newth2();
            }
            last = lastdayCall();
            answer = 1;
            for (let ths of th) {
                ths.innerText = '';
            }
            for (let i = 4; i < last + 4; i++) {
                th[i].innerText = answer;
                answer++;
            };
            for (let i = last + 4; i < th.length; i++) {
                th[i].remove();
                td[i].remove();
            }
            tdssDelete();
            tdSetting();
            break;
        case '금':
            lastdayCall();
            for (let i = document.querySelector('#tears').children.length; i < 7; i++) {
                newtd();
                newth();
            }
            for (let i = 0; i < 2; i++) {
                newtd2();
                newth2();
            }
            last = lastdayCall();
            answer = 1;
            for (let ths of th) {
                ths.innerText = '';
            }
            for (let i = 5; i < last + 5; i++) {
                th[i].innerText = answer;
                answer++;
            };
            for (let i = last + 5; i < th.length; i++) {
                th[i].remove();
                td[i].remove();
            }
            tdssDelete();
            tdSetting();
            break;
        case '토':
            lastdayCall();
            for (let i = document.querySelector('#tears').children.length; i < 7; i++) {
                newtd();
                newth();
            }
            for (let i = 0; i < 2; i++) {
                newtd2();
                newth2();
            }
            last = lastdayCall();
            answer = 1;
            for (let ths of th) {
                ths.innerText = '';
            }
            for (let i = 6; i < last + 6; i++) {
                th[i].innerText = answer;
                answer++;
            };
            for (let i = last + 6; i < th.length; i++) {
                th[i].remove();
                td[i].remove();
            }
            tdssDelete();
            tdSetting();
            break;
    }
})


//ul과 li세팅을 위한 메소드
function tdSetting() {
    for (let i = 0; i < thss.length; i++) {
        if (thss[i].innerText !== '') {
            let tdsss = tdss[i];
            let ul = document.createElement('ul');
            ul.style.display = 'flex';
            ul.style.paddingLeft = '10px';
            ul.style.height = '70px';
            ul.style.width = '180px';
            ul.style.overflowY = 'scroll';
            ul.style.flexWrap = 'wrap';
            function tdEvent() {
                let li = document.createElement('li');
                let button = document.createElement('button');
                let newbr = document.createElement('br');
                //초기화 버튼을 위한 메소드        
                function allUlDelete() {
                    let allUl = document.querySelector('table').querySelectorAll('ul');
                    for (i of allUl) {
                        if (tdsss.children.length != 0) {
                            while (i.hasChildNodes()) {
                                i.removeChild(i.firstChild);
                            }
                            i.remove();
                        }
                    }
                }
                tdsss.appendChild(ul);
                ul.appendChild(li);
                ul.appendChild(button);
                ul.appendChild(newbr);
                dataReset.addEventListener('click', allUlDelete);
                li.style.display = 'inline';
                li.style.height = '15px';
                li.style.width = '80%';
                button.style.width = '20%';
                button.style.height = '20px';
                button.style.marginLeft = 'auto';
                button.style.borderColor = 'white';
                button.innerText = '삭제';
                button.style.display = 'inline';
                button.style.fontSize = '1px';
                button.style.padding = '2px';
                button.addEventListener('mouseup', function (e) {
                    e.preventDefault();
                    if (ul.children.length < 4) {
                        ul.remove();
                        ul.removeChild(li);
                        ul.removeChild(button);
                        ul.removeChild(newbr);
                    } else {
                        ul.removeChild(li);
                        ul.removeChild(button);
                        ul.removeChild(newbr);
                    }
                });
                button.addEventListener('mouseover', function (e) {
                    e.stopPropagation();
                    button.style.borderColor = 'black';
                });
                button.addEventListener('mouseout', function (e) {
                    e.stopPropagation();
                    button.style.borderColor = 'white';
                })

                let check = confirm("내용을 추가하실건가요?")
                if (check == true) {
                    let useMoney =
                        prompt("어디에 돈을 쓰셨습니까? 공백없이 입력해주세요. 취소 : q입력")

                    if (useMoney !== null && useMoney.indexOf(' ') === -1 && useMoney !== 'q' && useMoney !== '' && useMoney.length <= 15) {
                        let Money = parseInt(prompt("얼마를 쓰셨습니까? (숫자만 입력해주세요.)"))
                        if (isNaN(Money) == true) {
                            if (ul.children.length < 4) {
                                ul.remove();
                                li.remove(alert("숫자만 입력해주세요."));
                                ul.removeChild(button);
                                ul.removeChild(newbr);
                            } else {
                                li.remove(alert("숫자만 입력해주세요."));
                                ul.removeChild(button);
                                ul.removeChild(newbr);
                            }
                        } else {
                            li.innerText = `${useMoney} - ${Money}원 `;
                        }
                    }
                    else if (useMoney === null) {
                        if (ul.children.length < 4) {
                            ul.remove();
                            li.remove(alert("정상적으로 취소되었습니다."));
                            ul.removeChild(button);
                            ul.removeChild(newbr);
                        } else {
                            li.remove(alert("정상적으로 취소되었습니다."));
                            ul.removeChild(button);
                            ul.removeChild(newbr);
                        }
                    }
                    else if (useMoney === 'q') {
                        if (ul.children.length < 4) {
                            ul.remove();
                            li.remove(alert("정상적으로 취소되었습니다."));
                            ul.removeChild(button);
                            ul.removeChild(newbr);
                        } else {
                            li.remove(alert("정상적으로 취소되었습니다."));
                            ul.removeChild(button);
                            ul.removeChild(newbr);
                        }
                    }
                    else {
                        if (ul.children.length < 4) {
                            ul.remove();
                            li.remove(alert("공백이 존재합니다. 다시 진행해주세요."));
                            ul.removeChild(button);
                            ul.removeChild(newbr);
                        } else {
                            li.remove(alert("공백이 존재합니다. 다시 진행해주세요."));
                            ul.removeChild(button);
                            ul.removeChild(newbr);
                        }
                    }
                } else {
                    if (ul.children.length < 4) {
                        ul.remove();
                        li.remove(alert("정상적으로 취소되었습니다."));
                        ul.removeChild(button);
                        ul.removeChild(newbr);
                    } else {
                        li.remove(alert("정상적으로 취소되었습니다."));
                        ul.removeChild(button);
                        ul.removeChild(newbr);
                    }
                }
            }
            tdsss.addEventListener('click', tdEvent);
            fh1.addEventListener('input', () => {
                tdsss.removeEventListener('click', tdEvent);
            });
        }

    }
}

function tdssDelete() {
    for (let tdsss of tdss) {
        tdsss.innerHTML = "";

    }
}

//최초 loading 시에 한 번은 꼭 실행되야하는 코드
tdSetting()

