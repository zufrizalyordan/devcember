import React, {Component} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Touchable from "react-native-platform-touchable";

import styles from './styles'
class CategoryMoviewItem extends Component {
    openDetail = () => {
        const id = this.props.id
        const title = this.props.original_title
        this.props.navigate('CategoryMovieDetail', {
            id,
            title
        })
    }

    render () {
        return (
            <Touchable style={styles.listItem} onPress={this.openDetail}>
                <View style={styles.textContainer}>
                    <Text>
                        {this.props.original_title}
                    </Text>
                </View>
            </Touchable>
        )
    }
}

export default CategoryMoviewItem