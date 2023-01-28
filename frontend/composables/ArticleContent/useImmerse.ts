export const useImmerse = () => {
  const immerseState = useState('immerseState', () => false)

  const immerseToggle = () => {
    immerseState.value = !immerseState.value
  }

  return { immerseState, immerseToggle }
}
