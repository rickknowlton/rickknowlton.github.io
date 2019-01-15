// First Time Themes are inherent when page is loaded when labeled true

const themes = [{
    name: 'blue',
    active: true,
    colorPrimary: '#4ea9da',
    colorAlternate: '#FAFAFA',
    colorHighlight: '#4ea9da',
    textPrimary: '#FAFAFA',
    textEmphasis: '#313537',
    navAlpha: 'rgba(250, 250, 250, 0.75)'
  },
  {
    name: 'philly-green',
    active: true,
    colorPrimary: '#FAFAFA',
    colorAlternate: '#046A38',
    colorHighlight: '#28CC60',
    textPrimary: '#202121',
    textEmphasis: '#28CC60',
    navAlpha: 'rgba(4, 106, 56, 0.75)'
  },
  {
    name: 'philly-green-alt',
    active: true,
    colorPrimary: '#FAFAFA',
    colorAlternate: '#313537',
    colorHighlight: '#28CC60',
    textPrimary: '#313537',
    textEmphasis: '#28CC60',
    navAlpha: 'rgba(49, 53, 55, 0.75)'
  },
  {
    name: 'psu-blue',
    active: true,
    colorPrimary: '#174782',
    colorAlternate: '#FAFAFA',
    colorHighlight: '#174782',
    textPrimary: '#FAFAFA',
    textEmphasis: '#313537',
    navAlpha: 'rgba(250, 250, 250, 0.75)'
  },
  {
    name: 'pittsburgh-black',
    active: true,
    colorPrimary: '#FAFAFA',
    colorAlternate: '#313537',
    colorHighlight: '#FFC300',
    textPrimary: '#313537',
    textEmphasis: '#FFC300',
    navAlpha: 'rgba(49, 53, 55, 0.75)'
  },
  {
    name: 'cyan',
    active: true,
    colorPrimary: '#3dc0b0',
    colorAlternate: '#FAFAFA',
    colorHighlight: '#d7f2ef',
    textPrimary: '#202121',
    textEmphasis: '#313537',
    navAlpha: 'rgba(250, 250, 250, 0.75)'
  },
  {
    name: 'blue-alt',
    active: true,
    colorPrimary: '#FAFAFA',
    colorAlternate: '#4ea9da',
    colorHighlight: '#FAFAFA',
    textPrimary: '#2a93cb',
    textEmphasis: '#313537',
    navAlpha: 'rgba(78, 169, 218, 0.75)'
  },
  {
    name: 'cyan-alt',
    active: true,
    colorPrimary: '#FAFAFA',
    colorAlternate: '#3dc0b0',
    colorHighlight: '#FAFAFA',
    textPrimary: '#35a698',
    textEmphasis: '#313537',
    navAlpha: 'rgba(61, 192, 176, 0.75)'
  },
  {
    name: 'crimson-red',
    active: true,
    colorPrimary: '#e64f52',
    colorAlternate: '#FAFAFA',
    colorHighlight: '#fbe4e4',
    textPrimary: '#202121',
    textEmphasis: '#343955',
    navAlpha: 'rgba(250, 250, 250, 0.75)'
  },
  {
    name: 'red',
    active: true,
    colorPrimary: '#af3d4e',
    colorAlternate: '#FAFAFA',
    colorHighlight: '#f6e4e7',
    textPrimary: '#202121',
    textEmphasis: '#343955',
    navAlpha: 'rgba(250, 250, 250, 0.75)'
  },
  {
    name: 'red-alt',
    active: true,
    colorPrimary: '#FFFFFF',
    colorAlternate: '#89303d',
    colorHighlight: '#FFFFFF',
    textPrimary: '#63232c',
    textEmphasis: '#B3E8E0',
    navAlpha: 'rgba(137, 48, 61, 0.75)'
  },
  {
    name: 'indigo-alt',
    active: true,
    colorPrimary: '#FAFAFA',
    colorAlternate: '#303F9F',
    colorHighlight: '#FFFFFF',
    textPrimary: '#303F9F',
    textEmphasis: '#6CFDE7',
    navAlpha: 'rgba(48, 63, 159, .95)'
  },
  {
    name: 'grey-alt',
    active: true,
    colorPrimary: '#FFFFFF',
    colorAlternate: '#485564',
    colorHighlight: '#FFFFFF',
    textPrimary: '#333c46',
    textEmphasis: '#6CFDE7',
    navAlpha: 'rgba(72, 85, 100, 0.75)'
  },
  {
    name: 'material-cyan',
    active: true,
    colorPrimary: '#00BCD4',
    colorAlternate: '#FFFFFF',
    colorHighlight: '#d4faff',
    textPrimary: '#212121',
    textEmphasis: '#4DE0C1',
    navAlpha: 'rgba(255, 255, 255, 0.75)'
  },
  {
    name: 'material-grey',
    active: true,
    colorPrimary: '#607D8B',
    colorAlternate: '#FFFFFF',
    colorHighlight: '#dfe6e9',
    textPrimary: '#212121',
    textEmphasis: '#8EE9C6',
    navAlpha: 'rgba(255, 255, 255, 0.75)'
  },
  {
    name: 'material-grey-alt',
    active: true,
    colorPrimary: '#FFFFFF',
    colorAlternate: '#455A64',
    colorHighlight: '#FAFAFA',
    textPrimary: '#374850',
    textEmphasis: '#7CF8F4',
    navAlpha: 'rgba(69, 90, 100, 0.75)'
  }
];

export const getThemes = () => {
  return themes.map((theme) => {
    return {
      name: theme.name,
      active: theme.active,
      colorPrimary: theme.colorPrimary,
      colorAlternate: theme.colorAlternate,
      colorHighlight: theme.colorHighlight,
      bgPrimary: theme.colorAlternate,
      bgAlternate: theme.colorPrimary,
      bgLanding: theme.colorPrimary,
      textPrimary: theme.textPrimary,
      textEmphasis: theme.textEmphasis,
      textAlternate: theme.colorAlternate,
      textLanding: theme.colorPrimary,
      parallaxStars: theme.colorPrimary,
      navAlpha: theme.navAlpha
    };
  });
};