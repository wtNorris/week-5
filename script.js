var currentDay = dayjs().format('dddd, MMMM D');
$("#currentDay").text(currentDay);

// if currentTime == current time then append .present id to description
var currentTime = dayjs().format('H');
console.log(currentTime);
var hours = [nine = '9AM', 
            ten ='10AM',
            eleven = '11AM',
            twelve = '12PM',
            thirteen ='1PM',
            fourteen = '2PM',
            fifthteen = '3PM',
            sixteen = '4PM',
            seventeen = '5PM'] = ['9', '10', '11', '12', '13', '14', '15', '16', '17'];
//$("#hour").text(hours); changes times to array of times
console.log(hours);

// need to figure out how to write a function that appends the div id = past/present/future
//if (hours[''] == currentTime) {
 //   $("#description").append("present");
//} else if (hours < currentTime) {
//    $("description").append("past")
//} else if (hours > currentTime) {
//    $("description").append("future");
//}

