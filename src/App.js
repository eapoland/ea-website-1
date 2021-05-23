import React, { Suspense, lazy } from 'react'
import './App.scss'
import { Container } from 'reactstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CookieConsent from 'react-cookie-consent'
import TopBar from './components/TopBar/TopBar'
import Footer from './components/Footer/Footer'
import NewsletterCtaSection from './components/NewsletterCtaSection/NewsletterCtaSection'
import LoadingScreen from './components/LoadingScreen'
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import DonatePage from './pages/Donate/DonatePage'
import BlogPostPage from './pages/BlogPostPage/BlogPostPage'
import Blog from './pages/Blog'
// const stripePromise = loadStripe(
//   "pk_test_51HiOnnDDHV7JDkB9tHxmUobKY4ZezsR5lsWsviFG5NPEPbpgFGBeGqyYHyMeSnMi5Ulv5pV29i6Vr8sbDyfNJDcA00U862gUpU"
// );

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Workshops = lazy(() => import('./pages/Workshops'))
const WorkshopDetails = lazy(() => import('./pages/WorkshopDetails'))
const Activities = lazy(() => import('./pages/Activities'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy/PrivacyPolicy'))
const Act = lazy(() => import('./pages/Act'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        {/* <Elements stripe={stripePromise}> */}
        <Container className="p-0 ea-container">
          <TopBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/workshops" exact component={Workshops} />
            <Route path="/workshops/:id" exact component={WorkshopDetails} />
            <Route path="/activities" exact component={Activities} />
            <Route path="/privacy-policy" exact component={PrivacyPolicy} />
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/act" exact component={Act} />
            <Route path="/blog/:slug" exact>
              <BlogPostPage />
            </Route>
            {/* <Route path="/donate" exact>
              <DonatePage />
            </Route> */}
            <Route path="/contact" exact component={Contact} />
            <Route component={NotFound} />
          </Switch>
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
              Wykorzystujemy pliki cookie do spersonalizowania treści i reklam,
              aby oferować funkcje społecznościowe i analizować ruch na naszej
              witrynie. Informacje o tym, jak korzystasz z naszej witryny,
              udostępniamy partnerom społecznościowym, reklamowym i
              analitycznym. Partnerzy mogą połączyć te informacje z innymi
              danymi otrzymanymi od Ciebie lub uzyskanymi podczas korzystania z
              ich usług. Kontynuując korzystanie z naszej witryny, zgadzasz się
              na używanie plików cookie.
            </span>
          </CookieConsent>
          <div className="d-flex app__footer">
            <Footer />
            <NewsletterCtaSection />
          </div>
        </Container>
        {/* </Elements> */}
      </Suspense>
    </Router>
  )
}

export default App
