import { shallow } from "enzyme";
import PokeCard from "./PokeCard";

describe("Pokecard component", () => {
  let mockrow = {
    id: 1,
    num: "001",
    name: "Bulbasaur",
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    type: ["Grass", "Poison"],
    height: "0.71 m",
    weight: "6.9 kg",
    candy: "Bulbasaur Candy",
    candy_count: 25,
    egg: "2 km",
    spawn_chance: 0.69,
    avg_spawns: 69,
    spawn_time: "20:00",
    multipliers: [1.58],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    next_evolution: [
      {
        num: "002",
        name: "Ivysaur",
      },
      {
        num: "003",
        name: "Venusaur",
      },
    ],
  };

  function mockFn(){
    //console.log(row);
  }

  it(" snapshot for mock row", () => {
    let wrapper = shallow(<PokeCard row={mockrow} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('snapshot for button click',()=>{
    let wrapper = shallow(<PokeCard row={mockrow} data={mockFn} />);
    let button = wrapper.find('button');
    button.simulate('click');
    expect(button).toMatchSnapshot();
  });

});
