var td = document.querySelectorAll('td');

var th = document.querySelector('tbody').querySelectorAll('th');

const fh1 = document.querySelector('#fh1');

const tears = document.querySelector('#tears');

const tears2 = document.querySelector('#tears2');

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

function getWeek(day2) { //ex) getDayOfWeek('2022-06-13')

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
    // let day = document.querySelectorAll('input')[0].value;
    // let day2 = `${day}-01`

    day = document.querySelectorAll('input')[0].value;
    day2 = `${day}-01`

    function getWeek() { //ex)('2022-06-13')

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
            break;
    }
})
