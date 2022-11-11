import { mount, shallow } from 'enzyme';
import Navbaar from './Navbaar'
import List from '../List/List'

describe('Navbar Components', ()=>{

  it('check navbarself class', ()=>{
      let wrapper = shallow(<Navbaar/>);
      //console.log(wrapper.debug());
      expect(wrapper.find('.navbarSelf').length).toBe(1);
  })

  it('check h1 msg', ()=>{
    let wrapper = shallow(<Navbaar/>);
    expect(wrapper.contains(<h1>Pokedex</h1>)).toBe(true);
})

  it('check all li count', ()=>{
    let wrapper = shallow(<Navbaar/>);
    expect(wrapper.find('li').length).toBe(32);
})

it('check all li count', ()=>{
  let wrapper = shallow(<Navbaar/>);
  expect(wrapper.find('li').length).toBe(32);
})

it('defalut snapshot', ()=>{
  let wrapper = shallow(<Navbaar/>);
  expect(wrapper).toMatchSnapshot();
})

it('input first click snapshot', ()=>{
  let wrapper = shallow(<Navbaar/>);
  let input= wrapper.find('input').first();
  input.simulate('change', true);
  expect(input).toMatchSnapshot();
})

it('input last click snapshot', ()=>{
  let wrapper = shallow(<Navbaar/>);
  let input= wrapper.find({ value : "Steel" });
  input.simulate('change', true);
  expect(input).toMatchSnapshot();
})

});


//fetch as mock 
//test