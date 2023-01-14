import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Wrapper = styled.div`
`

const TitleBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    > div {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`

const PointIcon = styled.svg`
    > path {
        fill: #4329FF;
    }
`

const GoIcon = styled(Link)`
    &:hover {
        > svg {
            > path {
                stroke: #8877FF;
            }
        }
    }
`

const Title = styled(Link)`
    font-weight: bold;
    font-size: 16px;
    line-height: 27px;
    &:hover {
        color: #8877FF;
    }
`

const Line = styled.hr`
    background-color: #f5f5f5;
    height: 1px;
    border: none;
`

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
`

const PostItem = styled(Link)`
    font-size: 14px;
    line-height: 27px;
    &:hover {
        color: #8877FF;
    }
`

const ViewBox = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
`

const ViewCounter = styled.p`
    font-size: 11px;
    line-height: 27px;
    color: #bdbdbd;
`

interface categoryProps {
    point?: boolean;
    href: string;
    title: string;
    src?: string;
    posts: any[];
}

const Category: React.FC<categoryProps> = ({ point, href, title, src, posts }) => {
    return (
        <Wrapper>
            <TitleBar>
                <div>
                    {
                        point ?
                            src == "consulting" ?
                            <PointIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.71168 17.055L7.60433 16.2934C7.46972 15.3313 7.52936 14.7225 8.1334 14.2064C8.60879 13.7999 8.99814 13.4717 9.21284 13.1948C9.54084 12.7731 9.59707 12.4835 9.53743 12.0591C9.4565 11.4845 8.96832 11.1905 8.43584 11.2741C7.89144 11.3596 7.44672 11.7228 7.37685 12.2569C7.29507 12.8828 6.84523 13.2973 6.18751 13.3495C5.638 13.3971 5.0987 13.086 5.01351 12.3073C4.84737 10.776 6.23267 9.35977 8.12573 9.06394C10.0904 8.75642 11.652 9.5468 11.9519 11.6824C12.0695 12.5195 11.9758 13.1462 11.6239 13.7379C11.33 14.2307 10.8239 14.7567 10.2999 15.2467C10.0018 15.5363 9.9779 15.7952 10.0231 16.1198L10.1023 16.6818L7.71168 17.0559V17.055ZM8.98962 17.4551C9.7828 17.331 10.3264 17.7564 10.4328 18.5189C10.5393 19.2814 10.1364 19.8542 9.34404 19.9782C8.55086 20.1023 8.00901 19.6887 7.90081 18.9145C7.79261 18.1403 8.1973 17.5792 8.98962 17.4551Z" fill="black"/>
                                <path d="M12.9615 14.8113L13.1145 13.762C13.3075 12.4374 13.6419 11.6573 14.7368 11.2228C15.5968 10.8807 16.3004 10.6054 16.7273 10.3285C17.3784 9.90585 17.5776 9.54675 17.663 8.96152C17.7786 8.16963 17.1827 7.5827 16.3698 7.47514C15.5381 7.36504 14.7403 7.66316 14.4201 8.33986C14.0466 9.1326 13.2203 9.49678 12.2366 9.29606C11.413 9.13429 10.7495 8.50332 10.9416 7.44126C11.3196 5.35186 13.9221 4.04758 16.8136 4.42955C19.8127 4.82591 21.7783 6.50624 21.3496 9.44851C21.1815 10.6012 20.7902 11.3914 20.0342 12.0283C19.4045 12.5593 18.4492 13.0463 17.4833 13.4799C16.9301 13.7399 16.7896 14.0719 16.7237 14.5191L16.6108 15.2932L12.9606 14.8105L12.9615 14.8113ZM14.6683 15.8615C15.8788 16.0216 16.5014 16.805 16.3484 17.8552C16.1954 18.9054 15.3727 19.4974 14.1613 19.3374C12.9508 19.1773 12.3256 18.4108 12.4812 17.3437C12.6368 16.2765 13.4569 15.7015 14.6683 15.8615Z" fill="black"/>   
                            </PointIcon>
                            :
                            <PointIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">:
                                <path d="M15.9913 9.72056C15.9913 9.92118 15.9732 10.1176 15.938 10.3104C15.5618 12.406 13.2072 14.0202 10.3587 14.0202C10.1446 14.0202 9.93335 14.0109 9.72579 13.9928C9.39498 13.965 9.07251 13.9145 8.76116 13.8446C8.69907 13.8307 8.63467 13.8483 8.5888 13.8923L7.11451 15.3152C7.06077 15.3666 6.97135 15.3314 6.96764 15.2568L6.86617 13.1899C6.86293 13.1283 6.82957 13.0727 6.77722 13.0398C6.59189 12.923 6.41722 12.7975 6.25274 12.664C5.30617 11.8954 4.72656 10.8608 4.72656 9.72149C4.72656 7.34697 7.24795 5.42188 10.3582 5.42188C12.3927 5.42188 14.1746 6.24473 15.1652 7.47902C15.6892 8.13184 15.9908 8.89956 15.9908 9.72149L15.9913 9.72056Z" fill="black"/>
                                <path d="M19.2832 13.794C19.2832 14.6363 18.9093 15.4123 18.281 16.0299C18.2472 16.0633 18.2263 16.1078 18.224 16.155L18.1082 18.511C18.1045 18.5856 18.0146 18.6208 17.9609 18.5694L16.5445 17.2026C16.4944 17.154 16.4217 17.1382 16.355 17.1595C15.7846 17.3425 15.1578 17.444 14.5008 17.444C12.3575 17.444 10.5436 16.3672 9.93615 14.8837C9.88843 14.7665 9.98619 14.6423 10.1117 14.659C10.4199 14.6988 10.7358 14.7192 11.0588 14.7192C14.0157 14.7192 16.4407 12.9794 16.6724 10.7666C16.6839 10.6573 16.8012 10.5906 16.9022 10.635C18.3255 11.2675 19.2827 12.4452 19.2827 13.793L19.2832 13.794Z" fill="black"/>
                                <path d="M7.96847 9.99749C8.12149 9.99749 8.24554 9.87344 8.24554 9.72043C8.24554 9.56741 8.12149 9.44336 7.96847 9.44336C7.81545 9.44336 7.69141 9.56741 7.69141 9.72043C7.69141 9.87344 7.81545 9.99749 7.96847 9.99749Z" fill="#FCFCFC"/>
                                <path d="M10.3591 9.99749C10.5121 9.99749 10.6362 9.87344 10.6362 9.72043C10.6362 9.56741 10.5121 9.44336 10.3591 9.44336C10.2061 9.44336 10.082 9.56741 10.082 9.72043C10.082 9.87344 10.2061 9.99749 10.3591 9.99749Z" fill="#FCFCFC"/>
                                <path d="M12.7517 9.99749C12.9047 9.99749 13.0287 9.87344 13.0287 9.72043C13.0287 9.56741 12.9047 9.44336 12.7517 9.44336C12.5987 9.44336 12.4746 9.56741 12.4746 9.72043C12.4746 9.87344 12.5987 9.99749 12.7517 9.99749Z" fill="#FCFCFC"/>
                            </PointIcon>
                        :
                            src ? 
                            <Image src={"/section/"+ src +".svg"} alt="consultingIcon" width={24} height={24} />
                            :
                            <></>
                    }
                    <Title href={href}>{title}</Title>
                </div>
                <GoIcon href="">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.24403 11.457L9.73438 8.00727" stroke="#424242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.73449 8.00586L6.24414 4.5561" stroke="#424242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </GoIcon>
            </TitleBar>
            <Line />
            <PostList>
                {
                    posts.map((post:any,index:number) => {
                        return (
                            <li key={index}>
                                <PostItem href={post.href}>{post.title}</PostItem>
                                <ViewBox>
                                    <Image src="/section/view.svg" alt="viewIcon" width={24} height={24} />
                                    <ViewCounter>{post.count}</ViewCounter>
                                </ViewBox>
                            </li>
                        );
                    })
                }
            </PostList>
        </Wrapper>
    );
}

export default Category;