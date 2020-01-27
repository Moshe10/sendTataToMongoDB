import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route // for later
} from 'react-router-dom'
const topics = require('./data').topics;

class RouteApp extends Component {

    render() {

        function Home() {
            return (
                <h1>
                    HOME
              </h1>
            )
        }

        function Topic({match}) {
            const topic = topics.find(({ id }) => id === match.params.topicId);
            
            return (
                <div>
                    TOPIC
              </div>
            )
        }

        function Topics({ match }) {
            console.log('match, ', match);

            return (
                <div>
                    <h1>
                        TOPICS
              </h1>
                    <ul>
                        {topics.map(({ name, id }) => (
                            <li key={id}>
                                <Link to={`${match.url}/${id}`}>{name}</Link>
                            </li>
                        ))}
                    </ul>

                    <hr />

                    <Route path={`${match.path}/:topicId`} component={Topic} />
                </div>
            )
        }

        function Resource() {
            return <p>RESOURCE</p>
        }

        return (
            <Router>
                <div style={{ width: 1000, margin: '0 auto' }}>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/topics'>Topics</Link></li>
                    </ul>

                    <hr />

                    <Route exact path='/' component={Home} />
                    <Route path='/topics' component={Topics} />
                </div>
            </Router>
        )
    }
}

export default RouteApp;