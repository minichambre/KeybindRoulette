import React, {Component}  from 'react'
import styles from './styles.css'
import FileLoader from './../FileLoader'

export default class Configurator extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
          <div id="configOptions"className={styles.root}>
            <FileLoader/>
          </div>
        );
    }
}
