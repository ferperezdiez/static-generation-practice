import { Card, Grid, Text } from "@nextui-org/react"
import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { FC } from "react"
import { Pokemon } from "../../interfaces"
import { pokeApi } from "../../pages/api"

interface Props {
    id: Number,
}

export const FavCardComponent: FC<Props> = ({id}) => {


const router = useRouter()    
const onClick = () => {
    router.push(`/pokemon/${id}`)
}


    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={`${id}`}>
            <Card hoverable clickable onClick={onClick} css={{padding: '10px'}}>
                <Text h3>{`# ${id}`}</Text>
                <Card.Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`} 
                alt="pokemon image"
                height={140}
                width={'100%'}
                />
            </Card>
        </Grid>
    )
}
