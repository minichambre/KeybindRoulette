import React, {Component}  from 'react'
import styles from './styles.css'

export default class KeyBindContainer extends Component {
    constructor(props){
      super(props);
      this.getCorrectClass = this.getCorrectClass.bind(this);
    }

    getCorrectClass(){
      switch(this.props.type){
        case "spell":
          return styles.spell;
        case "item":
          return styles.item;
      }
    }

    render() {
        return (
          <div id="keyBind" className={this.getCorrectClass()}>
            <span id="CircleKey" className={styles.action}> q </span>
            <span id="newKeyBind" className={styles.keybind}> {this.props.keybind} </span>

          </div>
        );
    }
}
