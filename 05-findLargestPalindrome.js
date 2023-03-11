function findLargestPalindrome(words) {
    let palindromos = [],
      sizeInicial = 0,
      resultado
    words.forEach((word) => {
      let compara = word.split('').reverse().join('')
      word === compara ? palindromos.push(word) : ""; //if
    })
    palindromos.forEach((palindromo) => {
      let size = palindromo.length
      if (size > sizeInicial) {
        resultado = palindromo
        sizeInicial += size
      }
    })
    if (palindromos.length === 0) {
      return null
    }
    return resultado
  }
  
  
  