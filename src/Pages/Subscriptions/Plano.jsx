import styled from 'styled-components'
export default function Plano(){
    return(
        <PlanoStyled>
            <h1>Escolha seu plano</h1>
            <div></div>
            <div></div>
            <div></div>
        </PlanoStyled>
    )
}

const PlanoStyled = styled.div`
    width: 375px;
    height: 667px;
    background-color: #0E0E13;
    margin:20px auto;

    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    position: relative;
    `;