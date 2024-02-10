// script.js
$(document).ready(function() {
    $('#languageSelect').change(function() {
        var language = $(this).val();
        loadContent(language);
    });

    function loadContent(language) {
        // Simulated content loading based on language
        var content = getContentForLanguage(language);
        $('#content').html(content);
    }

    function getContentForLanguage(language) {
        switch (language) {
            case 'hi':
                return '<p>???? ?????? ?? ????? ?????? ????</p>'; // Hindi content
            // Add cases for other Indic languages
            default:
                return '<p>Welcome to Rental Commerce.</p>'; // Default English content
        }
    }
});