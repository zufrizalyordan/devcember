import React, { Component } from 'react'
import {
    ScrollView,
    View,
    Text,
    ActivityIndicator,
    WebView,
    Image
} from 'react-native'

import API from "../services/API"
import styles from "./styles"
class MovieDetailScreen extends Component {
    static navigationOptions = {
        header: null,
        title: 'Detil Filem'
    }

    state = {
        id: null,
        title: "Loading data...",
        tagline: '',
        isReady: false,
        status: '',
        quality: '',
        error: '',
        loading: false,
        commodities: []
    }

    componentDidMount = async () => {
        const id = this.props.navigation.getParam('id')
        this.setState({loading: true})
        const movie = await API.getMovie(id)
        const youtubeId = movie.videos.results[0].key; // TODO: handle no videos
        const youtubeUrl = 'https://www.youtube.com/embed/' + youtubeId

        this.setState({
            id,
            title: movie.title,
            tagline: movie.tagline,
            poster: 'https://image.tmdb.org/t/p/w400/' + movie.poster_path,
            youtubeUrl,
            loading: false,
        })
    }

    componentWillUnmount () {
        this.setState({youtubeUrl:''})
    }

    render() {
        const { youtubeUrl, title, tagline, loading, poster } = this.state
        const trailerVideo = <View style={styles.webviewItem}>
            <WebView
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: youtubeUrl }}
            />
        </View>

        const item = (loading) ? <ActivityIndicator style={styles.loading} size = "large" /> : <View>
                        <Text style={styles.contentTitle}>{title}</Text>
                        <Text style={styles.contentItem}>{tagline}</Text>
                        <Image
                            style={styles.poster}
                            source={{uri: poster}}
                        />
                        {trailerVideo}
                    </View>
        return(
            <View style={styles.container}>
                {/*<AppBar backbutton={true} navigation={this.props.navigation} />*/}
                <ScrollView>
                    {item}
				</ScrollView>
            </View>
        )
    }
}

export default MovieDetailScreen
