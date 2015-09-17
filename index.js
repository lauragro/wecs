$(document).ready(function() {
    listGoogleCalendarEvents();
});

function listGoogleCalendarEvents() {
    // Get list of upcoming events formatted in JSON

        jQuery.getJSON("https://www.googleapis.com/calendar/v3/calendars/p2mo3urtr8mbv1duuc1aiuukkk%40group.calendar.google.com" +
        "/events?key=AIzaSyCnWr5mHDBD5CD5lCWMDH1EUskUKrTQ1Z0&orderby=starttime&sortorder=ascending&max-results=4&futureevents=true&" +
        "singleEvents=true&alt=json&timeMin=" + Timestamp.start(), function(data){

        // Parse and render each event
        jQuery.each(data.items, function(i, item){

            // Render the event
            var eventTime = new Date(item.start.dateTime);
            jQuery("#gcal-events .event").last().after( "<div class='event'>" + item.summary + "<div class='event-date'> - " + eventTime.toDateString() + "</div></div>" );
            jQuery("#gcal-events .event").last().append("<div class='description'>" + item.description + "</div>");
        });
        if ($("#gcal-events .event").length > 1){
            $("#gcal-events .event").first().remove();
        }
    });

}


// Timestamp generator

var Timestamp = {
    start: function (date){
        date = date ? date : new Date();
        var offset = date.getTimezoneOffset();
        return this.pad(date.getFullYear(), 4)
            + "-" + this.pad(date.getMonth() + 1, 2)
            + "-" + this.pad(date.getDate(), 2)
            + "T" + this.pad(date.getHours(), 2)
            + ":" + this.pad(date.getMinutes(), 2)
            + ":" + this.pad(date.getSeconds(), 2)
            + "." + this.pad(date.getMilliseconds(), 3)
            + (offset > 0 ? "-" : "+")
            + this.pad(Math.floor(Math.abs(offset) / 60), 2)
            + ":" + this.pad(Math.abs(offset) % 60, 2);
    },
    pad: function (amount, width ){
        var padding = "";
        while (padding.length < width - 1 && amount < Math.pow(10, width - padding.length - 1))
            padding += "0";
        return padding + amount.toString();
    }
}

