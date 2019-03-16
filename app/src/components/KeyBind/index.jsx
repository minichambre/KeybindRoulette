import React, {Component}  from 'react'
import styles from './styles.css'

export default class KeyBindContainer extends Component {
    render() {
        return (
          <div className={styles.container}>
            <span className={styles.action}> Walk forwards </span>
            <span className={styles.keybind}> Left Ctrl </span>

          </div>
        );
    }
}
