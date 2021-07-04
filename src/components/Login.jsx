import React, { useState } from "react";

const Login = () => {
  const [wholename, setWholename] = useState({
    firstname: "",
    lastname: ""
  });
  return(
    <form>
         <input name="firstname" type="text" value={wholename.firstname} onChange={event => setWholename({...wholename, firstname: event.target.value})} />
         <br />
         <input name="lastname" type="text" value={wholename.lastname} onChange={event => setWholename({...wholename, lastname: event.target.value})} />
         <div>
           Firstname: {wholename.firstname}
           <br />
           Lastname: {wholename.lastname}
         </div>
    </form>
  );

}

export default Login;
