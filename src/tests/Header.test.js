import { shallow } from 'enzyme';
import { Header } from '../components';

describe('Header component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />)
  });

  it('Should render a header', () => {
    const tractianLogo = wrapper.find('header').type();
    expect(tractianLogo).toBe('header')
  });

  it('Should render tractian svg logo', () => {
    const tractianLogo = wrapper.find('.tractian-logo').props()
    expect(tractianLogo.alt).toBe('Tractian Logo');
  });
})
