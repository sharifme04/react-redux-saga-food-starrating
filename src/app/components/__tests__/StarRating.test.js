import React from 'react';
import { shallow } from 'enzyme';
import StarRating from '../StarRating';

jest.mock('uuid', () => {
  return {
    v4: jest.fn(() => 1),
  };
});

describe('<StarRating />', () => {
  test('renders', () => {
    const component = shallow(<StarRating size={20} />);
    expect(component).toMatchSnapshot();
  });
  /*   
    test('return the default array when there is no data to map through', () => {
      const component = shallow(<StarRating />);
      expect(component).toMatchSnapshot();
    }); */
  test('does not break without value', () => {
    const component = shallow(<StarRating />);
    expect(component.find('label')).toHaveLength(5);
    expect(component.find('input')).toHaveLength(5);
    expect(component.find('FaStar')).toHaveLength(5);
  });

  test('does not break with an empty number', () => {
    const component = shallow(<StarRating size={null} />);
    expect(component.find('label')).toHaveLength(5);
    expect(component.find('input')).toHaveLength(5);
    expect(component.find('FaStar')).toHaveLength(5);
  });
});
