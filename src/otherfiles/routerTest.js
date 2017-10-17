import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './routerTest.css';
import ShoppingList from './ShoppingList.js'

class BasicExample extends React.Component{
  render() {
  return <Router>
    <div>
      <h1 class='center'>Jason Zhang web site</h1>

      <div class="responsive">
         <div class="img">
         <div class="desc">这里添加图片文本描述</div>
         </div>
      </div>

      <div class='menu'>
       <ul>
        <li ><Link to="/">Home</Link></li>
        <li ><Link to="/about">About</Link></li>
        <li ><Link to="/topics">Topics</Link></li>
        <li ><Link to="/shoppingList">ShoppingList</Link></li>
       </ul>
      </div>

      <hr/>

      <div className='content'> 
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/shoppingList" component={ShoppingList}/>

      </div>
    </div>
  </Router>
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
	<div>
		<h1>About page </h1>
		<ul>
			<li>Instagram</li>
			<li>WhatsApp</li>
			<li>Oculus</li>
		</ul>
	</div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
      <li><Link to={`${match.url}/components`}>Components</Link></li>
      <li><Link to={`${match.url}/props-v-state`}>Props v. State</Link></li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default BasicExample