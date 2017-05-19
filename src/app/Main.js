/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

import Header from './Header';

class Main extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: 3,
        };
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {

        return (
            <MuiThemeProvider>
            <div>
            <Header />

            
            </div>
            </MuiThemeProvider>
        );
    }
}

export default Main;
