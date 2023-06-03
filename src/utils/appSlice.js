import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isMenuOpen: true,
    suggestions: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
    closeMenu: (state) => {
      state.isMenuOpen = false
    },
    showSuggestions: (state) => {
      state.suggestions = true
    },
    hideSuggestions: (state) => {
      state.suggestions = false
    },
  },
})

export const { toggleMenu, closeMenu,showSuggestions,hideSuggestions } = appSlice.actions
export default appSlice.reducer
