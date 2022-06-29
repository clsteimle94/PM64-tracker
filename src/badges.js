const iconDir = "./assets/pic/PM64icons/";

class Badge {
    constructor(id) {
        this.id = id;
        this.itemPool = 1;
        this.state = 0;
        this.pics =  [require(iconDir+id+".png")];
    }
}

export const badgeList = [
    new Badge("laststand"),
    new Badge("defplus"),
    new Badge("damagedodge1"),
    new Badge("damagedodge2"),
    new Badge("pupddown"),
    new Badge("pdowndup"),
    new Badge("fireshield"),
];
