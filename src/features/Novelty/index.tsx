import {asyncActions as noveltiesAsyncActions, slice as noveltiesSlice} from './novelties-reducer'

const noveltiesActions = {
    ...noveltiesAsyncActions,
    ...noveltiesSlice.actions
}

const noveltiesReducer  = noveltiesSlice.reducer

export {
    noveltiesActions,
    noveltiesReducer
}
