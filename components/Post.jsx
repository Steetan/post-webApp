import {TouchableOpacity, Alert} from 'react-native';
import styled from 'styled-components/native';

const Image = styled.ImageBackground`
    flex: 1;
    text-align: center;
    padding: 10px;
`
const MainBlock = styled.View`
    width: 45%;
    border: 2px solid #000;
    border-radius: 10px;
`

const Title = styled.Text`
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 20px;
`
    
const Desc = styled.Text`
    text-align: center;
    font-size: 12px;
`

export default Post = (props) => {
    const handlePress = () => {
        Alert.alert("Пост", props.title);
    };

    return (
        <MainBlock>
            <Image src={props.img} imageStyle={{opacity: 0.5}}>
            <TouchableOpacity onPress={handlePress}>
                <Title>{props.title}</Title>
                <Desc>{props.desc}</Desc>
            </TouchableOpacity>
            </Image>
        </MainBlock>
    )
};