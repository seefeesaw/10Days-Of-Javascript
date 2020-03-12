'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let i = 0;
    for (i = 0; i <s.length; i++)
    {
        if (s[i] == 'a')
        {
            console.log(s[i]);
        }
        else if (s[i] == 'e')
        {
            console.log(s[i]);
        }
        else if (s[i] == 'i')
        {
            console.log(s[i]);
        }
        else if (s[i] == 'o')
        {
            console.log(s[i]);
        }
        else if (s[i] == 'u')
        {
            console.log(s[i]);
        }
    }
    for (i = 0; i <s.length; i++)
    {
        if (s[i] != 'a' && s[i] != 'e' && s[i] != 'i' && s[i] != 'o' && s[i] != 'u')
        {
            console.log(s[i]);
        }
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
