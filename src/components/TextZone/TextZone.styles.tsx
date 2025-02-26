import styled from "styled-components";

export const TextZoneContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    gap: 5px;
`

export const InputZone = styled.div`
    flex: 1;
    border: 1px solid grey;
    background-color: white;
    border-radius: 3px;
    padding: 0 3px;
    .typing-area {
        height: 100%;
        width: 100%;
        border: none;
        outline: none;
        font-size: 1rem;
        color: #070707;
        font-family: "nunito";
    }
`