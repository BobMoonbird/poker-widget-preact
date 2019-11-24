export const APP_ID = '3074457347007443177';

export const CARDS_LIST = [
	{
		label: '0',
		value: 0,
	},
	{
		label: '½',
		value: 0.5,
	},
	{
		label: '1',
		value: 1,
	},
	{
		label: '2',
		value: 2,
	},
	{
		label: '3',
		value: 3,
	},
	{
		label: '5',
		value: 5,
	},
	{
		label: '10',
		value: 10,
	},
	{
		label: '20',
		value: 20,
	},
	{
		label: '40',
		value: 40,
	},
	{
		label: '100',
		value: 100,
	},
	{
		label: '☕',
		value: 'coffee',
	},
	{
		label: '∞',
		value: 'infinity',
	},
];

export const CARDS_MAP = CARDS_LIST.reduce((acc, item) => {
	acc[item.value] = item;
	return acc;
}, {});