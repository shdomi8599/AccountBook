const td = document.querySelectorAll('td');

const th = document.querySelector('tbody').querySelectorAll('th');

const fh1 = document.querySelector('#fh1');

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
const day = document.querySelectorAll('input')[0].value;
const day2 = `${day}-01`

function getWeek(day2) { //ex) getDayOfWeek('2022-06-13')

    const week = ['일', '월', '화', '수', '목', '금', '토'];

    const dayOfWeek = week[new Date(day2).getDay()];

    return dayOfWeek;

}
switch (getWeek(day2)) {
    case '일':
        for (let i = 0; i < th.length; i++) {
            th[i].innerText = answer;
            answer++;
        };
        for (let i = 31; i <= 36; i++) {
            th[i].innerText = '';
        }
        break;
    case '월':
        for (let i = 1; i < th.length; i++) {
            th[i].innerText = answer;
            answer++;
        };
        for (let i = 32; i <= 36; i++) {
            th[i].innerText = '';
        }
        break;
    case '화':
        for (let i = 2; i < th.length; i++) {
            th[i].innerText = answer;
            answer++;
        };
        for (let i = 33; i <= 36; i++) {
            th[i].innerText = '';
        }
        break;
    case '수':
        for (let i = 3; i < th.length; i++) {
            th[i].innerText = answer;
            answer++;
        };
        for (let i = 34; i <= 36; i++) {
            th[i].innerText = '';
        }
        break;
    case '목':
        for (let i = 4; i < th.length; i++) {
            th[i].innerText = answer;
            answer++;
        };
        for (let i = 35; i <= 36; i++) {
            th[i].innerText = '';
        }
        break;
    case '금':
        for (let i = 5; i < th.length; i++) {
            th[i].innerText = answer;
            answer++;
        };
        for (let i = 36; i <= 36; i++) {
            th[i].innerText = '';
        }
        break;
    case '토':
        for (let i = 6; i < th.length; i++) {
            th[i].innerText = answer;
            answer++;
        };
        for (let i = 37; i <= 36; i++) {
            th[i].innerText = '';
        }
        break;
}


fh1.addEventListener('input', function () {
    const day = document.querySelectorAll('input')[0].value;
    const day2 = `${day}-01`

    function getWeek(day2) { //ex) getDayOfWeek('2022-06-13')

        const week = ['일', '월', '화', '수', '목', '금', '토'];

        const dayOfWeek = week[new Date(day2).getDay()];

        return dayOfWeek;

    }
    switch (getWeek(day2)) {
        case '일':
            answer = 1;
            for (let ths of th) {
                ths.innerText = '';
            }
            for (let i = 0; i < th.length; i++) {
                th[i].innerText = answer;
                answer++;
            };
            for (let i = 31; i <= 36; i++) {
                th[i].innerText = '';
            }

            break;
        case '월':
            answer = 1;
            for (let ths of th) {
                ths.innerText = '';
            }
            for (let i = 1; i < th.length; i++) {
                th[i].innerText = answer;
                answer++;
            };
            for (let i = 32; i <= 36; i++) {
                th[i].innerText = '';
            }

            break;
        case '화':
            answer = 1;
            for (let ths of th) {
                ths.innerText = '';
            }
            for (let i = 2; i < th.length; i++) {
                th[i].innerText = answer;
                answer++;
            };
            for (let i = 33; i <= 36; i++) {
                th[i].innerText = '';
            }

            break;
        case '수':
            answer = 1;
            for (let ths of th) {
                ths.innerText = '';
            }
            for (let i = 3; i < th.length; i++) {
                th[i].innerText = answer;
                answer++;
            };
            for (let i = 34; i <= 36; i++) {
                th[i].innerText = '';
            }

            break;
        case '목':
            answer = 1;
            for (let ths of th) {
                ths.innerText = '';
            }
            for (let i = 4; i < th.length; i++) {
                th[i].innerText = answer;
                answer++;
            };
            for (let i = 35; i <= 36; i++) {
                th[i].innerText = '';
            }

            break;
        case '금':
            answer = 1;
            for (let ths of th) {
                ths.innerText = '';
            }
            for (let i = 5; i < th.length; i++) {
                th[i].innerText = answer;
                answer++;
            };
            for (let i = 36; i <= 36; i++) {
                th[i].innerText = '';
            }

            break;
        case '토':
            answer = 1;
            for (let ths of th) {
                ths.innerText = '';
            }
            for (let i = 6; i < th.length; i++) {
                th[i].innerText = answer;
                answer++;
            };
            for (let i = 37; i <= 36; i++) {
                th[i].innerText = '';
            }

            break;
    }
})

const today2 = new Date(day2);

const yesterday = new Date(today2.setDate(today2.getDate() -1 ));

console.log(yesterday);