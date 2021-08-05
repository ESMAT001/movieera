import React from 'react'
import Head from 'next/head'

function CustomHead({ title = "Movieera | Your online theater", children }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="Movieera app" />
            <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
            {children}
            <meta name='application-name' content='Movieera' />
            <meta name='apple-mobile-web-app-capable' content='yes' />
            <meta name='apple-mobile-web-app-status-bar-style' content='default' />
            <meta name='apple-mobile-web-app-title' content='Movieera' />
            <meta name='description' content='Your online movie theater' />
            <meta name='format-detection' content='telephone=no' />
            <meta name='mobile-web-app-capable' content='yes' />
            <meta name='msapplication-TileColor' content='#202743' />
            <meta name='msapplication-tap-highlight' content='no' />
            <meta name='theme-color' content='#000000' />


            <link rel='icon' type='image/png' sizes='32x32' href='/static/icons/favicon-32x32.png' />
            <link rel='icon' type='image/png' sizes='16x16' href='/static/icons/favicon-16x16.png' />
            <link rel='manifest' href='/static/manifest.json' />
            <link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#202743' />
            <link rel='shortcut icon' href='/favicon.ico' />

            <meta name='twitter:card' content='summary' />
            <meta name='twitter:url' content='https://yourdomain.com' />
            <meta name='twitter:title' content='Movieera' />
            <meta name='twitter:description' content='Your online movie theater' />
            <meta name='twitter:image' content='https://yourdomain.com/static/icons/android-chrome-192x192.png' />
            <meta name='twitter:creator' content='@DavidWShadow' />
            <meta property='og:type' content='website' />
            <meta property='og:title' content='Movieera' />
            <meta property='og:description' content='Your online movie theater' />
            <meta property='og:site_name' content='Movieera' />
            <meta property='og:url' content='https://yourdomain.com' />
            <meta property='og:image' content='https://yourdomain.com/static/icons/apple-touch-icon.png' />


            <link rel="icon" type="image/png" href="/iconx/favicon-16x16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="/iconx/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="/iconx/android-192x192.png" sizes="192x192" />
            <link rel="apple-touch-icon" href="/iconx/apple-touch-icon-180x180.png" sizes="180x180" />
            <meta name="msapplication-config" content="/static/icons/browserconfig.xml" />
        </Head>
    )
}

export default CustomHead
