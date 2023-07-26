let Human = function (type) {
    this.type = type || "human";
};

Human.isHuman = function (human) {
    return human instanceof Human;
};

Human.prototype.breathe = function () {
    console.log("하하하하휴휴휴");
};

var Zero = function (type, firstName, lastName) {
    Human.apply(this, arguments);
    this.firstName = firstName;
    this.lastName = lastName;
};

Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constructor = Zero;
Zero.prototype.sayName = function () {
    console.log(this.firstName + " " + this.lastName);
};

var oldZero = new Zero("human", "Zero", "Cho");
Human.isHuman(oldZero);

// let my = new Human('인간');
// console.log(my.type);
// console.log(my.breathe());
// console.log(Human);
// console.log(Human.isHuman);

let condi;
let promise;

const hay = () => {
    promise = new Promise((ok, omg) => {
        if (condi) {
            ok("성공");
        } else {
            omg("실패");
        }
    });

}

// 상태값 설정
condi = true;
hay();

const goPro = ()=>{
    promise
        // 첫번째 then
        .then((msg) =>{ 
            console.log(msg);
            // 두번째 then으로 전달값 전달!
            return msg;
        })
        // 두번째 then
        .then((msg)=>{
            console.log('두번째then:',msg);
            // 상태값 변경
            condi = false;
            hay();
    
            promise.then(msg=>console.log(msg))
            .catch(err=>console.log(err));
        })
        // 첫번째 then실행불가시 두번째then 안가고 여기 catch옴!
        .catch((err) => console.log(err))
        .finally(() => console.log("끝났소~!!!"));

};

// goPro();

const formData = new FormData();
formData.append('name','손석구');
formData.append('item','오렌지');
formData.append('item','멜론');
console.log('item이 있나? ',formData.has('item'));


const temptxt = "허허허 \
여기보시오 선생 여길요 \
이걸 이제 아셨소? \ ";

console.log(temptxt);

// 중첩 템플릿
const people = [
    {name:'김석구',age:27},
    {name:'공유',age:45},
    {name:'김수현',age:31},
];

const markup = `
    <ul>
    ${people.map(person=>
        `<li>${person.name} : 30이상?${person.age>=30?'네':'아니오'}</li>`).join('\n')}
    </ul>
`;
console.log(markup);