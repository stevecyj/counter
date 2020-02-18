import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
    static defaultProps = {
        initCount: 0
    }

    static propTypes = {
        initCount: PropTypes.number
    }
    constructor(props) {
        super(props)
        this.state = {
            count: props.initCount,
            step: 1
        }
    }
    // state = {
    //     count: 1,
    //     step: 1
    // }

    addCount = () => {
        const { count, step } = this.state
        this.setState({
            count: count + step,
            step: step + 1
        })
    }

    render() {
        const { count, step } = this.state
        return (
            <div>
                <h1>{count}</h1>
                <button onClick={this.addCount}>+{step}</button>
            </div>
        )
    }
}

export default Counter
