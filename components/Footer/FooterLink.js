import Link from 'next/link'
import { useRouter } from 'next/router'

const FooterLink = ({ destination, title }) => {
  const router = useRouter()
  return (
    <Link href={destination}>
      <a className="text-center font-bold text-h6 md:text-xs md:pr-8 leading-10 md:leading-10">
        {title}
      </a>
    </Link>
  )
}

export default FooterLink
