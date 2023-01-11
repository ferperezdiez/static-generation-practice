import { Link, Spacer, Text, useTheme } from "@nextui-org/react"
import NextLink from 'next/link'
import Image from "next/image"

export const NavBar = () => {
 
    const { theme } = useTheme()

    return(
        <div style={{
            display:'flex',
            width: '100%',
            flexDirection: 'row',
            padding: '0px, 20px',
            justifyContent: 'start',
            alignItems: 'center',
            backgroundColor: theme?.colors.gray900.value

        }}>
            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png" alt="something" width={120} height={70}/>
          
                <Link  href='/'>
                    <Text color="white" h2>P</Text>
                    <Text  color="white" h3>okemon</Text>
                </Link>
   
            <Spacer css={{flex:1}}/>
       
                <Link  href='/favorites' css={{marginRight: '20px'}}>
                    <Text color="white" h3>Favoritos</Text>
                </Link>
  
        </div>
    )
}