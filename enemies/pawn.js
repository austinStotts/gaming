import small_ammo from "../items/small_ammo";

export default class Pawn {
    constructor(body, mesh) {
        this.class = "pawn";
        this.hp = 50;
        this.damage = 25;
        this.body = body;
        this.mesh = mesh;
        this.drop_table;

        this.buildDropTable()
    }

    buildDropTable () {
        this.drop_table = new Array(90).fill(undefined);
        for(let i = 0; i < 10; i++) { this.drop_table.push(new small_ammo(15)) }
    }

    update_hp (n) {
        this.hp = this.hp - n;
        if(this.hp > 0) { return false }
        else { return true }
    }
}