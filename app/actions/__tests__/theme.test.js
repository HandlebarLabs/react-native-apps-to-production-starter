import { changePrimaryColor } from '../theme';

it('creates a CHANGE_PRIMARY_COLOR action', () => {
  expect(changePrimaryColor('red')).toMatchSnapshot();
});
