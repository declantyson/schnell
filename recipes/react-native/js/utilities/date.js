/*
 *
 *  Schnell/Utilities/Date
 *  Declan Tyson
 *  v0.1.0
 *  07/12/2016
 *
 */

export default dateUtilities = {
    formatDate: (date) => {
        if (date < 10) {
            date = "0" + date;
        }
        return date;
    },

    getMonthName: (index) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[index];
    },

    addDays: (date, days) => {
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
}