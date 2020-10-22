import React, { useReducer, createContext, useContext } from 'react'

const AppContext = createContext()

export const useAppState = () => useContext(AppContext)

const appStateReducer = (state, action) => {
    switch(action.type) {
        case 'close-modal':
            return {
                ...state,
                showModal: false
            }

        case 'open-modal':
            return {
                ...state,
                showModal: true,
                modalAction: action.payload
            }
        case 'add-note':
            return {
                ...state,
                notesAmount: state.notesAmount + 1
            }

        case 'delete-note':
            return {
                ...state,
                notesAmount: state.notesAmount - 1
            }
        case 'set-amount':
            return {
                ...state,
                notesAmount: action.payload
            }
        default:
            return state
    }
}

const initialState = {
    showModal: false,
    modalAction: '',
    notesAmount: 0

}

export const AppStateProvider = ({ children }) => {
    let billie = useReducer(appStateReducer, initialState)
    return (
        <AppContext.Provider value={billie}>
            {children}
        </AppContext.Provider>
    )
}


