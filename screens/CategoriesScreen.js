import React, { Component } from 'react';
import {
  ScrollView,
  ActivityIndicator,
  FlatList,
  Text,
  View
} from 'react-native'

import API from '../services/API'
import CategoryItem from './CategoryItem'
import styles from './styles'

class CategoriesScreen extends Component {
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

		const resp = await API.getGenres()
        this.setState({
            items: resp.genres,
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

        const list = (loading) ? <ActivityIndicator style={styles.loading} size = "large" /> : <FlatList
                            data={items}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) =>
                                <CategoryItem {...item} navigate={this.props.navigation.navigate}/>}
                            keyExtractor={item => item.id.toString()}
                        />
        return (
            <View style={styles.container}>
                <ScrollView style={styles.contentContainer}>
                <View>
                    <Text style={styles.contentTitle}>(😺)  Kategori Filem</Text>
                    {list}
                </View>
                </ScrollView>
            </View>
        );
    }
}

export default CategoriesScreen