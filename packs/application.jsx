/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { Provider } from 'react-redux';
import store from '../store';
import { BrowserRouter } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-select/dist/react-select.css';
import '../css/application.css';

import Routers from '../routers.js';

WebFont.load({
  google: {
    families: ['Source Sans Pro:300,400,600,700']
  }
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
