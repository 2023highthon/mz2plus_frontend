import React, { useState } from "react";
import { NextPage } from "next";
import styled from "@emotion/styled";
import Image from "next/image";
import Checkbox from "@components/Checkbox";
import { login } from "@lib/api/auth";
import Link from "next/link";
import { useRouter } from "next/router";

const Login: NextPage = () => {
    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

    const router = useRouter();

    const handleClick = (e: any) => {
        e.preventDefault();
        if (!id || !password) {
            alert("아이디와 비밀번호를 입력해주세요.");
            return;
        }
        login({ id, password })
            .then((res) => {
                router.push("/");
            })
            .catch((err) => {
                alert("아이디와 비밀번호를 확인해주세요.");
            });
    };
    const Container = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const InputLabel = styled.div`
        font-weight: 500;
        font-size: 22px;
        line-height: 26px;
        margin-left: 7px;
        color: #2f2f31;
    `;

    const Input = styled.input`
        font-size: 22px;
        display: flex;
        align-items: center;
        color: #353639;
        padding: 18px 27px;
        width: 375px;
        height: 62px;
        background: #f4f6f8;
        border-radius: 20px;
        transition: all 0.2s ease-in-out;
        border: none;
        &::placeholder {
            color: #cad1da;
        }
        &:focus {
            outline: none;
            box-shadow: inset 0 0 0 3px #4329ff;
            background: var(--gray100);
        }
    `;

    const Spacer = styled.div<{ size: string }>`
        height: ${(props) => props.size};
    `;

    const LoginForm = styled.div`
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    `;

    const LoginTitle = styled.div`
        width: 375px;
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

    const SubmitButton = styled.button`
        width: 375px;
        height: 71px;
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        display: flex;
        align-items: center;
        color: #ffffff;
        background: #4329ff;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        cursor: pointer;
        &:hover {
            background: var(--hoverColor);
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

    return (
        <Container>
            <LoginForm
                onSubmit={() => {
                    return false;
                }}
            >
                <LoginTitle>
                    <Image
                        src={"/logo.svg"}
                        width={121}
                        height={55}
                        alt={"로고"}
                    />
                    로그인
                </LoginTitle>
                <Spacer size={"56px"} />
                <InputLabel>아이디</InputLabel>
                <Spacer size={"14px"} />
                <Input
                    type="text"
                    placeholder="아이디를 입력해주세요"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <Spacer size={"25px"} />
                <InputLabel>비밀번호</InputLabel>
                <Spacer size={"14px"} />
                <Input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="비밀번호를 입력해주세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Spacer size={"26px"} />
                <Checkbox
                    checked={passwordVisible}
                    label={"로그인 상태 유지"}
                    onChange={(checked) => {
                        setPasswordVisible(checked);
                    }}
                />
                <Spacer size={"47px"} />
                <SubmitButton onClick={handleClick}>로그인</SubmitButton>
                <Spacer size={"26px"} />
                <SignupContainer>
                    <SignupMessage>아이디가 기억나지 않으세요?</SignupMessage>
                    <SignupButton href={"/register"}>회원가입</SignupButton>
                </SignupContainer>
            </LoginForm>
        </Container>
    );
};

export default Login;
