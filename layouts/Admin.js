import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import useSWR from "swr"

export default function Admin({ children }) {

  // const Children = children
  let elements = React.Children.toArray(children)

  
  const fetcher = url => fetch(url,{method:"POST"}).then(res => res.json())
  const { data: user, error } = useSWR("/api/user", fetcher)

  if (elements.length === 1) {
    elements = React.cloneElement(elements[0], { user })
  }
  else if (elements.length > 0) {
    let lastElement = elements[elements.length - 1]
    elements =
      [React.cloneElement(elements[0], { user})]
        .concat(elements.slice(1, -1))
        .concat(React.cloneElement(lastElement, { user }))
  }




  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-200">
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {elements}
        </div>
      </div>
    </>
  );
}
