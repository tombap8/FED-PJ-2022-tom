function nav(){

    function printHtml(ele, hcode) {
        $(ele).html(hcode);
    }
    
    async function myAFn() {
        const myProm = new Promise((prFn) => {
            let ajax = new XMLHttpRequest();
            ajax.open("GET", "./js/json/gnb.json");
            ajax.responseType = "json";
            ajax.onload = function () {
                console.log(ajax.status);
                if (ajax.status == 200) {
                    prFn(ajax.response);
                } else {
                    console.log(ajax.statusText);
                }
            };
            ajax.send();
        });
    
        const makeHtml = (obj) => {
            let hcode = `
                `;
            for (let x in obj) {
                hcode += `
                    <ul class="category">
                        <h2><a href="#">${x}</a></h2>
                        <div>
                            <ul class="smenu">
                    `;
                for (let y in obj[x]) {
                    hcode += `
                            <ul>
                                <h3>${y}</h3>
                        `;
                    for (let z of obj[x][y]) {
                        hcode += `
                                <li>
                                    <a>${z}</a>
                                </li>
                            `;
                    }
                    hcode += `</ul>`;
                }
                hcode += `
                            </ul>
                        </div>
                    </ul>
                    `;
            }
            return hcode;
        };
        let temp = await myProm;
        printHtml(".gnb", makeHtml(temp));
    }
    myAFn();
}

export default nav;