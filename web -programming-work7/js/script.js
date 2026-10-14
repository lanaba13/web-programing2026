// 가장 먼저 : 파일이 잘 연결됐는지 console에 찍어보기
console.log("complete");

// 현재 브라우저 창의 가로, 세로 길이(px)를 변수에 저장
let wWidth = $(window).width();
let wHeight = $(window).height();
console.log(wWidth, wHeight);

// ---------------------------------------------
// 1. 고양이 + 풀숲 배경 움직이기
// 문서(document)에서 마우스가 움직일 때마다 function 안의 코드를 실행
// ---------------------------------------------
$(document).on("mousemove", function (event) {
  // 마우스 X, Y 좌표값을 변수에 저장
  let mouseX = event.pageX;
  let mouseY = event.pageY;

  // 1-1. 마우스 위치에 따라 배경 이미지의 보이는 위치를 바꾸기
  $(".bg-img").css("object-position", `${mouseX / 10}% ${mouseY / 10}%`);

  // 1-2. 고양이 이미지가 마우스 커서를 따라다니게 하기
  // 고양이 이미지의 가로, 세로 크기를 변수에 저장
  let imgWidth = $(".cat-img").width();
  let imgHeight = $(".cat-img").height();

  // 커서 위치에서 이미지 크기의 절반만큼 빼면
  // 이미지의 "가운데"가 커서 위치에 오게 된다.
  $(".cat-img").css("left", mouseX - imgWidth / 2 + "px");
  $(".cat-img").css("top", mouseY - imgHeight / 2 + "px");
});

// ---------------------------------------------
// 2. 마우스 좌표로 박스 크기 바꾸기
// (index.html의 #status, .box 주석을 풀면 동작)
// ---------------------------------------------
$(document).mousemove(function (e) {
  // e는 event를 줄여 쓴 것
  // #status 안의 내용을 현재 커서 좌표로 바꿔라
  $("#status").html(e.pageX + ", " + e.pageY);
  // .box의 너비는 커서 X좌표, 높이는 커서 Y좌표로
  $(".box").css("width", e.pageX);
  $(".box").css("height", e.pageY);
});
