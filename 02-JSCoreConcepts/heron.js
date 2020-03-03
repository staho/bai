// boki trójkąta
let a = 3;
let b = 4;
let c = 5;
h = 7;


// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let pole = (a, b, c) => {
    let p = 0.5*(a+b+c);
    return Math.sqrt(p*(p-a)*(p-b)*(p-c))
};

console.log( pole(a, b, c) );