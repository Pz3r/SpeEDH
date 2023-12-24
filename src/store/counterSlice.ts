import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    activePlayerNumber: 0,
    activePlayerTimer: 0,
    activePlayerColor: 'white',
    timerPaused: false
  },
  reducers: {
    setActivePlayerTimer: (state, action) => {
      state.activePlayerTimer = action.payload;
    },
    setActivePlayer: (state, action) => {
      state.activePlayerNumber = action.payload.number;
      state.activePlayerColor = action.payload.color;
      state.timerPaused = action.payload.paused;
    },
    setActivePlayerNumber: (state, action) => {
      state.activePlayerNumber = action.payload;
    },
    setTimerPaused: (state, action) => {
      state.timerPaused = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setActivePlayerTimer, setActivePlayer, setActivePlayerNumber, setTimerPaused } = counterSlice.actions

export default counterSlice.reducer