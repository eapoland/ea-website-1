import React, { useState } from 'react'

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div>
      <div className="flex flex-wrap justify-between">
        {children.map((child, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`${
              activeTab === index ? 'bg-accent' : 'bg-secondary'
            } text-black w-1/2 xl:w-1/4 px-4 py-8 flex justify-center items-center`}
          >
            <h4 className="mb-0 text-center">{child.props.field.name}</h4>
          </button>
        ))}
      </div>
      <div className="py-10 px-20">
        {children.map((child, index) =>
          React.cloneElement(child, {
            isVisible: activeTab === index,
          })
        )}
      </div>
    </div>
  )
}

export default Tabs
