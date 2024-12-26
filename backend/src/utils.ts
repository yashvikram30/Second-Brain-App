
export function random(n: number):string{
    const s = "abcdefghijklmnopqrstuvwxyz1234567890"
    const len = s.length;

    let randomString = ""
    for(let i=0; i<n; i++){
        randomString+=s[Math.floor(Math.random()*len)]
    }

    return randomString;
}
