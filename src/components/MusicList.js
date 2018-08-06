import React, { Component} from 'react'

import MusicListItem from './MusicListItem'

class MusicList extends Component {
    render () {
        let listEle = null;
        listEle = this.props.musicList.map((item) => {
            return <MusicListItem key={item.id} musicItem={item} focus={item == this.props.currentMusicItem}></MusicListItem>
        })
        return (
            <ul className="component-musicList">
                {listEle}
            </ul>
        );
    }
}

export default MusicList;