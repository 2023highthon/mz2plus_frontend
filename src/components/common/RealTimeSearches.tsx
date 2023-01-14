import React from "react";
import styled from "@emotion/styled";
import SearchList from "./SearchItem";
import SearchItem from "./SearchItem";

const Searches = styled.div`
    width: 280px;
    height: 460px;
    border-radius: 16px;
    background: #f5f5f5;
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-weight: 700;
    font-size: 16px;
`;

const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Standard = styled.div`
    font-size: 11px;
    color: #bdbdbd;
`;

const Spacer = styled.div<{ size: string }>`
    height: ${(props) => props.size};
`;

const data = [
    {
        rank: "1",
        keyword: "검색어1",
        state: "up",
    },
    {
        rank: "2",
        keyword: "검색어1",
        state: "up",
    },
    {
        rank: "3",
        keyword: "검색어1",
        state: "up",
    },
    {
        rank: "4",
        keyword: "검색어1",
        state: "up",
    },
    {
        rank: "5",
        keyword: "검색어1",
        state: "up",
    },
    {
        rank: "6",
        keyword: "검색어1",
        state: "up",
    },
    {
        rank: "7",
        keyword: "검색어1",
        state: "up",
    },
    {
        rank: "8",
        keyword: "검색어1",
        state: "up",
    },
    {
        rank: "9",
        keyword: "검색어1",
        state: "up",
    },
    {
        rank: "10",
        keyword: "검색어1",
        state: "up",
    },
];

const RealTimeSearches = () => {
    return (
        <Searches>
            <Spacer size="12px" />
            <Title>실시간 인기 검색어</Title>
            <Spacer size="28px" />
            <List>
                {data.map((item: any, index) => (
                    <SearchItem
                        rank={item.rank}
                        keyword={item.keyword}
                        state={item.state}
                        key={index}
                    />
                ))}
            </List>
            <Spacer size="28px" />
            <Standard>2023.01.14 00:00시 기준</Standard>
        </Searches>
    );
};

export default RealTimeSearches;
