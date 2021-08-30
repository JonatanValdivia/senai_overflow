import styled from 'styled-components';

export const StyleProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


    > img{
        width: 15vw;
        max-width: 200px;
        height: 18vh;
        min-height: 200px;
        max-height: 300px;
        margin: 40px 0 0 0;
        border-radius: 50%;
        background-color: green;
    }

    > first-child:div{
        background-color: yellowgreen;
        width: 80%;
        margin-top: 80px;

        >p{
            margin-bottom: 20px;
        }
    }



`;
