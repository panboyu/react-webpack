import React, { Component } from 'react'

import Hello from './hello'
import './index.less'

class Home extends Component {
    constructor() { 
        super()
        this.state = {
            data: [1, 2, 3],
            p: { a: 1, b: 2 }
        }
    }
    click = () => { 
        this.setState({
            p: { a: 1 }
        })
    }
    render() {
        return (
            <div className='app'>   
                <Hello p={this.state.p} data={this.state.data}/>
                <button onClick={this.click}>Click</button>
            </div>
        )
    }
}

export default Home