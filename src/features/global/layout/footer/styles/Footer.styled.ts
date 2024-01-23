import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.backgroundColor.footer};
  height: 100px;
  position: sticky;
  bottom: 0;

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.screen.mobile}) {
    text-align: start;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`;
