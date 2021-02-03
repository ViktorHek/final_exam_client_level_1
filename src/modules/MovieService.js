import axios from 'axios'

const MovieService = {
  async index() {
    let result = await axios.get("pc-se/serier/samtliga")
    return result.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
  }
}

export default MovieService