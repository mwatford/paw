(() => {
  const qs = (s) => document.querySelector(s)
  const add = (a, b) => a + b
  const subtract = (a, b) => a - b
  const multiply = (a, b) => a * b
  const divide = (a, b) => a / b
  const power = (a, b) => a ** b

  const compute = operation => {
    return () => {
      const a = qs('#num-1').value
      const b = qs('#num-2').value

      qs('#result').innerHTML = operation(parseInt(a), parseInt(b))
    }
  }

  const lightTheme = () => qs('body').classList.add('theme--light')
  const darkTheme = () => qs('body').classList.remove('theme--light')
  const generateList = () => {
    const input = +prompt('Podaj liczbę:')
    const arr = new Array(input).fill(0).map((_, index) => (index + 1) % 5 === 0 ? String.fromCodePoint(0x23f3) : String(index + 1))
    qs('#result-2').innerHTML = arr.join(' ')
  }
  const replaceWithRandomNumber = (e) => {
    e.target.innerHTML = Math.floor(Math.random() * 100)
  }

  qs('#btn-add').addEventListener('click', compute(add))
  qs('#btn-subtract').addEventListener('click', compute(subtract))
  qs('#btn-multiply').addEventListener('click', compute(multiply))
  qs('#btn-divide').addEventListener('click', compute(divide))
  qs('#btn-power').addEventListener('click', compute(power))
  qs('#btn-theme-light').addEventListener('click', lightTheme)
  qs('#btn-theme-dark').addEventListener('click', darkTheme)
  qs('#btn-list').addEventListener('click', generateList)
  qs('#btn-r').addEventListener('click', replaceWithRandomNumber)
})()
