import styled from "styled-components";
import { FlexContainer } from "../../atoms";
import { FavButton } from "../FavButton/FavButton";
import { ItemCount } from "../ItemCount/ItemCount";
import { Ribbon } from '../Ribbon';

const ItemContainer = styled(FlexContainer)`
    flex-direction: column;
    justify-content: space-between;
    max-width: 20rem;
    border-radius: 0.5em;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    background-color: #000;
`;

const ItemImg = styled.img`
    height: auto;
    width: 100%;
`;

const DetailsContainer = styled(FlexContainer)`
flex-direction: column;
align-items: stretch;
width: 100%;
gap: var(--space-sm);
padding: var(--space-sm);
border-radius: 0.5em 0.5em 0 0;
overflow: hidden;
background-color: var(--color-bg-light);
`;

const ItemPrice = styled.b`
    font-size: 1.5em;
    font-weight: 700;
    padding: 0.25em 0;
`;

export const ItemDetail = ({item, favs}) => {
    return(
        <Ribbon text={item.isVeggie && 'Veggie'} color='avocado'>
            <ItemContainer>
                <ItemImg src={item.image}/>

                <DetailsContainer>
                    <FlexContainer justify='space-between'>
                        <h3>{item.title}</h3>
                        <FavButton id={item.id} favs={favs}/>
                    </FlexContainer>
                    <p>{item.description}</p>
                    <ItemPrice>${item.price}</ItemPrice>
                    

                    <ItemCount color={item.isVeggie ? 'avocado' : 'salmon'} stock={item.stock} onAdd={alert}/>
                </DetailsContainer>
            </ItemContainer>
        </Ribbon>
    );
};