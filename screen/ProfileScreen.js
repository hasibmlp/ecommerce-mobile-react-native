import { View, Text, Pressable, StyleSheet } from 'react-native'

export default function ProfileScreen () {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Logout</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 50,
        paddingHorizontal: 30,
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
})