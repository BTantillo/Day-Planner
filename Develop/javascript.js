$(".saveButton").on("click", function(){
    var textsContent = $(this).siblings("textarea").val()
    console.log(textsContent)
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

        } else if (parsedHour === now){

        } else {

        }
        // google how to add/remove classes in js
        console.log(hour)
        console.log(now)
    })
}

$(document).ready(function(){
    $(".scheduledTexts").each(function(){
        var id = $(this).parent().attr("id")
        var storedScheduleTexts = localStorage.getItem(id)
        $(this).val(storedScheduleTexts)
    })
})

colorTimeBlock();
