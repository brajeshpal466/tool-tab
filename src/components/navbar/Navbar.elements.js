import styled from "styled-components";
import {NavLink}  from 'react-router-dom'
export const Nav = styled.nav`
width:100%;
height: 50px;
display:flex ;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;

top:0px;
padding: 2px 2px;
box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.3);
background-color: #fff;
border-radius:2px;
@media screen and (max-width:900px){
    font-size: .9rem;
}


`;

export const NavContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 5px 10px;
width: 100%;
height: 100%;
`;

export const NavMenu = styled.ul`
display: flex;
height: 100%;
align-items: center;

justify-content: space-evenly;
list-style: none;
text-align:center;
width: 100%;
`;
export const NavItem = styled.li`
  width: 100%;
 
`;
export const NavLinks = styled(NavLink)`

height: 100%;
width: 100%;
text-decoration: none;
font-weight:bold;
   padding   : 5px 10px;
   border-radius: 20px;
   background-color: #fff;
   color: #535455;
   &:hover{
       transition: all .3s ease;
       color:#fff;
       background-color: #535455;
   }
`