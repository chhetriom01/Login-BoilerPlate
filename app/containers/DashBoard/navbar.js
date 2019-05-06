// import React , {Component} from 'react';
// import { Menu, Segment } from 'semantic-ui-react';
// import { push } from 'connected-react-router';

// export default class Navbar extends React.Component{
//     state = { activeItem: 'home' };

//     handleItemClick = (e, { name }) => this.setState({ activeItem: name });
//     handleLogout = () => {
//       localStorage.removeItem('token');
//       this.props.dispatch(push('/login'));
//     };
//     render() {
//       const { activeItem } = this.state;
//       return (
//         <div>
//           <Menu pointing secondary>
//             <Menu.Item
//               name="home"
//               active={activeItem === 'home'}
//               onClick={this.handleItemClick}
//             />
//             <Menu.Item
//               name="messages"
//               active={activeItem === 'messages'}
//               onClick={this.handleItemClick}
//             />
//             <Menu.Item
//               name="Profile"
//               active={activeItem === 'profile'}
//               onClick={this.handleItemClick}
//             />
//             <Menu.Menu position="right">
//               <Menu.Item
//                 name="logout"
//                 active={activeItem === 'logout'}
//                 onClick={this.handleLogout}
//               />
//             </Menu.Menu>
//           </Menu>
//         </div>
//       );
//     }
//   }
//   function mapDispatchToProps(dispatch) {
//     return {
//       dispatch,
//     };
//   }