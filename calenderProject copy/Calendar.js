
//집 폴더에 있는 Calendar2

const now = new Date();
let curYear = now.getFullYear();
let curMonth = now.getMonth();
let curTime = now.getTime();

createCal();

function prevCal() {
    if(curMonth+1 == 1) {
        curMonth=11;
        curYear--;
    }
    else curMonth--;
    createCal();
}

function nextCal() {
    if(curMonth+1 == 12) {
        curMonth=0
        curYear++;
    }
    else curMonth++;
    createCal();
}

function curCal() {
    curYear=now.getFullYear();
    curMonth=now.getMonth();
    createCal();
}

function createCal() {
    
    const lastDate = new Date(curYear, curMonth+1, 0).getDate();
    const firstDay = new Date(curYear, curMonth, 1).getDay();

    let numOfWeeks = Math.ceil((firstDay+lastDate)/7)

    let table = `<table border="0.3">`

    table+= `<caption>`
    table+= `<button class="button" onclick="prevCal()"> ◁ </button>`
    table+= `${curYear}년 ${curMonth+1}월`
    table+= `<button class="button" onclick="nextCal()"> ▷ </button>`
    table+= `<button class="today" onclick="curCal()"> Today </button>`
    table+= `</caption>`


    const week = ["일", "월", "화", "수", "목", "금", "토"];
    table += `<tr>`;
    for(let i=0;i<week.length;i++) {
        table+=`<th>${week[i]}</th>`;
    }
    table += `</tr>`;

    let cnt = 0;
    let num = 1;

    for(let i=0;i<numOfWeeks;i++) {
        table += `<tr>`;
        for(let j=0;j<7;j++) {
            if(cnt<firstDay) table+=`<td>&nbsp;</td>`;
            else if(num<=lastDate) {
                const currentDate = new Date(curYear, curMonth, num);
                const today = new Date();
                if (currentDate.toDateString() === today.toDateString()) {
                  table+=`<td class="today">${num++}</td>`;
                } else {
                  table+=`<td>${num++}</td>`;
                }
              }
                            
            else table+=`<td>&nbsp;</td>`;
            cnt++;
        }
        table +=`</tr>`;
    }
    table+=`</table>`;

document.getElementById("demo").innerHTML = table;
}