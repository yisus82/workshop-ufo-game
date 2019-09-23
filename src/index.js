///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './plugin/serviceWorker';

import Game from './app/Game';

// Styles
import 'rpgui/rpgui.css';
import './assets/styles/index.css';

///////////////////////////////////////////////////////////////
// APP CREATION
///////////////////////////////////////////////////////////////
ReactDOM.render(<Game />, document.getElementById('root'));
serviceWorker.unregister();
