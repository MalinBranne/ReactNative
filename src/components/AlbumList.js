import React, { Component } from 'react'; // importing react library and component feature
import { ScrollView } from 'react-native'; // destructured import, importing only the text instead of the whole library.
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    // Initialize state
    state = {
        albums: []
    }

    componentDidMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums') //returns promise, letting the app know when fetch is complete
            .then(response =>
                this.setState({
                    albums: response.data
                })
            )
            .catch(err => console.log(err))
    }



    renderAlbums = () => {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />)
    }

    render() {
        console.log(this.state.albums);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView >
        )

    }


}

export default AlbumList;
