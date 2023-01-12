import { configureStore } from '@reduxjs/toolkit'
import {mangereducer,namereducer} from './Reducers/index'

export default configureStore({
    reducer:{
        number : mangereducer,
        Setname : namereducer
    }
})
