import React, {Component}  from 'react'
import styles from './styles.css'
import Configurator from './../Configurator'
import KeyBindContainer from './../KeyBindContainer'

export default class ContentPanel extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }

    render() {
        return (
          <div className={styles.root}>
            <h1> {this.props.header} </h1>
            <div id="contentSelector" className={styles.contentContainer}>

              {this.props.header == "Configuration" &&
              <Configurator notifyParent={this.props.notifyParent}/>}

              {this.props.header == "Key Bindings" &&
              <KeyBindContainer configFile={this.props.configFile}/>}

              {this.props.header == "Profile Selection" &&
              <h2> This will let you save your favourite hated keybind set </h2>}
            </div>
          </div>
        );
    }
}
