module.exports = function toReadable(number) {
    const numberWords = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const array = number
        .toString()
        .split("")
        .map((n) => +n);

    if (number === 0) return "zero";

    let result = "";

    if (array.length === 3) {
        result += numberWords[array[0]] + " hundred";
        array.shift();
    }

    if (array.length === 2) {
        if (array[0] !== 0) {
            if (result.length > 0) result += " ";
            if (+array.join("") < 20) {
                result += numberWords[+array.join("")];
                return result;
            }
            result += tens[array[0]];
        }
        array.shift();
    }

    if (array.length === 1) {
        if (array[0] === 0) return result;
        if (result.length > 0) result += " ";

        result += numberWords[array[0]];
    }

    return result;
};
