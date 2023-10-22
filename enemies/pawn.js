import small_ammo from "../items/small_ammo";
import shotgun_ammo from "../items/shotgun_ammo";

export default class Pawn {
    constructor(body, mesh) {
        this.class = "pawn";
        this.hp = 30;
        this.damage = 25;
        this.body = body;
        this.mesh = mesh;
        this.drop_table;

        this.buildDropTable()
    }

    buildDropTable () {
        this.drop_table = new Array(60).fill(undefined);
        for(let i = 0; i < 20; i++) { this.drop_table.push(new small_ammo(30)) }
        for(let i = 0; i < 20; i++) { this.drop_table.unshift(new shotgun_ammo(16)) }
    }

    update_hp (n) {
        this.hp = this.hp - n;
        if(this.hp > 0) { return false }
        else { return true }
    }
}