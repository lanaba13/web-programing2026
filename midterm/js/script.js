console.log("jojo poster script loaded");

let isClash = false;
let isStop = false;

$(".hit-jotaro").on("click", function () {
  if (isStop == false) {
    if (isClash == false) {
      $(".poster").addClass("clash");
      isClash = true;
    } else {
      $(".poster").removeClass("clash");
      isClash = false;
    }
  }
});

$(".hit-dio").on("click", function () {
  if (isStop == false) {
    $(".poster").addClass("stop");
    $(".poster").removeClass("hover-jotaro");
    isStop = true;
  } else {
    $(".poster").removeClass("stop");
    isStop = false;
  }
});

$(".hit-dio").on("mouseenter", function () {
  $(".poster").addClass("hover-dio");
});
$(".hit-dio").on("mouseleave", function () {
  $(".poster").removeClass("hover-dio");
});

$(".hit-jotaro").on("mouseenter", function () {
  if (isStop == false) {
    $(".poster").addClass("hover-jotaro");
  }
});
$(".hit-jotaro").on("mouseleave", function () {
  $(".poster").removeClass("hover-jotaro");
});
