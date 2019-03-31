jQuery(function($){
 
  //コンテンツを囲む要素をidで指定
  var container = document.querySelector('.grid__images');
 
  //すべての画像を読み込み終わった後に関数を実行
  imagesLoaded( container, function () {
    var msnry = new Masonry( container, {
      itemSelector: '.item', //コンテンツのclass名
      // isFitWidth: true, //コンテナの親要素のサイズに基づいて、コンテンツのカラムを自動調節します。
      columnWidth: '.grid__images li', //カラムの幅を設定
      gutter: 0.5
    });
    $('.grid__images').addClass('on'); //コンテナにclassを付与して表示を切り替える
  });
});
