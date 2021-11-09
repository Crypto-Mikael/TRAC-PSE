import { shallow } from 'enzyme';
import { Header } from '../components';

describe('Header component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />)
  });

  it('Should render a h2', () => {
    const h2 = wrapper.find('h2').text();
    expect(h2).toBe('Header')
  });
})
