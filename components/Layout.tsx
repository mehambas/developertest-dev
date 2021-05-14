import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
                integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
                crossOrigin="anonymous"
            ></link>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.4.5/themes/satellite-min.css" integrity="sha256-TehzF/2QvNKhGQrrNpoOb2Ck4iGZ1J/DI4pkd2oUsBc=" crossOrigin="anonymous"></link>
        </Head>
        <header>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                |
                <Link href="/search">
                    <a>Search</a>
                </Link>
            </nav>
        </header>
        {children}
        <footer>
            <hr />
            <span>I'm here to stay (Footer)</span>
        </footer>
    </div>
);

export default Layout;
