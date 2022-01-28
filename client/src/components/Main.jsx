import React from "react";

function Main(){
    return(
        <div>
            <div class="inputBox">
                <div class="inputItem">
                    <input type="email" placeholder="example@example.com"/>
                </div>
                <div class="inputItem">
                    <input type="password" placeholder="비밀번호를 입력하세요."/>
                </div>
            </div>

            <div>
                <button type="submit">로그인</button>
            </div>
        </div>

    )
}

export default Main;