import './App.css';

import { useDispatch, useSelector } from "react-redux";
import { asyncDecrementCreator, asyncIncrementCreator, decrementCreator, incrementCreator } from './store/countReducer';
import { fetchUsers } from './store/userReducer';

function App() {
	const count = useSelector(state => state.countReducer.count)
	const users = useSelector(state => state.userReducer.users)
	const dispatch = useDispatch()

	return (
		<div className="App">
			<div className="count">{count}</div>
			<div className="btns">
				<button className="btn" onClick={() => dispatch(asyncIncrementCreator())}>(+) INCREMENT++</button>
				<button className="btn" onClick={() => dispatch(asyncDecrementCreator())}>(-) DECREMENT--</button>
				<button className="btn" onClick={() => dispatch(fetchUsers())}>Get Users</button>
			</div>
			{users.length > 0 ?
				<div className="users">
					{users.map(user => 
						<div className="user">
							{user.name}
						</div>
					)}
				</div>
				:
				<div className="no-users">
					No users!
				</div>
			}
		</div>
	);
}

export default App;
