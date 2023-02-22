import Header from '@/components/Header/Header';
import { Fira_Code } from '@next/font/google';
import { FC } from 'react';
import '../styles/setting.scss'

const font = Fira_Code({
    subsets: ["latin"]
});

type RootyLayoutProps = {
    children: React.ReactNode;
}

const RootLayout: FC<RootyLayoutProps> = ({ children }) => {
    return (
        <html lang="en" >
            <head />
            <body className={font.className}>
                <div className="root">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    );
}

export default RootLayout;
