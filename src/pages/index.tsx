import Head from "next/head";
import Image from "next/image";
import styled from "@emotion/styled";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import Header from "@/components/common/Header";

const Home = () => {
    return (
        <div>
            <Header />
        </div>
    );
};

export default Home;
