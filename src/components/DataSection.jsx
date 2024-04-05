import React from "react"
import "./DataSection.css"
import { useNavigate } from "react-router-dom"
import DataDisplay from './DataDisplay'

// This is the main section, you only need to call this. The rest are internal functions and not exported 
export default function DataSection({ params }) {
  const { dataHeader, items } = params

  function getObjectWithoutId(obj) {
    const result = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && key !== 'id') {
        result[key] = obj[key];
      }
    }
    return result;
  }
  
  // Prevent the section from rendering if all items have empty arrays, or empty values
  const shouldRenderItems = items.some(item =>
    Object.values(item).some(value => value.length > 0)
  )

  // This is just used to add a unique key to each item when rendering
  const mapItems = items.map(item => ({ id: Math.random() * 10000, ...item}))

  // If all items have empty arrays, don't render the section
  if (!shouldRenderItems) return null


  return (
    <>
      <section className="data_section">
        <h1 className='data_header'>{dataHeader}</h1>
        <div className="data_items gap-2">
          {mapItems.map(item => {
            const displayData = getObjectWithoutId(item)
            return <DataDisplay key={item.id} params={displayData} />
          })}
        </div>
      </section>
    </>
  )
}