import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Home from './home'
import './index.less'

if (module.hot) { 
    module.hot.accept(() => { 
        ReactDom.render(
            <AppContainer>
                <Home />
            </AppContainer>,
            document.getElementById('root')
        )
    })
}
ReactDom.render(
    <AppContainer>
        <Home />
    </AppContainer>,
    document.getElementById('root')
)