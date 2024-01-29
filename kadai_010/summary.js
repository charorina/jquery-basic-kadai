$(function () {
    // 文字色変化ボタンを押すと
    $('#change-color').on('click', function() {
        // 文字色が変わる
        $('#target').css('color', 'blue');
    });

    // 文字内容変化ボタンを押すと
    $('#change-text').on('click', function() {
        // 文字内容が変わる
        $('#target').text('Hello!');
    });

    // フェードアウトボタンを押すと
    $('#fade-out').on('click', function() {
        // フェードアウトする
        $('#target').fadeOut();
    });

    $('#fade-in').on('click', function() {
        $('#target').fadeIn();
    });
});