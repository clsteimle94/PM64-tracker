const iconDir = "./assets/pic/PM64icons/";

class SingleItem {
    constructor(id) {
        this.id = id;
        this.itemPool = 1;
        this.state = 0;
        this.pics =  [require(iconDir+id+".png")];
    }
}

// class ItemCounter {
//     constructor(id, max) {
//       this.id = id;
//       this.itemPool = 1;
//       this.state = 0;
//       this.pic =  require(iconDir+id+".png");
//       this.max = max;
//     }
// }

class MultiItem {
    constructor(id, itemPool) {
        this.id = id;
        this.itemPool = itemPool;
        this.state = 0;
        this.pics = getPics(id, itemPool);
    }
}

function getPics(id, itemPool) {
    let pics = [];
    for(let i=0; i<itemPool; i++) {
        pics.push(require(iconDir+id+(i+1)+".png"));
    }
    return pics;
}


export const trackerContent = {

    upgrades: [
        new MultiItem("boots", 3),
        new MultiItem("hammer", 3),
        new SingleItem("ultrastone"),
    ],


    partners: [
        new SingleItem("goombario"),
        new SingleItem("kooper"),
        new SingleItem("bombette"),
        new SingleItem("parakarry"),
        new SingleItem("bow"),
        new SingleItem("watt"),
        new SingleItem("sushi"),
        new SingleItem("lakilester"),
    ],

    ch1: [
        new SingleItem("spirit1"),
        new SingleItem("fortkey1"),
        new SingleItem("fortkey2"),
        new SingleItem("fortkey3"),
        new SingleItem("fortkey4"),
    ],

    ch2: [
        new SingleItem("spirit2"),
        new SingleItem("pulse"),
        new SingleItem("triangle"),
        new SingleItem("diamond"),
        new SingleItem("moon"),
        new SingleItem("ruinskey1"),
        new SingleItem("ruinskey2"),
        new SingleItem("ruinskey3"),
        new SingleItem("ruinskey4"),
    ],

    ch3: [
        new SingleItem("spirit3"),
        new SingleItem("booportrait"),
        new SingleItem("castlekey1"),
        new SingleItem("castlekey2"),
        new SingleItem("castlekey3"),
    ],


    ch4: [
        new SingleItem("spirit4"),
        new SingleItem("train"),
        new SingleItem("cake"),
    ],


    ch5: [
        new SingleItem("spirit5"),
        new SingleItem("jaderaven"),
    ],


    ch6: [
        new SingleItem("spirit6"),
        new SingleItem("seed1"),
        new SingleItem("seed2"),
        new SingleItem("seed3"),
        new SingleItem("seed4"),
        new SingleItem("soil"),
        new SingleItem("bean"),
        new SingleItem("pail"),
    ],

    ch7: [
        new SingleItem("spirit7"),
        new SingleItem("warehousekey"),
        new SingleItem("scarf"),
        new SingleItem("bucket"),
        new SingleItem("starstone"),
        new SingleItem("redkey"),
        new SingleItem("palacekey"),
    ],

    misc: [
        new SingleItem("dolly"),
        new SingleItem("koopershell"),
        new SingleItem("artifact"),
        new SingleItem("weight"),
        new SingleItem("record"),
        new SingleItem("storekey"),
        new SingleItem("dictionary"),
        new SingleItem("calculator"),
        new SingleItem("mailbag"),
        new SingleItem("pan"),
        new SingleItem("lyrics"),
        new SingleItem("melody"),
        new SingleItem("vase"),
        new SingleItem("oddkey"),
        new SingleItem("blueberry"),
        new SingleItem("blueberry2"),
        new SingleItem("yellowberry"),
        new SingleItem("redberry"),
        new SingleItem("bubbleberry"),
        new SingleItem("crystalberry"),
        new SingleItem("watergem"),
        new SingleItem("bluekey"),
    ],

    counters: [
        {
            id: "counter1",
            state: 0,
            max: 10,
        },
    ],
}

