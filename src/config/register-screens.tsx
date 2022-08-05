import React, { ReactElement } from 'react';

import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NativeBaseProvider } from 'native-base';
import { withNavigationProvider } from 'react-native-navigation-hooks';

import { screens } from './screens';

import { Store, AnyAction } from '@reduxjs/toolkit';
import { Persistor } from 'redux-persist';

function WrapComponent (store: Store<any, AnyAction>, persistor: Persistor, Component: () => ReactElement) {
  return function inject(props: { [key: string]: unknown}) {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NativeBaseProvider>
            <Component {...props} />
          </NativeBaseProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default function registerScreens(store: Store<any, AnyAction>, persistor: Persistor): void {
  screens.forEach(({ label, screen }) => {
    Navigation.registerComponent(label, () => withNavigationProvider(WrapComponent(store, persistor, screen)));
  });
}
