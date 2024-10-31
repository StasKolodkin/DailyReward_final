let groupName = ''
import { onDestroy } from 'svelte'

var client_secret_code = "";
const clientEvent = "ee8f3f8479b79"

if (window.mp !== undefined && window.mp.events !== undefined) {
    window.mp.events.add('CustomEvent:setCode', (code) => {
        if (client_secret_code != "") return;
        client_secret_code = code;
    }); 
}

export let isCodeSetted = () => {
	const isMultiplayer = window.mp && window.mp.events

	return !isMultiplayer || client_secret_code != "";
};

export let setGroup = (_groupName) => {
	groupName = _groupName

	onDestroy(() => {
		setTimeout(() => {
			groupName = ''
		}, 0)
	})
}

export let executeClientToGroup = (eventName, ...args) => {
	//console.log(`[debug] Execute client ${eventName}: ${args}`);
	if (window.mp !== undefined) window.mp.trigger(clientEvent, 'client' + groupName + eventName, client_secret_code, ...args)
}

import rpc from 'rage-rpc'
export let executeClientAsyncToGroup = async (eventName, ...args) => {
	if (window.mp !== undefined) return await rpc.callClient('rpc' + groupName + eventName, ...args)

	return null
}

/////

export let executeClient = (eventName, ...args) => {
	//console.log(`[debug] Execute client ${eventName}: ${args}`);
	if (window.mp !== undefined) window.mp.trigger(clientEvent, eventName, client_secret_code, ...args)
}

export let invokeMethod = (invokeName, ...args) => {
	//console.log(`[debug] Invoke method ${invokeName}: ${args}`);
	if (window.mp !== undefined) window.mp.invoke(invokeName, ...args)
}

export let executeClientAsync = async (eventName, ...args) => {
	if (window.mp !== undefined) return await rpc.callClient('rpc.' + eventName, ...args)

	return null
}
