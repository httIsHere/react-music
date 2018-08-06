require('normalize.css/normalize.css');
require('styles/App.less');

import React, { Component, Fragment } from 'react';
import Header from './Header'
import Player from './Player'
import MusicList from './MusicList'

import MUSIC_LIST from '../sources/MusicList'

import {Router, IndexRoute, Link, Route, hashHistory} from 'react-router'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentMusicItem: MUSIC_LIST[0],
      MUSIC_LIST
    }
  }
  componentDidMount () {
    let _this = this;
    $('#player').jPlayer({
        ready: function () {
            $(this).jPlayer('setMedia', {
                mp3: _this.state.currentMusicItem.music
            }).jPlayer('play');
        },
        supplied: 'mp3',
        wmode: 'window'
    });
  }
  render() {
    return (
      <div>
        <Header />
        {React.cloneElement(this.props.children, this.state)}
        {/* {this.props.children}
        <Player currentMusicItem={this.state.currentMusicItem} />
        <MusicList currentMusicItem={this.state.currentMusicItem} musicList={MUSIC_LIST} /> */}
      </div>
    );
  }
}

class AppComponent extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Player}></IndexRoute>
          <Route path="/list" component={MusicList}></Route>
        </Route>
      </Router>
    );
  }
}

export default AppComponent;
