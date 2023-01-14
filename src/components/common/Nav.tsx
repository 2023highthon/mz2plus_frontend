import React from 'react';
import styled from "@emotion/styled";
import Link from 'next/link';

const Nav = () => {
    const Container = styled.nav`
        margin-top: 120px;
        width: 370px;
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    const List = styled.ul`
        width: 120px;
        list-style-type: none;
        overflow: auto;
    `

    const Shortcut = styled(Link)`
        line-height: 1.5;
        &:hover {
            color: #8877FF;
        }
    `

    return (
        <Container>
            <List>
                <li><Shortcut href={""}>최근</Shortcut></li>
                <li><Shortcut href={""}>베스트</Shortcut></li>
                <li><Shortcut href={""}>실시간 인기</Shortcut></li>
            </List>
            <List>
                <li><Shortcut href={""}>취업</Shortcut></li>
                <li><Shortcut href={""}>연애</Shortcut></li>
                <li><Shortcut href={""}>돈</Shortcut></li>
                <li><Shortcut href={""}>다이어트</Shortcut></li>
                <li><Shortcut href={""}>공부</Shortcut></li>
            </List>
        </Container>
    );
}

export default Nav;