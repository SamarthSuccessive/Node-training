import { Outlet,Navigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const Privateroutes = ({auth}) => {
  const token = sessionStorage.getItem('token');
  return  auth&&token?
  <>
  <Outlet/>
  </>
  :<Navigate replace to='/' />

}

export default Privateroutes
