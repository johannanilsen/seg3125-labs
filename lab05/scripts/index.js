
$(document).ready(() => {
    const specialist = $('#inputSpecialist'); // specialist chosen 
    const datePicker = $('#dateTimeInput');

    specialist.on('change', () => {
        updateDatePicker(datePicker, specialist); // update available dates when specialist chosen
    });
    $("#card_number").on("mouseenter", function(){
        $("#card_number").addClass("showInput");
    });

    $("#card_number").on("mouseleave", function(){
        $("#card_number").removeClass("showInput");
    });
  
    // https://jqueryui.com/tooltip/ 
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#card_number").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });


});