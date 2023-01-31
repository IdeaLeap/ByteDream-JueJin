const themes = (await import('~~/assets/themes')).themes
export default function themeStyle() {
  return {
    viewerEffect({ file }: any) {
      if (typeof file.value != 'object')
        return
      const $style = document.createElement('style')
      const theme = themes[file.value.frontmatter?.theme]?.style
      if (theme)
        $style.innerHTML = theme
      else $style.innerHTML = themes.juejin.style
      const markdownBody = document.querySelector('.markdown-body')
      markdownBody?.insertBefore($style, markdownBody.firstChild)
      return () => {
        $style.remove()
      }
    },
  }
}
