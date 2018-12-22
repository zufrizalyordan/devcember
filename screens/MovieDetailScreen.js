import React, { Component } from 'react'
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    WebView,
    Dimensions
} from 'react-native'

import API from "../services/API"

class MovieDetailScreen extends Component {
    static navigationOptions = {
        header: null,
        title: 'Pasar Detail'
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
        const youtubeId = movie.videos.results[0].key;
        const youtubeUrl = 'https://www.youtube.com/embed/' + youtubeId
        this.setState({
            id,
            title: movie.title,
            tagline: movie.tagline,
            youtubeUrl,
            loading: false,
        })
    }

    componentWillUnmount () {
        this.setState({youtubeUrl:''})
    }

    render() {
        const { youtubeUrl, title, tagline, loading } = this.state
        const trailerVideo = <View style={{ height: 240 }}>
            <WebView
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: youtubeUrl }}
            />
        </View>

        const item = (loading) ? <ActivityIndicator style={styles.loading} size = "large" /> : <View>
                        <Text>{title}</Text>
                        <Text>{tagline}</Text>
                        <Text>Trailer</Text>
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

const { height } = Dimensions.get('window')

const styles = {
    container: {
        flex: 1,
        paddingHorizontal: 10,
        marginTop: 28,
    },
    loading: {
        marginTop: height * 0.35
    },
    listItem: {
        flexDirection: 'row',
        backgroundColor: '#fdfdfd',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#DCDCDC',
    }
}

export default MovieDetailScreen
