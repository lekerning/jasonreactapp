import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './mainpage.css'

import Home from './../homepage/homepage.js'
import About from './../aboutpage/aboutpage.js'



class MainPage extends React.Component {
	render () {
		return  <div>
				<div className='left'>
				<p >
				 jdjdjdjgwgjwwkjgwkwkjgkjgkgwkgwkjg
				</p>
				</div>

				<div>
					<Router>
			    	 <div>
						<div>
			 				<ul>
			 		 			<li><Link to="/">Home</Link></li>
			  		 			<li><Link to="/about">About</Link></li>
			 		 		</ul>
		 				</div>
	 			 		<div > 
     	  		   			<Route exact path="/" component={Home}/>
      	  					<Route path="/about" component={About}/>
         				</div>	
        			 </div>
	 		   	    </Router>
				</div>

			   </div>
	
	}
}

export default MainPage 