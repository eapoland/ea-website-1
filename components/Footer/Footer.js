// import { faFacebookSquare, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link'
import logo from '../../public/images/efektywny-altruizm-logo-white.svg'
import FooterLink from './FooterLink'

const Footer = () => (
  <div className="flex flex-col md:flex-row py-16 px-0 xl:h-76 justify-center items-center bg-primary text-white">
    <div className="mx-4 md:ml-14 md:w-6/12">
      <div className="flex items-center justify-center md:justify-start mb-12 xl:mb-6">
        <Link href="/">
          <a className="relative w-72 h-16 md:w-60">
            <img
              src={logo.src}
              alt="Logo Efektywnego Altruizmu"
              layout="fill"
              objectFit="cover"
            />
          </a>
        </Link>
        {/* <div className="main-nav__item main-nav__item--social">
            <a href="https://www.facebook.com/efektywnyaltruizmfundacja">
              <FontAwesomeIcon icon={faFacebookSquare} className="main-nav__icon" />
            </a>
          </div>
          <div className="main-nav__item main-nav__item--social">
            <a href="https://www.linkedin.com/company/efektywnyaltruizm/">
              <FontAwesomeIcon icon={faLinkedinIn} className="main-nav__icon" />
            </a>
          </div>
          <div className="main-nav__item main-nav__item--social">
            <a href="https://www.youtube.com/channel/UCj6HkTu_5nYypCRKc-7y27A">
              <FontAwesomeIcon icon={faYoutube} className="main-nav__icon" />
            </a>
          </div> */}
      </div>
      <div>
        <nav className="flex flex-row flex-wrap items-center text-2xl justify-between md:justify-start mb-8">
          <FooterLink destination="/about" title="O NAS" />
          <FooterLink destination="/activities" title="DZIAŁANIA" />
          <FooterLink destination="/workshops" title="WARSZTATY" />
          {/* <FooterLink destination="/blog" title="BLOG" /> */}
          <FooterLink destination="/act" title="WSPIERAJ" />
          <FooterLink destination="/contact" title="KONTAKT" />
          <FooterLink
            destination="/privacy-policy"
            title="POLITYKA PRYWATNOŚCI"
          />
          <a
            className="text-center font-bold text-h6 md:text-xs md:pr-8 leading-10 md:leading-10"
            href="https://drive.google.com/drive/folders/10TgWw_2vMKzcbRUn1HpMsqgmwoW9Dy0l?usp=sharing"
          >
            MATERIAŁY DLA MEDIÓW
          </a>
        </nav>
        <p className="text-center md:text-left text-white text-base md:text-xs uppercase font-bold">
          © 2021 Fundacja Efektywny Altruizm
        </p>
      </div>
    </div>
    <div className="hidden md:flex md:flex-col ml-8 text-left text-white md:w-6/12">
      <h4 className="text-h4 text-white">Adres</h4>
      <p
        className="text-xs text-white uppercase font-bold"
        style={{ lineHeight: '26px' }}
      >
        Fundacja Efektywny Altruizm <br />
        Plac Bankowy 2, 00-095 Warszawa <br />
        KRS: 0000726237, REGON: 369951399, NIP: 5252746902 <br />
        ING Bank Śląski S.A. <br />
        Nr konta: PL 67 1050 1012 1000 0090 8040 3265
      </p>
    </div>
  </div>
)

export default Footer
