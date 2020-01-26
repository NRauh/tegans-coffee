import Typography from 'typography';
import ThemeColors from './theme';

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

  overrideStyles() {
    return {
      '*': {
        color: ThemeColors.dark,
      },

      a: {
        color: ThemeColors.link,
      },
      'a:hover': {
        color: ThemeColors.linkHover,
      },

      p: {
        textAlign: 'justify',
      },
    };
  },
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const { rhythm, scale } = typography;
