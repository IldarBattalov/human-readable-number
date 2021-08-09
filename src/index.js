module.exports = function toReadable(number) {
    x = number % 10;
    y = number % 100;
    if (y >= 10 && y < 20) {
        x = 0;
    } else {
        y = (number % 100) - x;
    }
    z = ((number % 1000) - (number % 100)) / 100;

    const toTranslate = figure => {
        switch (figure) {
            case 0:
                return '';
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            case 7:
                return 'seven';
            case 8:
                return 'eight';
            case 9:
                return 'nine';
            case 11:
                return 'eleven';
            case 12:
                return 'twelve';
            default:
                return null;
        }
    };
    const toTranslateSecondDigit = figure => {
        switch (figure) {
            case 0:
                return '';
            case 10:
                return 'ten';
            case 11:
                return 'eleven';
            case 12:
                return 'twelve';
            case 13:
                return 'thirteen';
            case 14:
                return 'fourteen';
            case 15:
                return 'fifteen';
            case 16:
                return 'sixteen';
            case 17:
                return 'seventeen';
            case 18:
                return 'eighteen';
            case 19:
                return 'nineteen';
            case 20:
                return 'twenty';
            case 30:
                return 'thirty';
            case 40:
                return 'forty';
            case 50:
                return 'fifty';
            case 60:
                return 'sixty';
            case 70:
                return 'seventy';
            case 80:
                return 'eighty';
            case 90:
                return 'ninety';
            default:
                return null;
        }
    };

    x = toTranslate(x);
    y = toTranslateSecondDigit(y);
    z = toTranslate(z);

    if (z === '' && x === '' && y === '') {
        return `zero`;
    } else if (z === '' && x !== '' && y !== '') {
        return `${y} ${x}`;
    } else if (z === '' && y === '') {
        return `${x}`;
    } else if (z === '' && x === '') {
        return `${y}`;
    } else if (y === '' && x === '') {
        return `${z} hundred`;
    } else if (y === '') {
        return `${z} hundred ${x}`;
    } else if (x === '') {
        return `${z} hundred ${y}`;
    } else {
        return `${z} hundred ${y} ${x}`;
    }

};