const products = [
  {
    id: 5,
    name: 'Calgary Flames',
    routeName: 'flames',
    items: [
      {
        id: 1,
        name: 'Matthew Tkachuk Jersey',
        imageUrl: './imgs/flames/tkachuk-jersey.jpeg',
        price: 129.99
      },
      {
        id: 2,
        name: 'Mark Giordano Jersey',
        imageUrl: './imgs/flames/giordano-jersey.jpeg',
        price: 129.99
      },
      {
        id: 3,
        name: 'Johnny Gaudreau Jersey',
        imageUrl: './imgs/flames/gaudreau-jersey.jpeg',
        price: 139.99
      },
      {
        id: 4,
        name: 'Flames Hat',
        imageUrl: './imgs/flames/flames-hat.jpeg',
        price: 19.99
      },
      {
        id: 5,
        name: 'Flames Sweatshirt',
        imageUrl: './imgs/flames/flames-sweatshirt.jpeg',
        price: 59.99
      },
      {
        id: 6,
        name: 'Flames T-shirt',
        imageUrl: './imgs/flames/flames-tshirt.jpeg',
        price: 39.99
      }
    ]
  },
  {
    id: 12,
    name: 'Edmonton Oilers',
    routeName: 'oilers',
    items: [
      {
        id: 1,
        name: 'Connor Mcdavid Jersey',
        imageUrl: './imgs/oilers/mcdavid-jersey.jpeg',
        price: 159.99
      },
      {
        id: 2,
        name: 'Connor Mcdavid Alternate Jersey',
        imageUrl: './imgs/oilers/mcdavid-jersey-alternate.jpeg',
        price: 169.99
      },
      {
        id: 3,
        name: 'Leon Draisaitl Jersey',
        imageUrl: './imgs/oilers/draisaitl-jersey.jpeg',
        price: 149.99
      },
      {
        id: 4,
        name: 'Oilers Hat',
        imageUrl: './imgs/oilers/oilers-hat.jpeg',
        price: 24.99
      },
      {
        id: 5,
        name: 'Oilers Sweatshirt',
        imageUrl: './imgs/oilers/oilers-sweatshirt.jpeg',
        price: 69.99
      },
      {
        id: 6,
        name: 'Oilers T-shirt',
        imageUrl: './imgs/oilers/oilers-tshirt.jpeg',
        price: 49.99
      }
    ]
  },
  {
    id: 16,
    name: 'Montreal Canadiens',
    routeName: 'canadiens',
    items: [
      {
        id: 1,
        name: 'Max Domi Jersey',
        imageUrl: './imgs/canadiens/domi-jersey.jpeg',
        price: 149.99
      },
      {
        id: 2,
        name: 'Carey Price Jersey',
        imageUrl: './imgs/canadiens/price-jersey.jpeg',
        price: 169.99
      },
      {
        id: 3,
        name: 'Brendan Gallagher Jersey',
        imageUrl: './imgs/canadiens/gallagher-jersey.jpeg',
        price: 139.99
      },
      {
        id: 4,
        name: 'Habs Hat',
        imageUrl: './imgs/canadiens/habs-hat.jpeg',
        price: 29.99
      },
      {
        id: 5,
        name: 'Habs Sweatshirt',
        imageUrl: './imgs/canadiens/habs-sweatshirt.jpeg',
        price: 79.99
      },
      {
        id: 6,
        name: 'Habs T-shirt',
        imageUrl: './imgs/canadiens/habs-tshirt.jpeg',
        price: 54.99
      }
    ]
  },
  {
    id: 21,
    name: 'Ottawa Senators',
    routeName: 'senators',
    items: [
      {
        id: 1,
        name: 'Brady Tkachuk Jersey',
        imageUrl: './imgs/senators/tkachuk-jersey.jpeg',
        price: 159.99
      },
      {
        id: 2,
        name: 'Thomas Chabot Jersey',
        imageUrl: './imgs/senators/chabot-jersey.jpeg',
        price: 159.99
      },
      {
        id: 3,
        name: 'Jean-Gabriel Pageau Jersey',
        imageUrl: './imgs/senators/pageau-jersey.jpeg',
        price: 136.99
      },
      {
        id: 4,
        name: 'Senators Hat',
        imageUrl: './imgs/senators/sens-hat.jpeg',
        price: 21.99
      },
      {
        id: 5,
        name: 'Senators Sweatshirt',
        imageUrl: './imgs/senators/sens-sweatshirt.jpeg',
        price: 64.99
      },
      {
        id: 6,
        name: 'Senators T-shirt',
        imageUrl: './imgs/senators/sens-tshirt.jpeg',
        price: 35.99
      }
    ]
  },
  {
    id: 27,
    name: 'Toronto Maple Leafs',
    routeName: 'leafs',
    items: [
      {
        id: 1,
        name: 'Auston Matthews Jersey',
        imageUrl: './imgs/leafs/matthews-jersey.jpeg',
        price: 199.99
      },
      {
        id: 2,
        name: 'Mitch Marner Jersey',
        imageUrl: './imgs/leafs/marner-jersey.jpeg',
        price: 194.99
      },
      {
        id: 3,
        name: 'John Tavares Jersey',
        imageUrl: './imgs/leafs/tavares-jersey.jpeg',
        price: 191.99
      },
      {
        id: 4,
        name: 'Leafs Hat',
        imageUrl: './imgs/leafs/leafs-hat.jpeg',
        price: 39.99
      },
      {
        id: 5,
        name: 'Leafs Sweatshirt',
        imageUrl: './imgs/leafs/leafs-sweatshirt.jpeg',
        price: 84.99
      },
      {
        id: 6,
        name: 'Leafs T-shirt',
        imageUrl: './imgs/leafs/leafs-tshirt.jpeg',
        price: 44.99
      }
    ]
  },
  {
    id: 28,
    name: 'Vancouver Canucks',
    routeName: 'canucks',
    items: [
      {
        id: 1,
        name: 'Elias Pettersson Jersey',
        imageUrl: './imgs/canucks/pettersson-jersey.jpeg',
        price: 164.99
      },
      {
        id: 2,
        name: 'Quinn Hughes Jersey',
        imageUrl: './imgs/canucks/hughes-jersey.jpeg',
        price: 159.99
      },
      {
        id: 3,
        name: 'Canucks Hat',
        imageUrl: './imgs/canucks/canucks-hat.jpeg',
        price: 24.99
      },
      {
        id: 4,
        name: 'Canucks Sweatshirt',
        imageUrl: './imgs/canucks/canucks-sweatshirt.jpeg',
        price: 84.99
      },
      {
        id: 5,
        name: 'Canucks T-shirt',
        imageUrl: './imgs/canucks/canucks-tshirt.jpeg',
        price: 39.99
      }
    ]
  },
  {
    id: 31,
    name: 'Winnipeg Jets',
    routeName: 'jets',
    items: [
      {
        id: 1,
        name: 'Patrik Laine Jersey',
        imageUrl: './imgs/jets/laine-jersey.jpeg',
        price: 144.99
      },
      {
        id: 2,
        name: 'Mark Scheifele Jersey',
        imageUrl: './imgs/jets/scheifele-jersey.jpeg',
        price: 169.99
      },
      {
        id: 3,
        name: 'Blake Wheeler Jersey',
        imageUrl: './imgs/jets/wheeler-jersey.jpeg',
        price: 179.99
      },
      {
        id: 4,
        name: 'Jets Hat',
        imageUrl: './imgs/jets/jets-hat.jpeg',
        price: 25.99
      },
      {
        id: 5,
        name: 'Jets Sweatshirt',
        imageUrl: './imgs/jets/jets-sweatshirt.jpeg',
        price: 63.99
      },
      {
        id: 6,
        name: 'Jets T-shirt',
        imageUrl: './imgs/jets/jets-tshirt.jpeg',
        price: 37.99
      }
    ]
  }
];

export default products;
