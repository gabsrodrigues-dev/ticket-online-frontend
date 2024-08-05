import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';

function TitleAndSubtitle({ title }) {
  const [currentUrl, setCurrentUrl] = useState("");
  const [originUrl, setOriginUrl] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setOriginUrl(window.location.origin);
      setCurrentUrl(window.location.href);
    }
  }, []);
  const description = 'Nosso Portal do Aluno é mais do que uma plataforma educacional; é um ambiente digital desenvolvido para otimizar e enriquecer a experiência acadêmica!'
  return (
    <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title} – Igreja Reformada em Ipatinga</title>
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href={`/images/root/android-chrome-192x192.webp`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/images/root/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/images/root/favicon-16x16.png`}
        />
        <meta name="msapplication-TileColor" content="#000" />
        <meta
          name="theme-color"
          content={`#FFF`}
        />
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} – Igreja Reformada em Ipatinga`} key="title" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Igreja Reformada em Ipatinga"
        />
        <meta property="og:locale" content="pt_BR" />
        <meta
          property="og:article:published_time"
          content={new Date().toDateString()}
        />
        <meta property="twitter:title" content={`${title} – Igreja Reformada em Ipatinga`} />
        <meta property="twitter:description" content={description} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content={`${title} – Igreja Reformada em Ipatinga`} />
        <meta
          property="og:image"
          content={`${originUrl}/images/root/android-chrome-512x512.webp`}
        />
        <meta
          property="twitter:image"
          content={`${originUrl}/images/root/android-chrome-512x512.webp`}
        />
        <meta
          name="msapplication-TileImage"
          content={`${originUrl}/images/root/android-chrome-512x512.webp`}
        />
        <meta
          property="og:image:alt"
          content={`Logo da Igreja Reformada em Ipatinga`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />

        <link rel="canonical" href={currentUrl} />
        <link
          rel="manifest"
          href={`/images/manifest.json`}
        />
        <meta name="author" content="Igreja Reformada em Ipatinga" />
      </Helmet>
  );
}

export default TitleAndSubtitle;
