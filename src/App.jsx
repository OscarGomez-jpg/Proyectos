import 'App.css';
import Index from 'pages/Index';
import RhodesianInfo from 'pages/RhodesianInfo';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

function App() {
    return (
    	<div className="App">
			<Router>
				<Switch>
					<Route path='/RhodesianInfo' exact>
		 				<RhodesianInfo />
					</Route>
					<Route path='/' exact>
	    				<Index />
					</Route>
				</Switch>
			</Router>
    	</div>
    );
}

export default App;