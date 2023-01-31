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
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
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
    },
  },
})
