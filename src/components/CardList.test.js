import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'john snow',
      username: 'johnny5',
      email: 'js@email.com'
    }
  ]
  expect(shallow(<CardList robots={ mockRobots } />).debug()).toMatchSnapshot();
})
