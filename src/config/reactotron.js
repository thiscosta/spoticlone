import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

let tron = null

if(process.env.NODE_ENV === 'development'){
    tron = Reactotron.configure()
        .use(reactotronRedux())
        .use(sagaPlugin())
        .connect()

    tron.clear()

    console.tron = tron


}

export default tron