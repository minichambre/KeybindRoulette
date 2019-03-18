import React, {Component}  from 'react'
import styles from './styles.css'
var app = require('electron').remote;
var dialog = app.dialog;
var fs = require('fs');
var readline = require('readline');
export default class FileLoader extends Component {
    constructor(props){
      super(props);
      this.state ={
        fileLocation: null
      }
      this.openFile = this.openFile.bind(this);
      this.readFromFile = this.readFromFile.bind(this);
      this.validateFile = this.validateFile.bind(this);
      this.digestFile = this.digestFile.bind(this);
    }

    /* Opens a dialogue box which allows the user to select the path
     * of their league of legends input.cfg file.
     * Function then sets the state to the path of the selected file, and calls a file reader function
    */
    openFile(){
      dialog.showOpenDialog((filenames) => {
        if (filenames === undefined || filenames.length > 1){
          return;
        }else {
          this.setState({fileLocation: filenames[0]}, () => this.readFromFile(this.state.fileLocation));
        }
      })
    }

    readFromFile(filePath){
      var config = new Object();
      var rd = readline.createInterface({
        input:fs.createReadStream(filePath),
        output:process.stdout,
        console:false
      });

      //Start reading the file one line at a time
      rd.on('line', (line) => {
        this.digestFile(line, config);
      });

      rd.on('close', () => {
        console.log(config);
        if (this.validateFile(config)){
          this.setState({complete: true, config: config});
          this.props.notifyParent("config", config);
        } else {
          //show error
        }
      })

    }

    validateFile(config){
      var someExpectedKeys = ["evtSelectAlly1", "evtPushToTalk", "evtEmoteLaugh", "evtCastSpell1", "evtSmartCastItem6"];
      let valid = true;
      someExpectedKeys.forEach( (key) => {
        if (key in config) {
        } else {
          valid = false;
        }
      });
      if (valid == true){
        return true;
      } else {
          return false;
      }
    }

    digestFile(line, config){
      if (line == "" || line == undefined) {
        return;
      }
      let split = line.split('=');
      let key = split.shift();
      let val = "";

      if (split.length > 1){
        val = split.join();
      } else {
        val = split[0];
      }

      config[key] = val;
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
