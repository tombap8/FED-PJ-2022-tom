// JS4-6.배열의 복사

// 1.일반배열의 얕은복사
console.log('1.일반배열의 얕은복사');
let aa = [11, 22, 33];
console.log("원본aa", aa);

let bb = aa;
// 단순할당은 얕은복사임!

bb[0] = 777;

console.log("aa:", aa, "\nbb:", bb);

// 2.일반배열의 깊은복사
console.log('\n2.일반배열의 깊은복사');
let cc = [55, 66, 77];
console.log("원본cc", cc);

let dd = [...cc];

dd[0] = 888;

console.log("cc:", cc, "\ndd:", dd);

// 3.객체 배열의 얕은복사
console.log('\n3.객체 배열의 얕은복사');
let ee = [{ 김: 55 }, { 이: 66 }, { 박: 77 }];
console.log("원본ee", ee);
let ff = ee;

ff[0]["김"] = 999;

console.log("ee:", ee, "\nff:", ff);

// 4.객체 배열의 깊은복사
console.log('\n4.객체 배열의 깊은복사');
let gg = [{ 송: 99 }, { 정: 87 }, { 최: 54 }];
console.log("원본gg", gg);
let hh = ??

hh[0]["송"] = 888;

console.log("gg:", gg, "\nhh:", hh);


let kk = 10;
let tt = kk;

console.log("kk:", kk, "\ntt:", tt);

tt = 200;//

console.log("kk:", kk, "\ntt:", tt);

