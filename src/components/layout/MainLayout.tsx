import React, { ReactNode } from 'react';
import Link from 'next/link';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div>
            <header>
                <nav>
                    <Link href="/Home">Home</Link> |{" "}
                    <Link href="/employee">Employee</Link>
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <p>© 2024 My Website</p>
            </footer>
        </div>
    );
};

export default MainLayout;
