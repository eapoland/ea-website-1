const MailchimpForm = ({ status, message, onValidated }) => {
  let email
  const submit = () =>
    email &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
    })

  return (
    <div className="flex py-8 xl:px-16">
      {status === 'sending' && <div style={{ color: 'blue' }}>Wysyłam...</div>}
      {status === 'error' && <div style={{ color: 'red' }}>Wystąpił błąd.</div>}
      {status === 'success' && (
        <div style={{ color: 'green' }}>
          Dziękujemy za zasubskrybowanie! W skrzynce mailowej oczekuje na Ciebie
          mail z potwierdzeniem.
        </div>
      )}
      {status === 'duplicate' && (
        <div style={{ color: 'red' }}>
          Zbyt wiele prób dla podanego adresu e-mail!
        </div>
      )}
      <input
        className="bg-white border-0 border-b-2 border-secondary border-solid w-48 pl-4 text-xs text-black"
        ref={node => (email = node)}
        type="email"
        placeholder="E-mail..."
      />
      <br />
      <button
        className="text-center text-xs font-bold text-white uppercase bg-primary px-6 py-2"
        onClick={submit}
      >
        Subskrybuj
      </button>
    </div>
  )
}

export default MailchimpForm
