$(".saveButton").on("click", function(){
    var textsContent = $(this).siblings("textarea").val()
    // console.log(textsContent)
    //Need to save value in localStorage
    
    var clockTime = $(this).parent().attr("id")
    localStorage.setItem(clockTime, textsContent)
})

var colorTimeBlock = function(){
    var now = moment().hours()
    $(".timeSection").each(function(){
        var hour = $(this).attr("id")
        // use moment to parse out the hour for each time section
        //then use if statement to check if the hour of this time section is before or after current time, which we have saved as the var now
        // if in the past, color code textarea gray (background color); if current hour background red; future color code green
        
        var parsedHour = moment().format(hour, "h hh");
        console.log(parsedHour)
        if (parsedHour < now){
            $(this).addClass("past")
        } else if (parsedHour === now){
            $(this).removeClass('past')
            $(this).addClass("present")
        } else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass("future")
        }
        console.log(hour)
       
    })
}

$(document).ready(function(){
    $(".scheduledTexts").each(function(){
        var id = $(this).parent().attr("id")
        var storedScheduleTexts = localStorage.getItem(id)
        $(this).val(storedScheduleTexts)
    })
    var today = moment().format("dddd, MMM Do")
    $("#currentDay").text(today)
})

colorTimeBlock();
