import CookieConsent from 'react-cookie-consent'
import Navbar from '../components/Navbar/Navbar'
import '../styles/styles.scss'
import '../styles/globals.scss'

function EAWebsite({ Component, pageProps }) {
  return (
    <div className="container m-auto">
      <Navbar />
      <Component {...pageProps} />
      <CookieConsent
        location="bottom"
        buttonText="Akceptuję"
        cookieName="eaCookie"
        style={{ background: '#2B373B' }}
        buttonStyle={{
          backgroundColor: '#0b879d',
          fontSize: '13px',
          color: '#fff',
        }}
        expires={150}
      >
        Ta strona korzysta z ciasteczek.
        <br />
        <span style={{ fontSize: '10px' }}>
          Wykorzystujemy pliki cookie do spersonalizowania treści i reklam, aby
          oferować funkcje społecznościowe i analizować ruch na naszej witrynie.
          Informacje o tym, jak korzystasz z naszej witryny, udostępniamy
          partnerom społecznościowym, reklamowym i analitycznym. Partnerzy mogą
          połączyć te informacje z innymi danymi otrzymanymi od Ciebie lub
          uzyskanymi podczas korzystania z ich usług. Kontynuując korzystanie z
          naszej witryny, zgadzasz się na używanie plików cookie.
        </span>
      </CookieConsent>
    </div>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default EAWebsite
