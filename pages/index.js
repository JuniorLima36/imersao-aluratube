import React from "react";
import db from "../db.json";
import Menu from "../src/menu/Menu";
import styled from "styled-components";
import { ResetCss } from "../src/ResetCss";
import { StyledTimeline } from "../src/Timeline"

function Home() {
  const [filterValue, setFilterValue] = React.useState("")

  return (
    <>
      <ResetCss />
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1
      }}>

        <Header />
        <Menu filterValue={filterValue} setFilterValue={setFilterValue} />
        <Timeline searchValue={filterValue} playlists={db.playlists} />
        <Channel channels={db.channels} />
      </div>
    </>
  );
}
export default Home;

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    padding: 16px 32px;
  }
`;

const StyledBanner = styled.div`
  height: 230px;
  background: url(${db.bg});
`;

function Header() {
  return (
    <StyledHeader>
      <StyledBanner />
      <section className="user-info">
        <img src={`https://github.com/${db.github}`} />
        <div>
          <h2>{db.name}</h2>
          <p>{db.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline({ searchValue, ...props }) {
  const playNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playNames.map((playName) => {
        const videos = props.playlists[playName];
        return (
          <section key={playName}>
            <h2>{playName}</h2>
            <div>
              {videos.filter((video) => {
                const titleNormalized = video.title.toLowerCase();
                const searchValueNormalized = searchValue.toLowerCase();
                
                return titleNormalized.includes(searchValueNormalized);
              }).map((video) => {
                return (
                  <a key={video.url} href={video.url} target="_blank">
                    <img src={video.thumb} /> <br></br>
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

const StyledChannel = styled.div`
  section {
    padding: 16px;
  }

  h2 {
    margin-bottom: 16px;
  }

  div {
    display: flex;
    gap: 19px;
  }
  
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

function Channel(props) {
  return (
    <StyledChannel>
      <section>
        <h2>Canais</h2>
        <div>
          {props.channels.map((channel) => (
            <a key={channel.url} href={channel.url} target="_blank">
              <img src={channel.img} />
            </a>
          ))}
        </div>
      </section>
    </StyledChannel>
  );
}