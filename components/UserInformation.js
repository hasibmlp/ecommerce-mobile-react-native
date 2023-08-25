import { StyleSheet, Alert, Pressable } from 'react-native';
import styled from 'styled-components'
import { Ionicons } from '@expo/vector-icons';

export default function UserInformation ({ navigation }) {
    return (
        <Container>
            <UserDetail>
                <Avatar onPress={() => { navigation.navigate("ProfileScreen") }}>
                    <Image source={require('../assets/sam.jpeg')} resizeMode='contain' />
                </Avatar>
                <Details>
                    <SubText>Welcome</SubText>
                    <Text>Muhammad Thahir</Text>
                </Details>
            </UserDetail>
            <Ionicons name="notifications" size={24} color="black" />
        </Container>
    )
}

const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 15px;
`

const UserDetail = styled.View`
    flex-direction: row;
    gap: 10px;
    align-items: center;
`

const Avatar = styled.Pressable`
    width: 42px;
    height: 42px;
    border-radius: 50px;
    background-color: gray;
    overflow: hidden;
`

const Image = styled.Image`
    width: 100%;
    height: 100%;
`

const Details = styled.View`
`

const Text = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: black;
`

const SubText = styled.Text`
    font-size: 14px;
    font-weight: 600;
    color: black;
`



// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingTop: 10,
//         paddingBottom: 15,
//     },
//     userDetails: {
//     },
//     Text: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: 'black',
//     },
//     subText: {
//         fontSize: 14,
//         fontWeight: '600',
//         color: 'black',
//     },
//     userAvatarContainer: {
//         width: 50,
//         height: 50,
//         backgroundColor: 'gray',
//         borderRadius: '100%',
//     },
// })