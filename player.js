import Pea_Shooter from "./weapons/pea_shooter";
import Shotgun from "./weapons/shotgun";

export default class Player {
    constructor(id) {
        this.id = id;
        this.hp = 75;
        this.armor = 0;
        this.inventory = {};
        this.weapon = new Shotgun(18);
    }

    change_weapon (weapon) {
        this.weapon = weapon;
    }
} 