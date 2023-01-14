import Head from "next/head";
import Image from "next/image";
import styled from "@emotion/styled";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import Header from "@/components/common/Header";
import Nav from "@/components/common/Nav";
import Section from "@/components/common/Section";
import RealTimeSearches from "@/components/common/RealTimeSearches";
import Footer from "@/components/common/Footer";

const Home = () => {
    return (
        <div>
            <Header />
            <PageWrapper>
                <PageContent>
                    <Section />
                    <RightVStack>
                        <RealTimeSearches />
                        <WriteButton>
                            게시글 쓰기
                            <Icon className="material-symbols-rounded">
                                edit
                            </Icon>
                        </WriteButton>
                    </RightVStack>
                </PageContent>
            </PageWrapper>
            <Footer />
        </div>
    );
};

const Icon = styled.div`
    font-size: 12px;
    font-variation-settings: "FILL" 1;
`;

const RightVStack = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const WriteButton = styled.button`
    width: 280px;
    height: 48px;
    font-weight: 700;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    background: #4329ff;
    border-radius: 8px;
    border: none;
    gap: 8px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background: var(--hoverColor);
    }
`;

const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
`;

const PageContent = styled.div`
    display: flex;
    width: 1180px;
    margin-top: 121px;
    justify-content: space-between;
`;

export default Home;
