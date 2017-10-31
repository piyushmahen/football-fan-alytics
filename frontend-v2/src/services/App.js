
import 'whatwg-fetch';

import { raiseStatus, HTTP, emptyResponseBody } from '../scripts/Http';


const CLIENT_ID = 'xrQaJ%m1*v3rKsKk7QbRiiXa*am$O!6F';

const App = () => (
  fetch('/v2/home', {
    method: HTTP.GET,
    credentials: 'same-origin',
    headers: {
      'X-ClientID': CLIENT_ID,
    },
  })
  .then(raiseStatus)
);

const onBoardingComplete = () => (
  // TODO: update proper link on complete
  fetch('/v2/resources/onboard-status', {
    method: HTTP.POST,
    credentials: 'same-origin',
    headers: {
      'X-ClientID': CLIENT_ID,
    },
  }).then(emptyResponseBody)
);

export default App;
export {
  onBoardingComplete,
};

