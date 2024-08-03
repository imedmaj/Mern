import React from "react";

const Table = ({ allcountires }) => {
  return (
    <div>
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Flage</th>
          <th>Indep</th>
          <th>Action</th>
        </tr>
        <tbody>
            
       
{allcountires.map((item , index) =>(

<tr key={index}>
  <td>{item.name.common}</td>
  <td><img src={item.flags.png} alt="flags" height={50}/></td>
  <td>{item.independent ?'yes':'No'}</td>
  <td><button>delete</button></td>

  </tr>
))}
</tbody>
      
      </thead>
      </table>
    </div>
  );
};

export default Table;
