import React, { useState } from 'react'
import styled from 'styled-components'
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const MovieMod = styled.div`
  margin-bottom: 20px;

  h2{
    margin: 0 0 10PX 30px;
    font-weight: 700;
    font-style: italic;
    font-size: 1.5rem;
    border-bottom: 2px solid #FFD700;
  }

  .movieRow--listarea{
    overflow-x: hidden;
    padding-left: 30px;
    /* background-color: #111; */
  }

  .movieRow--list{
    transition: all ease 0.5s;
  }

  .movieRow--item{
    display: inline-block;
    width: 150px;
    cursor: pointer;
  }

  .movieRow--item img{
    width: 100%;
    transform: scale(0.9);
    transition: all ease .3s;
  }

  .movieRow--item img:hover{
    transform: scale(1);
  }

  .movieRow--left,
  .movieRow--right{
    position: absolute;
    width: 30px;
    height: 225px;
    background-color: #051822e6;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease .5s;
  }

  .movieRow--left{
    left: 0;
  }

  .movieRow--right{
    right: 0;
  }

  &:hover .movieRow--left,
  &:hover .movieRow--right{
    opacity: 1;
  }

  @media (max-width: 830px){
    h2{
      margin: 0 0 10PX 5px;
    }

    .movieRow--listarea{
      padding-left: 0;
    }
  }

`

const MovieRow = ({title, items}) => {
  const [scrollX, setScrollX] = useState(-400);

  const handleLeftArrow = () => {
      let x = scrollX + Math.round(window.innerWidth / 2);
      if(x > 0) {
        x = 0;
      }
      setScrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if((window.innerWidth - listW) > x){
      x = (window.innerWidth - listW > x) - 30;

    }
    setScrollX(x);
  }

  return (
    <MovieMod>
      <h2>
        {title}
      </h2>

      <div className="movieRow--left" onClick={handleLeftArrow}>
          <MdNavigateBefore style={{fontSize:"50px"}}/>
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
          <MdNavigateNext style={{fontSize:"50px"}}/>
      </div>

      <div className="movieRow--listarea">
        <div className="movieRow--list" style={{
          marginLeft: scrollX,
          width: items.results.length * 150
        }}>
          {items.length === 0 && <p>Carregando...</p>}
          {items.results && items.results.map((item,key) => (
            <div className="movieRow--item">
              <img key={key} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
            </div>             
          ))}
        </div>
        
      </div>
    </MovieMod>
  );
}

export default MovieRow;