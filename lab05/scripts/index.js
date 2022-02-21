
$(document).ready(() => {
    const specialist = $('#inputSpecialist'); // specialist chosen 
    const datePicker = $('#dateTimeInput');

    specialist.on('change', () => {
        updateDatePicker(datePicker, specialist); // update available dates when specialist chosen
    });


});