import { footerLink } from "@/contents/links";
import { footer } from "./Footer.css";

const Footer = () => {
    return (
        <footer className={footer.container}>
            <div className={footer.linkContainer}>
                {footerLink.map((link) => (
                    <a className={footer.link} key={link.id} href={link.url}>
                        {link.name}
                    </a>
                ))}
            </div>
            <p className={footer.copyright}>Copyright by 조용원.</p>
            <p className={footer.copyright}>All Right Reserved.</p>
            <a href="mailto:auau3@kakao.com" className={footer.copyright}>
                Contact: auau3@kakao.com
            </a>
        </footer>
    );
};

export default Footer;
