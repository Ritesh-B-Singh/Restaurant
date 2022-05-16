import images from './images';

const veg = [
  {
    title: 'Paneer Dum Biryani',
    price: '$33',
    tags: 'North Indian style paneer tikka cooked in spices along with an onion & capsicum layered with long Grain Premium Basmati rice.',
  },
  {
    title: 'Veg Hyderabadi Dum Biryani',
    price: '$63',
    tags: '4pcs veg galouti, 4pcs kaju seekh, 3pcs crispy corn stick, 4pcs kasturi paneer. Served with a spicy dip, mint chutney & onion salad. + 2 complimentary imli adraki lemonade',
  },
  {
    title: 'Paneer Tikka Biryani',
    price: '$44',
    tags: '[Served with salan] Fresh kathal [Jackfruit] pieces are marinated in a mixture of freshly ground BBK spices and layered with long grain basmati rice in the handi and slow cooked in the sealed handi',
  },
];

const nonVeg = [
  {
    title: 'Chicken Hyderabadi Dum Biryani',
    price: '$20',
    tags: '[served with salan] 1/2 kg contains 4 pcs fresh chicken are marinated in a mixture of freshly ground BBK spices',
  },
  {
    title: "Malamaal Murg Dum Biryani",
    price: '$16',
    tags: 'served with salan] for the meat lovers, extra boneless chicken marinated in a mixture of freshly ground BBK spices',
  },
  {
    title: 'Non Veg Platter',
    price: '$10',
    tags: '3pcs mutton galouti, 4pcs chicken seekh kebab, 5pcs tawa fish, 4pcs jamuni tikka.',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { veg, nonVeg, awards };
