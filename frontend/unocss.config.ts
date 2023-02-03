import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
export default defineConfig({
  shortcuts: [
    ['f-c-c', 'flex justify-center items-center'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),

  ],
  transformers: [
    transformerDirectives({ enforce: 'pre' }),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      primary: 'var(--primary-color)', // #316c72
      dark_bg: 'var(--dark-bg)', // #18181c
      link: 'var(--link)', // #007fff
      nav_icon_color: 'var(--jjext-color-navbar-icon)',
      jj_sec_app: 'var(--jjext-color-secondary-app)', // #4e5969
      jj_thirdly: 'var(--jjext-color-thirdly)', // #86909c
      jj_primary: 'var(--jjext-color-primary)', // #1d2129
      jj_hover_bg: 'var(--jjext-color-hover-bg)', // #e8f3ff
      jj_bg: 'var(--jjext-color-background)', // #f2f3f5
      jj_font_white: 'var(--jjext-color-font-white)', // #ffffff
      jj_font_black: 'var(--jjext-color-font-1)', // #252933
      jj_bg_gray: 'var(--jjext-color-bg-gray)', // #27272a
      jj_navigation: 'var(--juejin-navigation)',
      jj: {
        article: 'var(--juejin-background-article)',
        main: 'var(--juejin-background-main)',
        font: 'var(--juejin-h1-font-color)',
        span: 'var(--juejin-span-font-color)',
        p: 'var(--juejin-p-font-color)',
        light: 'var(--jjext-color-font-white)',
        hover: 'var(--juejin-color-bg-hover)',
        sidebar: 'var(--juejin-color-bg-sidebar)',
        content: 'var(--juejin-color-text-content)',
        container: 'var(--juejin-color-text-container)',
        containerhover: 'var(--juejin-color-container-hover)',
        border: 'var(--juejin-article-list-border)',
      },
    },
    breakpoints: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      mlg: '960px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
  },
})
