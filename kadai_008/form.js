$(function () {
    // クラス要素btnをクリックしたら
    $('.btn').on('click', function () {
        // クラス要素text-boxにクリックしました！を表示させる
        $('.text-box').val('クリックしました！');
    }
    );

});