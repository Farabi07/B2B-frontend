import React from 'react'

const details = [
  { fullname: "Farhad", address: "banasree",
    phones: [
      { number: "01111", op: "gp" },
      { number: "01991", op: "robi" }
    ]
  },
  { fullname: "kabir", address: "mirpur",
    phones: [
      { number: "01111", op: "gp" },
      { number: "01991", op: "robi" }
    ]
  },
  { fullname: "Jibon", address: "Jatrabari",
    phones: [
      { number: "01111", op: "gp" },
      { number: "01991", op: "robi" }
    ]
  }
]

const Index = () => {
  return (
    <div>
      {details.map((data) => {
        const { fullname, address, phones } = data
        return (
          <div key={fullname}>
            <h1>Fullname: {fullname}</h1>
            <p>Address: {address}</p>
            {phones.map((phone, index) => (
              <div key={index}>
                <h1>Phone: {phone.number} (Operator: {phone.op})</h1>
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default Index
