import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

//screens
import Intro from './src/screens/Intro';
import App from './src/screens/App';

const StackIntro = createStackNavigator({
    Main: {
        screen: Intro,
    }
}, {
        headerMode: 'none'
    });


const StackApp = createStackNavigator({
    Main: {
        screen: App,
    }
}, {
        headerMode: 'none'
    });


      export default createSwitchNavigator({
          App: StackApp,
          Intro: StackIntro,
      }, {
          initialRouteName: 'Intro',
      });
