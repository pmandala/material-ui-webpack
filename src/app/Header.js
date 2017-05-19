import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Avatar from 'material-ui/Avatar';

class RightMenu extends React.Component {

    render() {
      return (
        <div style={{display:'flex'}}>
            <Avatar style={{marginTop:5}}>A</Avatar>

            <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}} >
                <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Settings" />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Sign out" />
            </IconMenu>
        </div>
      );
   }
}


class Header extends React.Component {

    handleClick = (event) => {
        console.log(event);
    };

    render() {
      return (
            <AppBar
                title="My Application"
                onLeftIconButtonTouchTap={this.handleClick}
                iconElementRight={<RightMenu />}
            />
      );
   }
}


export default Header;
