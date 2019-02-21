$(document).ready(() => {
    let characterHtml = $('#character-list').html();

    let compiledCharacterTemplate = Handlebars.compile(characterHtml);

    $.ajax("../data/cast.json").done(cast => {
        $('.character-list').html(compiledCharacterTemplate(cast));
    });
})
