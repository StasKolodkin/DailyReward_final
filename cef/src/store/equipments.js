import { charFractionID } from "./chars";
import { writable } from 'svelte/store'

let currentFraction = 0;
charFractionID.subscribe((value) => {
    currentFraction = value;
});

window.equipments = {};

var equipmentsData = {
    armors: [],
    weaponSkins: {},

    armorStorage: {},
    weaponStorage: {},
};

export const armors = writable([]);
armors.subscribe((value) => {
    equipmentsData.armors = value;
});

export const weaponSkins = writable({});
weaponSkins.subscribe((value) => {
    equipmentsData.weaponSkins = value;
});

export const armorStorage = writable({});
armorStorage.subscribe((value) => {
    equipmentsData.armorStorage = value;
});

export const weaponStorage = writable({});
weaponStorage.subscribe((value) => {
    equipmentsData.weaponStorage = value;
});

window.equipments.setData = function(ar, weapons) {
    var arList = [];
    for (const [key, value] of Object.entries(ar)) {
        value.Id = key;
        arList.push(value)
    }

    armors.set(arList);

    var skins = [];
    for (const [key, value] of Object.entries(weapons)) {
        value.Id = key;
        skins.push(value)
    }

    weaponSkins.set(skins);
};

window.equipments.setStorage = function(type, data) {
    if (type === 'armors') {
        armorStorage.set(data);
    }

    if (type === 'weapons') {
        weaponStorage.set(data);
    }
};

window.equipments.getActiveArmor = function(isHeavy) {
    var armorData = equipmentsData.armors.find(x => x.IsHeavy == isHeavy 
        && (x.FractionId == 0 || x.FractionId == currentFraction) 
        && equipmentsData.armorStorage.hasOwnProperty(x.Id)
        && equipmentsData.armorStorage[x.Id] == true);

    return armorData;
};

window.equipments.getActiveWeapon = function(itemId) {
    var armorData = equipmentsData.weaponSkins.find(x =>
        x.WeaponItem == itemId 
        && equipmentsData.weaponStorage.hasOwnProperty(x.Id)
        && equipmentsData.weaponStorage[x.Id] == true);

    return armorData;
};

function test() {
    let armorList = {
        "gos.policeiotv.armor": { Name: "Полицейский бронежилет IOTV", FractionId: 7, FractionName: "LSPD", IsHeavy: true },
        "gos.policefras.armor": { Name: "Полицейский бронежилет FRAS", FractionId: 7, FractionName: "LSPD", IsHeavy: true },

        "gos.armyrpc.armor": { Name: "Армейский бронежилет RPC", FractionId: 14, FractionName: "ARMY", IsHeavy: true },
        "gos.armymtac.armor": { Name: "Армейский бронежилет М-Тас", FractionId: 14, FractionName: "ARMY", IsHeavy: true },

        "white.louis.armor": { Name: "Бронежилет Louis Vuitton (White)", FractionId: 0, FractionName: "", IsHeavy: true },
        "brown.gucci.armor": { Name: "Бронежилет GUCCI (Brown)", FractionId: 0, FractionName: "", IsHeavy: false },
    };

    let weaponSkinsList = {
        "revolvermk2.dragon.bronze": { WeaponItem: 114, Name: "RevolverMk2 Dragon Bronze" },
        "heavyshotgun.dragon.gold": { WeaponItem: 146, Name: "HeavyShotgun Dragon Gold" },
    };

    let storageArmor = { "gos.policeiotv.armor": true, "gos.policefras.armor": false, "gos.armyrpc.armor": true, "gos.armymtac.armor": true, "white.louis.armor": false, "brown.gucci.armor": !true };
    let storageWeapons = { "revolvermk2.dragon.bronze": true, "heavyshotgun.dragon.gold": false };

    window.equipments.setData(armorList, weaponSkinsList);
    window.equipments.setStorage("armors", storageArmor);
    window.equipments.setStorage("weapons", storageWeapons);
}

if (!window.mp || !window.mp.events) 
    test();