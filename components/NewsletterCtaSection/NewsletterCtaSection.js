import Mailchimp from 'react-mailchimp-form'

const NewsletterCtaSection = () => (
  <div className="flex flex-col bg-accent pt-18 pb-10 items-center">
    <h4 className="text-center">Zostańmy w kontakcie</h4>
    <Mailchimp
      action={process.env.REACT_APP_MAILCHIMP_ACTION}
      fields={[
        {
          name: 'EMAIL',
          placeholder: 'Email',
          type: 'email',
          required: true,
        },
      ]}
      messages={{
        sending: 'Wysyłam...',
        success:
          'Dziękujemy za zasubskrybowanie! W skrzynce mailowej oczekuje na Ciebie mail z potwierdzeniem.',
        error: 'Wystąpił błąd.',
        empty: 'Podaj adres e-mail.',
        duplicate: 'Zbyt wiele prób dla podanego adresu e-mail!',
        button: 'Subskrybuj',
      }}
      className="signup-form"
    />
  </div>
)

export default NewsletterCtaSection
