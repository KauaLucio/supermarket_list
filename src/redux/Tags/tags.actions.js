import { ADD_ONE_ON_TAG, REMOVE_ONE_ON_TAG } from './tags.types'

export const addTag = (tag) => {
  return {
    type: ADD_ONE_ON_TAG,
    payload: {
      tag
    }
  }
}

export const removeTag = (tag) => {
  return {
    type: REMOVE_ONE_ON_TAG,
    payload: {
      tag
    }
  }
}