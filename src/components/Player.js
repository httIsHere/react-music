import React, { Component } from "react";
import Progress from './Progress'

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            percent: 0,
            duration: null,
            volume: null,
            isPlay: true
        }
        this.progressChangeHandle = this.progressChangeHandle.bind(this);
        this.playHandle = this.playHandle.bind(this);
    }
    componentDidMount() {
        $('#player').bind($.jPlayer.event.timeupdate, (e) => {
            this.setState({
                progress: Math.round(e.jPlayer.status.currentTime),
                percent: Math.round(e.jPlayer.status.currentPercentAbsolute),
                duration: e.jPlayer.status.duration,
                volume: e.jPlayer.options.volume
            });
        });
    }
    componentWillUnmount() {
        $('#player').unbind($.jPlayer.event.timeupdate);
    }
    progressChangeHandle(progress) {
        $('#player').jPlayer('play', this.state.duration * progress)
    }
    playHandle () {
        if(this.state.isPlay) {
            $('#player').jPlayer('pause');
        } else {
            $('#player').jPlayer('play');
        }
        this.setState({
            isPlay: !this.state.isPlay
        })
    }
    formateTime (time) {
        time = Math.round(time);
        if(time < 60) {
            return '00:' + (time < 10 ? '0' + time : time);
        } else {
            let _m = parseInt(time / 60);
            let _s = time % 60;
            return (_m < 10 ? '0' + _m : _m) + ':' + (_s < 10 ? '0' + _s : _s);
        }
    }
    render() {
        const { progress, percent, duration } = this.state;
        const { currentMusicItem } = this.props;
        return (
            <div className="component-player">
                <div className="player-left">
                    <h3>My Music ></h3>
                    <p className="music-name">{currentMusicItem.title}</p>
                    <p className="music-singer">{currentMusicItem.artist}</p>
                    <div className="progress-part">
                        <Progress progress={progress} percent={percent} onProgressChange={this.progressChangeHandle} />
                        <span>{this.formateTime(progress)} - {this.formateTime(duration)}</span>
                    </div>
                    <ul className="player-controller">
                        <li className="player-icon preSong">＜</li>
                        <li className="player-icon playSong" onClick={this.playHandle}>{`${this.state.isPlay}`==='true'?'||':'▶'}</li>
                        <li className="player-icon nextSong">＞</li>
                    </ul>
                </div>
                <div className="player-right">
                    <img src={currentMusicItem.cover} alt={currentMusicItem.title}/>
                </div>
            </div>
        );
    }
}
export default Player;