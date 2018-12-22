import React, {Component} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Touchable from "react-native-platform-touchable";

import styles from './styles'

class CategoryItem extends Component {
    openDetail = () => {
        const id = this.props.id
        const genre = this.props.name
        this.props.navigate('CategoryMovies', {
            id,
            genre
        })
    }

    render () {
        return (
            <Touchable style={styles.listItem} onPress={this.openDetail}>
                <View style={styles.textContainer}>
                    <Text >
                        {this.props.name}
                    </Text>
                </View>
            </Touchable>
        )
    }
}

export default CategoryItem