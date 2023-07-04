import { requireComponents }    from '@/components'
import {createApp} from 'vue'

const app = createApp('App.vue')

requireComponents(app)

app.mount('#app')
