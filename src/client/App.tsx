import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './views/Home'
import Admin from './views/Admin'
import Post from './views/Post';


/* HOOK REACT EXAMPLE */
const App:React.FC<AppProps> = (props: AppProps) => {
	

	return (
		<Router>
			<Switch>
				<Route exact path = '/home' component={Home} />
				<Route exact path = '/admin/:id' component={Admin} />
				<Route exact path = '/post/:id' component={Post} />


			</Switch>
		</Router>
	);
};

interface AppProps {}



export default App;
