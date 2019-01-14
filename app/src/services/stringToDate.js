function stringToDate (dateStr) {
    const parts = dateStr.split('-');
    
    const year = parts[0];
    const month = parts[1] - 1; // JavaScript counts months from 0
    const day = parts[2];

    return new Date(year, month, day);
}

export default stringToDate;
