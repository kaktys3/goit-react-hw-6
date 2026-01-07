import './PageBoard.css'
import { styled, createGlobalStyle } from "styled-components"
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPerson } from "react-icons/io";
import { TbClipboardList } from "react-icons/tb";
import { GoClock } from "react-icons/go";

const Title = styled.h5`
        font-size: 20px;
    font-weight: 700;
    padding:0px 0px 20px;`

const GlobalStyle = createGlobalStyle`
*{
    padding: 0px;
    margin: 0px;
}

svg {
width: 24px;
height: 24px;

}
    body{
    margin: 0 auto;
    }
`

const Event = ({ name, start, end, location, speaker, locationIcon, personIcon, scetchdrulIcon, oclockIcon }) => {

    return (
        <div className='event'>
            <GlobalStyle />
            <Title>{name}</Title>
            <div className='event-information-box'>
                {locationIcon}
                <p className="event-text">{location}</p>
            </div>
            <div className='event-information-box'>
                {personIcon}
                <p className="event-text">{speaker}</p>
            </div>
            <div className='event-information-box'>
                {scetchdrulIcon}
                <p className="event-text">{start}</p>
            </div>
            <div className='event-information-box'>
                {oclockIcon}
                <p className="event-text">{end}</p>
            </div>
        </div>
    )
}

export default function PageBoard({ events }) {
    return (
        <div className="page">
            <h2 className='page-title'>24th Core Worlds Coalition Conferense</h2>
            <div className='page-board'>
                {events.map((e, index) => (
                    <Event className='event' key={index} name={e.name} start={e.time.start} end={e.time.end} location={e.location} speaker={e.speaker} locationIcon={(<FaLocationDot style={{ color: 'red' }} />)} personIcon={(<IoIosPerson />)} scetchdrulIcon={(<TbClipboardList />)} oclockIcon={(<GoClock />)} />
                ))}
            </div>
        </div>
    )
}