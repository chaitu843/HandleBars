$(document).ready(() => {

    Handlebars.registerPartial('characterPartial', `<li>
    <h2>{{name}}</h2>
    <p>Actor : {{actor}}</p>
    <p>House : {{house}}</p>
    {{#if location}}<p>WhereAbouts : {{location}}</p>{{/if}}
</li>`);
    let compiledCharacterTemplate = Handlebars.templates['character-list.hbs'];
    console.log(compiledCharacterTemplate);

    $.ajax("../data/cast.json").done(cast => {
        $('.character-list').html(compiledCharacterTemplate(cast));
    });
})
