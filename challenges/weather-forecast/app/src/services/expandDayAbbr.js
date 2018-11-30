const fullNames = {
    SUN: 'Sunday',
    MON: 'Monday',
    TUE: 'Tuesday',
    WED: 'Wednesday',
    THU: 'Thursday',
    FRI: 'Friday',
    SAT: 'Saturday'
};

function expandDayAbbr (abbreviation) {
    return fullNames[abbreviation.toUpperCase()] || null;
}

export default expandDayAbbr;
