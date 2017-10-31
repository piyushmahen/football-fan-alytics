const methods = {
  GET: 'GET',
  POST: 'POST',
};

const apiToken = '97c5779348be4f0287017f582bb9a827';

const raiseStatus = (response) => {
  if (response.redirected) {
    window.location.href = response.url;
  }

  if (response.status >= 200 && response.status < 300) {
    return response.json();
  }

  const error = new Error(response.status);
  error.response = response;
  throw error;
};

const apiTopLevelUri = 'http://api.football-data.org';

export {
  raiseStatus,
  methods as HTTP,
  apiToken,
  apiTopLevelUri,
};
