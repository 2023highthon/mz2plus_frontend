import React, { useState } from "react";
import { NextPage } from "next";
import styled from "@emotion/styled";
import Image from "next/image";
import Checkbox from "@/components/form/Checkbox";
import { login } from "@lib/api/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import InputText from "@/components/form/InputText";
import InputFile from "@/components/form/InputFile";
import { keyframes } from "@emotion/react";
import { register } from "../lib/api/auth";

const Register: NextPage = () => {
    const [id, setId] = useState<string>("");
    const [idError, setIdError] = useState(false);
    const [idErrorMessage, setIdErrorMessage] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] =
        useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [passwordConfirmError, setPasswordConfirmError] = useState(false);
    const [passwordConfirmErrorMessage, setPasswordConfirmErrorMessage] =
        useState<string>("");
    const [name, setName] = useState<string>("");
    const [nameError, setNameError] = useState(false);
    const [nameErrorMessage, setNameErrorMessage] = useState<string>("");
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const [profileImage, setProfileImage] = React.useState(null);
    const [profileImageName, setProfileImageName] = React.useState("");
    const router = useRouter();
    const [birthYear, setBirthYear] = useState<string>("");
    const [birthMonth, setBirthMonth] = useState<string>("");
    const [birthDay, setBirthDay] = useState<string>("");
    const [modalTitle, setModalTitle] = React.useState("");
    const [modalMessage, setModalMessage] = React.useState("");
    const [modalVisible, setModalVisible] = React.useState(false);

    const handleModalClose = () => {
        setModalVisible(false);
        setModalMessage("");
        setModalTitle("");
    };

    const makeModal = (title: string, message: string) => {
        setModalVisible(true);
        setModalTitle(title);
        setModalMessage(message);
    };

    const formatDate = (date: string) => {
        date.length === 1 ? (date = "0" + date) : date;
        return date;
    };

    const handleClick = (e: any) => {
        e.preventDefault();
        if (
            !id ||
            !password ||
            !passwordConfirm ||
            !name ||
            !birthYear ||
            !birthMonth ||
            !birthDay ||
            !profileImage
        ) {
            makeModal("회원가입 실패", "모든 항목을 입력해주세요.");
            return;
        }
        if (password !== passwordConfirm) {
            makeModal("회원가입 실패", "비밀번호가 일치하지 않습니다.");
            return;
        }
        if (idError || passwordError || passwordConfirmError || nameError) {
            makeModal("회원가입 실패", "입력한 정보를 확인해주세요.");
            return;
        }
        if (
            birthYear.length !== 4 ||
            birthMonth.length > 2 ||
            birthDay.length > 2 ||
            birthMonth < "01" ||
            birthMonth > "12" ||
            birthDay < "01" ||
            birthDay > "31" ||
            birthYear < "1900" ||
            birthYear > "2023"
        ) {
            makeModal("회원가입 실패", "생년월일을 확인해주세요.");
            return;
        }
        const date = `${birthYear}-${formatDate(birthMonth)}-${formatDate(
            birthDay
        )}`;
        register({
            id,
            password,
            date,
            name,
            profile_img: profileImage,
        })
            .then((res) => {
                router.push("/");
            })
            .catch((err) => {
                makeModal("회원가입 실패", "오류가 발생하였습니다.");
            });
    };

    return (
        <>
            {modalVisible && (
                <ModalBackground>
                    <Modal>
                        <ModalHeader>
                            <ModalTitle>{modalTitle}</ModalTitle>
                            <ModalCloseButton
                                onClick={handleModalClose}
                                className="material-symbols-rounded"
                            >
                                close
                            </ModalCloseButton>
                        </ModalHeader>
                        <ModalBody>{modalMessage}</ModalBody>
                    </Modal>
                </ModalBackground>
            )}
            <Container>
                <LoginForm>
                    <Spacer size={"176px"} />
                    <LoginTitle>
                        <Image
                            src={"/logo.svg"}
                            width={121}
                            height={55}
                            alt={"로고"}
                        />
                        회원가입
                    </LoginTitle>
                    <Spacer size={"56px"} />
                    <InputText
                        value={id}
                        setValue={setId}
                        label={"아이디"}
                        placeholder={"아이디를 입력해주세요"}
                        error={idError}
                        errorMessage={idErrorMessage}
                        setError={setIdError}
                        setErrorMessage={setIdErrorMessage}
                        required={true}
                    />
                    <Spacer size={"42px"} />
                    <InputText
                        type={passwordVisible ? "text" : "password"}
                        value={password}
                        setValue={setPassword}
                        label={"비밀번호"}
                        placeholder={"비밀번호를 입력해주세요"}
                        error={passwordError}
                        errorMessage={passwordErrorMessage}
                        setError={setPasswordError}
                        setErrorMessage={setPasswordErrorMessage}
                        required={true}
                    />
                    <Spacer size={"42px"} />
                    <Checkbox
                        checked={passwordVisible}
                        label={"비밀번호 보이기"}
                        onChange={(checked) => {
                            setPasswordVisible(checked);
                        }}
                    />
                    <Spacer size={"42px"} />
                    <InputText
                        type={"password"}
                        value={passwordConfirm}
                        setValue={setPasswordConfirm}
                        label={"비밀번호 확인"}
                        placeholder={"비밀번호 재입력"}
                        error={passwordConfirmError}
                        errorMessage={passwordConfirmErrorMessage}
                        setError={setPasswordConfirmError}
                        setErrorMessage={setPasswordConfirmErrorMessage}
                        required={true}
                    />
                    <Spacer size={"42px"} />
                    <InputText
                        value={name}
                        setValue={setName}
                        label={"이름"}
                        placeholder={"이름 입력"}
                        error={nameError}
                        errorMessage={nameErrorMessage}
                        setError={setNameError}
                        setErrorMessage={setNameErrorMessage}
                        required={true}
                    />
                    <Spacer size={"42px"} />
                    <InputFile
                        label={"프로필 사진"}
                        placeholder={"프로필 사진을 등록해주세요"}
                        required
                        value={profileImage}
                        setFile={setProfileImage}
                        fileName={profileImageName}
                        setFileName={setProfileImageName}
                        id={"profileImage"}
                    />
                    <Spacer size={"42px"} />
                    <InputLabel>생일</InputLabel>
                    <Spacer size={"15px"} />
                    <FlexInputContainer>
                        <Input
                            type="number"
                            min="1900"
                            max="2023"
                            step="1"
                            placeholder="년도"
                            value={birthYear}
                            onChange={(e) => {
                                setBirthYear(e.target.value);
                            }}
                        />
                        <Input
                            type="number"
                            min="1"
                            max="12"
                            step="1"
                            placeholder="월"
                            value={birthMonth}
                            onChange={(e) => {
                                setBirthMonth(e.target.value);
                            }}
                        />
                        <Input
                            type="number"
                            min="1"
                            max="31"
                            step="1"
                            placeholder="일"
                            value={birthDay}
                            onChange={(e) => {
                                setBirthDay(e.target.value);
                            }}
                        />
                    </FlexInputContainer>
                    <Spacer size={"26px"} />

                    <Spacer size={"47px"} />
                    <SubmitButton onClick={handleClick}>회원가입</SubmitButton>
                    <Spacer size={"26px"} />
                    <SignupContainer>
                        <SignupMessage>이미 계정이 있습니다</SignupMessage>
                        <SignupButton href={"/login"}>로그인</SignupButton>
                    </SignupContainer>
                    <Spacer size={"76px"} />
                </LoginForm>
            </Container>
        </>
    );
};

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
    width: 500px;
    padding: 32px 34px;
    background: white;
    border-radius: 8px;
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

const Container = styled.div`
    position: absolute;
    margin: 0;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
`;

const Spacer = styled.div<{ size: string }>`
    height: ${(props) => props.size};
`;

const LoginForm = styled.div`
    width: 430px;
    display: flex;
    flex-direction: column;
`;

const LoginTitle = styled.div`
    width: 100%;
    justify-content: center;
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    display: flex;
    align-items: center;
    letter-spacing: -0.41px;
    color: #4329ff;
    display: flex;
    align-items: flex-end;
    gap: 20px;
`;

const SignupButton = styled(Link)`
    font-weight: 600;
    font-size: 18px;
    line-height: 17px;
    /* identical to box height, or 106% */

    display: flex;
    align-items: flex-end;
    letter-spacing: -0.41px;

    color: #4329ff;
    cursor: pointer;
    &:hover {
        color: var(--hoverColor);
        text-decoration: underline;
    }
`;

const SignupMessage = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 17px;
    /* identical to box height, or 106% */

    display: flex;
    align-items: flex-end;
    text-align: center;
    letter-spacing: -0.41px;

    color: #000000;
`;

const SignupContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
`;

const SubmitButton = styled.button`
    width: 100%;
    height: 63px;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    display: flex;
    align-items: center;
    color: #ffffff;
    background: #4329ff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    &:hover {
        background: var(--hoverColor);
    }
`;

const Input = styled.input`
    width: 130px;
    height: 54px;
    font-size: 17px;
    background: #ffffff;
    outline: none;
    border-radius: 8px;
    padding-left: 17px;
    border: none;
    box-shadow: inset 0 0 0 1px #e6e6e6;
    &:hover {
        border: none;
        outline: none;
        box-shadow: inset 0 0 0 2px #9ba5ff;
        transition: all 0.2s ease-in-out;
    }
    &:focus {
        border: none;
        outline: none;
        box-shadow: inset 0 0 0 2px #392bff;
        transition: all 0.2s ease-in-out;
    }

    &::placeholder {
        color: #bdbdc2;
    }
`;

const InputLabel = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 19px;
    line-height: 21px;
    color: var(--textPrimary);
`;

const FlexInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default Register;
