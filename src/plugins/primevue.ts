import { App } from 'vue'

import PrimeVue from 'primevue/config'
import Tooltip from 'primevue/tooltip'

import 'primevue/resources/themes/md-dark-indigo/theme.css'
import 'primeicons/primeicons.css'
import '../assets/css/theme.css'

const usePrimeVue = (app: App<Element>) => {
	app.use(PrimeVue)

	app.directive('tooltip', Tooltip)
}
export { usePrimeVue }
