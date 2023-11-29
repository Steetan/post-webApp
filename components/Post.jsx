import axios from "axios"
import React, { useState, useEffect } from "react"
import { TouchableOpacity, ScrollView, RefreshControl } from "react-native"
import styled from "styled-components/native"

const Image = styled.ImageBackground`
    flex: 1;
    text-align: center;
    padding: 10px;
`
const MainBlock = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    padding: 10px 0;
    justify-content: center;
`

const Block = styled.View`
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

export default Post = ({ navigation }) => {
    const [items, setItems] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    const fetchData = () => {
        setRefreshing(true)

        axios
            .get("https://655baee0ab37729791a97996.mockapi.io/api/posts")
            .then(({ data }) => {
                setItems(data)
            })
            .catch((err) => {
                alert(err)
            })
            .finally(() => {
                setRefreshing(false)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <ScrollView
            style={{ flex: 1 }}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={fetchData} />
            }
        >
            <MainBlock>
                {items.map((obj) => (
                    <Block key={obj.id}>
                        <Image src={obj.avatar} imageStyle={{ opacity: 0.5 }}>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("FullPost", {
                                        img: obj.avatar,
                                        title: obj.title,
                                        description: obj.description,
                                    })
                                }
                            >
                                <Title>{obj.title}</Title>
                                <Desc>{obj.description}</Desc>
                            </TouchableOpacity>
                        </Image>
                    </Block>
                ))}
            </MainBlock>
        </ScrollView>
    )
}
