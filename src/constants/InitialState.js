import bluets from './../assets/bluets.jpg';
import cleaning from './../assets/cleaning.jpg';
import dark from './../assets/dark.jpg';
import eden from './../assets/eden.jpg';
import hungry from './../assets/hungry.jpg';
import notion from './../assets/notion.jpg';
import pond from './../assets/pond.jpg';
import road from './../assets/road.jpg';
import savage from './../assets/savage.jpg';
import toomuch from './../assets/toomuch.jpg';

export const initialState = {
  currentBookId: 1,
  booksById: {
    1: {
      title: 'The Road',
      author: 'Cormac McCarthy',
      year: 2006,
      read: false,
      readingNow: false,
      lineup: false,
      blurb: 'Ipsum',
      image: road
    },
    2: {
      title: 'The Dark Dark',
      author: 'Samantha Hunt',
      year: 2017,
      read: false,
      readingNow: false,
      lineup: false,
      blurb: 'Ipsum',
      image: dark
    },
    3: {
      title: 'Bluets',
      author: 'Maggie Nelson',
      year: 2009,
      read: false,
      readingNow: false,
      lineup: false,
      blurb: 'Ipsum',
      image: bluets
  },
  4: {
    title: 'Too Much and Not the Mood',
    author: 'Durga Chew-Bose',
    year: 2017,
    read: false,
    readingNow: false,
    lineup: false,
    blurb: 'Ipsum',
    image: toomuch
  },
  5: {
    title: 'Sometimes a Great Notion',
    author: 'Ken Kesey',
    year: 1977,
    read: false,
    readingNow: false,
    lineup: false,
    blurb: 'Ipsum',
    image: notion
  },
  6: {
    title: 'How We Are Hungry',
    author: 'Dave Eggers',
    year: 2005,
    read: false,
    readingNow: false,
    lineup: false,
    blurb: 'Ipsum',
    image: hungry
  },
  7: {
    title: 'Pond',
    author: 'Claire Louise-Bennet',
    year: 2015,
    read: false,
    readingNow: false,
    lineup: false,
    blurb: 'Ipsum',
    image: pond
  },
  8: {
    title: 'A Manual For Cleaning Women',
    author: 'Lucia Berlin',
    year: 2015,
    read: false,
    readingNow: false,
    lineup: false,
    blurb: 'Ipsum',
    image: cleaning
  },
  9: {
    title: 'The Savage Detectives',
    author: 'Roberto Bolano',
    year: 2007,
    read: false,
    readingNow: false,
    lineup: false,
    blurb: 'Ipsum',
    image: savage
  },
  10: {
    title: 'East of Eden',
    author: 'John Steinbeck',
    year: 1951,
    read: false,
    readingNow: false,
    lineup: false,
    blurb: 'Ipsum',
    image: eden
  },
};
