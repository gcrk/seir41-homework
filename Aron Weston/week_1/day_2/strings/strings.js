//Week 1 - Day 2 - Strings

//Q1 - DrEvil
const drEvil = (dollars) => {

    //Relaxing variables
    let mill = 1000000;
    let res;

    //Conditional 
    if (dollars > mill) {
        res = `${dollars} dollars (pinky)`
    } else {
        res = `${dollars} dollars`;
    }
    //Log and return 
    console.log(res);
    return res; 
}


//Q2 - MixUp
const mixUp = (str1, str2) => {

    //? for min 2 string length.
    if (str1.length < 2 || str2.length < 2) {

        let res = 'Your string isn\'t long enough, try again';

        //Return and log result
        console.log(res);
        return res;

    } else {
        //Extract the two characters from each string
        let first = str1.substring(0, 2),
            second = str2.substring(0, 2);

        //Use .slice() to cut out the first character characters
        let slice1 = str1.slice(2),
            slice2 = str2.slice(2);

        //Add them together
        let newFirst = second + slice1;
        let newSecond = first + slice2;

        //Log to check 
        console.log(newFirst, newSecond);

        // Return the glorious new strings
        return `${newFirst, newSecond}`
    }

}

//Q3 - MixUp
const fixStart = (str) => {

    //find the first character of the string
    let start = str[0];

    //Thanks Jim! 
    let reg = new RegExp(start, 'gi');

    //Replace all first characters
    let string = str.replaceAll(reg, '*');

    //Use .substring to create a new string with no starting value 
    let sliced = string.substring(1);

    //Chuck them together
    let result = start + sliced;

    //Log and return 
    console.log(result);
    return result

}

//Q4 - Verbing
const verbing = (str) => {
    //Set a result variable to reassign for brevity 
    let res;
    //1: Check if the length is greater than or equal to 3
    if (str.length >= 3) {
        //2. Does the string include ing?
        if (str.includes('ing')) {
            res = str.concat('ly')
        } else {
            res = str.concat('ing');
        }
    } else {
        res = str;
    }
    //Log and return
    console.log(res);
    return res;
}


//Q5: Not Bad
const notBad = (str) => {

    let not = str.indexOf('not');
    let bad = str.indexOf('bad');

    if (not === -1) {
        return str;
    } else if (bad > not) {
        let y = str.slice(0, not);
        return y + 'good!';
    } else { 
        return str;
    }
}

console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
drEvil(100000000);
verbing('go');
verbing('swim');
verbing('swimming');
fixStart('tattle')
mixUp('mix', 'pod')