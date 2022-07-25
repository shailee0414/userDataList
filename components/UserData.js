import React from "react";

const UserData = ({ item }) => {
   
    return (
        <table className="ui single line table">
           
            <tbody>
                <tr>
                    <td className="collapsing"><i className="user icon"></i>Name:<b> {item.name}</b></td>
                    <td>username:<b>{item.username}</b></td>
                    <td>email:<b> {item.email}</b></td>
                    <td>address:<b> {item.address.street} {item.address.suite} {item.address.city}</b></td>
                    <td>phone:<b> {item.phone}</b></td>
                    <td>website:<b> {item.website} </b></td>
                    <td>company:<b>{item.company.name} </b></td>
                </tr>
                
            </tbody>
        </table>
     
    )
}
export default UserData;
