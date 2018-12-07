// Configure application
function configure()
{

    // Configure typeahead
    $("#q").typeahead({
        highlight: false,
        minLength: 1
    },
    {
        display: function(suggestion) { return null; },
        limit: 10,
        source: search,
        templates: {
            suggestion: Handlebars.compile(
                "<div>" + "{{place_name}}, {{admin_name1}}, {{postal_code}}" + "</div>"
            )
        }
    });

// Not sure if I need this update command.

    // Update UI
    update();

    // Give focus to text box
    $("#q").focus();
}
