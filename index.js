$(document).ready(function() {
    listGoogleCalendarEvents();
});

function listGoogleCalendarEvents() {
    // Get list of upcoming events formatted in JSON
    jQuery.getJSON("https://www.googleapis.com/calendar/v3/calendars/q6jv5g9kebhrt9apq0jr93mlgo%40group.calendar.google.com" +
        "/events?key=AIzaSyCnWr5mHDBD5CD5lCWMDH1EUskUKrTQ1Z0&orderby=starttime&sortorder=ascending&max-results=3&futureevents=true&" +
        "alt=json", function(data){

        // Parse and render each event
        jQuery.each(data.items, function(i, item){

            // Render the event
            jQuery("#gcal-events .event").last().after( "<div class='event'>" + item.summary + "<div class='event-date'> - " + item.start.date + "</div></div>" );
            jQuery("#gcal-events .event").last().append("<div class='hidden'>" + item.description + "</div>");
        });
        if ($("#gcal-events .event").length > 1){
            $("#gcal-events .event").first().remove();
        }
    });

}

