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
      }
    }

    render() {
        return (
          <div id="keyBind" className={this.props.type == "spell" ? styles.spell : styles.container}>
            <span className={styles.action}> {this.props.name} </span>
            <span className={styles.keybind}> {this.props.keybind} </span>

          </div>
        );
    }
}
