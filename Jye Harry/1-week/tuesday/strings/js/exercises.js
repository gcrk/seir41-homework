const drEvil = function(amount) {
  let output = amount + " dollars";
  if (amount >= 1000000) {
    output += " (pinky)";
  }
  return output
}

console.log(drEvil(1000000));


const mixUp = function(str1, str2) {
  const str1Letters = str1.slice(0, 2);
  const str2Letters = str2.slice(0, 2);
  str1 = str1.replace(str1Letters, str2Letters);
  str2 = str2.replace(str2Letters, str1Letters);
  return `${str1} ${str2}`;
}

console.log(mixUp("trees", "pretty"));


const fixStart = function(str) {
  const letter1 = str[0];
  while (str.includes(letter1)) {
    str = str.replace(letter1, "*");
  }
  return str = str.replace("*", letter1);
}

console.log(fixStart("lillipad"));


const verbing = function (str) {
  if (str.length >= 3) {
    if (str.slice(str.length - 3) === "ing") {
      str += "ly";
    } else {
      str += "ing";
    }
  }
  return str
}

console.log(verbing("true"));


const notBad = function (str) {
  const not = str.indexOf("not");
  let bad = str.indexOf("bad");
  if (not !== -1 && bad !== -1) {
    if (not < bad) {
      bad += 3; // this is the index at the end of the string 'bad'
      str = str.replace(str.slice(not, bad), "good");
    }
  }
  return str
}

console.log(notBad("This is not that bad, you know"));
