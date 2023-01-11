
import { Card, Grid, Text, Image } from "@nextui-org/react";
import { FC, useEffect, useState } from "react";
import { Layout } from "../../components/layouts"
import { Hayfavoritos, NoFavorites } from "../../components/ui";
import { Result } from "../../interfaces";
import { localFavorites } from "../../utils";



const Favorites: FC = () => { 

    const [isFavorite, setIsFavorite] = useState<Number[]>([])

    useEffect (() => {
        setIsFavorite(localFavorites.favoritesList()) 
    },[])

    return(
        <Layout title="Favorites">
           {isFavorite.length === 0 ? 
            <NoFavorites />
            : 
            <Hayfavoritos isFavorite={isFavorite} />
           }
        </Layout>
    )
}

export default Favorites;