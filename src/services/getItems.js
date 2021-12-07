export const getItems = () => {

  return new Promise ((acc, rej) => {
      fetch(`https://api.pokemontcg.io/v2/cards`)
      .then( res => res.json())
      .then( data => {
        acc(data);
        console.log(data); 
      })
      .catch( err => {
          alert("Hubo un error: ", err.message)
          rej(err.message)
      })
  })
}

export const getItem = (id) => {

  console.log(id);

  return new Promise ((acc, rej) => {
      fetch(`https://api.pokemontcg.io/v2/cards/${id}`)
      .then( res => res.json())
      .then( data => {
          acc(data);
          console.log(data); 
      })
      .catch( err => {
          alert("Hubo un error: ", err.message)
          rej(err.message)
      })    
  })
}


