// PARAMETER current day displayed at top of calendar plus variables
var currentDay = dayjs().format('dddd, MMMM D');
$("#currentDay").text(currentDay);
var saveBtn = $("#saveBtn");


// PARAMTER time blocks bg color based on relative hour
function backColor() {
    var tbhour = moment().hours();

    $(".timeBlock").each(function() {
        var hourNow = parseInt($(this).attr("id"));

        if (hourNow > tbhour) {
            $(this).addClass("future");
        } else if (hourNow === tbhour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// PARAMETER save button click attaches text&val siblings to 
saveBtn.on("click", function() {

    // console.log(this); //save button
    var time = $(this).siblings(".hour").text();
    var scheduled = $(this).siblings(".scheduled").val();

    // THEN the text for that event is saved in local storage
    localStorage.setItem(time, scheduled);
});

// PARAMETER I refresh the page then the saved events persist
function usesSched() {

    $(".hour").each(function() {
        var currHour = $(this).text();
        var currSched = localStorage.getItem(currHour);

        if(currSched !== null) {
            $(this).siblings(".schedule").val(currSched);
        }
    });
}

backColor();
useSched();