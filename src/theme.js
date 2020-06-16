import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
  light: '#fafafa',
  dark: '#282c34'
});

export const textColor = theme('mode', {
  light: '#191919',
  dark: '#fafafa'
});

export const buttonBackgroundColor = theme('mode', {
  light: '#282c34',
  dark: '#eee'
});

export const buttonTextColor = theme('mode', {
  light: '#eee',
  dark: '#222'
});