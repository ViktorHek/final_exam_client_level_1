import React from 'react'
import {Card} from 'semantic-ui-react'

const MovieCard = ({movie}) => {
  return (
    <Card
      header={movie.content.series.title}
      description={movie.content.series.synopsis}
    />
  )
}

export default MovieCard
