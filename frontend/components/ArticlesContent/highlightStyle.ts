const highlight = (await import('~~/assets/highlight')).highlight
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
        $style.innerHTML = highlight['atom-one-dark']
        hl = 'atom-one-dark'
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
