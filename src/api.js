"use strict";

$('#btn').on('click', function(){
  // htmlが読み込まれてから実行する処理
  $(function() {
    // youtube動画を検索して取得
    $.ajax({
      url: getUrl(),
      dataType : 'jsonp'
    }).done(function(data) {
      if(data.items){
        setData(data);// データ取得が成功した時の処理
      }else{
        console.log(data);
        alert('該当するデータが見つかりませんでした');
      }
    }).fail(function(data){
      alert('通信に失敗しました');
    });
  });
});

function getUrl(){
  const KEY = 'AIzaSyA8aGIfYPW1b8nheESTbr98hPxFgyo8g-U';
  let word = $('#word').val();
  let url = 'https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=' + word + '&videoEmbeddable=true&videoSyndicated=true&maxResults=10&key=' + KEY;
  return url;
}

// データ取得が成功したt機の処理
function setData(data) {
  let result = '';
  let video = '';
  // 動画を表示するHTMLを作る
  for(let i = 0; i < data.items.length; i++){
    video = '<iframe src="https://www.youtube.com/embed/';
    video += data.items[i].id.videoId;
    video += '" allowfullscreen></iframe>';
    result += '<div class="video">' + video + '</div>';
  }
  // HTMLに反映する
  $('#videoList').html(result);
  }