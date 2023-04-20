import React from "react";

const ProductDetailsTable = () => {
    const data = [
        { date:'22-03-2023', name:"sukanya", customerno: '1', mailid: "sukanya1@gmail.com"},
        { date:'22-03-2023', name:"sukanya", customerno: '2', mailid: "sukanya2@gmail.com"},
        { date:'22-03-2023', name:"sukanya", customerno: '3', mailid: "sukanya3@gmail.com"},
        { date:'22-03-2023', name:"sukanya", customerno: '4', mailid: "sukanya4@gmail.com"},
        { date:'22-03-2023', name:"sukanya", customerno: '5', mailid: "sukanya5@gmail.com"}
      ];
return(
<div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>SNO</th>
        <th>DATE</th>
        <th>NAME</th>
        <th>CUSTOMER NO</th>
        <th>CUSTOMER MAIL ID</th>
      </tr>
    </thead>
    <tbody>
    {data.map((item, index) => (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{item.date}</td>
            <td>{item.name}</td>
            <td>{item.customerno}</td>
            <td>{item.mailid}</td>
          </tr>
        ))}
    </tbody>
  </table>
</div>
    )
}
export default ProductDetailsTable;