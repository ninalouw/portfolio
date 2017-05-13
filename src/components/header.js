import React, { Component } from 'react';
import { Link } from 'react-router';
import {Row, Col} from 'react-materialize';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


class Header extends Component {
  state = {
  valueSingle: '3',
  valueMultiple: ['3', '5'],
};

handleChangeSingle = (event, value) => {
  this.setState({
    valueSingle: value,
  });
};

handleChangeMultiple = (event, value) => {
  this.setState({
    valueMultiple: value,
  });
};

handleOpenMenu = () => {
  this.setState({
    openMenu: true,
  });
}

handleOnRequestChange = (value) => {
  this.setState({
    openMenu: value,
  });
}
  render () {
    return (
      <div className="header">
        <nav>
            <ul className="navbar">
                  <li className="navbar-li"><Link className=" active navbar-a" to='/'> NML</Link></li>

                  <li className="navbar-li"><Link className="navbar-a" to='about'>About</Link></li>

                  <li className="navbar-li"><Link className="navbar-a" to='skills'>Skills</Link></li>

                  <li className="navbar-li"><Link className="navbar-a" to='projects'>Projects</Link></li>

                  <li className="navbar-li"><Link className="navbar-a" to='contact'>Contact</Link></li>
              </ul>
              <IconMenu
                  className="nav-iconmenu"
                  iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                  onChange={this.handleChangeSingle}
                  value={this.state.valueSingle}
                >
                  <Link className=" active navbar-a" to='/'>
                    <MenuItem value="1" primaryText="Home" />
                  </Link>
                  <Link className="navbar-a" to='about'>
                    <MenuItem value="2" primaryText="About" />
                  </Link>
                  <Link className="navbar-a" to='skills'>
                    <MenuItem value="3" primaryText="Skills" />
                  </Link>
                  <Link className="navbar-a" to='projects'>
                    <MenuItem value="4" primaryText="Projects" />
                  </Link>
                  <Link className="navbar-a" to='contact'>
                    <MenuItem value="5" primaryText="Contact" />
                  </Link>
              </IconMenu>
        </nav>

      </div>
    );
  }
}

export default Header;
