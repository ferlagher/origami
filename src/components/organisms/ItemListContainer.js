import { FlexContainer } from "../atoms";

//Testing stuff
import styled from 'styled-components';
import { Badge, CartIcon, GithubIcon, HeartIcon, LinkedinIcon, Ribbon, UserIcon } from '../atoms';
import { ItemCount } from '../molecules'

const TestDiv = styled.div`
    height: 5rem;
    width: 5rem;
    background-color: var(--color-nori);
`;

const Container = styled(FlexContainer)`
    flex-direction: column;
    gap: var(--space-sm);
    padding: var(--space-sm);
    max-width: var(--max-width);
`;

export const ItemListContainer = ({greeting}) => {
    return(
        <Container>
            <h2>{greeting}</h2>
            <FlexContainer wrap='wrap' gap='var(--space-sm)'> {/* Testing stuff */}
                <ItemCount stock={15} color='salmon'/>
                <ItemCount stock={0} color='tuna'/>
                <ItemCount stock={5} color='avocado'/>
                <Ribbon color='salmon' text='textolaaaaaaaaargo'><TestDiv/></Ribbon>
                <Ribbon color='tuna' text='🍣'><TestDiv/></Ribbon>
                <Ribbon color='avocado' text='Salto de línea'><TestDiv/></Ribbon>
                <Badge color='salmon' num={8}><TestDiv/></Badge>
                <Badge color='tuna' num={999}><TestDiv/></Badge>
                <Badge color='avocado' num={1}><TestDiv/></Badge>
                <HeartIcon/>
                <GithubIcon/>
                <LinkedinIcon/>
                <CartIcon/>
                <UserIcon/>
            </FlexContainer>
        </Container>
    );
};