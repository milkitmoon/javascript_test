function formatDate(userDate) {
  var dateArr = userDate.split('/');

  formDate = new Date(dateArr[2], dateArr[0]-1, dateArr[1]);

  var year  = formDate.getFullYear();
  var month = formDate.getMonth() + 1;
  var day   = formDate.getDate();

  if (("" + month).length == 1) { month = "0" + month; }
  if (("" + day).length   == 1) { day   = "0" + day;   }

  return ("" + year + month + day);
}

console.log(formatDate("12/31/2014"));
