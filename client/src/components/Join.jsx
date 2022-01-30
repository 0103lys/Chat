import React from "react";
import '../assets/css/common.css';
import '../assets/css/join.css';


function Join(){
    return(
        <div className="contents">
            <div class="inputBox">
                <div class="inputItem">
                    <input type="email" placeholder=" example@example.com"/>
                </div>
                <div class="inputItem">
                    <input type="password" placeholder=" 비밀번호를 입력하세요."/>
                </div>
                <div class="inputItem">
                    <input type="text" placeholder=" 이름을 입력하세요."/>
                </div>
                
                <div class="btnType">
                    <button type="submit" class="OkBtn">확인</button>
                </div>
            </div>
        </div>
    )
}
export default Join;