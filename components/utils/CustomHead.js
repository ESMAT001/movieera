import React from 'react'
import Head from 'next/head'

function CustomHead({ title = "Movieera | Your online theater", children }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="Movieera app" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
            {children}
        </Head>
    )
}

export default CustomHead
