import cleaning from './../assets/images/cleaning.jpg';
import bluets from './../assets/images/bluets.jpg';
import dark from './../assets/images/dark.jpg';
import eden from './../assets/images/eden.jpg';
import hungry from './../assets/images/hungry.jpg';
import notion from './../assets/images/notion.jpg';
import pond from './../assets/images/pond.jpg';
import road from './../assets/images/road.jpg';
import savage from './../assets/images/savage.jpg';
import toomuch from './../assets/images/toomuch.jpg';
import world from './../assets/images/coates.jpg';

export const initialState = {
  selectedBook: null,
  bookList: {
    1: {
      title: 'The Road',
      author: 'Cormac McCarthy',
      year: ' September 2006',
      read: false,
      readingNow: false,
      lineup: false,
      blurb: 'A searing, post apocalyptic novel destined to become Cormac McCarthy’s masterpiece. A father and his son walk alone through burned America. Nothing moves in the ravaged landscape save the ash on the wind. It is cold enough to crack stones, and when the snow falls it is gray. The sky is dark. Their destination is the coast, although they don’t know what, if anything, awaits them there. They have nothing; just a pistol to defend themselves against the lawless bands that stalk the road, the clothes they are wearing, a cart of scavenged food—and each other.',
      image: road,
      id: 1
    },
    2: {
      title: 'The Dark Dark',
      author: 'Samantha Hunt',
      year: ' July 2017',
      read: true,
      readingNow: false,
      lineup: false,
      blurb: 'Strange things happen all around us all the time, but is it best to acknowledge or to turn away from moments when the weird pokes its way into our ordinary lives?',
      image: dark,
      id: 2
    },
    3: {
      title: 'Bluets',
      author: 'Maggie Nelson',
      year: 'October 2009',
      read: true,
      readingNow: false,
      lineup: false,
      blurb: 'A lyrical, philosophical, and often explicit exploration of personal suffering and the limitations of vision and love, as refracted through the color blue. With Bluets, Maggie Nelson has entered the pantheon of brilliant lyric essayists.',
      image: bluets,
      id: 3
    },
    4: {
      title: 'Too Much and Not the Mood',
      author: 'Durga Chew-Bose',
      year: 'April 2017',
      read: false,
      readingNow: false,
      lineup: true,
      blurb: 'On April 11, 1931, Virginia Woolf ended her entry in A Writer’s Diary with the words “too much and not the mood.” She was describing how tired she was of correcting her own writing, of the “cramming in and the cutting out” to please other readers, wondering if she had anything at all that was truly worth saying. Too Much and Not the Mood is a beautiful and surprising exploration of what it means to be a first-generation, creative young woman working today.',
      image: toomuch,
      id: 4
    },
    5: {
      title: 'Sometimes a Great Notion',
      author: 'Ken Kesey',
      year: 'January 1964',
      read: false,
      readingNow: false,
      lineup: false,
      blurb: 'Following the astonishing success of his first novel, One Flew Over the Cuckoos Nest, Ken Kesey wrote what Charles Bowden calls "one of the few essential books written by an American in the last half century." This wild-spirited tale tells of a bitter strike that rages through a small lumber town along the Oregon coast. Bucking that strike out of sheer cussedness are the Stampers. Out of the Stamper familys rivalries and betrayals Ken Kesey has crafted a novel with the mythic impact of Greek tragedy.',
      image: notion,
      id: 5
    },
    6: {
      title: 'How We Are Hungry',
      author: 'Dave Eggers',
      year: 'October 2005',
      read: false,
      readingNow: false,
      lineup: true,
      blurb: 'SHort stories includes Another, What It Means When a Crowd in a Faraway Nation Takes a Soldier Representing Your Own Nation, Shoots Him, Drags Him from His Vehicle and Then Mutilates Him in the Dust, The Only Meaning of the Oil-Wet Water, and more.',
      image: hungry,
      id: 6
    },
    7: {
      title: 'Pond',
      author: 'Claire Louise-Bennet',
      year: 'April 2015',
      read: false,
      readingNow: false,
      lineup: false,
      blurb: 'Feverish and forthright, Pond is an absorbing chronicle of the pitfalls and pleasures of a solitudinous life told by an unnamed woman living on the cusp of a coastal town. Broken bowls, belligerent cows, swanky aubergines, trembling moonrises and horrifying sunsets, the physical world depicted in these stories is unsettling yet intimately familiar and soon takes on a life of its own. Captivated by the stellar charms of seclusion but restless with desire, the woman’s relationship with her surroundings becomes boundless and increasingly bewildering. Claire-Louise Bennett’s startlingly original first collection slips effortlessly between worlds and is by turns darkly funny and deeply moving.',
      image: pond,
      id: 7
    },
    8: {
      title: 'A Manual For Cleaning Women',
      author: 'Lucia Berlin',
      year: 'August 2015',
      read: false,
      readingNow: false,
      lineup: false,
      blurb: 'A MANUAL FOR CLEANING WOMEN compiles the best work of the legendary short-story writer Lucia Berlin. With the grit of Raymond Carver, the humor of Grace Paley, and a blend of wit and melancholy all her own, Berlin crafts miracles from the everyday, uncovering moments of grace in the Laundromats and halfway houses of the American Southwest, in the homes of the Bay Area upper class, among switchboard operators and struggling mothers, hitchhikers and bad Christians.',
      image: cleaning,
      id: 8
    },
    9: {
      title: 'The Savage Detectives',
      author: 'Roberto Bolano',
      year: 'April 1998',
      read: false,
      readingNow: false,
      lineup: false,
      blurb: 'New Year’s Eve, 1975: Arturo Belano and Ulises Lima, founders of the visceral realist movement in poetry, leave Mexico City in a borrowed white Impala. Their quest: to track down the obscure, vanished poet Cesárea Tinajero. A violent showdown in the Sonora desert turns search to flight; twenty years later Belano and Lima are still on the run.',
      image: savage,
      id: 9
    },
    10: {
      title: 'East of Eden',
      author: 'John Steinbeck',
      year: 'September 1952',
      read: false,
      readingNow: false,
      lineup: true,
      blurb: 'In his journal, Nobel Prize winner John Steinbeck called East of Eden “the first book,” and indeed it has the primordial power and simplicity of myth. Set in the rich farmland of California’s Salinas Valley, this sprawling and often brutal novel follows the intertwined destinies of two families—the Trasks and the Hamiltons—whose generations helplessly reenact the fall of Adam and Eve and the poisonous rivalry of Cain and Abel.',
      image: eden,
      id: 10
    },
    11: {
      title: 'Between the World and Me',
      author: 'Ta-Nehisi Coates',
      year: 'June 2015',
      read: false,
      readingNow: false,
      lineup: false,
      blurb: 'In a profound work that pivots from the biggest questions about American history and ideals to the most intimate concerns of a father for his son, Ta-Nehisi Coates offers a powerful new framework for understanding our nation’s history and current crisis. Americans have built an empire on the idea of “race,” a falsehood that damages us all but falls most heavily on the bodies of black women and men—bodies exploited through slavery and segregation, and, today, threatened, locked up, and murdered out of all proportion. What is it like to inhabit a black body and find a way to live within it? And how can we all honestly reckon with this fraught history and free ourselves from its burden?',
      image: world,
      id: 10
    }
  }
};
