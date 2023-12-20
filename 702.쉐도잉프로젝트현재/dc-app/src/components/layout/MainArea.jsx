// MainArea 컴포넌트

import { Outlet } from 'react-router-dom';

export function MainArea() {
    // cat속성으로 메뉴 분류 전달
    return (
        <main className="cont">
            <Outlet />
        </main>
    );
} ///////////// MainArea 컴포넌트 ////////