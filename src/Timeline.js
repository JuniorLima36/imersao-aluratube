import styled from "styled-components";

export const StyledTimeline = styled.div`
  overflow: hidden;
  flex: 1;
  width: 100%;
  padding: 5px;

  h2 {
    text-transform: capitalize;
    font-size: 16px;
    margin-bottom: 15px;
  }

  img {
    object-fit: cover;
    max-width: 210px;
    width: 100%;
    height: auto;
    font-weight: 500;
    aspect-ratio: 16/9;
  }

  section {
    overflow: hidden;
    width: 100%;
    padding: 15px;
    
    div {
      width: calc(100vw - 15px * 4);
      display: grid;
      grid-gap: 15px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px, 1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          display: block;
          padding-top: 8px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
      &::-webkit-scrollbar {
        height: 5px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #FF4545;
        border-radius: 5px;
      }
    }
  }
`;