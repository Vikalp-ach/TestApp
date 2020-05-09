import * as commonActions from './common';
import * as loginActions from './auth';

export const ActionCreators = Object.assign({},
  commonActions,
  loginActions
);
