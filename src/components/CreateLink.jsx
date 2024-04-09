export default function CreateLink(url) {
  const domain = url.split('//')[1].split('/')[0]
  return (
    // If the value is a string then render the key and value
    <p className="data_display small_display rounded-2xl">
      <b>{key}</b>:<a href={url} target='_blank' style={{ color: 'blue', marginLeft: '4px' }}>{` ${domain}`}</a>
    </p>
  )
}