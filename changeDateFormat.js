
function changeDateFormat(dates) {
/*
    let result = dates.map((v) => {
        var date = validateDate(v);
        if(date != null) {
            return date;
        }

        return false;
    });
*/

    var changeResult = dates.reduce(function(result, v) {
        var date = getValidateDate(v);
        if(date != null) {
            result.push(date);
        }

        return result;
      }, []);

    return changeResult;
}
  
  var dates = changeDateFormat(["2010/03/30", "15/12/2016", "11-15-2012", "20130720"]);

console.log(dates);

  for (index = 0; index < dates.length; ++index) {
    console.log(dates[index]);
  }


function getValidateDate(orgDate) {
    var convDate = null;
    var regEx = /^(\d{4})(\/|-)(\d{2})(\/|-)(\d{2})$/;
    var regEx2 = /^(\d{2})(\/|-)(\d{2})(\/|-)(\d{4})$/;
    var regEx3 = /^\d{2}-\d{2}-\d{4}$/;

    if(orgDate.match(regEx)) {
//        console.log("1 Ok");

        var dateArr = orgDate.split('/');
        convDate = getFormDate(new Date(dateArr[0], dateArr[1]-1, dateArr[2]));
    }

    if(orgDate.match(regEx2)) {
//        console.log("2 Ok");

        var dateArr = orgDate.split('/');
        convDate = getFormDate(new Date(dateArr[2], dateArr[1]-1, dateArr[0]));
    }

    if(orgDate.match(regEx3)) {
//        console.log("3 Ok");

        var dateArr = orgDate.split('-');
        convDate = getFormDate(new Date(dateArr[2], dateArr[0]-1, dateArr[1]));
    }

    return convDate;
}

function getFormDate(formDate) {
    var year  = formDate.getFullYear();
    var month = formDate.getMonth() + 1;
    var day   = formDate.getDate();
  
    if (("" + month).length == 1) { month = "0" + month; }
    if (("" + day).length   == 1) { day   = "0" + day;   }
  
    return ("" + year + month + day);
}
