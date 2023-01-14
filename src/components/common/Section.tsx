import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import Category from "./Category";

const Section = () => {
    const GridBox = styled.div`
        position: relative;
        display: grid;
        grid-template-columns: 480px 380px;
        grid-template-rows: repeat(6, 228px);
        column-gap: 20px;
        row-gap: 73px;
    `;

    const Wrapper = styled.div``;

    const TitleBar = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        > div {
            display: flex;
            align-items: center;
            gap: 8px;
        }
    `;

    const PointIcon = styled.svg`
        > path {
            fill: #4329ff;
        }
    `;

    const GoIcon = styled(Link)`
        &:hover {
            > svg {
                > path {
                    stroke: #8877ff;
                }
            }
        }
    `;

    const Title = styled(Link)`
        font-weight: bold;
        font-size: 16px;
        line-height: 27px;
        &:hover {
            color: #8877ff;
        }
    `;

    const Line = styled.hr`
        background-color: #f5f5f5;
        height: 1px;
        border: none;
    `;

    const PostList = styled.ul`
        display: flex;
        flex-direction: column;
        gap: 12px;
        list-style-type: none;
        padding-left: 4px;
        > li {
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    `;

    const PostItem = styled(Link)`
        font-size: 14px;
        line-height: 27px;
        &:hover {
            color: #8877ff;
        }
    `;

    const ViewBox = styled.div`
        display: flex;
        align-items: center;
        gap: 2px;
    `;

    const ViewCounter = styled.p`
        font-size: 11px;
        line-height: 27px;
        color: #bdbdbd;
    `;

    return (
        <GridBox>
            <Category
                point={true}
                href=""
                title="베스트 상담글"
                src="consulting"
                posts={[
                    {
                        title: "취업 관련해서 궁금한 게 있어요",
                        href: "",
                        count: "2,023",
                    },
                    {
                        title: "취업 관련해서 궁금한 게 있어요",
                        href: "",
                        count: "2,023",
                    },
                    {
                        title: "취업 관련해서 궁금한 게 있어요",
                        href: "",
                        count: "2,023",
                    },
                    {
                        title: "취업 관련해서 궁금한 게 있어요",
                        href: "",
                        count: "2,023",
                    },
                    {
                        title: "취업 관련해서 궁금한 게 있어요",
                        href: "",
                        count: "2,023",
                    },
                ]}
            />

            <Category
                href=""
                title="최근 등록된 상담글"
                src="consulting"
                posts={[
                    {
                        title: "취업 관련해서 궁금한 게 있어요",
                        href: "",
                        count: "2,023",
                    },
                ]}
            />
            <Category
                point={true}
                href=""
                title="베스트 일상글"
                src="daily"
                posts={[
                    {
                        title: "취업 관련해서 궁금한 게 있어요",
                        href: "",
                        count: "2,023",
                    },
                ]}
            />

            <Category
                href=""
                title="최근 등록된 일상글"
                src="daily"
                posts={[
                    {
                        title: "취업 관련해서 궁금한 게 있어요",
                        href: "",
                        count: "2,023",
                    },
                ]}
            />

            <Category
                href=""
                title="취업"
                src="employment"
                posts={[
                    {
                        title: "취업 관련해서 궁금한 게 있어요",
                        href: "",
                        count: "2,023",
                    },
                ]}
            />

            <Category
                href=""
                title="연애"
                src="love"
                posts={[
                    {
                        title: "취업 관련해서 궁금한 게 있어요",
                        href: "",
                        count: "2,023",
                    },
                ]}
            />

            <Category
                href=""
                title="저금"
                src="saving"
                posts={[
                    {
                        title: "취업 관련해서 궁금한 게 있어요",
                        href: "",
                        count: "2,023",
                    },
                ]}
            />

            <Category
                href=""
                title="운동"
                src="exercise"
                posts={[
                    {
                        title: "취업 관련해서 궁금한 게 있어요",
                        href: "",
                        count: "2,023",
                    },
                ]}
            />

            <Category
                href=""
                title="공부"
                src="study"
                posts={[
                    {
                        title: "취업 관련해서 궁금한 게 있어요",
                        href: "",
                        count: "2,023",
                    },
                ]}
            />

            <Category
                href=""
                title="학교"
                src="edu"
                posts={[
                    {
                        title: "취업 관련해서 궁금한 게 있어요",
                        href: "",
                        count: "2,023",
                    },
                ]}
            />

            <Category
                href=""
                title="기타"
                posts={[
                    {
                        title: "취업 관련해서 궁금한 게 있어요",
                        href: "",
                        count: "2,023",
                    },
                ]}
            />
        </GridBox>
    );
};

export default Section;
