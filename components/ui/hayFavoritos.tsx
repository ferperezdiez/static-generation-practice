import { Card, Grid, Text } from "@nextui-org/react"
import { FC } from "react"
import { FavCardComponent } from "./favoriteCArdComponent"

interface Props {
    isFavorite: Number[]
}

export const Hayfavoritos: FC<Props> = ({isFavorite}) => {

    return (
        <>
            <Text h1> Hay favoritos </Text> 
            <Grid.Container gap={3} justify="flex-start"  direction="row" >
                {isFavorite.map(id => {
                    return (
                         <FavCardComponent id={id} key={`${id}`} />
                )
                })}
            </Grid.Container>
        </>
    )
}