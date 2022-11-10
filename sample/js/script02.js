$(function(){

  $("#intro p").hide().fadeIn(1000)
    //setTimeout(introAnime,2000);//2秒経った時にintroAnimeを実行
    $("#intro").on("click",introAnime)//クリックしたらintroAnimeを実行
  
    function introAnime(){//jqueryでフェードアウト、終わったらcontentAnime実行
      $("#intro").fadeOut(1000,contentAnime);
    }
  
    function contentAnime(){
      setTimeout(backAnime,300);//0.3秒後backAnime実行
 }

  let windowH
  let documentH 
  let documentW 
  let scrollTop
  let separate
  let scrollRatio

  //スクロールしたりウィンドウサイズを変えた時に実行
  $(window).on("scroll resize load",function(){
    windowH = $(this).height()//ウィンドウの高さ
    documentH = $(document).height()//内容の高さ
    documentW = $(document).width()//内容の幅
    scrollTop = $(this).scrollTop()//何ピクセルスクロールしたか
    scrollRatio = scrollTop/(documentH-windowH)//どれくらいスクロールされたか0から1
    
    separate = documentH / 2;//内容の高さを分割した数値

    //３分割した数値とどれだけスクロールしたかを比較→bodyにクラスをつける。あとはCSSファイルでデザイン変更
    if(scrollTop < separate){
      $("body").removeClass().addClass("one")
    }else if(scrollTop < separate * 2){
      $("body").removeClass().addClass("two")
    }else{
      $("body").removeClass().addClass("three")
    }

    console.log(windowH,documentH,scrollTop)

    $("#wave").css("background-position-x",scrollTop/10)//右上の背景画像の位置変更(CSS)
    $("#line").css("width",scrollRatio * documentW)//グラデーションラインの幅変更(CSS)

  })


  //Menuボタンを押した時
  $('a[href^="#"]').click(function(){
    let adjust = -120;
    let speed = 400;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });


  // ねこアイコン()
  document.querySelector("#intro .pic").animate(
	 [
		{ transform: "rotate(360deg)" },
		{ transform: "rotate(0deg)" }
	 ],
	 {
		duration: 30000,
		easing: 'linear',
		iterations: Infinity
	 }
  );

})