import React, {Component}  from 'react'
import styles from './styles.css'
import KeyBind from './../KeyBind'

export default class KeyBindContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          collectionOfKeybinds: [],
          spells: []
        }
    }

    componentDidMount(){
      if (this.props.configFile == null){
        return;
      }
      let keybinds = [];
      let spells = [];
      let items = [];
      let keys = Object.entries(this.props.configFile);
      for (let x = 0; x < keys.length; x++){
        if (keys[x][1] == undefined || keys[x][1] == ""){
        }else if (keys[x][0] == "evtCastSpell1" || keys[x][0] == "evtCastSpell2" || keys[x][0] == "evtCastSpell3" || keys[x][0] == "evtCastSpell4") {
          spells.push(<KeyBind type={"spell"} name={keys[x][0]} keybind={keys[x][1]}/>);
        }else if  (keys[x][0] == "evtUseItem1" || keys[x][0] == "evtUseItem2" || keys[x][0] == "evtUseItem3" || keys[x][0] == "evtUseItem4" || keys[x][0] == "evtUseItem5" || keys[x][0] == "evtUseItem6"){
          items.push(<KeyBind type={"item"} name={keys[x][0]} keybind={keys[x][1]}/>);
        }else {
          keybinds.push(<KeyBind name={keys[x][0]} keybind={keys[x][1]} type="item"/>);
        }

      }
      this.setState({collectionOfKeybinds: keybinds, spells:spells, items:items});

    }

    render() {
        return (
            <div style={{width:"100%"}}>
              {this.state.collectionOfKeybinds.length == 0 &&
                <h2> Make sure you set your League of Legends input.cfg file in the Configuration panel first </h2>}
                <h3> Your new ability keybinds... </h3>
                <div id="abilities" className={styles.abilities}>
                  {this.state.spells}
                </div>

                <h3> Your new item keybinds... </h3>
                <div id="abilities" className={styles.abilities}>
                  {this.state.items}
                </div>
            </div>
        );
    }
}
