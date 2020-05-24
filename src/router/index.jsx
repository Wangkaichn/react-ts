import { Switch, Route } from 'react-router-dom'
import React from 'react'

import Help from '../layout/Help/index.jsx'
import Base from '../layout/Base/index.jsx'
import Test from '../layout/Test/index.jsx'

const router = () => {
  return (
    <Switch>
      <Route path="/help" component={Help} />
      <Route path="/test" component={Test} />
      <Route path="/" component={Base} />
    </Switch>
  )
}

export default router