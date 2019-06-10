import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './App.module.css';


let App = class extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2>KudaGo</h2>
      </div>
    )
  }
};


export { App };
