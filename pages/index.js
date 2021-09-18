import Slide from 'react-reveal/Slide'
import ContentPreviewSection from '../components/ContentPreviewSection'
import FriendlyOrganisationsSection from '../components/FriendlyOrganisationsSection'
import EAButton from '../components/Common/EAButton/EAButton'
import content from '../content/homepage'
import ScrollToTop from '../components/ScrollToTop'

const Home = () => (
  <>
    <ScrollToTop />
    <header
      className="flex flex-col justify-center items-center md:items-start mx-auto px-24 h-145"
      style={{
        background:
          "linear-gradient(180deg,rgba(0, 0, 0, 0.5452556022408963) 20%,rgba(9, 9, 121, 0) 90%,rgba(255, 255, 255, 0) 100%),url('/images/baner_alt.jpg') center no-repeat",
        backgroundSize: 'cover',
      }}
    >
      <h2 className="text-white text-center md:text-left mb-9 md:mb-3">
        Jak przynieść światu <br />
        <b>najwięcej dobra?</b>{' '}
      </h2>
      <p className="text-white hidden md:block">
        Jak czynić najwięcej dobra wykorzystując ograniczone środki?
        <br /> Efektywny Altruizm szuka odpowiedzi na to pytanie.
      </p>
      <EAButton title="Dowiedz się więcej" size={15} target="about" />
    </header>
    <section
      className="flex justify-center bg-secondary max-w-screen-xl
      p-18 md:px-46 md:py-18 bg-quote bg-left-bottom bg-no-repeat"
    >
      <Slide left cascade>
        <div>
          <h3 className="text-left">
            "Efektywny Altruizm to połączenie jasnego spojrzenia na czynienie
            dobra z naukową dokładnością."
          </h3>
          <p className="text-h3 font-serif italic font-light">
            - Derek Thompson
          </p>
        </div>
      </Slide>
    </section>
    <ContentPreviewSection content={content[0]} />
    <ContentPreviewSection reversed content={content[1]} />
    <FriendlyOrganisationsSection />
  </>
)

export default Home
