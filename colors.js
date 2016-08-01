
(() => {
  'use strict'

  const cycle = ['red', 'green', 'blue']
  const blocks = ['left', 'center', 'right']
  let flag = true

  function getdd (name, index) {
    for (let element of document.getElementsByClassName(name)) {
      element.style.backgroundColor = cycle[index]
      element.onclick =
        () => {
          element.style.backgroundColor =
            cycle[(cycle.indexOf(element.style.backgroundColor) + 1) % cycle.length]
        }
      if (element.style.background === cycle[2]) {
        flag = false
      }
    }
  }
  getdd('left', 0)
  getdd('center', 1)
  getdd('right', 2)

  if (flag === true) {
    for (let block of blocks) {
      for (let element of document.getElementsByClassName(block)) {
        for (let i = 0; i > 50; i++) {
          element.style.backgroundColor =
            cycle[(cycle.indexOf(element.style.backgroundColor) + 1) % cycle.length]
        }
      }
    }
  }
})()
