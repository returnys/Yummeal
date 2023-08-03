import styled from "@emotion/styled";

export const FooterWrap = styled.div`
  .footer-menu {
    .footer-menu-list {
      display: flex;
      justify-content: space-evenly;
      border-top: 0.1rem solid rgba(0, 0, 0, 0.3);
      border-bottom: 0.1rem solid rgba(0, 0, 0, 0.3);
      li {
        font-size: 1.8rem;
        padding: 1.5rem 0;
      }
    }
  }
  .footer-cs {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;
    h3 {
      font-size: 2rem;
      padding-bottom: 1rem;
    }
    .imgbox {
      img {
        width: 10rem;
        height: 10rem;
      }
    }
    .csbox {
      p {
        font-size: 3rem;
        font-weight: 700;
        color: #8eb111;
      }
      span {
        display: block;
        font-size: 1.5rem;
        line-height: 2.5rem;
      }
      .offday {
        color: #ff0000;
      }
    }
    .footer-info {
      span {
        display: block;
        font-size: 1.5rem;
        line-height: 2.5rem;
      }
    }
  }
`;