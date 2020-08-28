
function findDay(myDate) {
    let convDate = getValidateDate(myDate);

//console.log(convDate);

    return getWeekDayFromDate(convDate);
}



function getValidateDate(orgDate) {
    let dateArr = orgDate.split('/');
    let convDate = new Date(dateArr[2], dateArr[0]-1, dateArr[1]);

    return convDate;
}

function getWeekDayFromDate(formDate) {
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return weekday[formDate.getDay()];
}



var dates = ["10/11/2009", "11/10/2010"];
for(var i = 0; i < dates.length; i++) {
    var result = findDay(dates[i]);
    console.log(result);
}
