import { mount, shallow } from 'enzyme';
import Navbaar from './Navbaar'

describe('Navbar Components', ()=>{

  it('check navbarself class', ()=>{
      let wrapper = shallow(<Navbaar/>);
      expect(wrapper.find('.navbarSelf').length).toBe(1);
  })

  it('check h1 msg', ()=>{
    let wrapper = shallow(<Navbaar/>);
    expect(wrapper.contains(<h1 style={{color: "#66fcf1",margin: 0, fontWeight: "900",fontSize: "3rem"}}>Pokedex</h1>)).toBe(true);
})

  it('check all li count', ()=>{
    let wrapper = shallow(<Navbaar/>);
    expect(wrapper.find('li').length).toBe(32);
})

it('check all li count1', ()=>{
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

it('input search snapshot', ()=>{
  let wrapper = shallow(<Navbaar/>);
  const event = {target: {value: "blub"}};
  let input= wrapper.find('input').last();
  input.simulate('change', event)
  expect(input).toMatchSnapshot();
})

});
