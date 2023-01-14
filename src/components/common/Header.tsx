import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const Container = styled.nav`
        width: 100%;
        height: 68px;
        background: var(--gray-100);
        box-shadow: 0px 6px 6px rgba(204, 204, 204, 0.25);
    `;
    const Wrapper = styled.div`
        width: 100%;
        height: 100%;
        max-width: 1180px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `;
    const SignupButton = styled(Link)`
        width: 86px;
        height: 34px;
        color: var(--gray100);
        background: #4329ff;
        border-radius: 22px;
        font-size: 15px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover {
            background: var(--hoverColor);
        }
    `;
    const Shortcut = styled(Link)`
        font-size: 15px;
        color: var(--gray700);
        &:hover {
            color: var(--gray500);
        }
    `;

    const Actions = styled.div`
        display: flex;
        align-items: center;
        gap: 20px;
    `;

    const LinkGroup = styled.div`
        display: flex;
        align-items: center;
        gap: 70px;
    `;
    const LogoAndLinkGroup = styled.div`
        display: flex;
        align-items: center;
        gap: 108px;
    `;
    return (
        <Container>
            <Wrapper>
                <LogoAndLinkGroup>
                    <Image src="/logo.svg" alt="logo" width={46} height={20} />
                    <LinkGroup>
                        <Shortcut href={"board/1"}>일반</Shortcut>
                        <Shortcut href={"board/1"}>일반</Shortcut>
                        <Shortcut href={"board/1"}>일반</Shortcut>
                        <Shortcut href={"board/1"}>일반</Shortcut>
                    </LinkGroup>
                </LogoAndLinkGroup>

                <Actions>
                    <Shortcut href={"login"}>로그인</Shortcut>
                    <SignupButton href={"/register"}>회원가입</SignupButton>
                </Actions>
            </Wrapper>
        </Container>
    );
};

export default Header;
