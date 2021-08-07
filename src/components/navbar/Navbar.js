import React from 'react'
import {Nav,
   NavContainer,
   NavMenu,
   NavItem,
   NavLinks
} from './Navbar.elements'
function Navbar() {
    return (
        <Nav>
            <NavContainer>
         
                <NavMenu>
                   
                    <NavItem>
                        <NavLinks exact to ='/'  activeStyle={{color :'#ffffff', backgroundColor: '#535455'}} >Overview</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks exact to='/tools'    activeStyle={{color :'#ffffff', backgroundColor: '#535455'}} >Tools</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks exact to ='/automation'    activeStyle={{color :'#ffffff', backgroundColor: '#535455'}}  >Automation</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks exact to ='/screenshots'   activeStyle={{color :'#ffffff', backgroundColor: '#535455'}}  >Screenshots</NavLinks>
                    </NavItem>
                 
                   
                </NavMenu>
            </NavContainer>
            
        </Nav>
    )
}

export default Navbar
