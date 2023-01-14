import React from 'react';
import styled from '@emotion/styled';
import SearchList from './SearchList';

const Searches = styled.div`
    width: 280px;
    height: 460px;
    border-radius: 16px;
    background: #f5f5f5;
    margin-left: 20px;
    padding: 32px 16px 20px 24px;
`

const Title = styled.p`
    font-weight: bold;
    font-size: 14px;
    line-height: 27px;
`

const List = styled.ul`
    list-style-type: none;
    padding-left: 0;
`

const Standard = styled.p`
    position: relative;
    bottom: 0;
    font-size: 11px;
    line-height: 27px;
    color: #bdbdbd;
`

const RealTimeSearches = () => {
    return (
        <Searches>
            <Title>실시간 인기 검색어</Title>
            <List>
                <SearchList props={[
                    {
                        rank: "1",
                        keyword: "검색어1",
                        state: "up"
                    },
                    {
                        rank: "2",
                        keyword: "검색어1",
                        state: "up"
                    },
                    {
                        rank: "3",
                        keyword: "검색어1",
                        state: "up"
                    },
                    {
                        rank: "4",
                        keyword: "검색어1",
                        state: "up"
                    },
                    {
                        rank: "5",
                        keyword: "검색어1",
                        state: "up"
                    },
                    {
                        rank: "6",
                        keyword: "검색어1",
                        state: "up"
                    },
                    {
                        rank: "7",
                        keyword: "검색어1",
                        state: "up"
                    },
                    {
                        rank: "8",
                        keyword: "검색어1",
                        state: "up"
                    },
                    {
                        rank: "9",
                        keyword: "검색어1",
                        state: "up"
                    },
                    {
                        rank: "10",
                        keyword: "검색어1",
                        state: "up"
                    }
                ]} />
            </List>
            <Standard>2023.01.14 00:00시 기준</Standard>
        </Searches>
    );
}

export default RealTimeSearches;