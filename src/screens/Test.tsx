import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

type Movie = {
  id: string;
  name: string;
  releaseYear: string;
};

const Test = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Movie[]>([]);

  const getMovies = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/province');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      // console.error(error.message);
      throw error.message.data;
      
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.id}, {item.name}
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default Test;