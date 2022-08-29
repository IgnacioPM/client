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
  },
})

export const { setCurrentId } = CurrentIdSlice.actions
export default CurrentIdSlice.reducer
