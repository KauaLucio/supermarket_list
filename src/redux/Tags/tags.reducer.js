import { ADD_ONE_ON_TAG, REMOVE_ONE_ON_TAG } from './tags.types.js'

const INITIAL_STATE = {
  "comida": 0,
  "higiene": 0,
  "saúde": 0,
  "saudável": 0,
  "limpeza": 0,
  "condimentos": 0,
  "guloseimas": 0,
  "grãos": 0,
  "carne": 0,
  "liquidos": 0,
  "outros": 0,
}

//These case's count as state mutation????

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ONE_ON_TAG:
      for(let i = 0; i < action.payload.tag.length; i++) {
        state[action.payload.tag[i]]++
      }
      return state

    case REMOVE_ONE_ON_TAG:
      for(let i = 0; i < action.payload.tag.length; i++) {
        state[action.payload.tag[i]]--
      }
      return state
    default:
      return state
  }
}

export default reducer