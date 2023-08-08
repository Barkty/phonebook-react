const { NODE_ENV, REACT_APP_PROD, REACT_APP_DEV, REACT_APP_TEST } = process.env;

const env = NODE_ENV;

const development = {
  api: {
    uri: REACT_APP_DEV || REACT_APP_TEST,
  },
};
const test = {
  api: {
    uri: REACT_APP_TEST,
  },
};
const production = {
  api: {
    uri: REACT_APP_PROD,
  },
};

const stage = {
  development,
  test,
  production,
};

export const environment = stage[env];