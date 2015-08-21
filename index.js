$(document).ready(
   listGoogleCalendarEvents()
);

function listGoogleCalendarEvents() {
    // Get list of upcoming events formatted in JSON
    jQuery.getJSON("https://www.googleapis.com/calendar/v3/calendars/q6jv5g9kebhrt9apq0jr93mlgo%40group.calendar.google.com" +
        "/events?key=AIzaSyCnWr5mHDBD5CD5lCWMDH1EUskUKrTQ1Z0&orderby=starttime&sortorder=ascending&max-results=3&futureevents=true&" +
        "alt=json", function(data){

        // Parse and render each event
        jQuery.each(data.items, function(i, item){

            // Render the event
            jQuery("#gcal-events li").last().after( "<li>" + item.summary + "</li>" );
            jQuery("#gcal-events li").last().after( "<li>" + item.description + "</li>" );
        });
    });
}

