$(function () {
  var selectedDate;
  $("#datepicker-container").datepicker({
    inline: true,
    showOtherMonths: true,
    onSelect: function (dateText) {
      selectedDate = dateText;
    },
  });

  $("#goButton").on("click", function () {
    // Set the input value when the user clicks "GO"
    if (selectedDate) {
      $(".inputDate").val(selectedDate);
      console.log("Selected date: " + selectedDate);
    }
  });
});
