import React from 'react';
import Header from '../../components/common/Header';
import styled from '@emotion/styled';
import Image from 'next/image';
import Checkbox from "@/components/form/Checkbox";
import Footer from '@/components/common/Footer';
import Link from 'next/link';
import { keyframes } from "@emotion/react";


const Common = () => {
    const [modalVisible, setModalVisible] = React.useState(false);

    const handleModalClose = () => {
        setModalVisible(false);
    };

    const makeModal = () => {
        setModalVisible(true);
    };

    const handleClick = (e: any) => {
        e.preventDefault();
        makeModal();
    };

    return (
        <div>
            {
                modalVisible && (
                <ModalBackground>
                    <Modal>
                        <ModalHeader>
                            <ModalTitle>필터링</ModalTitle>
                            <ModalCloseButton
                                onClick={handleModalClose}
                                className="material-symbols-rounded"
                            >
                                close
                            </ModalCloseButton>
                        </ModalHeader>
                        <ModalBody>
                            <DateBox>
                                <ModalSubTitle>기간</ModalSubTitle>
                                <DateCheckBox>
                                    <InputLabel>
                                        <Input type="checkbox" checked={true} onChange={(e) => {}} />
                                        전체 기간
                                    </InputLabel>
                                    <InputLabel>
                                        <Input type="checkbox" checked={true} onChange={(e) => {}} />
                                        최근 24시간
                                    </InputLabel>
                                    <InputLabel>
                                        <Input type="checkbox" checked={true} onChange={(e) => {}} />
                                        최근 1주일
                                    </InputLabel>
                                    <InputLabel>
                                        <Input type="checkbox" checked={true} onChange={(e) => {}} />
                                        최근 1개월
                                    </InputLabel>
                                    <InputLabel>
                                        <Input type="checkbox" checked={true} onChange={(e) => {}} />
                                        최근 6개월
                                    </InputLabel>
                                    <InputLabel>
                                        <Input type="checkbox" checked={true} onChange={(e) => {}} />
                                        최근 1년
                                    </InputLabel>
                                </DateCheckBox>
                            </DateBox>
                            <Spacer size={"38px"}/>
                            <CategoryBox>
                                <ModalSubTitle>카테고리</ModalSubTitle>
                                <CategoryCheckBox>
                                    <InputLabel>
                                        <Input type="checkbox" checked={true} onChange={(e) => {}} />
                                        운동
                                    </InputLabel>
                                    <InputLabel>
                                        <Input type="checkbox" checked={true} onChange={(e) => {}} />
                                        연애
                                    </InputLabel>
                                    <InputLabel>
                                        <Input type="checkbox" checked={true} onChange={(e) => {}} />
                                        공부
                                    </InputLabel>
                                    <InputLabel>
                                        <Input type="checkbox" checked={true} onChange={(e) => {}} />
                                        학교
                                    </InputLabel>
                                    <InputLabel>
                                        <Input type="checkbox" checked={true} onChange={(e) => {}} />
                                        저금
                                    </InputLabel>
                                    <InputLabel>
                                        <Input type="checkbox" checked={true} onChange={(e) => {}} />
                                        취업
                                    </InputLabel>
                                    <InputLabel>
                                        <Input type="checkbox" checked={true} onChange={(e) => {}} />
                                        기타
                                    </InputLabel>
                                </CategoryCheckBox>
                            </CategoryBox>
                            <Spacer size={"38px"}/>
                            <OrderBox>
                                <ModalSubTitle>기준</ModalSubTitle>
                                <OrderCheckBox>
                                    <InputLabel>
                                        <Input type="checkbox" checked={true} onChange={(e) => {}} />
                                        조회수 순
                                    </InputLabel>
                                    <InputLabel>
                                        <Input type="checkbox" checked={true} onChange={(e) => {}} />
                                        정확도 순
                                    </InputLabel>
                                    <InputLabel>
                                        <Input type="checkbox" checked={true} onChange={(e) => {}} />
                                        댓글 순
                                    </InputLabel>
                                    <InputLabel>
                                        <Input type="checkbox" checked={false} onChange={(e) => {}} />
                                        최근 업로드 순
                                    </InputLabel>
                                </OrderCheckBox>
                            </OrderBox>
                        </ModalBody>
                    </Modal>
                </ModalBackground>
                )
            }
            <Header />
            <PageWrapper>
                <SearchAndGridBox>
                    <SearchAndFiltering>
                        <Search>
                            <Image src="/search.svg" alt="search_icon" width={37} height={37} />
                            <SearchInput placeholder="일반 게시물 검색하기">

                            </SearchInput>
                        </Search>
                        <Filtering onClick={handleClick}>
                            <Image src="/board/filter.svg" alt="icon" width={18} height={19} />
                            <FilterText>필터링</FilterText>
                        </Filtering>
                    </SearchAndFiltering>
                    <GridBox>
                        <Board>
                            <BoardContents>
                            <div>
                                <Category>일반 / 학교</Category>
                                <Spacer size={"10px"}/>
                                <Title href={""}>대학교 합격했다!!</Title>
                                <Spacer size={"43px"}/>
                                <Writing>
                                    개 신나 진짜 ㅎㅎㅎㅎㅎ 엄청 상향이라 기대도 안했는데 붙었음 오늘 부모님이랑 뷔페가기로 했어 오늘 개 행복해 진짜 !!!!!!!!
                                </Writing>
                            </div>
                            <Date>2023.01.15</Date>
                            </BoardContents>
                        </Board>
                        <Board>
                            <BoardContents>
                            <div>
                                <Category>일반 / 학교</Category>
                                <Spacer size={"10px"}/>
                                <Title href={""}>대학교 합격했다!!</Title>
                                <Spacer size={"43px"}/>
                                <Writing>
                                    개 신나 진짜 ㅎㅎㅎㅎㅎ 엄청 상향이라 기대도 안했는데 붙었음 오늘 부모님이랑 뷔페가기로 했어 오늘 개 행복해 진짜 !!!!!!!!
                                </Writing>
                            </div>
                            <Date>2023.01.15</Date>
                            </BoardContents>
                        </Board>
                        <Board>
                            <BoardContents>
                            <div>
                                <Category>일반 / 학교</Category>
                                <Spacer size={"10px"}/>
                                <Title href={""}>대학교 합격했다!!</Title>
                                <Spacer size={"43px"}/>
                                <Writing>
                                    개 신나 진짜 ㅎㅎㅎㅎㅎ 엄청 상향이라 기대도 안했는데 붙었음 오늘 부모님이랑 뷔페가기로 했어 오늘 개 행복해 진짜 !!!!!!!!
                                </Writing>
                            </div>
                            <Date>2023.01.15</Date>
                            </BoardContents>
                        </Board>
                        <Board>
                            <BoardContents>
                            <div>
                                <Category>일반 / 학교</Category>
                                <Spacer size={"10px"}/>
                                <Title href={""}>대학교 합격했다!!</Title>
                                <Spacer size={"43px"}/>
                                <Writing>
                                    개 신나 진짜 ㅎㅎㅎㅎㅎ 엄청 상향이라 기대도 안했는데 붙었음 오늘 부모님이랑 뷔페가기로 했어 오늘 개 행복해 진짜 !!!!!!!!
                                </Writing>
                            </div>
                            <Date>2023.01.15</Date>
                            </BoardContents>
                        </Board>
                        <Board>
                            <BoardContents>
                            <div>
                                <Category>일반 / 학교</Category>
                                <Spacer size={"10px"}/>
                                <Title href={""}>대학교 합격했다!!</Title>
                                <Spacer size={"43px"}/>
                                <Writing>
                                    개 신나 진짜 ㅎㅎㅎㅎㅎ 엄청 상향이라 기대도 안했는데 붙었음 오늘 부모님이랑 뷔페가기로 했어 오늘 개 행복해 진짜 !!!!!!!!
                                </Writing>
                            </div>
                            <Date>2023.01.15</Date>
                            </BoardContents>
                        </Board>
                        <Board>
                            <BoardContents>
                            <div>
                                <Category>일반 / 학교</Category>
                                <Spacer size={"10px"}/>
                                <Title href={""}>대학교 합격했다!!</Title>
                                <Spacer size={"43px"}/>
                                <Writing>
                                    개 신나 진짜 ㅎㅎㅎㅎㅎ 엄청 상향이라 기대도 안했는데 붙었음 오늘 부모님이랑 뷔페가기로 했어 오늘 개 행복해 진짜 !!!!!!!!
                                </Writing>
                            </div>
                            <Date>2023.01.15</Date>
                            </BoardContents>
                        </Board>
                        <Board>
                            <BoardContents>
                            <div>
                                <Category>일반 / 학교</Category>
                                <Spacer size={"10px"}/>
                                <Title href={""}>대학교 합격했다!!</Title>
                                <Spacer size={"43px"}/>
                                <Writing>
                                    개 신나 진짜 ㅎㅎㅎㅎㅎ 엄청 상향이라 기대도 안했는데 붙었음 오늘 부모님이랑 뷔페가기로 했어 오늘 개 행복해 진짜 !!!!!!!!
                                </Writing>
                            </div>
                            <Date>2023.01.15</Date>
                            </BoardContents>
                        </Board>
                        <Board>
                            <BoardContents>
                            <div>
                                <Category>일반 / 학교</Category>
                                <Spacer size={"10px"}/>
                                <Title href={""}>대학교 합격했다!!</Title>
                                <Spacer size={"43px"}/>
                                <Writing>
                                    개 신나 진짜 ㅎㅎㅎㅎㅎ 엄청 상향이라 기대도 안했는데 붙었음 오늘 부모님이랑 뷔페가기로 했어 오늘 개 행복해 진짜 !!!!!!!!
                                </Writing>
                            </div>
                            <Date>2023.01.15</Date>
                            </BoardContents>
                        </Board>
                        <Board>
                            <BoardContents>
                            <div>
                                <Category>일반 / 학교</Category>
                                <Spacer size={"10px"}/>
                                <Title href={""}>대학교 합격했다!!</Title>
                                <Spacer size={"43px"}/>
                                <Writing>
                                    개 신나 진짜 ㅎㅎㅎㅎㅎ 엄청 상향이라 기대도 안했는데 붙었음 오늘 부모님이랑 뷔페가기로 했어 오늘 개 행복해 진짜 !!!!!!!!
                                </Writing>
                            </div>
                            <Date>2023.01.15</Date>
                            </BoardContents>
                        </Board>
                        <Board>
                            <BoardContents>
                            <div>
                                <Category>일반 / 학교</Category>
                                <Spacer size={"10px"}/>
                                <Title href={""}>대학교 합격했다!!</Title>
                                <Spacer size={"43px"}/>
                                <Writing>
                                    개 신나 진짜 ㅎㅎㅎㅎㅎ 엄청 상향이라 기대도 안했는데 붙었음 오늘 부모님이랑 뷔페가기로 했어 오늘 개 행복해 진짜 !!!!!!!!
                                </Writing>
                            </div>
                            <Date>2023.01.15</Date>
                            </BoardContents>
                        </Board>
                        <Board>
                            <BoardContents>
                            <div>
                                <Category>일반 / 학교</Category>
                                <Spacer size={"10px"}/>
                                <Title href={""}>대학교 합격했다!!</Title>
                                <Spacer size={"43px"}/>
                                <Writing>
                                    개 신나 진짜 ㅎㅎㅎㅎㅎ 엄청 상향이라 기대도 안했는데 붙었음 오늘 부모님이랑 뷔페가기로 했어 오늘 개 행복해 진짜 !!!!!!!!
                                </Writing>
                            </div>
                            <Date>2023.01.15</Date>
                            </BoardContents>
                        </Board>
                        <Board>
                            <BoardContents>
                            <div>
                                <Category>일반 / 학교</Category>
                                <Spacer size={"10px"}/>
                                <Title href={""}>대학교 합격했다!!</Title>
                                <Spacer size={"43px"}/>
                                <Writing>
                                    개 신나 진짜 ㅎㅎㅎㅎㅎ 엄청 상향이라 기대도 안했는데 붙었음 오늘 부모님이랑 뷔페가기로 했어 오늘 개 행복해 진짜 !!!!!!!!
                                </Writing>
                            </div>
                            <Date>2023.01.15</Date>
                            </BoardContents>
                        </Board>
                        <Board>
                            <BoardContents>
                            <div>
                                <Category>일반 / 학교</Category>
                                <Spacer size={"10px"}/>
                                <Title href={""}>대학교 합격했다!!</Title>
                                <Spacer size={"43px"}/>
                                <Writing>
                                    개 신나 진짜 ㅎㅎㅎㅎㅎ 엄청 상향이라 기대도 안했는데 붙었음 오늘 부모님이랑 뷔페가기로 했어 오늘 개 행복해 진짜 !!!!!!!!
                                </Writing>
                            </div>
                            <Date>2023.01.15</Date>
                            </BoardContents>
                        </Board>
                        <Board>
                            <BoardContents>
                            <div>
                                <Category>일반 / 학교</Category>
                                <Spacer size={"10px"}/>
                                <Title href={""}>대학교 합격했다!!</Title>
                                <Spacer size={"43px"}/>
                                <Writing>
                                    개 신나 진짜 ㅎㅎㅎㅎㅎ 엄청 상향이라 기대도 안했는데 붙었음 오늘 부모님이랑 뷔페가기로 했어 오늘 개 행복해 진짜 !!!!!!!!
                                </Writing>
                            </div>
                            <Date>2023.01.15</Date>
                            </BoardContents>
                        </Board>
                        <Board>
                            <BoardContents>
                            <div>
                                <Category>일반 / 학교</Category>
                                <Spacer size={"10px"}/>
                                <Title href={""}>대학교 합격했다!!</Title>
                                <Spacer size={"43px"}/>
                                <Writing>
                                    개 신나 진짜 ㅎㅎㅎㅎㅎ 엄청 상향이라 기대도 안했는데 붙었음 오늘 부모님이랑 뷔페가기로 했어 오늘 개 행복해 진짜 !!!!!!!!
                                </Writing>
                            </div>
                            <Date>2023.01.15</Date>
                            </BoardContents>
                        </Board>
                        <Board>
                            <BoardContents>
                            <div>
                                <Category>일반 / 학교</Category>
                                <Spacer size={"10px"}/>
                                <Title href={""}>대학교 합격했다!!</Title>
                                <Spacer size={"43px"}/>
                                <Writing>
                                    개 신나 진짜 ㅎㅎㅎㅎㅎ 엄청 상향이라 기대도 안했는데 붙었음 오늘 부모님이랑 뷔페가기로 했어 오늘 개 행복해 진짜 !!!!!!!!
                                </Writing>
                            </div>
                            <Date>2023.01.15</Date>
                            </BoardContents>
                        </Board>
                        <Board>
                            <BoardContents>
                            <div>
                                <Category>일반 / 학교</Category>
                                <Spacer size={"10px"}/>
                                <Title href={""}>대학교 합격했다!!</Title>
                                <Spacer size={"43px"}/>
                                <Writing>
                                    개 신나 진짜 ㅎㅎㅎㅎㅎ 엄청 상향이라 기대도 안했는데 붙었음 오늘 부모님이랑 뷔페가기로 했어 오늘 개 행복해 진짜 !!!!!!!!
                                </Writing>
                            </div>
                            <Date>2023.01.15</Date>
                            </BoardContents>
                        </Board>
                        <Board>
                            <BoardContents>
                            <div>
                                <Category>일반 / 학교</Category>
                                <Spacer size={"10px"}/>
                                <Title href={""}>대학교 합격했다!!</Title>
                                <Spacer size={"43px"}/>
                                <Writing>
                                    개 신나 진짜 ㅎㅎㅎㅎㅎ 엄청 상향이라 기대도 안했는데 붙었음 오늘 부모님이랑 뷔페가기로 했어 오늘 개 행복해 진짜 !!!!!!!!
                                </Writing>
                            </div>
                            <Date>2023.01.15</Date>
                            </BoardContents>
                        </Board>
                    </GridBox>
                    <Spacer size={"338px"}/>
                </SearchAndGridBox>
            </PageWrapper>
            <Footer />
        </div>
    );
}

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const slideIn = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
      
    }
    to {
        opacity: 1;
      
    }
`;

const Modal = styled.div`
    width: 780px;
    padding: 48px 60px;
    background: white;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    animation: ${fadeIn} 0.3s ease-in-out;
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ModalTitle = styled.div`
    font-weight: 600;
    font-size: 27px;
    line-height: 27px;
    color: #666972;
`;

const ModalCloseButton = styled.div`
    font-size: 24px;
    cursor: pointer;
    padding: 3px;
    &:hover {
        background-color: #f2f2f2;
    }
`;

const ModalBody = styled.div`
    margin-top: 32px;
    font-size: 18px;
    line-height: 27px;
    color: #666972;
`;

const ModalSubTitle = styled.div`
    font-weight: 600;
    font-size: 16px;
`

const DateBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const CategoryBox = styled.div`
    
`

const OrderBox = styled.div`
    
`

const DateCheckBox = styled.div`
    display: grid;
    grid-template-columns: 83px 90px 83px;
    grid-template-rows: repeat(2, 27px);
    column-gap: 24px;
    row-gap: 8px;
`

const CategoryCheckBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 47px);
    grid-template-rows: repeat(2, 27px);
    column-gap: 24px;
    row-gap: 8px;
`

const OrderCheckBox = styled.div`
    display: flex;
    gap: 24px;
`

const Input = styled.input`
    margin: 0;
    appearance: none;
    background-color: #f4f6f8;
    border-radius: 8px;
    width: 16px;
    height: 16px;
    cursor: pointer;
    background-image: url("../images/unchecked.svg");
    background-size: 50% 50%;
    background-position: 50%;
    background-repeat: no-repeat;
    transition: all 0.2s ease-in-out;
    &:checked {
        border: none;
        background-image: url("../images/checked.svg");
        background-size: 50% 50%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: #4329ff;
    }
`

const InputLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
`

const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
`;

const Spacer = (props: any) => {
    return <div style={{ height: `${props.size}` }} />;
};

const SearchAndGridBox = styled.div`
    width:1180px;
    display: flex;
    flex-direction: column;
    gap:36px;
`

const SearchAndFiltering = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 72px;
`

const Search = styled.div`
    display: flex;
    align-items: center;
    background-color: #f5f5f7;
    width: 580px;
    height: 52px;
    border-radius: 24px;
    padding: 0 12px;
    gap: 1px;
`

const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    border: none;
    outline: none;
    font-size: 16px;
`

const Filtering = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 80px;
    height: 30px;
    background: #fff;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    cursor: pointer;
`
const FilterText = styled.p`
    font-size: 11px;
    color: #b1b1b1;
`

const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 380px);
    grid-template-rows: repeat(6, 386px);
    column-gap: 20px;
    row-gap: 16px;
`

const BoardContents = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Board = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e6e6e6;
    border-radius: 30px;
    padding: 36px 48px;
`

const Category = styled.div`
    font-weight: 600;
    font-size: 12px;
    color: #4329FF;
`

const Title = styled(Link)`
    font-weight: 700;
    font-size: 20px;
    &:hover {
        text-decoration: underline;
    }
`
const Writing = styled.div`
    font-size: 16px;
    line-height: 27px;
    color: #424242;
`
const Date = styled.div`
    display: flex;
    justify-content: end;
    font-size: 11px;
    color: #bdbdbd;
`

export default Common;