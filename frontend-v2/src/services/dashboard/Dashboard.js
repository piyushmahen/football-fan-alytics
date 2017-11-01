import 'whatwg-fetch';

import { HTTP, raiseStatus, apiToken, apiTopLevelUri } from '../../scripts/Http';

const getCompetitionLeagues = (year) => (
  fetch(`${apiTopLevelUri}/v1/competitions/?season=${year || '2015'}`, {
    method: HTTP.GET,
    credentials: 'same-origin',
    headers: {
      'X-Auth-Token': apiToken,
    },
  })
  .then(raiseStatus)
);

const getSingleCompetitionLeague = (link) => (
  fetch(link, {
    method: HTTP.GET,
    headers: new Headers({
      'X-Auth-Token': apiToken,
    }),
  })
  .then(raiseStatus)
);

export { getCompetitionLeagues, getSingleCompetitionLeague };
