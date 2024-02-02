
    // HTMLドキュメントが読み込み完了したとき
    $(window).on('load',function() {
        console.log ('loadイベントが発生しました');
    });

    // スクロールしたとき
    $(window).on('scroll', function() {
        console.log ('スクロールされました');
    });
