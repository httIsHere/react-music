import React, { Component } from "react";

class Progress extends Component {
    constructor(props) {
        super(props);
        this.changeProgress = this.changeProgress.bind(this);
    }
    changeProgress (e){
        let progressBar = this.refs.progressBar;
        let progress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
        const { onProgressChange } = this.props;
        onProgressChange && onProgressChange(progress);
    }
    render() {
        const { progress, percent } = this.props;
        return (
            <div className="components-progress" onClick={this.changeProgress} ref="progressBar">
                <div className="progress-bar" style={{width: `${percent}%`}}></div>
                {/* <span>{progress}s</span> */}
            </div>
        )
    }
}
export default Progress;