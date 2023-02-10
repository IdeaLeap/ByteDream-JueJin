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
      jj_navigation: 'var(--juejin-navigation)', // #fff //#181818
      jj: {
        thirdly: 'var(--jjext-color-thirdly)', // #86909c
        fourthly: 'var(--jjext-color-fourthly)', // #c9cdd4
        article: 'var(--juejin-background-article)', // #ffffff //#27272a
        main: 'var(--juejin-background-main)', // #f4f5f5 //#18181c
        font: {
          normal: 'var(--juejin-h1-font-color)', // #252933 #ffffff
          entry: {
            normal: 'var(--jjext-color-font-3)', // #8a919f
          },
        },
        span: 'var(--juejin-span-font-color)', // #515767 #f7f8fa
        p: 'var(--juejin-p-font-color)', // #000000 #f4f4f5
        light: 'var(--jjext-color-font-white)', // #fff
        hover: 'var(--juejin-color-bg-hover)', // #FAFAFA #333
        brand: {
          font: {
            normal: 'var(--juejin-font-brand1-normal)', // #1e80ff #4495ff
          },
          normal: 'var(--juejin-brand-1-normal)', // #1e80ff #2986ff
          light: {
            normal: 'var(--jjext-color-brand-5-light)', // #eaf2ff
          },
        },
        sidebar: 'var(--juejin-color-bg-sidebar)', // #fff #27272a
        content: 'var(--juejin-color-text-content)', // #1D2129 #ffffff
        container: {
          normal: 'var(--juejin-color-text-container)', // #333333 #ffffff
          hover: {
            normal: 'var(--juejin-color-container-hover)', // #F7F8FA #333
          },
        },
        border: {
          normal: 'var(--juejin-article-list-border)', // #e4e6eb #212123
          bottom: {
            normal: 'var(--juejin-border-bottom)', // #e4e6eb #1e80ff
          },
          catalog: {
            normal: 'var(--jjext-color-gray-1-1)', // #e4e6eb
          },
          dropdown: {
            normal: 'var(--jjext-color-border-drop-down)', // #ebebeb
          },
          more: {
            normal: 'var(--jjext-color-more-list-border)', // #ddd
          },
          sign: {
            normal: 'var(--juejin-border-sign)', // #8dbfff //#2F5D99
          },
          hover: {
            normal: 'var(--juejin-hover-sign)', // #e8f2ff //#315078
          },
          category: {
            normal: 'var(--juejin-category-popover-border)', // #ebebeb //#201f1f
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
          container: {
            normal: 'var(--jjext-color-link-continer)', // #333
          },
          drop: {
            normal: 'var(--jjext-color-drop-down)', // #909097
          },
          more: {
            normal: 'var(--jjext-color-more-list)', // #9aa3ab
          },
          icon: {
            normal: 'var(--juejin-list-icon-hover)', // #f2f3f5 //#515767
          },
        },
        black: {
          normal: 'var(--juejin-p-font-color)', // #000 //#f4f4f5
          tooltip: {
            normal: 'var(--jjext-color-popover)', // rgba(0, 0, 0, 0.8)
          },
          dropdown: {
            normal: 'var(--jjext-color-hover-drop-down)', // #111
          },
        },
        link: {
          normal: 'var(--link)', // #007fff
          red: {
            normal: 'var(--jjext-color-link-red)', // #ff0000
          },
        },
        blue: {
          normal: 'var(--jjext-color-brand)', // #1e80ff
          fill: {
            normal: 'var(--jjext-color-fill)', // #3686ff
          },
        },
        tag: {
          normal: 'var(--jjext-color-tag-list)', // rgba(30, 128, 255, 0.16)
          item: 'var(--juejin-background-article)',
        },
        dropdown: {
          normal: 'var(--jjext-color-background-drop-down)', // #fafafb
        },
        button: {
          normal: 'var(--jjext-color-button-text)', // #2885FF
          background: {
            normal: 'var(--jjext-color-button-background)', // #F4F9FF
          },
          primary: {
            normal: 'var(--jjext-color-button-primary-hover)', // #388EFF
          },
          plain: {
            normal: 'var(--jjext-color-button-plain-hover)', // #E8F2FF
          },
          sign: {
            normal: 'var(--juejin-background-sign-button)', // #f4f9ff //#171d23
          },
          text: {
            normal: 'var(--juejin-text-sign)', // #1e80ff //#388EFF
          },
        },
        skeleton: {
          normal: 'var(--jjext-color-skeleton-1)', // #E5E7EC
          background: {
            normal: 'var(--jjext-color-skeleton-2)', // #555
          },
        },
        signed: {
          normal: 'var(--juejin-text-signed)', // #abcdff //#85BAFF
          background: {
            normal: 'var(--juejin-background-signed-button)', // #f4f9ff //#315078
          },
          border: {
            normal: 'var(--juejin-border-signed)', // #b3d5ff //#2F5D99
          },
          dayparts: {
            normal: 'var(--juejin-text-signe-dayparts)', // #1e80ff //#6BABFF
          },
        },
        navs: {
          normal: 'var(--juejin-border-navs-header)', // #F3F4F6 //#494949
          wrapper: {
            normal: 'var(--juejin-border-navs-wrapper)', // #E5E7EB //#494949
          },
          background: {
            normal: 'var(--juejin-navs-background)', // #ffffff //#121212
          },
          item: {
            normal: 'var(--juejin-text-navs-item)', // #000000 //#e8ecfa
          },
          after: {
            normal: 'var(--juejin-color-navs-item-after)', // #EF4444
          },
        },
        types: {
          normal: 'var(--juejin-color-types-list)', // #71777c
          tag: {
            normal: 'var(--juejin-color-types-list-tag)', // #8a9aa9
          },
          background: {
            normal: 'var(--juejin-color-types-tag-background)', // #f4f5f5
          },
          text: 'var(--juejin-h1-font-color)',
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
