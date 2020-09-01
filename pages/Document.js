import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="es">
                <Head>
                    <meta charset="utf-8" />
                    <link rel="icon" type="image/png" href="%PUBLIC_URL%/Fav_Icon.ico" />
                    <link rel="apple-touch-icon" href="%PUBLIC_URL%/Fav_Icon.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <meta
                        name="keywords"
                        content="informacion, data, datos, sistema financiero, financiero, financiera, banca, bancos, seguros, casas de bolsa, fondos de pensiones, aseguradoras, SAIF, saif, sistemas, automatización, software, analisis, creditos, riesgo, consultoria, asesoria, latinoamerica, Venezuela, venezuela, finanzas, economia, factibilidad, proyecciones, modelos, estudios, sectorial, factibilidad, ratios, indices, indicadores, planificacion, estrategias, estrategica, financiamiento, entorno, valoracion, gerencia, bancario, bancaria, big data, outsourcing, evaluacion, organizacion, desarrollo, softline, finanzasdigital, corporacion, valoracion, valor"
                    />
                    <meta
                        name="description"
                        content=" Somos una empresa de consultoría que ofrece una variedad de productos y servicios en las áreas de finanzas, economía y sistemas de información financiera nacional e internacional, así como publicaciones de carácter económico y financiero."
                    />
                    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@global-scope" />
                    <meta name="twitter:creator" content="@global-scope" />
                    <meta property="og:url" content="https://www.glscope.com" />
                    <meta property="og:title" content="GlobalScope" />
                    <meta
                        property="og:description"
                        content="Somos una empresa de consultoría que ofrece una variedad de productos y servicios en las áreas de finanzas, economía y sistemas de información financiera nacional e internacional, así como publicaciones de carácter económico y financiero."
                    />
                    <meta property="og:type" content="article" />
                    <meta property="fb:app_id" content="" />

                    <meta
                        property="og:image"
                        content="https://firebasestorage.googleapis.com/v0/b/globalscope-776dc.appspot.com/o/logo6.jpg?alt=media&token=a75b5829-48f0-491b-a799-c42f2034466f"
                    />

                    <link
                        href="http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext"
                        rel="stylesheet"
                        type="text/css"
                    />

                    <link
                        rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
                    />
                    <title>GlobalScope, C.A. | Consultoría Integral e Información</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <noscript>You need to enable JavaScript to run this app.</noscript>
                    <div id="root"></div>
                    <script
                    src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
                    async
                    defer
                    ></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument