import React, { Component } from 'react';
import {
  ScrollView,
  ActivityIndicator,
  FlatList,
  Text,
  View
} from 'react-native'

import API from '../services/API'
import TrendingItem from './TrendingItem'
import styles from './styles'

class CategoryMoviesScreen extends Component {
    static navigationOptions = {
        header: null,
    }

    state = {
        items: [],
        isMounted: false,
        loading: false
    }

    componentDidMount = async () => {
        const genre = this.props.navigation.getParam('id')
        this.setState({
            isMounted: true,
            loading: true
        })

        const resp = await API.getMoviesByGenre(genre)

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
        const genre = this.props.navigation.getParam('genre')

        const list = (loading) ? <ActivityIndicator style={styles.loading} size = "large" /> : <FlatList
                            data={items}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) =>
                                <TrendingItem {...item} navigate={this.props.navigation.navigate}/>}
                            keyExtractor={item => item.id.toString()}
                        />
        return (
            <View style={styles.container}>
                <ScrollView style={styles.contentContainer}>
                <View>
                    <Text style={styles.contentTitle}>(😺)  Kategori {genre} </Text>
                    {list}
                </View>
                </ScrollView>
            </View>
        );
    }
}

export default CategoryMoviesScreen