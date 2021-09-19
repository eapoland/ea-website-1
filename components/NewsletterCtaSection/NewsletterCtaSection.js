import MailchimpSubscribe from 'react-mailchimp-subscribe'
import MailchimpForm from './MailchimpForm'

const NewsletterCtaSection = () => (
  <div className="flex flex-col bg-accent pt-18 pb-10 items-center">
    <h4 className="text-center">Zostańmy w kontakcie</h4>
    <MailchimpSubscribe
      url={process.env.REACT_APP_MAILCHIMP_ACTION}
      render={({ subscribe, status, message }) => (
        <MailchimpForm
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  </div>
)

export default NewsletterCtaSection
