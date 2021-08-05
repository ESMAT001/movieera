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
            <meta name='application-name' content='PWA App' />
            <meta name='apple-mobile-web-app-capable' content='yes' />
            <meta name='apple-mobile-web-app-status-bar-style' content='default' />
            <meta name='apple-mobile-web-app-title' content='PWA App' />
            <meta name='description' content='Best PWA App in the world' />
            <meta name='format-detection' content='telephone=no' />
            <meta name='mobile-web-app-capable' content='yes' />
            <meta name='msapplication-TileColor' content='#2B5797' />
            <meta name='msapplication-tap-highlight' content='no' />
            <meta name='theme-color' content='#000000' />


            <link rel='icon' type='image/png' sizes='32x32' href='/static/icons/favicon-32x32.png' />
            <link rel='icon' type='image/png' sizes='16x16' href='/static/icons/favicon-16x16.png' />
            <link rel='manifest' href='/static/manifest.json' />
            <link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#5bbad5' />
            <link rel='shortcut icon' href='/favicon.ico' />
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />

            <meta name='twitter:card' content='summary' />
            <meta name='twitter:url' content='https://yourdomain.com' />
            <meta name='twitter:title' content='PWA App' />
            <meta name='twitter:description' content='Best PWA App in the world' />
            <meta name='twitter:image' content='https://yourdomain.com/static/icons/android-chrome-192x192.png' />
            <meta name='twitter:creator' content='@DavidWShadow' />
            <meta property='og:type' content='website' />
            <meta property='og:title' content='PWA App' />
            <meta property='og:description' content='Best PWA App in the world' />
            <meta property='og:site_name' content='PWA App' />
            <meta property='og:url' content='https://yourdomain.com' />
            <meta property='og:image' content='https://yourdomain.com/static/icons/apple-touch-icon.png' />

            {/* <!-- apple splash screen images -->
<!-- */}
            <link rel='apple-touch-startup-image' href='/static/images/apple_splash_2048.png' sizes='2048x2732' />
            <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1668.png' sizes='1668x2224' />
            <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1536.png' sizes='1536x2048' />
            <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1125.png' sizes='1125x2436' />
            <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1242.png' sizes='1242x2208' />
            <link rel='apple-touch-startup-image' href='/static/images/apple_splash_750.png' sizes='750x1334' />
            <link rel='apple-touch-startup-image' href='/static/images/apple_splash_640.png' sizes='640x1136' />
            {/* --> */}
        </Head>
    )
}

export default CustomHead
