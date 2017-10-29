import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './mainpage.css'

import './myStyle.css'

import Home from './../homepage/homepage.js'
import About from './../aboutpage/aboutpage.js'

class MainPage extends React.Component {
	render () {
		return  <div className='container'>
				<div className='left'>
					<div className='img'>
						<img src='./2.jpg'/>
						<div className='imagDes'>
							图片描述图片描述
						</div>
					</div>

					<p className='leftProfile'>
						jdjdjdjhrhrdddddddddddd2736767396833968367386396836369836hrhhrhrhrhrhrhrhgwgjwwkjgwkwkjgkjgkgwkgwkjg
					</p>
				</div>

				<div className='right'>
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