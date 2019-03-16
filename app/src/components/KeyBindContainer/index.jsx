import React, {Component}  from 'react'
import styles from './styles.css'
import KeyBind from './../KeyBind'

export default class KeyBindContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          collectionOfKeybinds: []
        }
    }

    componentDidMount(){
      let keybinds = [];
      for (let x = 0; x< 30; x++){
        keybinds.push(<KeyBind/>);
      }
      this.setState({collectionOfKeybinds: keybinds});
    }

    render() {
        return (
          <div className={styles.container}>
            {this.state.collectionOfKeybinds}
          </div>
        );
    }
}
