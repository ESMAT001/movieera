import React from 'react'
import Head from 'next/head'

function CustomHead({ title = "Movieera | Your online theater", children }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="Movieera | Your online movie theater" />
            <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
            {children}
            <link rel="icon" type="image/png" href="/static/icons/favicon-16x16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="/static/icons/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="/static/icons/android-192x192.png" sizes="192x192" />

            <meta name='application-name' content='Movieera' />
            <meta name='apple-mobile-web-app-capable' content='yes' />
            <meta name='apple-mobile-web-app-status-bar-style' content='default' />
            <meta name='apple-mobile-web-app-title' content='Movieera' />
            <meta name='description' content='Your online movie theater' />
            <meta name='format-detection' content='telephone=no' />
            <meta name='mobile-web-app-capable' content='yes' />
            <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
            <meta name='msapplication-TileColor' content='#0f1014' />
            <meta name='msapplication-tap-highlight' content='no' />
            <meta name='theme-color' content='#0f1014' />

            <link rel='apple-touch-icon' href='/static/icons/touch-icon-iphone.png' />
            <link rel='apple-touch-icon' sizes='152x152' href='/static/icons/touch-icon-ipad.png' />
            <link rel='apple-touch-icon' sizes='180x180' href='/static/icons/touch-icon-iphone-retina.png' />
            <link rel='apple-touch-icon' sizes='167x167' href='/static/icons/touch-icon-ipad-retina.png' />

            <link rel='icon' type='image/png' sizes='32x32' href='/static/icons/favicon-32x32.png' />
            <link rel='icon' type='image/png' sizes='16x16' href='/static/icons/favicon-16x16.png' />
            <link rel='manifest' href='/static/manifest.json' />
            <link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#0f1014' />
            <link rel='shortcut icon' href='/favicon.ico' />

            <meta name='twitter:card' content='summary' />
            <meta name='twitter:url' content='https://movieera-taupe.vercel.app' />
            <meta name='twitter:title' content='Movieera' />
            <meta name='twitter:description' content='Your online movie theater' />
            <meta name='twitter:image' content='https://movieera-taupe.vercel.app/static/icons/android-chrome-192x192.png' />
            <meta name='twitter:creator' content='@ESMAT001' />
            <meta property='og:type' content='website' />
            <meta property='og:title' content='Movieera' />
            <meta property='og:description' content='Your online movie theater' />
            <meta property='og:site_name' content='PWA App' />
            <meta property='og:url' content='https://movieera-taupe.vercel.app' />
            <meta property='og:image' content='https://movieera-taupe.vercel.app/static/icons/apple-touch-icon.png' />


            <link rel="apple-touch-icon" href="icons/apple-icon-180.png" />

            <meta name="apple-mobile-web-app-capable" content="yes" />

            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-2048-2732.jpg" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-2732-2048.jpg" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-1668-2388.jpg" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-2388-1668.jpg" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-1536-2048.jpg" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-2048-1536.jpg" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-1668-2224.jpg" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-2224-1668.jpg" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-1620-2160.jpg" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-2160-1620.jpg" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-1284-2778.jpg" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-2778-1284.jpg" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-1170-2532.jpg" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-2532-1170.jpg" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-1125-2436.jpg" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-2436-1125.jpg" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-1242-2688.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-2688-1242.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-828-1792.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-1792-828.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-1242-2208.jpg" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-2208-1242.jpg" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-750-1334.jpg" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-1334-750.jpg" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-640-1136.jpg" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
            <link rel="apple-touch-startup-image" href="/static/icons/apple-splash-1136-640.jpg" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />


        </Head>
    )
}

export default CustomHead
