import React, {Component}  from 'react'
import styles from './styles.css'

export default class Header extends Component {
    render() {
        return (
          <div className={styles.header}>
            <h1> Keybind Roulette </h1>
            <h3> for </h3>
            <h2> League of Legends </h2>
          </div>
        );
    }
}
