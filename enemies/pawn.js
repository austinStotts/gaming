export default class Pawn {
    constructor(body, mesh) {
        this.class = "pawn";
        this.hp = 50;
        this.damage = 25;
        this.body = body;
        this.mesh = mesh;
        this.drops = [{small_ammo: 10}]
    }

    update_hp (n) {
        this.hp = this.hp - n;
        if(this.hp > 0) { return false }
        else { return true }
    }
}