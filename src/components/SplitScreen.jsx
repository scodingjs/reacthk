import styled from 'styled-components';

const Container = styled.div`
 display:flex;
`
const Pane = styled.div`
flex:${props => props.weight};
`
// export const SplitScreen = ({left:Left,leftSize=2, right:Right,rightSize=1}) => {
//     return(<Container>
//     <Pane weight={leftSize}>
//         <Left />
//     </Pane>
//     <Pane weight={rightSize}>
//         <Right />
//     </Pane>
//     </Container>);
// }



export const SplitScreen = ({leftSize=2, rightSize=1,children}) => {
    const [leftComponent,rightComponent] = children //Children is an array and extracting [0] & [1]
    return(<Container>
    <Pane weight={leftSize}>
        {leftComponent}
    </Pane>
    <Pane weight={rightSize}>
        {rightComponent}
    </Pane>
    </Container>);
}