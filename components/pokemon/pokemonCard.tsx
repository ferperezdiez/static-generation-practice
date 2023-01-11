import { Card, Grid, Row, Text } from "@nextui-org/react";
import { NextPage } from "next";
import { useRouter } from "next/router";

type Pokemon = {
    name: string,
    url: string,
    image: string,
    id: string
  }

interface Props {
    pokemon: Pokemon
  }

export const PokemonCard: NextPage<Props> = ({pokemon}) => {

    const router = useRouter()

    const onClick = () => {
      router.push(`/name/${pokemon.name}`)
    }
    return (
        <Grid onClick={onClick} key={pokemon.name} xs={ 6 } sm={ 3 } xl={ 1 }>
              <Card hoverable clickable>
                <Card.Body css={{p:1}}>
                  <Card.Image src={pokemon.image} 
                    width='100%'
                    height={140}
                  />
                  <Card.Footer>
                    <Row justify='space-between'>
                      <Text transform='capitalize'>{pokemon.name}</Text>
                      <Text># {pokemon.id}</Text>
                    </Row>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Grid>
    )
}
