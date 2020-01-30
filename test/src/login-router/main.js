import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signOut(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

const Public = () => <h3>Public</h3>

const Protected = () => <h3>Protected</h3>

class Login extends React.Component {
    state = {
        redirectToReferrer: false
    }

    componentDidMount() {
        // this.setState(() => ({
        //     redirectToReferrer: true
        // }))
    }

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState(() => ({
                redirectToReferrer: true
            }))
        })
    }
    render() {
        console.log('login props, ', this.props);

        const { redirectToReferrer } = this.state
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        if (redirectToReferrer === true) {
            console.log('from, ', from);
            
            return (
                <Redirect to={from} />
                
            )
        }
        return (
            <div>
                <p>You must to log in to view this page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </div>
        )
    }
}

const PrivetRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
)

const AuthButton = withRouter(({ history }) => (
    fakeAuth.isAuthenticated === true
        ? <p>welcome! <button onClick={() => {
            fakeAuth.signOut(() => history.push('/'))
        }}>Sign Out</button></p>
        : <p>You are not logged in.</p>
))

class Main extends Component {

    render() {
        console.log('main props, ', this.props);

        return (
            <Router>
                <div>
                    <AuthButton />
                    <ul>
                        <li>
                            <Link to="/public">Public Page</Link>
                        </li>
                        <li>
                            <Link to="/protected">Protected Page</Link>
                        </li>
                    </ul>

                    <Route path="/public" component={Public} />
                    <Route path="/login" component={Login} />
                    <PrivetRoute path='/protected' component={Protected} />
                </div>
            </Router>
        );
    }
}

export default Main;