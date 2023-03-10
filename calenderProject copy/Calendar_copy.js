
const now = new Date();
let curYear = now.getFullYear();
let curMonth = now.getMonth();
let curTime = now.getTime();

createCal();

function prevCal(){
    if(curMonth+1 == 1){
        curMonth =11;
        curYear--;
    }
    else curMonth--;
    createCal();
}

function nextCal(){
    if(curMonth+1 == 12){
        curMonth = 0
        curYear++;
    }
    else curMonth++;
    createCal();
}

function curCal(){
    curYear=now.getFullYear();
    curMonth=now.getMonth();
    createCal();
}

function createCal(){
    const lastDate = new Date(curYear, curMonth+1, 0).getDate;
    const firstDay = new Date(curYear, curMonth, 1).getDay;
    let numOfWeeks = Math.ceil((firstDay+lastDate)/7)
    let table 
    
}



