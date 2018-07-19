import bluets from './../assets/images/bluets.jpg';
import cleaning from './../assets/images/cleaning.jpg';
import dark from './../assets/images/dark.jpg';
import eden from './../assets/images/eden.jpg';
import hungry from './../assets/images/hungry.jpg';
import notion from './../assets/images/notion.jpg';
import pond from './../assets/images/pond.jpg';
import road from './../assets/images/road.jpg';
import savage from './../assets/images/savage.jpg';
import toomuch from './../assets/images/toomuch.jpg';

const bookList = {
  1: {
    title: 'The Road',
    author: 'Cormac McCarthy',
    year: 2006,
    read: false,
    readingNow: false,
    lineup: false,
    blurb: 'Ipsum',
    image: road,
    id: 1
  },
  2: {
    title: 'The Dark Dark',
    author: 'Samantha Hunt',
    year: 2017,
    read: false,
    readingNow: false,
    lineup: false,
    blurb: 'Ipsum',
    image: dark,
    id: 2
  },
  3: {
    title: 'Bluets',
    author: 'Maggie Nelson',
    year: 2009,
    read: false,
    readingNow: false,
    lineup: false,
    blurb: 'Ipsum',
    image: bluets,
    id: 3
  },
  4: {
    title: 'Too Much and Not the Mood',
    author: 'Durga Chew-Bose',
    year: 2017,
    read: false,
    readingNow: false,
    lineup: false,
    blurb: 'Ipsum',
    image: toomuch,
    id: 4
  },
  5: {
    title: 'Sometimes a Great Notion',
    author: 'Ken Kesey',
    year: 1977,
    read: false,
    readingNow: false,
    lineup: false,
    blurb: 'Ipsum',
    image: notion,
    id: 5
  },
  6: {
    title: 'How We Are Hungry',
    author: 'Dave Eggers',
    year: 2005,
    read: false,
    readingNow: false,
    lineup: false,
    blurb: 'Ipsum',
    image: hungry,
    id: 6
  },
  7: {
    title: 'Pond',
    author: 'Claire Louise-Bennet',
    year: 2015,
    read: false,
    readingNow: false,
    lineup: false,
    blurb: 'Ipsum',
    image: pond,
    id: 7
  },
  8: {
    title: 'A Manual For Cleaning Women',
    author: 'Lucia Berlin',
    year: 2015,
    read: false,
    readingNow: false,
    lineup: false,
    blurb: 'Ipsum',
    image: cleaning,
    id: 8
  },
  9: {
    title: 'The Savage Detectives',
    author: 'Roberto Bolano',
    year: 2007,
    read: false,
    readingNow: false,
    lineup: false,
    blurb: 'Ipsum',
    image: savage,
    id: 9
  },
  10: {
    title: 'East of Eden',
    author: 'John Steinbeck',
    year: 1951,
    read: false,
    readingNow: false,
    lineup: false,
    blurb: 'Ipsum',
    image: eden,
    id: 10
  }
};

export const initialState = {
  bookList: bookList,
  selectedBook: null
};

export default bookList;
