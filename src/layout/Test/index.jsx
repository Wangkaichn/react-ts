import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
    
import TestChange from '../../reduxs/action/test.js'
import styles from './index.module.less'


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
      <Button type="primary">
        <Link to="/help"/>
      </Button>
    </>
  )
}

const MapState = (state) => ({
  test: state.test,
})
const MapDispatch = {
  change: TestChange
}

export default connect(MapState, MapDispatch)(Test)
