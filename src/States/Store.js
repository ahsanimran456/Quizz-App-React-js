import { configureStore } from '@reduxjs/toolkit'
import {mangereducer} from './Reducers/index'

export default configureStore({
    reducer:{
        number : mangereducer
    }
})
