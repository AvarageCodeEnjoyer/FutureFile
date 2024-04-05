import IterableList from './IterableList'

export default function DataDisplay({ params }) {
    // Check if the value is an iterable and if so render it as a list
    function isIterable(obj) {
      return typeof obj === 'object' && typeof obj[Symbol.iterator] === 'function'
    }
  
    /* -------------------------------------------------------------------------- */
    /*             Render different components based on the data type             */
    /* -------------------------------------------------------------------------- */
  
    // Don't render anything if there is no value
    const key = Object.keys(params)[0]
    if (!params[key]) return null
  
    // If the value is an array then render all the values
    if (isIterable(params[key])) {
      return IterableList({ items: params, key: key })
    }
    
    return (
      // If the value is a string then render the key and value
      <p className="data_display small_display">
        <b>{key}</b>: {params[key]}
      </p>
    )
}