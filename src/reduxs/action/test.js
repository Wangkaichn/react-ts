import { TEST_CHANGE_TARGET } from '../reducers/constant.js'

const TestChange = (target, newValue) => (dispatch) => {
  dispatch({
    type: TEST_CHANGE_TARGET,
    target,
    newValue
  })
}

export default TestChange