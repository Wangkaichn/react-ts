import { TEST_CHANGE_TARGET } from './constant.js'

const defaultTest = {
  a: 'A',
  b: 'B'
}

export default (state = defaultTest, { type, target, newValue }) => {
  switch (type) {
    case TEST_CHANGE_TARGET: {
      return {
        ...state,
        [target]: newValue
      }
    }
    default:
      return state
  }
}