function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // if(html.classList.constains('light')){
  //   html.classList.remove('light')
  // }else{
  //   html.classList.add('light')
  // }

  //pegar img
  const img = document.querySelector("#profile img")

  //substituir  img
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar2.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
