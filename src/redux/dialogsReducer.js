const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Alina'}
    ],

    messages : [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'HI'},
        {id: 3, message: 'What'}
    ],
    newMessageText: 'Hello'
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_MESSAGE: 
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            }
        case CHANGE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
            }
        default: 
            return state
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const onMessageChangeActionCreator = (text) => {
    return {
        type: CHANGE_NEW_MESSAGE_TEXT,
        newMessage: text
    }
}

export default dialogsReducer
