const weekdays = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
};

function dateToWeekday (date) {
    return weekdays[date.getDay()] || null;
}

export default dateToWeekday;
