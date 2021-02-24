/**
 * Time.js
 * Simple time library to convert UTC time stamps into dates, 
 * days and the time in 24 or 12 hours
 * @version 1.0.0
 * @author Aron Weston
 * @license MIT
 * 
 */

class Time {

    getDate(input) {
        let date = new Date(input * 1000);
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0'); 
        let yyyy = date.getFullYear();
        date = `${dd}/${mm}/${yyyy}`
        return date;
    }

    //Converts UTC timestamp to 24 hour time
    getTime(input) {
        let time = new Date(input * 1000);
        let hours = time.getHours();
        let minutes = "0" + time.getMinutes();
        time = `${hours}:${minutes.substr(-2)}`;
        if (hours < 12) {
            return time + ' am';
        } else {
            let time = `${hours - 12}:${minutes.substr(-2)}`;
            return time + ' pm';
        }
    }

    //Converts UTC timestamp to day integer, then returns the corresponding day of the week
    getDay(input) {
        let newDate = new Date(input * 1000);
        let getDay = newDate.getDay();
        let day;
        if (getDay === 0) {
            day = 'Sunday'
        }
        if (getDay === 1) {
            day = 'Monday'
        }
        if (getDay === 2) {
            day = 'Tuesday'
        }
        if (getDay === 3) {
            day = 'Wednesday'
        }
        if (getDay === 4) {
            day = 'Thursday'
        }
        if (getDay === 5) {
            day = 'Friday'
        }
        if (getDay === 6) {
            day = 'Saturday'
        }
        return day;
    }
}

