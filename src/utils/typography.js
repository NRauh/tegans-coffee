import Typography from 'typography';
import { themeColors } from './theme';

const typography = new Typography({
  baseFontSize: '21px',
  baseLineHeight: 1.8,
  scaleRatio: 2.5,
  headerFontFamily: ['Karla', 'sans-serif'],
  bodyFontFamily: ['Lora', 'serif'],
  googleFonts: [
    {
      name: 'Karla',
      styles: ['700'],
    },
    {
      name: 'Lora',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,

  overrideStyles(typography, options, styles) {
    return {
      a: {
        color: themeColors.link,
      },
      'a:hover': {
        color: themeColors.linkActive,
      },
    };
  },
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
