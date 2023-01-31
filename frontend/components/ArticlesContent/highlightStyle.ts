import { highlight } from '~~/assets/highlight'

export default function highlightStyle() {
  return {
    viewerEffect({ file }: any) {
      if (typeof file.value != 'object')
        return
      const $style = document.createElement('style')
      let hl = file.value.frontmatter?.highlight
      const hlStyle = highlight[hl]
      if (hlStyle) { $style.innerHTML = hlStyle }
      else {
        $style.innerHTML = highlight.default
        hl = 'default'
      }
      const markdownBody = document.querySelector('.markdown-body')
      markdownBody?.insertBefore($style, markdownBody.firstChild)
      $style.setAttribute('data-highlight', '')
      $style.setAttribute('data-highlight-key', hl)
      return () => {
        $style.remove()
      }
    },
  }
}
