module.exports = function toReadable(number) {
    const numberMap = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };

    if (number <= 19) {
        return numberMap[number];
    }

    const dozensMap = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };

    let splittedNumber = number.toString().split('');

    if (splittedNumber.length === 2) {
        let firstNumber = parseInt(splittedNumber[0]);
        let secondNumber = parseInt(splittedNumber[1]);

        let humanReadableNumber = dozensMap[firstNumber];
        if (secondNumber !== 0) {
            humanReadableNumber += (' ' + numberMap[secondNumber]);
        }

        return humanReadableNumber;
    }

    if (splittedNumber.length === 3) {
        let firstNumber = parseInt(splittedNumber[0]);
        let secondNumber = parseInt(splittedNumber[1]);
        let thirdNumber = parseInt(splittedNumber[2]);

        let humanReadableNumber = numberMap[firstNumber] + ' hundred';

        if (secondNumber === 0) {
            if (thirdNumber !== 0) {
                humanReadableNumber += (' ' + numberMap[thirdNumber]);
            }
            return humanReadableNumber;
        }

        if (secondNumber === 1) {
            humanReadableNumber += (' ' + numberMap[(secondNumber.toString() + thirdNumber.toString())]);
            return humanReadableNumber;
        }

        humanReadableNumber += (' ' + dozensMap[secondNumber]);

        if (thirdNumber !== 0) {
            humanReadableNumber += (' ' + numberMap[thirdNumber]);
        }

        return humanReadableNumber;
    }
};
