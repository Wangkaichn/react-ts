import React, { useEffect } from 'react'
import styles from './index.module.less'
import { connect } from 'react-redux'
import TestChange from './reduxs/action/test.js'
import { Button } from 'antd'

const Test = (props) => {
  useEffect(() => {
    console.info('begin: ', props.test)
    props.change('a', 'AAA')
  }, [])
  console.info('end: ', props.test)
  return (
    <>
      <span className='test'>1111111111</span>
      <span className={styles.test}>22222222222</span>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>
    </>
  )
}

const MapState = (state) => ({
  test: state.test,
})

//const MapDispatch = null
const MapDispatch = {
  change: TestChange
}

export default connect(MapState, MapDispatch)(Test)
