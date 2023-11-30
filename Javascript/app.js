const brands = [
    'Addidas',
    'Nike',
    'Lacoste',
    'Vans',
    'Levis',
    'Guess',
    'Gant',
    'Jeep',
    'Fabi',
    'DC',
];

for (const shoes of brands) {
    console.log(shoes)
}


const chocolate = [
    {
        name: 'Snikers',
        price: '1.70 Gel',
        size: ['Small', 'Medium', 'Large'],
    },
    {
        name: 'Baunti',
        price: '1.60 Gel',
        size: ['Small', 'Medium', 'Large'],
    },
    {
        name: 'Twix',
        price: '1.70 Gel',
        size: ['Small', 'Medium', 'Large'],
    },
    {
        name: 'Mars',
        price: '1.60 Gel',
        size: ['Small', 'Medium', 'Large'],
    },
    {
        name: 'Nesquick',
        price: '1.50 Gel',
        size: ['Small', 'Medium', 'Large'],
    },
];

for (let i = 0; i < chocolate.length; i++) {
    for (let j = 0; j < chocolate[i].size.length; j++) {
        console.log(chocolate[i].size[j]);
    }
}