import React, { Suspense, lazy } from 'react'
import './App.scss'
import { Container } from 'reactstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import NewsletterCtaSection from './components/NewsletterCtaSection/NewsletterCtaSection'
import LoadingScreen from './components/LoadingScreen'
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import DonatePage from './pages/Donate/DonatePage'
import BlogPostPage from './pages/BlogPostPage'
import Blog from './pages/Blog'
import SearchResults from './pages/SearchResults'
import CategoryPostsList from './pages/CategoryPostsList'
// const stripePromise = loadStripe(
//   "pk_test_51HiOnnDDHV7JDkB9tHxmUobKY4ZezsR5lsWsviFG5NPEPbpgFGBeGqyYHyMeSnMi5Ulv5pV29i6Vr8sbDyfNJDcA00U862gUpU"
// );

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Workshops = lazy(() => import('./pages/Workshops'))
const WorkshopDetails = lazy(() => import('./pages/WorkshopDetails'))
const Activities = lazy(() => import('./pages/Activities'))
const Act = lazy(() => import('./pages/Act'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        {/* <Elements stripe={stripePromise}> */}
        <Container className="p-0 ea-container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/workshops" exact component={Workshops} />
            <Route path="/workshops/:id" exact component={WorkshopDetails} />
            <Route path="/activities" exact component={Activities} />
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
            <Route path="/search/:phrase" exact>
              <SearchResults />
            </Route>
            <Route path="/category/:category" exact>
              <CategoryPostsList />
            </Route>
            <Route path="/contact" exact component={Contact} />
            <Route component={NotFound} />
          </Switch>
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
