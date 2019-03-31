
jQuery(function($){
 
  //コンテンツを囲む要素をidで指定
  var container_2 = document.querySelector('.grid__images__search');

  //すべての画像を読み込み終わった後に関数を実行
  imagesLoaded(container_2, function () {
    var msnry = new Masonry(container_2, {
      itemSelector: '.item', //コンテンツのclass名
      columnWidth: '.grid__images__search li', //カラムの幅を設定
      gutter: 0.5
    });
    $('.grid__images').addClass('on'); //コンテナにclassを付与して表示を切り替える
  });
});