const info =[
    {"name":"Farabi","age":"28"},
    {"name":"Asif","age":"27"},
    {"name":"Jaber","age":"28"},
    {"name":"Far","age":"28"}
];

import React from 'react'

const List = () => {

  return (
    <div>
        {info.map((data)=> {
            const {name,age }=data
            return (
                <div>
                    <h1>{name}</h1>
                    <h1>{age}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default List