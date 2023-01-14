import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

const Item = styled.li`
    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 18px;
    }
`;

const ItemText = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const Lank = styled.div`
    font-weight: bold;
    font-size: 14px;
`;

const Keyword = styled.div`
    font-weight: bold;
    font-size: 11px;
`;

interface SearchProps {
    rank: number;
    keyword: string;
    state?: "up" | "down" | "stop";
}

const SearchItem: React.FC<SearchProps> = ({ rank, keyword, state }) => {
    return (
        <Item>
            <div>
                <ItemText>
                    <Lank>{rank}</Lank>
                    <Keyword>{keyword}</Keyword>
                </ItemText>
                {state ? (
                    state === "up" ? (
                        <Image
                            src="/realTime/up.svg"
                            alt="icon"
                            width={18}
                            height={18}
                        />
                    ) : (
                        <Image
                            src="/realTime/down.svg"
                            alt="icon"
                            width={18}
                            height={18}
                        />
                    )
                ) : (
                    <Image
                        src="/realTime/stop.svg"
                        alt="icon"
                        width={18}
                        height={18}
                    />
                )}
            </div>
        </Item>
    );
};

export default SearchItem;
