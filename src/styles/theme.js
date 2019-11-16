/**
 * Author: Rahul Shetty
 * Date: 09/10/2019
 *
 * Common color palletes for the app.
 *
 * @flow
 */
const colors = {
  light: {
    black: '#000',
    white: '#fff',
    darkLimeGreen: '#73c700',
    brownGrey: '#999',
    persianRed: '#d32f2f',
    concrete: '#f3f3f3',
  },
  dark: {
    black: '#000',
    white: '#fff',
    darkLimeGreen: '#73c700',
    brownGrey: '#999',
    persianRed: '#d32f2f',
    concrete: '#f3f3f3',
  },
};
const setTheme = (activeTheme: string) => {
  return {
    color1: colors[activeTheme].black,
    color1_70: 'rgba(255, 255, 255, 0.7)',
    color1_50: 'rgba(255, 255, 255, 0.5)',
    color2: colors[activeTheme].black,
    color2_30: 'rgba(0, 0, 0, 0.3)',
    color3: colors[activeTheme].darkLimeGreen,
    color3_50: 'rgba(115, 199, 0, 0.3)',
    color4: colors[activeTheme].brownGrey,
    color5: colors[activeTheme].persianRed,
    color6: colors[activeTheme].concrete,
    color6_0: 'rgba(245, 245, 245, 0)',
  };
};

export default setTheme;
