import {React} from 'react'
import loading from './loading.gif'
const Spinner=()=>{
    return (
      <div className="text-center">
        <img className="my-3" src={loading} alt="Loading" width="50px" height="50px"/>
      </div>
    )
  }
export default Spinner;