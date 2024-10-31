import { writable } from 'svelte/store'

window.hudStore = {}

export const isPlayer = writable(true)
window.hudStore.isPlayer = (value) => isPlayer.set(value)

export const isHelp = writable(true)
window.hudStore.isHelp = (value) => isHelp.set(value)

export const isWaterMark = writable(true)
window.hudStore.isWaterMark = (value) => isWaterMark.set(value)

export const isInputToggled = writable(false)
window.hudStore.isInputToggled = (value) => {
	isInputToggled.set(value)

	if (mp) mp.invoke('setTypingInChatState', value)
}

export const isPhone = writable(false)
window.hudStore.isPhone = (value) => isPhone.set(value)

export const inVehicle = writable(false)
window.hudStore.inVehicle = (value) => inVehicle.set(value)

// export const activitiesWar = writable({ 0: {
// 	Name: "BROKE захватывает Лесопилка",
// 	Time: "3:00",
// 	IsDeff: false,
// },
// 1: {
// 	Name: "BROKE захватывает Лесопилка",
// 	Time: "3:00",
// 	IsDeff: true,
// }});

export const activitiesWar = writable({});

window.activities = {};
window.hudStore.addActivityFamily = function(id, name, isDeff) {
	activities[id] = {
		Name: name, 
		IsDeff: isDeff,
		Time: "4:00",
	}

	console.log(JSON.stringify(activities));

	activitiesWar.set(activities);
};

window.hudStore.deleteActivity = function(id) {
	delete activities[id];
	console.log(JSON.stringify(activities));

	activitiesWar.set(activities);
};

window.hudStore.updateActivityTime = function(id, time) {
	activities[id].Time = time;
	console.log(`update: ` + JSON.stringify(activities));

	activitiesWar.set(activities);
};