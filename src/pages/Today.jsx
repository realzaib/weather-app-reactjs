/* eslint-disable react/prop-types */
import { CoToday,Highlites,Alert } from '../components'

const Today = ({data}) => {
  return (
    <>
<CoToday data={data}/>
<Highlites data={data}/>
{/* <Alert data={data}/> */}
</>
  )
}

export default Today