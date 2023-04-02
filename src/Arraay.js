import React from "react";
import { Table } from "react-bootstrap";

function Arraay() {
  /* const student = [1,2,3,4,5];
    const stadd = [ {name : "Abhay", mob : 6394263206},{name : "Sanket", mob : 9554147070},
                    {name : "Harsh", mob : 9648048578},{name : "Aditya", mob : 6394260871},]
   const st =  student.map((item)=>{
      return item*2;
    });
   */
  // Nested List

  const stadd = [
    {
      name: "Abhay",
      mob: 6394263206,
      address: [
        { hn: "10", city: "Mumbai", country: "India" },
        { hn: "12", city: "Varanasi", country: "India" },
        { hn: "15", city: "Nashik", country: "India" },
      ]
    },
    {
      name: "Sanket",
      mob: 9554147070,
      address: [
        { hn: "10", city: "Mumbai", country: "India" },
        { hn: "12", city: "Varanasi", country: "India" },
        { hn: "15", city: "Nashik", country: "India" },
      ]
    },
    { name: "Harsh", mob: 9648048578,address : [
        { hn: "10", city: "Mumbai", country: "India" },
        { hn: "12", city: "Varanasi", country: "India" },
        { hn: "15", city: "Nashik", country: "India" },
    ] },
    {
      name: "Aditya",
      mob: 6394260871,
      address: [
        { hn: "10", city: "Mumbai", country: "India" },
        { hn: "12", city: "Varanasi", country: "India" },
        { hn: "15", city: "Nashik", country: "India" },
      ]
    },
  ];
  /* const users = [
    {
      name: 'Anil', email: 'anil@test.com', address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
    {
      name: 'Burce', email: 'bruce@test.com', address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
    {
      name: 'Peter', email: 'peter@test.com', address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
    {
      name: 'Sam', email: 'sam@test.com', address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
  ] */
  return (
    <div>
      {/*  <Table>
      <tr>
      <td>S.No</td>
        <td>name</td>
        <td>mob</td>
      </tr>
      {

      stadd.map((i,k)=>
      <tr key = {k}>
        <td>{k+1}</td>
        <td>{i.name}</td>
        <td>{i.mob}</td>
      </tr>
      )
      
      }
      </Table>
      */}

      <h1>List With Nested Array</h1>

      <Table variant="dark" striped>
           <thead>
           <tr>
            <td></td>
            <td >Name</td>
            <td>Mob</td>
            <td>Address</td>
            </tr>
          </thead>
          <tbody>
            {
                stadd.map((i,k)=>
                <tr key = {k}>
                    <td>{k+1}</td>
                    <td>{i.name}</td>
                    <td>{i.mob}</td>
                    <td>
                      <Table variant="dark" striped>
                     
                        <tbody>
                            {
                                i.address.map((ii,kk)=>
                                <tr key = {kk}>
                                   <td>{kk+1}</td>
                                    <td>{ii.hn}</td>
                                    <td>{ii.city}</td>
                                    <td>{ii.country}</td>
                                </tr>
                                )
                            }
                        </tbody>
                      </Table>  
                       
              </td>
              </tr>
            )
            }
        </tbody>
        </Table>

       {/* <Table variant="dark"  >
        <tbody>
          <tr>
          <td>S.N</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
          {
            users.map((item,i)=>
            <tr key={i}>
               <td>{i+1}</td>
            <td>{item.name}</td>
          <td>{item.email}</td>
            <td>
              
              <Table variant="dark"  >
        <tbody>
              {
                item.address.map((data)=>

                <tr>
                  <td>{data.hm}</td>
                  <td>{data.city}</td>
                  <td>{data.country}</td>
                </tr>
                )
              }
              </tbody>
              </Table>
              
            </td>
          </tr>
          )
          }
        </tbody>
      </Table>
        */}
    </div>
  );
}

export default Arraay;
