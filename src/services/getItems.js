export const getItems = () => {

  return new Promise ((acc, rej) => {
      fetch(`https://api.pokemontcg.io/v2/cards`)
      .then( res => res.json())
      .then( data => {
          console.log(data.results);
          acc(data.results);
      })
      .catch( err => {
          alert("Hubo un error: ", err.message)
          rej(err.message)
      })
  })
}

export const getItems = (id) => {

  console.log(id);

  return new Promise ((acc, rej) => {
      fetch(`https://api.pokemontcg.io/v2/cards${id}`)
      .then( res => res.json())
      .then( data => {
          console.log(data.results);
          acc(data);
      })
      .catch( err => {
          alert("Hubo un error: ", err.message)
          rej(err.message)
      })    
  })
}

