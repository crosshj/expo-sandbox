
import Profile from '../screens/profile';
import Settings from '../screens/settings';
import Loading from '../screens/loading';

// import Landscape from '../screens/landscape';
// import Portrait from '../screens/portrait';

// //const uri = 'https://start.duckduckgo.com/?kae=d&ko=-2';
// const uri = 'https://home.crosshj.com';
// // const uri = 'https://test.letbob.com/chartiq/chart.html#AAPL';
// //const uri = 'http://192.168.1.95:3000/mobileChart/';

// //const html = iframeWrapper();

// import WebView from '../components/niceWebview';

const screens = {
    // Landscape: { screen: Portrait(<WebView
    //   source={{uri}}
    //   onMessage={(event)=> console.log(event.nativeEvent.data)}
    // />) },
    Profile: { screen: Profile },
    Settings: { screen: Settings },
  };

const options = {};

export default { screens, options, Loading };
