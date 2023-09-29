export default class Player {
    constructor(ammo=0, magazineSize=30) {
        this.hp = 100;
        this.ammo = ammo;
        this.magazineSize = magazineSize;
        this.inMagazine = magazineSize;
        this.inReserve = ammo - magazineSize;
    }

    reload () {
        // console.log("RRR RELOADING!!!")
        if(this.inReserve >= this.magazineSize - this.inMagazine) { this.inReserve += this.inMagazine; this.inMagazine = this.magazineSize; this.inReserve -= this.magazineSize; }
        else { this.inReserve += this.inMagazine; this.inMagazine = this.inReserve; this.inReserve = 0; }
    }

    removeAmmo () {
        this.inMagazine -= 1;
    }
} 