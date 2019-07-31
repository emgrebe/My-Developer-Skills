$('#add').on('click', function() {
    let $input = $('input').val();
    console.log($input);
    $('.main').append(`<div id='text'><span id='box'>X</span>${$input}</div>`);

    $('input').val('');
})