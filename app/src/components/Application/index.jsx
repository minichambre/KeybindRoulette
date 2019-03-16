import React, {Component}  from 'react'
import styles from './styles.css'
import ContentPanel from './../ContentPanel'

export default class Application extends Component {
    constructor(props){
      super(props);
      this.state ={
        context: "Configuration"
      }
      this.updateContext = this.updateContext.bind(this);
    }

    updateContext(context){
      this.setState({context:context});
    }

    render() {
        return (
          <div className={styles.root}>
            <div id="title" className={styles.titleBar}>
              Keybind Roulettle - League of Legends
            </div>

            <div id="contentpane"className={styles.contentPane}>
              <div id="navbar"className={styles.navBar} >
                <div className={styles.navItem} onClick={() =>this.updateContext("Configuration")}>
                  <h1> Configuration </h1>
                </div>
                <div className={styles.navItem} onClick={() =>this.updateContext("Key Bindings")}>
                  <h1> Key Bindings </h1>
                </div>
                <div className={styles.navItem} onClick={() =>this.updateContext("Profile Selection")}>
                  <h1> Profile Selection </h1>
                </div>
              </div>
              <div id="content"className={styles.content}>
                <ContentPanel header={this.state.context}/>
              </div>
            </div>
          </div>
        );
    }
}
