import React, { Component} from 'react'

class MusicListItem extends Component {
    render () {
        let musicItem = this.props.musicItem;
        return (
            <li className={`component-musicItem ${this.props.focus?'focus':''}`}>
                <p className="music-info"><strong>{musicItem.title}</strong> <small>- {musicItem.artist}</small></p>
                <p className="musicItem-op delete">x</p>
            </li>
        )
    }
}

export default MusicListItem;