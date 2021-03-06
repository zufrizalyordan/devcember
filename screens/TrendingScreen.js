import React, { Component } from 'react';
import {
  ScrollView,
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Dimensions
} from 'react-native'

import API from '../services/API'
import TrendingItem from './TrendingItem'
import styles from './styles/index'
class TrendingScreen extends Component {
    static navigationOptions = {
        header: null,
    }

    state = {
        items: [],
        isMounted: false,
        loading: false
    }

    componentDidMount = async () => {
        this.setState({
            isMounted: true,
            loading: true
        })

        const resp = await API.getTrendingMovies()
        this.setState({
            items: resp.results,
            loading: false
        })
    }

    componentWillUnmount = () => {
        this.setState({
            isMounted: false,
        })
    }

    render() {
        const { items, loading } = this.state

        const trendingList = (loading) ? <ActivityIndicator style={styles.loading} size = "large" /> : <FlatList
                            data={items}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) =>
                                <TrendingItem {...item} navigate={this.props.navigation.navigate}/>}
                            keyExtractor={item => item.id.toString()}
                        />
        return (
            <View style={styles.container}>
                <ScrollView style={styles.contentContainer}>
                <View style={styles.containerBottom}>
                    <Text style={styles.contentTitle}>Filem yang sedang 🔥👌</Text>
                    {trendingList}
                </View>
                </ScrollView>
            </View>
        );
    }
}

export default TrendingScreen