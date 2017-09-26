import { changeNetworkStatus } from '../network';

it('creates a CHANGE_CONNECTION_STATUS action', () => {
  expect(changeNetworkStatus('offline')).toMatchSnapshot();
});
