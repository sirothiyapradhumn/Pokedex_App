import React from 'react'
import { shallow, mount } from "enzyme";
import List from './List'

const unmockedFetch = global.fetch



describe('List component', ()=>{
    let mockPt = ['Grass', 'Poison'];
    let mockPw = ['Fire'];
    let mockCt = 'b';

    beforeAll(() => {
        global.fetch = () =>
          Promise.resolve({
            json: () => Promise.resolve([]),
          })
      })

    it('testing List coverage', async()=>{
        let wrapper = mount(<List currText={mockCt} pokeType={mockPt} pokeWeakness={mockPw} />);
        expect(wrapper).toMatchSnapshot();
    })
    

    afterAll(() => {
        global.fetch = unmockedFetch
      })

})