import React, {Component}  from 'react'
import styles from './styles.css'

export default class ContentPanel extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
          <div className={styles.root}>
            <h1> {this.props.header} </h1>
          </div>
        );
    }
}
