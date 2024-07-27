import { useRecoilState } from "recoil";
import { navigation } from "./navigation.css";
import { pageAtom } from "@/recoil/page.atom";
import { pages } from "@/pages";

const Navigation = () => {
    const [currentPage, setCurrentPage] = useRecoilState(pageAtom);

    return (
        <nav className={navigation.container}>
            {pages.map((page) => (
                <a
                    className={`${navigation.item}${
                        currentPage === page.page ? ` active` : ``
                    }`}
                    key={page.key}
                    onClick={() => {
                        setCurrentPage(page.page);
                        window.scrollTo({ top: 0 });
                    }}
                >
                    {page.name}
                </a>
            ))}
        </nav>
    );
};

export default Navigation;
