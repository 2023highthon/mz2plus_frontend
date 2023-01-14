import Head from "next/head";
import Image from "next/image";
import styled from "@emotion/styled";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import Header from "@/components/common/Header";
import Nav from "@/components/common/Nav";
import Section from "@/components/common/Section";
import RealTimeSearches from "@/components/common/RealTimeSearches";

const Home = () => {
    const MainSection = styled.div`
        display: flex;
        position: absolute;
        top: 191px;
    `
    return (
        <div>
            <Header />
            <MainSection>
                <Nav />
                <Section />
                <RealTimeSearches />
            </MainSection>
        </div>
    );
};

export default Home;
