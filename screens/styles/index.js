import {
    StyleSheet,
    Dimensions
} from 'react-native'

const {
    height,
    width
} = Dimensions.get('window')

const styles = {
    container: {
        flex: 1,
        marginTop: 28,
    },
    contentContainer: {
        paddingTop: 10,
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    containerBottom: {
        marginBottom: 50
    },
    contentItem: {
        paddingHorizontal: 10
    },
    loading: {
        marginTop: height * 0.35
    },
    navigationFilename: {
        marginTop: 5,
    },
    listItem: {
        flexDirection: 'row',
        backgroundColor: '#fdfdfd',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#DCDCDC',
    },
    webviewItem: {
        height: 240,
        marginTop: 10
    },
    poster: {
        width: 200,
        height: 300,
        marginLeft: 15,
        marginTop: 10
    }
}

export default styles