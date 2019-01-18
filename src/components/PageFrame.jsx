import React from 'react';
import styled from '@emotion/styled';
import { Link } from "react-router-dom";

const Layout = styled.div`
    background-color: #F2F2F0;
    padding: 10px;
    display: flex;
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
    width: 1288px;
    margin: 0 auto;
`

const SideBar = styled.div`
    background-color: #1E466A;
    padding: 40px;
    color: #A5B5C2;
`
const LinkButton = styled(Link)`
    display:block;
    color: #209CEA;
    background-color: white;
    padding: 5px;
    white-space: nowrap;
    text-decoration:none;
    padding: 10px 20px;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: bold;
`

const MainContent = styled.div`
    background-color: #F2F2F0;
    padding: 40px;
    flex-grow: 1;
`
const LinkList = styled.ul`
    padding: 10px 0 0 0 ;
    margin: 30px 0;
    border-top: 1px solid rgba(164,180,192, .3);
    text-indent:0;
    text-transform:uppercase;
    font-weight: bold;
    font-size: 14px;
    list-style-type:none;
    & li {
        padding: 10px 0;
        margin: 0;
        text-indent:0;
    }
    & a {
        color: #A5B5C2;
        text-decoration: none;
    }
`

function PageFrame(props) {
  return (
    <Layout>
      <SideBar>
        <LinkButton to="/add-product">Add Products</LinkButton>
        <LinkList>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/">Products</Link></li>
            <li>Reports</li>
        </LinkList>
      </SideBar>
      <MainContent>
      {props.children}
      </MainContent>
    </Layout>
  );
}

export default PageFrame;