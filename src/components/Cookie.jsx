import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/cookie.css";

const Cookie = () => {
    const [visivel, setVisivel] = useState(false);

    useEffect(() => {
        try {
            const consentimento = localStorage.getItem("cookie_consent");
            if (!consentimento) setVisivel(true);
        } catch {
            setVisivel(true);
        }
    }, []);

    const fecharCookie = (aceitar) => {
        try {
            localStorage.setItem("cookie_consent", aceitar ? "all" : "essential");
        } catch { }
        setVisivel(false);
    };

    if (!visivel) return null;

    return (
        <div
            className="cookie-banner"
            role="dialog"
            aria-label="Aviso de cookies"
        >
            <p className="cookie-texto">
                <strong>🍪 Sua privacidade importa.</strong> Utilizamos cookies para
                melhorar sua experiência, analisar o tráfego e personalizar conteúdo,
                conforme nossa <Link to="/politica-de-cookies">Política de Cookies</Link>{" "}
                ,<Link to="/termos-de-uso">Termos de Uso</Link> e <Link to="/politica-de-privacidade">Política de Privacidade</Link>.
                Em conformidade com a <strong>LGPD — Lei nº 13.709/2018</strong>.
            </p>

            <div className="cookie-btns">
                <button
                    className="cookie-recusar"
                    onClick={() => fecharCookie(false)}
                >
                    Apenas essenciais
                </button>
                <button
                    className="cookie-aceitar"
                    onClick={() => fecharCookie(true)}
                >
                    Aceitar todos
                </button>
            </div>
        </div>
    );
};

export default Cookie;