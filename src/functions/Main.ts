import AsyncStorage from '@react-native-community/async-storage';

// Получение данных их стора приложения
export function getDataFromPersistStore() {
  return AsyncStorage.getItem('persist:root').then((results: any) => {
    if (results === null) { return null; }

    const persistStore = JSON.parse(results);

    return JSON.parse(persistStore.currentUser);
  });
}
