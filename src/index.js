const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result_str = '', tmp_str = '';
    for (let i = 0; i < expr.length;) {
        while (expr[i] === '0')
            i++;
        if (expr[i] === '*') {
            while (expr[i] === '*')
                i++;
            result_str += ' ';
            continue;
        }
        expr[i + 1] === '0' ? tmp_str += '.' : tmp_str += '-';
        i += 2;
        if ((i % 10) === 0) {
            result_str += MORSE_TABLE[tmp_str];
            tmp_str = '';
        }
    }
    return result_str;
}

module.exports = {
    decode
}
