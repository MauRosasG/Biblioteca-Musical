import {Component} from 'react';

class Song extends Component {
    render() {
        return (
            <div className="songCard">
                <p className="songTitle">{this.props.title}</p>
                <p className="songArtist">{this.props.artist}</p>
                <p className="songDuration">{this.props.duration}</p>
            </div>
        );
    }
}

export default Song;