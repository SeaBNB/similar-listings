import axios from 'axios';
import React from 'react';
import { shallow, mount, render } from 'enzyme'; 
import { shallowToJson } from 'enzyme-to-json';

import SimilarListings from '../client/src/similarListings';
import Listing from '../client/src/listing';

jest.mock('axios');

const listing = {
  "url":"mockUrl",
  "title":"nostrum laboriosam in rerum officiis",
  "type":"Shared Room",
  "numBeds":2,
  "price":810,
  "numRatings":965,
  "avgStars":0.5,
  "thumbnailImage":"mockImageUrl"
};
const fakeData = [];
for (let i = 0; i < 10; i++) {
  const newListing = Object.assign({id: i}, listing);
  fakeData.push(newListing);
}


describe('Similar Listings', () => {
  axios.get.mockResolvedValue({ data: fakeData});

  test('fetches data with axios', () => {
    const wrapper = mount(<SimilarListings id={0} />);
    expect(axios.get.mock.calls.length).toBe(1);
  });

  test('creates a div with class "similar-listings"', () => {
    const wrapper = shallow(<SimilarListings id={0} />);
    expect(wrapper.find('.similar-listings').length).toBe(1);
  });

  test('creates a div with class "similar-listings-ribbon"', () => {
    const wrapper = shallow(<SimilarListings id={0} />);
    expect(wrapper.find('.similar-listings-ribbon').length).toBe(1);
  });
});