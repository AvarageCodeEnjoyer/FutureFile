import Logo from './assets/fblaLogo.png'
import { useLocation, useNavigate } from 'react-router-dom';

export default function IdInput() {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search);
  const message = queryParams.get('message');
  const navigate = useNavigate();

  function goToId(event) {
    event.preventDefault()
    const id = event.target[0].value
    navigate(`/${id}`)
  }

  return (
    // This is here so that if you just go to the webpage you can use the id input to add it to the url
    <div className="container">
      <form action="" onSubmit={goToId} className="grid h-1/2 w-80 self-center justify-self-center">
        <img src={Logo} alt="" className='self-center mb-4' />
        <h1 className="text-center mb-4 font-bold text-3xl">No profile id defined, please add it here</h1>
        { message ? <p className="text-red-600">{message}</p> : null }
        <input 
          type="text" 
          placeholder="FutureSite id" 
          required
          className="input input-bordered bg-white w-full max-w-xs"   
        />
        {/* <span className="text-center">- OR -</span>
        <input 
          type="text" 
          placeholder="FutureSite id" 
          required
          className="input input-bordered bg-white w-full max-w-xs"   
        /> */}
        {/* Daisy UI button component https://daisyui.com/components/button/#buttons-with-state-colors */}
        <button className="hover:bg-darkBlue hover:text-white btn btn-outline align-self-center bg-bondiBlue text-white">Submit</button>
      </form>
    </div>
  );
}
