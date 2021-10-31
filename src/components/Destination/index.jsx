import React from "react";
import moonPhoto from "../../assets/destination/image-moon.png";
import { DestinationContainer, DestinationDiv } from "./Destination.styles";

export const Destination = () => {
  return (
    <DestinationContainer as="main" id="main">
      <h1>
        <span aria-hidden="true">01</span>Pick your destination
      </h1>
      <img src={moonPhoto} alt="the moon" />
      <DestinationDiv>
        <button>Moon</button>
        <button>Mars</button>
        <button>Europa</button>
        <button>Titan</button>
      </DestinationDiv>
      <article>
        <h2>Moon</h2>
        <p>
          See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain
          perspective and come back refreshed. While you’re there, take in some history by visiting
          the Luna 2 and Apollo 11 landing sites.
        </p>
        <div>
          <div>
            <h3>Avg. distance</h3>
            <p>384,400 km</p>
          </div>
          <div>
            <h3> Est. travel time</h3>
            <p>3 days</p>
          </div>
        </div>
      </article>
    </DestinationContainer>
  );
};
