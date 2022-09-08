import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentId: {},
}

export const CurrentIdSlice = createSlice({
  name: 'currentId',
  initialState,
  reducers: {
    setCurrentId: (state, action) => {
      state.currentId = action.payload
    },
    resetCurrentId: (state) => initialState,
  },
})

export const { setCurrentId, resetCurrentId } = CurrentIdSlice.actions
export default CurrentIdSlice.reducer
