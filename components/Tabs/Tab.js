const Tab = ({ field, isVisible }) => {
  return (
    <div id={field.key} className={`${isVisible ? 'block' : 'hidden'}`}>
      <h3>{field.title}</h3>
      <p>{field.content}</p>
    </div>
  )
}

export default Tab
