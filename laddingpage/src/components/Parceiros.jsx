import { useEffect, useRef } from "react";
import "../style/parceiros.css";

const BANKS = [
    "C6 Bank", "FACTA Financeira", "Banco Daycoval", "Banco PAN", "Banco BMG",
    "Quero+", "iCred", "BRB – Banco de Brasília", "Finanto", "Santander",
    "Banrisul", "Digio", "Banco Safra", "Crefaz", "Mercantil do Brasil",
    "Itaú Unibanco", "Meu Cash Card", "Sabemi Seguradora", "PicPay",
    "Total Cash", "Cred Capital", "VCTEX", "Amigoz", "Presença Bank",
    "BCBR", "CBA", "NIO", "TaFácil", "Aki Capital", "Crefisa",
    "Happy", "KardBank", "Nossa Fintech", "Qualibanking",
];

const SAC = "(85) 2139-5599";
const OUVIDORIA = "(85) 2139-5599";

const IconeBanco = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 10v11M12 10v11M16 10v11" />
    </svg>
);

const BancoCard = ({ banco }) => (
    <div className="banco-card">
        <div className="banco-logo-box">
            <IconeBanco />
        </div>
        <div className="banco-nome">{banco}</div>
        <div className="banco-divider" />
        <div className="banco-contatos">
            <span className="banco-contato">
                <strong>SAC:</strong> {SAC}
            </span>
            <span className="banco-contato">
                <strong>Ouvidoria:</strong> {OUVIDORIA}
            </span>
        </div>
    </div>
);

const Parceiros = () => {
    const trackRef = useRef(null);

    // pausa ao passar o mouse sobre o track
    const pausar = () => { if (trackRef.current) trackRef.current.style.animationPlayState = "paused"; };
    const retomar = () => { if (trackRef.current) trackRef.current.style.animationPlayState = "running"; };

    // duplica os cards para o loop infinito funcionar
    const listaLoop = [...BANKS, ...BANKS];

    return (
        <section className="parceiros" id="parceiros">

            <div className="sec-header">
                <span className="sec-label">Bancos Parceiros</span>
                <h2 className="sec-title">
                    Conectados com os <span>melhores bancos</span>
                </h2>
                <p className="sec-sub">
                    A Ideia Promotora atua como correspondente bancário autorizado
                    de {BANKS.length} instituições financeiras regulamentadas pelo
                    Banco Central do Brasil.
                </p>
            </div>

            <div className="parceiros-wrap">

                <div className="carrossel-wrap">
                    <div
                        className="carrossel-track"
                        ref={trackRef}
                        onMouseEnter={pausar}
                        onMouseLeave={retomar}
                    >
                        {listaLoop.map((banco, i) => (
                            <BancoCard key={`${banco}-${i}`} banco={banco} />
                        ))}
                    </div>
                </div>

                <p className="parceiros-alerta">
                    ⚠️ Operações realizadas por instituições financeiras parceiras,
                    nos termos da regulamentação do Banco Central do Brasil.
                </p>

            </div>
        </section>
    );
};

export default Parceiros;