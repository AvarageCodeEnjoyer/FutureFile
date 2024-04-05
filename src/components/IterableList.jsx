import './DataDisplay.css'

export default function IterableList({ items, key }) {
    let arrayConversion = []
    // Add a unique case whenever the data structure changes
    switch (key) {
      // Uses separate function for the "Courses Taken" section and "Community Service"
      case "Courses Taken":
        arrayConversion = arrayConversion.map(course => course.course)
        break
        
      case "Community Services":
        arrayConversion = items[key].map(service => {
          const stringConversion = `${service.name}: ${service.date1}-${service.date2}`
          return stringConversion
        })      
        break
  
      default:
        arrayConversion = items[key].map(({ id, ...rest }) => Object.values(rest))
        break
    }
  
    // Flatten the array to 1 dimensional iterable array
    const arrayValues = arrayConversion.flat()
  
    // Don't render anything if there are no values
    if (arrayValues.length === 0) return null
  
    return (
      // This is the collapsible section if the data contained is iterable, 
      // https://daisyui.com/components/collapse/#collapse-with-checkbox
      <div className="collapse collapse-plus bg-pattensBlue min-w-64 w-10 self-start">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-medium">
          {key}
        </div>
        <div className="collapse-content"> 
          {arrayValues.map((item, index) => (
            <p className="data_display my-2 bg-halfBaked" key={index}>
              <b className="text-lg">{item}</b>
            </p>
          ))}
        </div>
      </div>
    )
  }