import React from 'react';

const DisplayOrder = (props) => {

    const renderTable = ({orderData}) => {
        if (orderData){
            return orderData.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.hotel_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>Rs.{item.cost}</td>
                        <td>{item.date}</td>
                        <td>{item.status}</td>
                        <td>{item.bank_name}</td>
                    </tr>
                )
            })
        }
    }
    return(
        <div className="container-fluid">
            <div className="row">
                <h3>Orders</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">OrderId</th>
                            <th scope="col">RName</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Bank Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTable(props)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DisplayOrder;