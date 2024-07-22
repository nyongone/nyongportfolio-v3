import { header } from "./Header.css";

const Header = () => {
    return (
        <header className={header.container}>
            <div className={header.titleContainer}>
                <h1 className={header.title}>
                    안녕하세요,
                    <br />
                    담백한 개발을 추구하는 조용원 입니다.
                </h1>
                <h2 className={header.subtitle}>
                    커피 한 잔 하며 담백하게 경청하는 것을 좋아합니다.
                    <br />
                    사용자 친화적인 개발을 추구합니다.
                </h2>
                <hr className={header.hr} />
            </div>
        </header>
    );
};

export default Header;
