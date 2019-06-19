import React from 'react';
import './App.css';

export default class UnsignedOrders extends React.Component {
	constructor(props) {
		super(props)
		this.state = { data: [] }
	}
	
	loadData() {
		fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
			.then(response => response.json())
			.then(data => {
        this.setState({data: data["Results"] })
        
        console.log(typeof data["Results"])
		})
			.catch(err => console.error(this.props.url, err.toString()))
	}
	
	signOrder(id) {
		let ids = [
		{ 'orderId': id }
		];
		console.log(ids)
		fetch('example.com/api/orders/unsigned', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(ids)
		})
		
	}
	
	componentDidMount() {
		this.loadData()
	}
	
  render() {
    return <ul>
			<li className='title'>
				<span>Make_Id</span>
				<span>Make_Name</span>
				<span>VehicleType_Id</span>
				<span>VehicleType_Name</span>
			</li>
      { this.state.data.map((item) => {
				let statusClass = 'sign'
				return <li className='item'>
					<span>{item.MakeId}</span>
					<span>{item.MakeName}</span>
					<span>{item.VehicleTypeId}</span>
					<span></span>
				</li>
        })
      }
    </ul>;
  }
}
			


