import './App.css';

import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {
	const dispatch = useDispatch()
	const cash = useSelector(state => state.cash.cash)
	const customers = useSelector(state => state.customers.customers)

	const addCash = (cash) => {
		dispatch({type: "ADD_CASH", payload: cash})
	}
	const getCash = (cash) => {
		dispatch({type: "GET_CASH", payload: cash})
	}

	const addCustomer = (name) => {
		const customer = {
			name,
			id: Date.now()
		}
		dispatch(addCustomerAction(customer))
	}
	const removeCustomer = (customer) => {
		dispatch(removeCustomerAction(customer.id))
	}

	return (
		<div className={'App'}>
			<div style={{fontSize: "3rem"}}>
				{cash}
			</div>
			<div style={{display: "flex", justifyContent: "center"}}>
				<button onClick={() => addCash(Number(prompt()))} style={{marginRight: 20}}>(+) Top up the account</button>
				<button onClick={() => getCash(Number(prompt()))}>(-) Withdraw from the account</button>
			</div>
			<div style={{display: "flex", justifyContent: "center", marginTop: 30}}>
				<button onClick={() => addCustomer(prompt())} style={{marginRight: 20}}>(+) Add customer</button>
			</div>
			{customers.length > 0 ?
				<div>
					{customers.map(customer => 
						<div style={{fontSize: "2rem", border: '1px solid black', padding: "10px", marginTop:  5}}>
							{customer.name}
							<span onClick={() => removeCustomer(customer)} style={{cursor: 'pointer'}}> [-]</span>
						</div>
					)}
				</div>
				:
				<div style={{fontSize: "2rem", marginTop: 20}}>
					No customers!
				</div>
			}
		</div>
	);
}

export default App;
