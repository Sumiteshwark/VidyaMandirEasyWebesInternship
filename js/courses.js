$(document).ready(function () {
  var sel_course = "total_course";
  $("select.s_course").change(function () {
      var selected_course = $(".s_course option.option_title:selected").val();
      console.log(selected_course);
    if (selected_course != undefined) sel_course = selected_course;
    else sel_course = "total_course";
  });

  var sel_class = "total_course";
  $("select.s_class").change(function () {
      var selected_class = $(".s_class option.option_title:selected").val();
      console.log(selected_class);
    if (selected_class != undefined) sel_class = selected_class;
    else sel_class = "total_course";
  });

  var sel_stream = "total_course";
  $("select.s_stream").change(function () {
      var selected_stream = $(".s_stream option.option_title:selected").val();
      console.log(selected_stream);
    if (selected_stream != undefined) sel_stream = selected_stream;
    else sel_stream = "total_course";
  });

  $("div.box-select").change(function () {
    $(".total_course").hide();
    $("." + sel_course + "." + sel_class + "." + sel_stream).show();
  });
});
