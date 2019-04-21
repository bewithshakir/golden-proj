$(document).ready(() => {
  var gallaryImgPath;
  $("[data-target='.bd-example-modal-xl']").on("click", function() {
    gallaryImgPath = $(this)
      .find("img")
      .attr("src");
  });

  $(".bd-example-modal-xl").on("show.bs.modal", function(e) {
    // do something...
    console.log("this", gallaryImgPath);
    $("#gallery-1")
      .find("#image")
      .prop("src", gallaryImgPath);
  });
});
