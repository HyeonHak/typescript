import react from 'react';
import styled from "styled-components";
import background from '../asset/photo-02.jpg';

const Intro = ({ children }) => {
    return (
        <Div background={background}>

        </Div>
    )
}


const Div = styled.div`
height:100vh;
width:100vw;
background: url(${props => props.background})`


export default Intro;