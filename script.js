function togglemode() {
  const html = document.documentElement
   html.classList.toggle('light')

  //if (html.classList.contains("light")) {
  //html.classList.remove("light")
  //} else {
  // html.classList.add("light")
  //}

 


  //pergar a tag img
  const img = document.querySelector("#profile img")
  
  //substiuir a imagem
  if(html.classList.contains('light')){
     //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', "./assets/avatar.png" )
  } else{
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
 

}