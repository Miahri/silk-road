import {asyncActions as catalogAsyncActions, slice as catalogSlice} from './catalog-reducer'

const catalogActions = {
    ...catalogAsyncActions,
    ...catalogSlice.actions
}

const catalogReducer  = catalogSlice.reducer

export {
    catalogActions,
    catalogReducer
}
