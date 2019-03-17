import React, {Component}  from 'react'
import styles from './styles.css'
var app = require('electron').remote;
var dialog = app.dialog;
var fs = require('fs');
export default class FileLoader extends Component {
    constructor(props){
      super(props);
      this.state ={
        fileLocation: null
      }
      this.openFile = this.openFile.bind(this);
    }

    openFile(){
      dialog.showOpenDialog((filenames) => {
        if (filenames === undefined){
          console.log("nothing selected");
          return;
        }else {
          this.setState({fileLocation: filenames});
        }
      })
    }
    render() {
        return (
          <div className={styles.container}>
          <h2> Configure Settings for Keybind Roulette </h2>
          <p>Enter the path of your League of Legends config file </p>
            <input className={styles.fileBrowser}type="text" value={this.state.fileLocation || "Select your league of legends config file"}/>
            <input className={styles.openFileBrowser}type="submit" value="browse" onClick={this.openFile}/>
          </div>
        );
    }
}
