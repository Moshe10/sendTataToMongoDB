import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route 
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

        function Topic({ match }) {
            console.log('Topic match, ', match);

            const topic = topics.find(({ id }) => id === match.params.topicId);

            return (
                <div>
                    <h2>{topic.name}</h2>
                    <p>{topic.description}</p>

                    <ul>
                        {topic.resources.map((sub) => (
                            <li key={sub.id}>
                                <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
                            </li>
                        ))}
                    </ul>

                    <hr />

                    <Route path={`${match.path}/:subId`} component={Resource} />
                </div>
            );
        }

        function Topics({ match }) {
            console.log('Topics match, ', match);

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

        function Resource({ match }) {
            console.log('resource match, ', match);
            
            const topic = topics.find(({ id }) => id === match.params.topicId)
                .resources.find(({ id }) => id === match.params.subId);

            return (
                <div>
                    
                    <h3>{topic.name}</h3>
                    <p>{topic.description}</p>
                    <a href={topic.url} rel="noopener noreferrer" target="_blank">More info.</a>
                </div>
            );
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