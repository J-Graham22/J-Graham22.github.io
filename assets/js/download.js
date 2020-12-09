$(document).on('click', '[download]', function (e) {
    e.preventDefault();
    download($(this).attr('href'));
});