import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'

import Yframe from '../src/index.js';

class Demo extends Component{
  render () {
    return (
      <Yframe>
      	  <div>check this element, it's contained in a iframe</div>
      </Yframe>
    )
  }
}

module.exports = Demo;