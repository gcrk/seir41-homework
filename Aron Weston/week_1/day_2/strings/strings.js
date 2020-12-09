//Week 1 - Day 2 - Strings

//S1 - Q1
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

drEvil(100000000);



//S1 - Q2
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

//S1 - Q3
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

//Q4 
const verbing = (str) => {
    //Set a result variable to reassign for brevity 
    let res;
    //1: Check if the length is greater than or equal to 3
    if (str.length >= 3) {
        //2. Does the string include ing?
        if (str.includes('ing')) {
            //3. Da? Concat 'ly'
            res = str.concat('ly')
        } else {
            //4. Niet? Concat 'ing' 
            res = str.concat('ing');
        }
    } else {
        //5. For everything else, there's mastercard. 
        res = str;
    }
    //Log and return
    console.log(res);
    return res;
}


//Q5
const notBad = (str) => {

    let not = str.substring()

    //find the first appearance of 'not' and 'bad'

}


//Execute order 666
verbing('go');
verbing('swim');
verbing('swimming');
fixStart('tattle')
mixUp('mix', 'pod')


