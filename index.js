import { registerRootComponent } from 'expo';

import App from './screens/App';
import IntroSlider from './screens/IntroSlider';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(IntroSlider);
