import React from "react"
import styled from "styled-components/native"

const Img = styled.Image`
    width: 100%;
    height: 400px;
    border-radius: 10px;
    margin-bottom: 20px;
`

const MainBlock = styled.View`
    padding: 10px;
`

const Description = styled.Text`
    font-size: 20px;
`

const FullPost = ({ route, navigation }) => {
    const { title, description, img } = route.params

    React.useEffect(() => {
        navigation.setOptions({
            title: title,
        })
    })

    return (
        <MainBlock>
            <Img src={img} />
            <Description>{description}</Description>
        </MainBlock>
    )
}

export default FullPost
