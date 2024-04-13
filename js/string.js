// transform the String......

const str = "AAAAAABBBBBAAAZZZRZZZ"

/* 
    res= "A9B5Z6R1"
*/

function transStr(str) {

    const obj = str.split("").reduce((acc, item) => ({...acc, [item]: (acc[item] || 0) + 1}), {})

    return Object.keys(obj).map((key) => `${key + obj[key]}`).join("") 
    
}

console.log(transStr(str) );

