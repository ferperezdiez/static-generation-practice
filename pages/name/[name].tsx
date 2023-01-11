import { GetStaticPaths, GetStaticProps } from "next";
import { pokeApi } from "../api";
import { Result, Pokemon } from "../../interfaces";
import { FC, useEffect, useState } from "react";
import { localFavorites } from "../../utils";
import confetti from "canvas-confetti";
import { Layout } from "../../components/layouts";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { getDataForProps } from "../../utils";

interface Props {
    pokemon: Pokemon
}

const PokemonByNamePage: FC <Props> = ({pokemon}) => {
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        setIsFavorite(localFavorites.existFavorite(pokemon.id))
    }, [pokemon.id])
    
    const onToggleFavorite = () => {
        localFavorites.toggleFavorites(pokemon.id)
        setIsFavorite(!isFavorite)
        if( isFavorite ) return;
        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0,
            }
        })
    }

    const { name } = pokemon
    return (
        <Layout title={`pokemon ${name}`}>
          <Grid.Container css={{marginTop: '5px'}} gap={2}>
            <Grid xs={12} sm={4}>
                <Card hoverable css={{padding: '30px'}}>
                    <Card.Body>
                        <Card.Image
                            src={pokemon.sprites.other?.dream_world.front_default || 'no-image.png'}
                            alt="te debo la imagen"
                            height={200}
                            width='100%'
                        />
                    </Card.Body>
                </Card>
            </Grid>
            <Grid xs={12} sm={8}>
                <Card>
                    <Card.Header css={{display:'flex', justifyContent: 'space-between', padding: '15px'}}>
                        <Text h1 transform="capitalize">
                            {pokemon.name}
                        </Text>
                            <Button onClick={onToggleFavorite} color="gradient" ghost={!isFavorite}>
                                {isFavorite ? 'Guardado a favoritos' : 'Guardar en favoritos' }
                            </Button>
                    </Card.Header>
                    <Card.Body>
                        <Text size={30}>
                            Sprites:
                        </Text>
                        <Container gap={0} display="flex" direction="row">
                            <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
                            <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
                            <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
                            <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
                        </Container>
                    </Card.Body>
                </Card>

            </Grid>
          </Grid.Container>
        </Layout>
    )
}

export default PokemonByNamePage;

export const getStaticPaths: GetStaticPaths = async (context) => {
    const {data} = await pokeApi.get('/pokemon?limit=151')
    
    return {
        paths: data.results.map((poke: Result) => ({params : {name: poke.name}})),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const { name } = params as {name: string}
    const pokemon = await getDataForProps(name)

     return {
        props: {
            pokemon
        }
    }
}