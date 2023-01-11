import Head from "next/head";
import { FC, ReactChild } from "react";
import { NavBar } from '../ui';

type Props = {
    children: ReactChild,
    title?: string
}

export const Layout: FC<Props> = ({children, title = 'Pokemon App'}) => {
    
    const origin = typeof window !== 'undefined' ? window.location.origin : ''

    return(
        <>
            <Head>
                <title>
                    {title}
                </title>
                <meta name="Author" content="Fernando Perez" />
                <meta name="Description" content={`pokemon ${title}`}/>
                <meta name="Keywords" content={`${title}, pokedex, pokemon`}/>
                <meta property="og:title" content={`informacion sobre ${title}`} />
                <meta property="og:description" content={`caracteristicas de ${title}`} />
                <meta property="og:image" 
                content={`${origin}/img/banner.png`} />
            </Head>
            <NavBar/>
            <main style={{padding: '0px 20px' }}>
                {children}
            </main>
        </>
    )
}