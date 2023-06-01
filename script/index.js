const DATE_OBJECT = new Date();
let value, description;

function getBasicDateFormat(arg) {
    switch (arg) {
        case 'toDateString':
            value = DATE_OBJECT.toDateString();
            description = 'This method converts the date portion of a Date object into a human-readable string format.';;
            printResult(value, description);
            break;
        case 'toISOString':
            value = DATE_OBJECT.toISOString();
            description = 'This method converts a Date object into a string representation following the ISO 8601 format.'
            printResult(value, description);
            break;
        case 'toLocaleDateString':
            value = DATE_OBJECT.toLocaleDateString();
            description = "This method returns a string representing the date portion of a Date object using the system's local conventions."
            printResult(value, description);
        default: break;
    }
}

function getCustomDateFormat(arg) {
    switch (arg) {
        case 'concatenation':
            value = `${DATE_OBJECT.getDate()}-${DATE_OBJECT.getMonth() + 1}-${DATE_OBJECT.getFullYear()}`;
            description = 'One approach is to manually concatenate the different components of a date using string manipulation';
            printResult(value, description);
            break;
        case 'intl':
            const formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'short' });
            value = formatter.format(DATE_OBJECT);
            description = "JavaScript's Intl object offers powerful formatting capabilities through the DateTimeFormat object. It provides localization support and various options to format dates and times."
            printResult(value, description);
            break;
        default: break;
    }
}

function displayTimeZone(arg) {
    switch (arg) {
        case 'getTimeZone':
            value = DATE_OBJECT.getTimezoneOffset();
            description = 'The getTimezoneOffset() method of the Date object returns the difference in minutes between the local time zone and UTC. You can use this offset to adjust dates for specific time zones.'
            printResult(value, description);
            break;
        
        case 'toLocaleString':
            value = DATE_OBJECT.toLocaleString('en-US', { timeZoneName: 'short' });
            description = 'To display the time zone information alongside the date, you can use the toLocaleString() method with the appropriate options.';
            printResult(value, description);
        default:
            break;
    }
}

function getPatterns(arg) {
    switch (arg) {
        case 'specific':
            const formatter1 = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
            value = formatter1.format(DATE_OBJECT);
            description = "To display a date in a specific format, such as DD/MM/YYYY, you can use Intl.DateTimeFormat with the appropriate options.";
            printResult(value, description);
            break;
        case 'time':
            const formatter2 = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            value = formatter2.format(DATE_OBJECT);
            description = 'To format the time portion of a date, you can use the hour, minute, and second options.';
            printResult(value, description);
            break;
        default:
            break;
    }
}

function printResult(value, description) {
    document.getElementById('root').innerHTML = value;
    document.getElementById('description').innerHTML = description;
}