import { actions } from '../dot';
import * as types from '../types';

describe('dot actions', () => {
  test('should create an action to add a dot', () => {
    const expectedAction = {
      type: types.DOT_ADD,
    };

    expect(actions.add()).toEqual(expectedAction);
  });
});
