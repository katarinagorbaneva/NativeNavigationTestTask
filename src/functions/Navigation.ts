import { Navigation } from 'react-native-navigation';

// Установка корневого экрана
export function setNavigationRoot(screen: string, options = {}): void {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'mainStack',
        children: [
          { component: { 
            name: screen, 
            passProps: options,
            options: {
              topBar: {
                background: {
                  color: '#00ffee'
                },
              }
            }
          }},
        ],
      }
    },
  });
}
