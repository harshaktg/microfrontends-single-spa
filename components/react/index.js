import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './App';

function domElementGetter() {
  return document.getElementById("react")
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter,
})

export const { bootstrap, mount, unmount }= reactLifecycles