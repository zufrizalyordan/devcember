import React, {Component} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Touchable from "react-native-platform-touchable";

class TrendingItem extends Component {
    openDetail = () => {
        const id = this.props.id
        const title = this.props.original_title
        this.props.navigate('MovieDetail', {
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

const styles = {
    listItem: {
        flexDirection: "row",
        backgroundColor: "#fdfdfd",
        paddingVertical: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#DCDCDC"
    }
}

export default TrendingItem