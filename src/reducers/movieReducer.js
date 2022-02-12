import PageOne from '../API/CONTENTLISTINGPAGE-PAGE1.json'
import PageTwo from '../API/CONTENTLISTINGPAGE-PAGE2.json'
import PageThree from '../API/CONTENTLISTINGPAGE-PAGE3.json'

const initialState = [PageOne];
export const movieReducer = (state = initialState, action) => {
    console.log(state)
  switch (action.type) {
    case "PAGE_NO_1":
      return [PageOne];
    case "PAGE_NO_2":
      return [...state, PageTwo];
    case "PAGE_NO_3":
    return [...state, PageThree];
    default:
      return state;
  }
};
