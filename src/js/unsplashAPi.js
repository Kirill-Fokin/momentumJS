export function initUnsplash(data) {
  if (data) {
    const img = new Image();
    img.src =  data;
    state.previosWallppapper = null;
    img.onload = () => {
      document.body.style.backgroundImage = data
    };
  }
  
  const url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=Ccmp55s73gnyqV8LaWuwCJtLuaudIguxAIxiMZBc1vo'
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const img = new Image();
        img.src =  `${data.urls.regular}`
         state.previosWallppapper = `${data.urls.regular}`
         img.onload = () => {
          document.body.style.backgroundImage = `url(${data.urls.regular})`
          console.log(`url(${data.urls.regular})`)
         };
        document.querySelector('.slide-prev').addEventListener('click', () => {
          if (state.previosWallppapper) initUnsplash(state.previosWallppapper)
          else initUnsplash() 
        })
        document.querySelector('.slide-next').addEventListener('click', () => initUnsplash()) 
  })
}