import App from './App.svelte'

import moment from 'moment'
import 'moment/dist/locale/ru';
import momentDurationFormatSetup from 'moment-duration-format'
momentDurationFormatSetup(moment)

window.wait = (time) => new Promise((resolve) => setTimeout(resolve, time))

moment.locale('ru')

const app = new App({
	target: document.body
})

export default app
