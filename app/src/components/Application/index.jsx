import React, {Component}  from 'react'
import styles from './styles.css'
import ContentPanel from './../ContentPanel'
import closeImage from "./../../Assets/close.svg";
import minImage from "./../../Assets/chevron-down.svg";
import maxImage from "./../../Assets/stop.svg";

export default class Application extends Component {
    constructor(props){
      super(props);
      this.state ={
        context: "Configuration",
        configFile: null
      }
      this.updateContext = this.updateContext.bind(this);
      this.notifyParent = this.notifyParent.bind(this);
      this.minimise = this.minimise.bind(this);
      this.closeWindow = this.closeWindow.bind(this);
    }

    updateContext(context){
      this.setState({context:context});
    }

    notifyParent(key, val){
      this.setState({configFile:val});
    }

    minimise(){
      const ipc = require('electron').ipcRenderer;
      ipc.send('minimise-main-window');
    }

    closeWindow(){
      const ipc = require('electron').ipcRenderer;
      ipc.send('close-main-window');
    }

    render() {
        return (
          <div className={styles.root}>
            <div id="titleBar" className={styles.titleBar}>
              <span className={styles.titleText}>
                Keybind Roulettle - League of Legends
              </span>
              <div id="windowControls" className={styles.windowControls}>
                <img src={minImage} className={styles.windowControl} onClick={this.minimise}/>
                <img src={maxImage} className={styles.windowControl} onClick={this.minimise}/>
                <img src={closeImage} className={styles.windowControl} onClick={this.closeWindow}/>
              </div>
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
                <ContentPanel notifyParent={this.notifyParent} header={this.state.context} configFile={this.state.configFile}/>
              </div>
            </div>
          </div>
        );
    }
}
