import React, {Component} from 'react'
import {render} from 'react-dom'
import Header from './components/Header'
import FileLoader from './components/FileLoader'
import KeyBindContainer from './components/KeyBindContainer'
import Application from './components/Application'
export default class App extends Component {
    render() {


        return (
          <Application/>
        )
    }
}
