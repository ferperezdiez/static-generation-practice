import { NextPage, GetStaticProps } from 'next'
import { Layout } from '../components/layouts'
import { pokeApi } from './api'
import { PokeResult } from '../interfaces'
import { Grid } from '@nextui-org/react'
import { PokemonCard } from '../components/pokemon'

type Pokemon = {
  name: string,
  url: string,
  image: string,
  id: string
}

interface Props {
  pokemones: Pokemon[]
}

const HomePage: NextPage<Props> = ({pokemones}) => {

  return (
   
      <Layout title="listado de pokemons">
        <Grid.Container gap={ 2 } justify='flex-start'>
         {pokemones.map((pokemon: Pokemon) => {
          return(
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
          )
         })}
        </Grid.Container>
      </Layout>
    
  )
}
export const getStaticProps: GetStaticProps = async (context) =>  {
  const { data } = await pokeApi.get<PokeResult>('/pokemon?limit=151')

  const pokemon: Pokemon[] = data.results.map((pokemon, i) => {
    return {
      ...pokemon,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`,
      id: (i + 1).toString()
    }
  })

  return {
    props: {pokemones: pokemon }, // will be passed to the page component as props
  }
}

export default HomePage;