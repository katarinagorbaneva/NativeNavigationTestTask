import { Navigation } from 'react-native-navigation';

import registerScreens from './src/config/register-screens';
import initNavigation from './src/config/init-navigation';

import store, { persistor } from './src/redux/store';

import { apiWrapper } from './src/config/api';

import { getDataFromPersistStore } from './src/functions/Main';

const initRequestTransforms = () => {
  apiWrapper.addAsyncRequestTransform(request => async() => {
    const currentUser = await getDataFromPersistStore();

    if (Object.keys(currentUser).length > 0) {
      Object.keys(currentUser).forEach(key => {
        request.headers[key] = currentUser[key];
      });
    }
  });
};

Navigation.events().registerAppLaunchedListener(() => {
  registerScreens(store, persistor);

  initNavigation(store);
  initRequestTransforms();
});
