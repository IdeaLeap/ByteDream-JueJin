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
      nav_icon_color: 'var(--jjext-color-navbar-icon)', // #eaf2ff
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
        thirdly: 'var(--jjext-color-thirdly)', // #86909c
        fourthly: 'var(--jjext-color-fourthly)', // #c9cdd4
        article: 'var(--juejin-background-article)', // #ffffff
        main: 'var(--juejin-background-main)', // #f4f5f5
        font: {
          normal: 'var(--juejin-h1-font-color)', // #252933
          entry: {
            normal: 'var(--jjext-color-font-3)', // #8a919f
          },
        },
        span: 'var(--juejin-span-font-color)', // #515767
        p: 'var(--juejin-p-font-color)', // #000000
        light: 'var(--jjext-color-font-white)', // #fff
        hover: 'var(--juejin-color-bg-hover)', // #FAFAFA
        brand: {
          font: {
            normal: 'var(--juejin-font-brand1-normal)', // #1e80ff
          },
          normal: 'var(--juejin-brand-1-normal)', // #1e80ff
          light: {
            normal: 'var(--jjext-color-brand-5-light)', // #eaf2ff
          },
        },
        sidebar: 'var(--juejin-color-bg-sidebar)', // #fff
        content: 'var(--juejin-color-text-content)', // #1D2129
        container: {
          normal: 'var(--juejin-color-text-container)', // #333333
          hover: {
            normal: 'var(--juejin-color-container-hover)', // #F7F8FA
          },
        },
        border: {
          normal: 'var(--juejin-article-list-border)', // #e4e6eb
          bottom: {
            normal: 'var(--juejin-border-bottom)', // #e4e6eb
          },
        },
        stroke: {
          normal: 'var(--juejin-brand-stroke1-normal)', // rgba(30,128,255,0.3)
        },
        gray: {
          normal: 'var(--jjext-color-gray-4)', // #909090
          text: {
            normal: 'var(--jjext-color-font-2)', // #515767
          },
          panel: {
            normal: 'var(--jjext-color-font-4)', // #c2c8d1
          },
          divider: {
            normal: 'var(--jjext-color-gray-1-1)', // #e4e6eb
          },
        },
        black: {
          normal: 'var(--juejin-p-font-color)', // #000
        },
        link: {
          normal: 'var(--link)', // #007fff
          red: {
            var: 'var(--jjext-color-link-red)', // #ff0000
          },
        },
        blue: {
          normal: 'var(--jjext-color-brand)', // #1e80ff
          fill: {
            narmal: 'var(--juejin-color-fill)', // #3686ff
          },
        },
        tag: {
          normal: 'var(--jjext-color-tag-list)', // rgba(30, 128, 255, 0.16)
        },
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
