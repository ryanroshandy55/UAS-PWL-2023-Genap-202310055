import React from 'react'

export default function Discover() {
  return (
    <div>{["adam", "ryan", "fisher", "lamela", "zarco"].map((user, idx) => {
      return (
        <div>
          <p key={idx}> Halo semua {user} </p>
        </div>
      )
    })}</div>
  )
}
