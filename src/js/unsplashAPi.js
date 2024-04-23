export function initUnsplash(key) {
    const url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=Ccmp55s73gnyqV8LaWuwCJtLuaudIguxAIxiMZBc1vo'
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.urls.regular);
      });    
}