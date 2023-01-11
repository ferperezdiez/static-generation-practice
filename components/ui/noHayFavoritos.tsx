import { Container, Text } from "@nextui-org/react"
import Image from "next/image"
import { FC } from "react"



export const NoFavorites: FC = () => {


    return(
        <Container css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            height: 'calc(100vh - 100px)'
          }}>
            <Text h1>No hay favoritos</Text>
            <Image
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png'
                alt=""
                width={250}
                height={250}
                style={{
                    opacity: 0.1
                }}
            />
          </Container>
    )
}
