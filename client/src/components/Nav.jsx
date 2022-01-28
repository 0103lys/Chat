import React from "react";
import '../assets/css/common.css';
import '../assets/css/nav.css';

function Nav(){
    return(
        <nav>
            <ul>
                <a href="#"><li>회원가입</li></a>
                <a href="#"><li>로그인</li></a>
            </ul>
        </nav>

    )
}

export default Nav;