import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBlock, Container, Header, Logo, Navigation, Link, Auth } from "./SharedLayout.styled"

export const SharedLayout = () => {
  return (
      <AppBlock>
        <Header>
          <Container>
            <Logo>
              <span style={{ color: '#E1E57B'}}>Your</span><span style={{ color: '#2196f3'}}>Films</span>
            </Logo>
            <Navigation>
              <Link to="/" end>Home</Link>
              <Link to="/movies">Movies</Link>
            </Navigation>
            <Auth>Authorize</Auth>
          </Container>
        </Header> 
        <Container>
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
        </Container>      
      </AppBlock>
    )
}