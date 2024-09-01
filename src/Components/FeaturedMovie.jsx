import React from 'react'
import styled from 'styled-components'
import { FaStar } from "react-icons/fa6";

const FeaturedMod = styled.section`
    height: 110vh;

    .featured--vertical{
        width: inherit;
        height: inherit;
        background: linear-gradient(to top, #092635 2%, transparent 98%);
    }

    .featured--horizontal{
        width: inherit;
        height: inherit;
        background: linear-gradient(to right, #092635 10%, transparent 90%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 70px 0 150px 30px;
    }

    .featured--name{
        font-size: 3rem;
        font-weight: 700;
        font-style: italic;
    }

    .featured--info{
        display: inline-block;
        margin-right: 15px;
        font-size: 1rem;
        font-weight: 400;
        margin-top: 15px;
        align-items: center;
    }

    .featured--points{
        color: #46d369;
    }

    .featured--overview{
        font-weight: 300;
        font-size: 1.2rem;
        font-style: italic;
        max-width: 40%;
    }
    
    .featured--buttons{
        margin-top: 15px;
    }
    
    .watchBtn, 
    .addBtn{
        width: 200px;
        display: inline-block;
        font-style: italic;
        font-size: 1.3rem;
        font-weight: 600;
        padding: 15px 20px;
        text-decoration: none;
        border-radius: 10px;
        margin-right: 10px;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    .watchBtn{
        font-weight: 800;
        background-color: #fff;
        color: #333;
        transition: .2s;
    }

    .watchBtn:hover,
    .addBtn:hover{
        opacity: 0.7;
    }

    .addBtn{
        background-color: #333;
        color: #fff;
        transition: .3s;
    }

    .featured--generos{
        margin-top: 15px;
        font-size: 1.5rem;
        font-weight: 500;
    }

    @media (max-width: 830px){
        height: 90vh;

        .featured--horizontal{
            padding-left: 5px;
        }

        .featured--name{
            font-size: 2rem;
        }

        .featured--overview{
            max-width: 100%;
            font-weight: 200;
        }

        .watchBtn, 
        .addBtn{
            width: 150px;
            font-style: italic;
            font-size: 1rem;
            font-weight: 800;
            padding: 10px 15px;
        }

        .featured--generos{
            font-size: 1.3rem;
        }
    }
`

const FeaturedMovie = ({item}) => {
    // const firstDate = new Date(item.first_air_date);
    const genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

  return (
    <FeaturedMod style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
        <div className="featured--vertical">
            <div className="featured--horizontal">
                <div className="featured--name">{item.title}</div>
                <div className="featured--info">
                    <div className="featured--points">{item.vote_average} <FaStar style={{color:"#FFD700"}}/></div>
                    {/* <div className="featured--year">{firstDate.getFullYear()}</div> */}
                </div>
                <div className="featured--overview">{item.overview}</div>
                <div className="featured--buttons">
                    <a href={`/watch/${item.id}`} className='watchBtn'>Assistir</a>
                    <a href={`/list/add/${item.id}`} className='addBtn'>+ Minha Lista</a>     
                </div>
                <div className="featured--generos">{genres.join(' - ')}</div>
            </div>
        </div>
    </FeaturedMod>
  )
}

export default FeaturedMovie;