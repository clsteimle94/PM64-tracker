export let trackerMap = new Map();


export function updateItem(element) {
    trackerMap.set(element.id, element.state);
}

export function updateLogic() {
    ch1Check();
    ch2Check();
    ch3Check();
    ch4Check();
    ch5Check();
    ch6Check();
    ch7Check();
}


export function ch1Check() {
    const hardReqs = ["fortkey1", "fortkey2", "fortkey3", "fortkey4", "kooper"];
    updateElem("ch1Check", logicCheck(hardReqs));
}

export function ch2Check() {
    const hardReqs = ["pulse", "triangle", "diamond", "moon", "ruinskey1", "ruinskey2", "ruinskey3"];
    const optionReqs1 = ["bombette", "parakarry"];
    
    let flag = true;
    flag = flag && logicCheck(hardReqs);
    flag = flag && ( logicCheck(optionReqs1) || (trackerMap.get("hammer") > 1) );

    updateElem("ch2Check", flag);
}

export function ch3Check() {
    const hardReqs = ["booportrait", "castlekey1", "castlekey2", "castlekey3", "parakarry"];

    let flag = true;
    flag = flag && logicCheck(hardReqs);

    if(trackerMap.get("boots") < 2) flag = false;

    updateElem("ch3Check", flag);
}

export function ch4Check() {
    const hardReqs = ["train", "cake", "bow", "bombette", "watt"];
    updateElem("ch4Check", logicCheck(hardReqs));
}

export function ch5Check() {
    const hardReqs = ["jaderaven", "sushi"];
    const optionReqs1 = ["parakarry"];
    const optionReqs2 = ["lakilester"];
    
    let flag = true;
    flag = flag && logicCheck(hardReqs);
    flag = flag && ( logicCheck(optionReqs1) || logicCheck(optionReqs2) );

    updateElem("ch5Check", flag);
}

export function ch6Check() {
    const hardReqs = ["seed1", "seed2", "seed3", "seed4", "soil", "bean", "pail", "lakilester"];

    let flag = true;
    flag = flag && logicCheck(hardReqs);

    if(trackerMap.get("boots") < 2) flag = false;

    updateElem("ch6Check", flag);
}

export function ch7Check() {
    const hardReqs = ["warehousekey", "scarf", "bucket", "starstone", "redkey", "palacekey", "kooper", "bombette"];
    const optionReqs1 = ["oddkey"];
    const optionReqs2 = ["sushi"];
    
    let flag = true;
    flag = flag && logicCheck(hardReqs);
    flag = flag && ( logicCheck(optionReqs1) || logicCheck(optionReqs2) );

    if(trackerMap.get("boots") < 2) flag = false;

    updateElem("ch7Check", flag);
}


export function logicCheck(requirements) {
    let flag = true;

    for (let i = 0; i < requirements.length; i++) {
        if ( !trackerMap.get(requirements[i]) ) flag = false;  
    }

    return flag;
}


function updateElem(elemId, flag) {
    let elem = document.getElementById(elemId);

    if (flag) {
        elem.innerHTML = "Yes";
        elem.style.color = "darkgreen";
    }
    else {
        elem.innerHTML = "No";
        elem.style.color = "darkred";
    }
}