import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import OfficeDesk from './ParentComponent.js';
import Table from './Table.js';
import Laptop from './Laptop';
import Mobile from './Mobile';
import Bottle from './Bottle';
import Ball from './Ball';
import Book from './Book';
import Pass from './api';
import Another from './another';

import { render } from "react-dom";
import {

  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(

  <Pass />
  //<Another />
  ,
  document.getElementById('root')
);


//reportWebVitals();
