import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from '../containers/Header/Header';

import UserManage from '../containers/System/Admin/User/UserManage';
import UserCreate from '../containers/System/Admin/User/UserCreate';
import UserUpdate from '../containers/System/Admin/User/UserUpdate';
import MainCatManage from '../containers/System/Admin/Category/MainCatManage';
import MainCatCreate from '../containers/System/Admin/Category/MainCatCreate';
import MainCatUpdate from '../containers/System/Admin/Category/MainCatUpdate';
import SubCatManage from '../containers/System/Admin/Category/SubCatManage';
import SubCatCreate from '../containers/System/Admin/Category/SubCatCreate';
import SubCatUpdate from '../containers/System/Admin/Category/SubCatUpdate';
import DiscountManage from '../containers/System/Admin/Discount/DiscountManage';
import DiscountCreate from '../containers/System/Admin/Discount/DiscountCreate';
import DiscountUpdate from '../containers/System/Admin/Discount/DiscountUpdate';
import ProductManage from '../containers/System/Admin/Product/ProductManage';
import ProductCreate from '../containers/System/Admin/Product/ProductCreate';
import ProductUpdate from '../containers/System/Admin/Product/ProductUpdate';
import OrderManage from '../containers/System/Admin/Order/OrderManage';
import OrderCreate from '../containers/System/Admin/Order/OrderCreate';
import OrderUpdate from '../containers/System/Admin/Order/OrderUpdate';

import './System.scss';

class System extends Component {
    render() {
        const { systemMenuPath } = this.props;
        return (
            <div className="system-container">
                <Header />
                <div className="system-body">
                    <Switch>
                        <Route path="/system/user-manage" component={UserManage} />
                        <Route path="/system/user-create" component={UserCreate} />
                        <Route path="/system/user-update/:id" component={UserUpdate} />

                        <Route path="/system/main-cat-create" component={MainCatCreate} />
                        <Route path="/system/main-cat-manage" component={MainCatManage} />
                        <Route path="/system/main-cat-update/:id" component={MainCatUpdate} />

                        <Route path="/system/sub-cat-create" component={SubCatCreate} />
                        <Route path="/system/sub-cat-manage" component={SubCatManage} />
                        <Route path="/system/sub-cat-update/:id" component={SubCatUpdate} />

                        <Route path="/system/discount-create" component={DiscountCreate} />
                        <Route path="/system/discount-manage" component={DiscountManage} />
                        <Route path="/system/discount-update/:id" component={DiscountUpdate} />

                        <Route path="/system/product-create" component={ProductCreate} />
                        <Route path="/system/product-manage" component={ProductManage} />
                        <Route path="/system/product-update/:id" component={ProductUpdate} />

                        <Route path="/system/order-create" component={OrderCreate} />
                        <Route path="/system/order-manage" component={OrderManage} />
                        <Route path="/system/order-update/:id" component={OrderUpdate} />

                        <Route
                            component={() => {
                                return <Redirect to={systemMenuPath} />;
                            }}
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        systemMenuPath: state.app.systemMenuPath,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
