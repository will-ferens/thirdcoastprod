import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import * as serviceWorker from './serviceWorker'
import Header from './components/header'
import Home from './components/home'
import Care from './components/care'
import Services from './components/services'
import NewPatients from './components/new_patients'
import Footer from './components/footer'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './styles/App.css'



ReactDOM.render(
    <Router >
        <div className="App">
            <Header />
            <main>
                <Route exact path="/" component={Home} />
                <Route path="/care" component={Care} />
                <Route path="/services" component={Services} />
                <Route path="/newpatients" component={NewPatients} />
            </main> 
            <Footer />
        </div>
        </Router>,

    document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
