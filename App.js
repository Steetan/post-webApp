import React, { useState, useEffect } from "react";
import {View, ScrollView, StatusBar} from 'react-native';
import axios from "axios";
import styled from 'styled-components/native';
import Post from './components/Post.jsx';

const MainBlock = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px 0;
  justify-content: center;
`

export default function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios
      .get('https://655baee0ab37729791a97996.mockapi.io/api/posts')
      .then(({ data }) => {
        setItems(data)
      })
      .catch((err) => {
        alert(err);
      })
  }, [])

  return (
    <View>
      <ScrollView>
        <StatusBar theme="auto"/>
        <MainBlock>
            {items.map((obj, index) => 
              <Post key={index} title={obj.title} desc={obj.description} img={obj.avatar}/>
            )}
        </MainBlock>
      </ScrollView>
    </View>
  );
}