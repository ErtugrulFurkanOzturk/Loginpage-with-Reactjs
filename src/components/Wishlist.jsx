import React, { useState } from "react";

const Wishlist = () => {
  const [listname, setListname] = useState("");
  const [mylist, setMylist] = useState([]);

  const addlist = (event) => {
    event.preventDefault();
    setMylist(prevmylist => [
      ...prevmylist,
      { id: mylist.length, item: listname }
    ]);
    setListname("")
  }
 return(
   <React.Fragment>
      <form onSubmit={addlist}>
           <input name="list" type="text" value={listname} onChange={(event) => setListname(event.target.value)} />
      </form>
      <ul>
          {
            mylist.map(list => (
              <li key={list.id}> {list.item}</li>
            ))
          }
      </ul>
   </React.Fragment>
 );
}


export default Wishlist;
