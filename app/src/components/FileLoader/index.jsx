import React, {Component}  from 'react'
import styles from './styles.css'

export default class FileLoader extends Component {
    render() {
        return (
          <div className={styles.container}>
          Enter the path: 
            <input type="text" value="location"/>
            <input type="submit" value="submit"/>
          </div>
        );
    }
}
