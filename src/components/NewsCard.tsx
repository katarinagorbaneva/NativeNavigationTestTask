import React, { ReactElement } from 'react';

import { Text, Card, View, Pressable } from 'native-base';
import { ImageBackground, StyleSheet } from 'react-native';
import moment from 'moment';
import { useNavigation } from 'react-native-navigation-hooks';
import { Navigation } from 'react-native-navigation';

import { NewsProps } from '../types/interfaces';

// Компонент вывода карточки новости
export default function NewsCard({ item }: { item: NewsProps }): ReactElement {
  const { push } = useNavigation();

  const { image_url: imageUrl, created_at: createdAt, title, id } = item;

  return (
    <Card style={[styles.borderBottom]}>
      <Pressable onPress={() => push('NewsItemShowScreen', { id })}>
        <ImageBackground source={{ uri: imageUrl }} style={styles.newsImageSize}>
          <ImageBackground style={[styles.newsImage, styles.newsImageSize]}>
            <View style={styles.topInfo} />
            <View>
              <Text style={[styles.textLabel, styles.brandL]} bold mx={4}>
                {title}
              </Text>
            </View>
            <View style={styles.bottomInfo}>
              <Text style={[styles.textSmall, styles.brandL]} mx={2}>
                {moment(createdAt).format('D MMM YYYY')}
              </Text>
            </View>
          </ImageBackground>
        </ImageBackground>
      </Pressable>
    </Card>
  );
}

const styles = StyleSheet.create({
  topInfo: {
    marginBottom: 'auto',
    height: 25,
  },
  bottomInfo: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 'auto',
    height: 25,
    alignItems: 'center',
  },
  newsImageSize: {
    width: '100%',
    height: 190,
  },
  textSmall: {
    fontSize: 12,
  },
  textLabel: {
    fontSize: 20,
  },
  brandL: {
    color: '#fff',
  },
  newsImage: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#828282',
  },
});
