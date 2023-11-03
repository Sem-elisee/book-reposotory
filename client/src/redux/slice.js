import {createSlice} from '@reduxjs/toolkit'

const UserReducer = createSlice({
    name : 'infosUser',
    initialState: {
        infosUser : []
    },

    reducers : {
        infos : (state,action) => {
            state.infosUser = action.payload
        }
    }
})

export default UserReducer

export const {infos} = UserReducer.actions
