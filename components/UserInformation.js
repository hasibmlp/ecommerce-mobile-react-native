import { View, Text, StyleSheet } from 'react-native'

export default function UserInformation () {
    return (
        <View style={styles.container}>
        <View style={styles.userDetails}>
            <Text style={ styles.subText }>Welcome</Text>
            <Text style={ styles.Text }>Muhammad Thahir</Text>
        </View>
        <View style={styles.userAvatarContainer}>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 15,
    },
    userDetails: {
    },
    Text: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
    },
    subText: {
        fontSize: 14,
        fontWeight: '600',
        color: 'black',
    },
    userAvatarContainer: {
        width: 50,
        height: 50,
        backgroundColor: 'gray',
        borderRadius: '100%',
    },
})