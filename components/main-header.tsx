import Link from "next/link";

export default function MainHeader() {
    return (
        <header id="main-header">
            <div id="logo">
                NewsApp
            </div>
            <nav>
                <ul>
                    <li>
                       <Link href="/"> Home </Link>
                    </li>
                    <li>
                       <Link href="/news"> News </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}