import React from 'react'

export default function Albums() {
  return (
    <div>
      <table style={{ width: "30%", marginLeft: "32rem" }} class="table  table-bordered  table-hover mt-5 pd-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Albums</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope='row'>Vidyasagar</td>
            <td>Kuruvi</td>
          </tr>
          <tr>
            <td scope='row'>Mani Sharma</td>
            <td>Kushi</td>
          </tr>
          <tr>
            <td scope='row'>Anirudh</td>
            <td>3</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}