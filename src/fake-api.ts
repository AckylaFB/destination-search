import { Destination } from '@/@types';

export const fetchDestinations = (query: string): Promise<Destination[]> => {
	console.log(`fake-api called with parameter: ${query}`);

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (query.toLowerCase() === 'fail') {
				reject(new Error('Simulated API failure'));
			} else {
				const results = destinations.filter((destination) =>
					destination.name.toLowerCase().includes(query.toLowerCase()),
				);
				resolve(results);
			}
		}, 500);
	});
};

export const fetchTrendingDestinations = (): Promise<Destination[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const shuffledDestinations = [...destinations];

			for (let i = shuffledDestinations.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[shuffledDestinations[i], shuffledDestinations[j]] = [
					shuffledDestinations[j],
					shuffledDestinations[i],
				];
			}

			resolve(shuffledDestinations.slice(0, 5));
		}, 500);
	});
};

const destinations = [
	{
		id: 1,
		name: 'Paris, France',
		description:
			'The City of Light, known for its iconic Eiffel Tower and world-class cuisine.',
		country: 'France',
		climate: 'Mild',
		currency: 'Euro',
		latitude: 48.8566,
		longitude: 2.3522,
		imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34', // Image of Eiffel Tower, Paris
	},
	{
		id: 2,
		name: 'Rome, Italy',
		description:
			'The Eternal City, home to ancient ruins like the Colosseum and Roman Forum.',
		country: 'Italy',
		climate: 'Mediterranean',
		currency: 'Euro',
		latitude: 41.9028,
		longitude: 12.4964,
		imageUrl: 'https://images.unsplash.com/photo-1568572933382-74d440642117', // Image of Colosseum, Rome
	},
	{
		id: 3,
		name: 'Barcelona, Spain',
		description:
			'A vibrant city famous for its unique architecture, including the Sagrada Familia.',
		country: 'Spain',
		climate: 'Mediterranean',
		currency: 'Euro',
		latitude: 41.3851,
		longitude: 2.1734,
		imageUrl: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce', // Image of Sagrada Familia, Barcelona
	},
	{
		id: 4,
		name: 'Amsterdam, Netherlands',
		description:
			'Known for its picturesque canals, historic houses, and vibrant art scene.',
		country: 'Netherlands',
		climate: 'Maritime',
		currency: 'Euro',
		latitude: 52.3702,
		longitude: 4.8952,
		imageUrl: 'https://images.unsplash.com/photo-1537022368-7ff8c74fbf8b', // Image of Canals, Amsterdam
	},
	{
		id: 5,
		name: 'Prague, Czech Republic',
		description:
			'The City of a Hundred Spires, famous for its medieval Old Town and Prague Castle.',
		country: 'Czech Republic',
		climate: 'Temperate',
		currency: 'Czech Crown',
		latitude: 50.0755,
		longitude: 14.4378,
		imageUrl: 'https://images.unsplash.com/photo-1528305246944-0bba1e5c8a2a', // Image of Charles Bridge, Prague
	},
	{
		id: 6,
		name: 'Athens, Greece',
		description:
			'The birthplace of democracy, with ancient landmarks like the Acropolis and Parthenon.',
		country: 'Greece',
		climate: 'Mediterranean',
		currency: 'Euro',
		latitude: 37.9838,
		longitude: 23.7275,
		imageUrl: 'https://images.unsplash.com/photo-1559370368-e4840d9d3722', // Image of Parthenon, Athens
	},
	{
		id: 7,
		name: 'Budapest, Hungary',
		description:
			'A city of thermal baths, stunning architecture, and the Danube River.',
		country: 'Hungary',
		climate: 'Continental',
		currency: 'Hungarian Forint',
		latitude: 47.4979,
		longitude: 19.0402,
		imageUrl: 'https://images.unsplash.com/photo-1512395760157-dc0c32f23a07', // Image of Parliament, Budapest
	},
	{
		id: 8,
		name: 'Dubrovnik, Croatia',
		description:
			'A coastal gem known for its well-preserved medieval walls and stunning Adriatic Sea views.',
		country: 'Croatia',
		climate: 'Mediterranean',
		currency: 'Croatian Kuna',
		latitude: 42.6507,
		longitude: 18.0944,
		imageUrl: 'https://images.unsplash.com/photo-1563910340133-f14ba5d02cf0', // Image of Old Town, Dubrovnik
	},
	{
		id: 9,
		name: 'Vienna, Austria',
		description:
			'A city of imperial palaces, classical music, and rich cultural heritage.',
		country: 'Austria',
		climate: 'Continental',
		currency: 'Euro',
		latitude: 48.2082,
		longitude: 16.3738,
		imageUrl: 'https://images.unsplash.com/photo-1573495612937-dc6e62f81f5a', // Image of St. Charles Church, Vienna
	},
	{
		id: 10,
		name: 'Edinburgh, Scotland',
		description:
			'The capital of Scotland, known for its historic and cultural attractions.',
		country: 'United Kingdom',
		climate: 'Maritime',
		currency: 'Pound Sterling',
		latitude: 55.9533,
		longitude: 3.1883,
		imageUrl: 'https://images.unsplash.com/photo-1552155448-15d6a0912ddf', // Image of Edinburgh Castle, Edinburgh
	},
	{
		id: 11,
		name: 'Berlin, Germany',
		description:
			'A vibrant city with a rich history, known for its art, music, and nightlife.',
		country: 'Germany',
		climate: 'Temperate',
		currency: 'Euro',
		latitude: 52.52,
		longitude: 13.405,
		imageUrl: 'https://images.unsplash.com/photo-1566852623388-0c37305318e2', // Image of Brandenburg Gate, Berlin
	},
	{
		id: 12,
		name: 'Lisbon, Portugal',
		description:
			'A coastal city known for its stunning views, historic neighborhoods, and seafood.',
		country: 'Portugal',
		climate: 'Mediterranean',
		currency: 'Euro',
		latitude: 38.7223,
		longitude: 9.1393,
		imageUrl: 'https://images.unsplash.com/photo-1551892589-865f69869434', // Image of Belem Tower, Lisbon
	},
	{
		id: 13,
		name: 'Stockholm, Sweden',
		description:
			'A city spread across 14 islands, known for its modern design and historic sites.',
		country: 'Sweden',
		climate: 'Maritime',
		currency: 'Swedish Krona',
		latitude: 59.3293,
		longitude: 18.0686,
		imageUrl: 'https://images.unsplash.com/photo-1551799341-a63d4788b174', // Image of Gamla Stan, Stockholm
	},
	{
		id: 14,
		name: 'Krakow, Poland',
		description:
			'A historic city with a well-preserved medieval core and vibrant cultural scene.',
		country: 'Poland',
		climate: 'Temperate',
		currency: 'Polish Złoty',
		latitude: 50.0647,
		longitude: 19.945,
		imageUrl: 'https://images.unsplash.com/photo-1557841348-b5663c340025', // Image of Main Market Square, Krakow
	},
	{
		id: 15,
		name: 'Reykjavik, Iceland',
		description:
			'The capital of Iceland, known for its geothermal pools, glaciers, and volcanoes.',
		country: 'Iceland',
		climate: 'Maritime',
		currency: 'Icelandic Króna',
		latitude: 64.1466,
		longitude: -21.9426,
		imageUrl: 'https://images.unsplash.com/photo-1575384066017-bcd811c00454', // Image of Reykjavik Cityscape
	},
	{
		id: 16,
		name: 'Florence, Italy',
		description:
			'A city famous for its Renaissance art, architecture, and historic landmarks.',
		country: 'Italy',
		climate: 'Mediterranean',
		currency: 'Euro',
		latitude: 43.7696,
		longitude: 11.2558,
		imageUrl: 'https://images.unsplash.com/photo-1519512996018-9f5f39bcb130', // Image of Florence Cathedral
	},
	{
		id: 17,
		name: 'Dublin, Ireland',
		description:
			'The capital of Ireland, known for its rich literary and cultural heritage.',
		country: 'Ireland',
		climate: 'Maritime',
		currency: 'Euro',
		latitude: 53.3498,
		longitude: -6.2603,
		imageUrl: 'https://images.unsplash.com/photo-1590330634813-2c2e7357ea4b', // Image of Temple Bar, Dublin
	},
	{
		id: 18,
		name: 'Oslo, Norway',
		description:
			'The capital of Norway, known for its scenic fjords, museums, and vibrant culture.',
		country: 'Norway',
		climate: 'Maritime',
		currency: 'Norwegian Krone',
		latitude: 59.9139,
		longitude: 10.7522,
		imageUrl: 'https://images.unsplash.com/photo-1541199249251-f713e6145474', // Image of Oslo Opera House
	},
	{
		id: 19,
		name: 'Helsinki, Finland',
		description:
			'The capital of Finland, known for its design, architecture, and lakeside charm.',
		country: 'Finland',
		climate: 'Temperate',
		currency: 'Euro',
		latitude: 60.1699,
		longitude: 24.9384,
		imageUrl: 'https://images.unsplash.com/photo-1535481395974-c658ff38d13b', // Image of Helsinki Cathedral
	},
	{
		id: 20,
		name: 'Madrid, Spain',
		description:
			'The capital of Spain, known for its art, culture, and vibrant nightlife.',
		country: 'Spain',
		climate: 'Mediterranean',
		currency: 'Euro',
		latitude: 40.4168,
		longitude: -3.7038,
		imageUrl: 'https://images.unsplash.com/photo-1566150900385-cf98ed4a00ad', // Image of Royal Palace, Madrid
	},
];
