import React from 'react';
import { shallow } from 'enzyme';
import RecipeOverview from '../RecipeOverview';

const recipes = [
  {
    calories: '516 kcal',
    carbos: '47 g',
    description:
      'There’s nothing like the simple things in life - the smell of freshly cut grass, sitting outside on a nice sunny day, spending time with friends and family. Well here is a recipe that delivers simple culinary pleasures - some nice fresh fish with a crispy crust, crunchy potato wedges and some delightfully sweet sugar snap peas flavoured with cooling mint. Slip into something comfortable and relax into a delicious dinner!',
    difficulty: 0,
    fats: '8 g',
    favorites: 1,
    headline: 'with Sweet Potato Wedges and Minted Snap Peas',
    id: '533143aaff604d567f8b4571',
    image:
      'https://img.hellofresh.com/f_auto,fl_lossy,q_auto/hellofresh_s3/image/533143aaff604d567f8b4571.jpg',
    ingredients: [
      '375g Sweet Potatoes',
      '1 Tsp Paprika',
      '2 Tbsps Parmesan Cheese',
      '1 Lemon',
      'A Few Sprigs Thyme',
      '25g Panko Breadcrumbs',
      '1 Tbsp Butter',
      '2 Cod Fillets',
      '150g Sugar Snap Peas',
      'A Few Sprigs Mint',
      '75ml Sour Cream',
    ],
    name: 'Crispy Fish Goujons ',
    proteins: '43 g',
    rating: 5,
    thumb:
      'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_300/hellofresh_s3/image/533143aaff604d567f8b4571.jpg',
    time: 'PT35M',
  },
];

describe('<RecipeOverview />', () => {
  test('renders', () => {
    const component = shallow(<RecipeOverview recipes={recipes} />);
    expect(component).toMatchSnapshot();
  });

  test('return the default array when there is no data to map through', () => {
    const component = shallow(<RecipeOverview />);
    expect(component).toMatchSnapshot();
  });

  test('does not break without value', () => {
    const component = shallow(<RecipeOverview />);
    expect(component.find('h1')).toHaveLength(1);
  });

  test('does not break with an empty array', () => {
    const component = shallow(<RecipeOverview recipes={[]} />);
    expect(component.find('h1')).toHaveLength(1);
  });
});
