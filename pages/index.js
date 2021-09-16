import React from 'react'
import QuoteSection from '../components/QuoteSection'
import ContentPreviewSection from '../components/ContentPreviewSection'
import FriendlyOrganisationsSection from '../components/FriendlyOrganisationsSection'
import content from '../content/homepage'
import MainSlider from '../components/MainSlider'
import ScrollToTop from '../components/ScrollToTop'

const Home = () => (
  <>
    <ScrollToTop />
    <MainSlider />
    <QuoteSection />
    <ContentPreviewSection content={content[0]} />
    <ContentPreviewSection reversed content={content[1]} />
    <FriendlyOrganisationsSection />
  </>
)

export default Home
