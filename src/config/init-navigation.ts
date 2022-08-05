import AsyncStorage from '@react-native-community/async-storage';

import { setNavigationRoot } from '../functions/Navigation';

export default function initNavigation() {  
  AsyncStorage.getItem('persist:root').then(result => _processResult(result));
}

// Обработка данных, полученных из redux
const _processResult = (result: any) => {
  let screen = 'LoginScreen';

  if (result !== null) {
    const persistStore = JSON.parse(result);
    const currentUser = JSON.parse(persistStore.currentUser);

    // Если в сторе хранится токен, то пользователь залогинен и мы отправляем его на экран профиля
    if (Object.keys(currentUser).length > 0) {
      screen = 'NewsScreen';
    }
  }

  setNavigationRoot(screen);
};
