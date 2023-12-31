const lightColors = [
	'#39FF14',
	'#0AC2C8',
	'#FF2079',
	'#FF00F6',
	'#1B03A3',
	'#FF006E',
	'#FFD300',
	'#FF3700',
	'#00C2FF',
	'#001AFF',
	'#FFBD03',
	'#FF00C8',
	'#FF8E00',
	'#FF00BF',
	'#00FF85',
	'#00FFAA',
	'#00FF00',
	'#00FF1E',
	'#00FF55',
	'#00FF9A',
];

const darkColors = [
	'#1D2B64',
	'#7E2553',
	'#008751',
	'#AB5236',
	'#5F574F',
	'#C2C3C7',
	'#FF004D',
	'#FFA300',
	'#FFEC27',
	'#00E436',
	'#29ADFF',
	'#83769C',
	'#FF77A8',
	'#FFCCAA',
	'#291814',
	'#111D35',
	'#422136',
	'#125359',
	'#005452',
	'#1B2632',
];

const getRandomLightColor = () => {
	return lightColors[Math.floor(Math.random() * lightColors.length)];
};

const getRandomDarkColor = () => {
	return darkColors[Math.floor(Math.random() * darkColors.length)];
};

export { lightColors, darkColors, getRandomDarkColor, getRandomLightColor };
