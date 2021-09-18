import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'
import EAButton from '../components/Common/EAButton/EAButton'
import content from '../content/homepage'
import ScrollToTop from '../components/ScrollToTop'
import okLogo from '../public/images/ok-logo.png'
import paretoLogo from '../public/images/pareto-logo.png'
import altruistoLogo from '../public/images/altruisto-logo.png'
import provegLogo from '../public/images/proveg-logo.png'
import schweitzerLogo from '../public/images/schweitzer-logo.png'

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
    <Fade bottom cascade>
      <section className="flex flex-col lg:flex-row-reverse justify-center">
        <div className="w-full lg:w-6/12 flex flex-col justify-center">
          <img src={content[0].img.src} alt={content[0].imgAlt} />
        </div>
        <div className="w-full lg:w-6/12 flex flex-col justify-center py-8 px-4 lg:py-4 lg:px-8 xl:py-12 xl:px-16">
          <h3 className="text-left">{content[0].heading}</h3>
          <p>{content[0].text}</p>
          <EAButton title={content[0].cta} target={content[0].page} size={15} />
        </div>
      </section>
    </Fade>
    <Fade bottom cascade>
      <section className="flex flex-col lg:flex-row justify-center">
        <div className="w-full lg:w-6/12 flex flex-col justify-center">
          <img src={content[1].img.src} alt={content[1].imgAlt} />
        </div>
        <div className="w-full lg:w-6/12 flex flex-col justify-center py-8 px-4 lg:py-4 lg:px-8 xl:py-12 xl:px-16">
          <h3 className="text-left">{content[1].heading}</h3>
          <p>{content[1].text}</p>
          <EAButton title={content[1].cta} target={content[1].page} size={15} />
        </div>
      </section>
    </Fade>
    <Fade bottom>
      <section className="flex flex-col bg-secondary py-28 px-20">
        <h3 className="mt-2 mb-6">Przyjaciele</h3>
        <div className="flex justify-center items-center flex-wrap lg:flex-nowrap">
          <div className="mx-5 mb-8 lg:mb-0">
            <a
              href="https://www.otwarteklatki.pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={okLogo.src} alt="OK logo" />
            </a>
          </div>
          <div className="mx-5 mb-8 lg:mb-0">
            <a
              href="https://www.schweitzer.pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={schweitzerLogo.src} alt="Albert Schweitzer logo" />
            </a>
          </div>
          <div className="mx-5 mb-8 lg:mb-0">
            <a
              href="https://proveg.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={provegLogo.src} alt="ProVeg logo" />
            </a>
          </div>
          <div className="mx-5 mb-8 lg:mb-0">
            <a
              href="https://altruisto.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={altruistoLogo.src} alt="Altruisto logo" />
            </a>
          </div>
          <div className="mx-5 mb-8 lg:mb-0">
            <a
              href="https://optimumpareto.pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={paretoLogo.src} alt="Pareto logo" />
            </a>
          </div>
        </div>
      </section>
    </Fade>
  </>
)

export default Home
