import React from  'react'
import {connect, Global, css, styled} from 'frontity'
import Link from "./link";
import List from "./list"
import Post from "./post"
import Page from "./page"

const Root = ({state}) => {
    const data = state.source.get(state.router.link)
    return (
      <>      
      <Global 
        styles={css`
            *{
                margin:0;
                padding:0;
                box-sizing: borde-box;
            }
            html{
                font-family:sans-serif;                
            }
        `}
      />
        <Header isPostType={data.isPostType}>
            <HeaderContent>  
                <Logo>
                    <h1>Valluvar React theme</h1>
                    <p>current url: {state.router.link}</p>
                </Logo>
                <Menu>
                    <Link href="/">Home</Link>
                    <Link href="/page/2">More Posts</Link>
                    <Link href="/sample-page">Sample Page</Link>
                </Menu>
            </HeaderContent>
        </Header> 
        
        <Main>
            {data.isArchive && <List />}
            {data.isPost && <Post />}
            {data.isPage && <Page />}
        </Main>
      </>
    );
  };

  export default connect(Root)

  const Header = styled.header`
    background:#eee;
    border-bottom:8px solid ${props => props.isPostType ? 'lightseagreen' : 'maroon'};
  `

  const HeaderContent = styled.div`
    max-width:1500px;
    padding:1em;
    margin: auto;
    display:flex;
    justify-content: space-between;

    @media (max-width:600px){
        flex-direction:column;
    }
  `
  const Logo = styled.nav`
    
  `
  const Menu = styled.nav`
    display:flex;
    flex-direction:row;
    margin:1em;
    & > div{
        margin-right:1em;
    }
  `

  const Main = styled.main`
    max-width:1500px;
    padding:2em 1em;
    margin: auto;

    img{
        max-width:100% !important;
    }
    h1{
        margin:0.5em 0;
    }
    p{
        line-height:1.25em;
        margin-bottom:0.75em;
    }
  `