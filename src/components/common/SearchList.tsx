import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const Item = styled.li`
    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

const ItemText = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

const Lank = styled.p`
    font-weight: bold;
    font-size: 14px;
    line-height: 27px;
`

const Keyword = styled.p`
    font-weight: bold;
    font-size: 11px;
    line-height: 27px;
`

interface searchProps {
    props: any[];
}

const SearchList: React.FC<searchProps> = ({ props }) => {
    return (
        props.map((prop:any, index:number) => {
            return (
                <Item key={index}>
                    <div>
                        <ItemText>
                            <Lank>{prop.rank}</Lank>
                            <Keyword>{prop.keyword}</Keyword>
                        </ItemText>
                        {
                            prop.state ?
                                prop.state === "up" ?
                                <Image src="/realTime/up.svg" alt="icon" width={18} height={18} />
                                :
                                <Image src="/realTime/down.svg" alt="icon" width={18} height={18} />
                            :
                            <Image src="/realTime/stop.svg" alt="icon" width={18} height={18} />
                        }
                    </div>
                </Item>
            );
        })
    );
}

export default SearchList;