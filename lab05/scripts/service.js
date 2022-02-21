const setDateFormat = "mm/dd/yy";

//Function to disable Homer's unavailable dates 
function disableDatesHomer(date) {
    
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0)
        return [false];

    const options = [6];
    let day = date.getDay();

    return [(options.indexOf(day) === -1)];
}

//Function to disable Bart's unavailable dates 
function disableDatesBart(date) {
    
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0)
        return [false];

    const options = [1, 2, 5];
    let day = date.getDay();
    
    return [(options.indexOf(day) === -1)];
}

//Function to disable Marg's unavailable dates 
function disableDatesMarg(date) {
    
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0)
        return [false];

    const options = [2, 4];
    let day = date.getDay();
    
    return [(options.indexOf(day) === -1)];
}

//Function to disable Lisa's unavailable dates 
function disableDatesLisa(date) {
    
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0)
        return [false];

    const options = [6];
    let day = date.getDay();
    
    return [(options.indexOf(day) === -1)];
}

// Function to update dates based on the specialist chosen 
function updateDatePicker(datePicker, specialist) {
    const specialistName = specialist.find('option:selected').val();
    switch (specialistName) {
        case "homer":
            datePicker.datepicker(
                {
                    dateFormat: setDateFormat,
                    // no calendar before June 1rst 2020
                    minDate: new Date('06/01/2020'),  
                    maxDate: '+4M',
                    // used to disable some dates
                    beforeShowDay: $.datepicker.noWeekends,
                    beforeShowDay: disableDatesHomer
                }   
            );
            break;
        case "bart":
            datePicker.datepicker(
                {
                    dateFormat: setDateFormat,
                    // no calendar before June 1rst 2020
                    minDate: new Date('06/01/2020'),  
                    maxDate: '+4M',
                    // used to disable some dates
                    beforeShowDay: $.datepicker.noWeekends,
                    beforeShowDay: disableDatesBart
                }   
            );
            break;
        case "marg":
            datePicker.datepicker(
                {
                    dateFormat: setDateFormat,
                    // no calendar before June 1rst 2020
                    minDate: new Date('06/01/2020'),  
                    maxDate: '+4M',
                    // used to disable some dates
                    beforeShowDay: $.datepicker.noWeekends,
                    beforeShowDay: disableDatesMarg
                }   
            );
            break;
        case "lisa":
            datePicker.datepicker(
                {
                    dateFormat: setDateFormat,
                    // no calendar before June 1rst 2020
                    minDate: new Date('06/01/2020'),  
                    maxDate: '+4M',
                    // used to disable some dates
                    beforeShowDay: $.datepicker.noWeekends,
                    beforeShowDay: disableDatesLisa
                }   
            );
            break;
        default:
            $('#inputSpecialist-invalidfeedback').show();
            break;
    }
}

