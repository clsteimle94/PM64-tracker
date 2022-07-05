const iconDir = "./assets/pic/PM64icons/";

class SingleItem {
    constructor(data) {
        let id = data[0];
        let group = "";
        if(data.length > 1) group = data[1] + "/";

        this.id = id;
        this.itemPool = 1;
        this.state = 0;
        this.pics =  [require(iconDir+group+id+".png")];
    }
}

class RepeatItem {
    constructor(data) {
        let id = data[0];
        let picName = data[1];
        let group = "";
        if(data.length > 2) group = data[2] + "/";

        this.id = id;
        this.itemPool = 1;
        this.state = 0;
        this.pics =  [require(iconDir+group+picName+".png")];
    }
}


class MultiItem {
    constructor(data, itemPool) {
        let id = data[0];
        let group = "";
        if(data.length > 1) group = data[1] + "/";

        this.id = id;
        this.itemPool = itemPool;
        this.state = 0;
        this.pics = getPics(id, group, itemPool);
    }
}

function getPics(id, group, itemPool) {
    let pics = [];
    for(let i=0; i<itemPool; i++) {
        pics.push(require(iconDir+group+id+(i+1)+".png"));
    }
    return pics;
}

export const trackerContent = {

    upgrades: [
        new MultiItem(["boots", "upgrade"], 3),
        new MultiItem(["hammer", "upgrade"], 3),
        new SingleItem(["ultrastone", "upgrade"]),
    ],


    partners: [
        new SingleItem(["goombario", "partner"]),
        new SingleItem(["kooper", "partner"]),
        new SingleItem(["bombette", "partner"]),
        new SingleItem(["parakarry", "partner"]),
        new SingleItem(["bow", "partner"]),
        new SingleItem(["watt", "partner"]),
        new SingleItem(["sushi", "partner"]),
        new SingleItem(["lakilester", "partner"]),
    ],

    ch1: [
        new SingleItem(["spirit1", "spirit"]),
        new RepeatItem(["fortkey1", "fortkey"]),
        new RepeatItem(["fortkey2", "fortkey"]),
        new RepeatItem(["fortkey3", "fortkey"]),
        new RepeatItem(["fortkey4", "fortkey"]),
    ],

    ch2: [
        new SingleItem(["spirit2", "spirit"]),
        new SingleItem(["pulse"]),
        new SingleItem(["triangle"]),
        new SingleItem(["diamond"]),
        new SingleItem(["moon"]),
        new RepeatItem(["ruinskey1", "ruinskey"]),
        new RepeatItem(["ruinskey2", "ruinskey"]),
        new RepeatItem(["ruinskey3", "ruinskey"]),
        new RepeatItem(["ruinskey4", "ruinskey"]),
    ],

    ch3: [
        new SingleItem(["spirit3", "spirit"]),
        new SingleItem(["booportrait"]),
        new RepeatItem(["castlekey1", "castlekey"]),
        new RepeatItem(["castlekey2", "castlekey"]),
        new RepeatItem(["castlekey3", "castlekey"]),
    ],


    ch4: [
        new SingleItem(["spirit4", "spirit"]),
        new SingleItem(["train"]),
        new SingleItem(["cake"]),
    ],


    ch5: [
        new SingleItem(["spirit5", "spirit"]),
        new SingleItem(["jaderaven"]),
    ],


    ch6: [
        new SingleItem(["spirit6", "spirit"]),
        new SingleItem(["seed1"]),
        new SingleItem(["seed2"]),
        new SingleItem(["seed3"]),
        new SingleItem(["seed4"]),
        new SingleItem(["soil"]),
        new SingleItem(["bean"]),
        new SingleItem(["pail"]),
    ],

    ch7: [
        new SingleItem(["spirit7", "spirit"]),
        new RepeatItem(["warehousekey", "oddkey"]),
        new SingleItem(["scarf"]),
        new SingleItem(["bucket"]),
        new SingleItem(["starstone"]),
        new SingleItem(["redkey"]),
        new SingleItem(["palacekey"]),
    ],

    misc: [
        new SingleItem(["dolly"]),
        new SingleItem(["koopershell"]),
        new SingleItem(["artifact"]),
        new SingleItem(["weight"]),
        new SingleItem(["record"]),
        new RepeatItem(["storekey", "oddkey"]),
        new SingleItem(["dictionary"]),
        new SingleItem(["calculator"]),
        new SingleItem(["mailbag"]),
        new SingleItem(["pan"]),
        new SingleItem(["lyrics"]),
        new SingleItem(["melody"]),
        new SingleItem(["vase"]),
        new RepeatItem(["oddkey", "oddkey"]),
        new RepeatItem(["blueberry1", "blueberry"]),
        new RepeatItem(["blueberry2", "blueberry"]),
        new SingleItem(["yellowberry"]),
        new SingleItem(["redberry"]),
        new SingleItem(["bubbleberry"]),
        new SingleItem(["crystalberry"]),
        new SingleItem(["watergem"]),
        new SingleItem(["bluekey"]),
    ],

    counters: [
        {
            id: "ripCount",
            state: 0,
            max: 6,
        },
    ],
}

