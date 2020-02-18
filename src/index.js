import React from 'react'
import { render } from 'react-dom'
import Counter from './Counter'

render(<Counter initCount={50} />, document.getElementById('root'))
