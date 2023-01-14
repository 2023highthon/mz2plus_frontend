import styled from "@emotion/styled";
import Image from "next/image";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <Image src="/logo.svg" width={49} height={20} alt="logo" />
                <Spacer size={"17px"} />
                <Message1>MZ세대와 기성세대를 한곳에!</Message1>
                <Spacer size={"57px"} />
                <Message2>본 페이지는 2023 하이톤 참가작입니다.</Message2>
                <Spacer size={"2px"} />
                <Group>
                    <Message3>서비스 소개</Message3>
                    <Line />
                    <Message3>이용약관</Message3>
                    <Line />
                    <Message3>디렉토리</Message3>
                    <Line />
                    <Message3>개인정보 처리방침</Message3>
                    <Line />
                    <Message3>신고가이드</Message3>
                    <Line />
                    <Message3>© 2023 Firshighthon</Message3>
                    <Line />
                </Group>
            </FooterContent>
        </FooterContainer>
    );
};

const Line = styled.div`
    width: 0px;
    height: 7.5px;
    border: 1px solid #e0e0e0;
`;

const Group = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Message3 = styled.div`
    font-size: 14px;
    line-height: 27px;
    display: flex;
    align-items: center;
    color: #757575;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const Message2 = styled.div`
    font-size: 14px;
    line-height: 27px;
    display: flex;
    align-items: center;
    color: #757575;
`;

const Message1 = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
`;

const Spacer = styled.div<{ size: string }>`
    height: ${(props) => props.size};
`;

const FooterContainer = styled.footer`
    width: 100%;
    height: 240px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FooterContent = styled.div`
    width: 1180px;
    display: flex;
    flex-direction: column;
`;

export default Footer;
