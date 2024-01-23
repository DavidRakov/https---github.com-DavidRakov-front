import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.backgroundColor.header};
  padding: 5px 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  max-height: 75px;

  p {
    width: 300px;
  }

  @media (max-width: ${({ theme }) => theme.screen.mobile}) {
    & > div > div {
      display: none;
    }

    & > div > p {
      display: none;
    }
  }
`;

export const Avatar = styled.div`
  background-color: black;
  color: white;
  border-radius: 50%;
  font-size: xx-large;
  width: 50px;
  height: 50px;
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  @media (max-width: ${({ theme }) => theme.screen.mobile}) {
    margin-bottom: 10px;
  }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.screen.mobile}) {
    margin: 40px 0 30px;
  }
`;
