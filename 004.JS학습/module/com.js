const domFn = {
    qs:x=>document.querySelector(x),
    qsa:x=>{document.querySelectorAll(x)},
    addEvt:(ele, evt, fn)=>ele.addEventListener(evt, fn),
}

export default domFn;