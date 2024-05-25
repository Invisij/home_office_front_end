import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import HomeHeader from '../components/HomeHeader/HomeHeader';
import HomeFooter from '../components/HomeFooter/HomeFooter';

import HomePage from '../containers/HomePage/HomePage';
import MainCatPage from '../containers/MainCatPage/MainCatPage';

import './Home.scss';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <HomeHeader />
                <div className="home-body">
                    <Switch>
                        <Route path="/main-cat-page/:id" component={MainCatPage} />
                        <Route path="" component={HomePage} />
                    </Switch>
                </div>
                <HomeFooter />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
