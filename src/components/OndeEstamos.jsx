import "../style/ondeestamos.css";

const ESTADOS = [
    { uf: "CE", nome: "Ceará", descricao: "Fortaleza · Matriz", tipo: "matriz" },
    { uf: "MA", nome: "Maranhão", descricao: "São Luís · Filial", tipo: "filial" },
    { uf: "PB", nome: "Paraíba", descricao: "Atuação comercial no estado", tipo: "comercial" },
    { uf: "RN", nome: "Rio Grande do Norte", descricao: "Atuação comercial no estado", tipo: "comercial" },
    { uf: "PI", nome: "Piauí", descricao: "Atuação comercial no estado", tipo: "comercial" },
    { uf: "PA", nome: "Pará", descricao: "Atuação comercial no estado", tipo: "comercial" },
    { uf: "AP", nome: "Amapá", descricao: "Atuação comercial no estado", tipo: "comercial" },
];

const IconePin = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const OndeEstamos = () => {
    return (
        <section className="onde-estamos" id="onde-estamos">
            <div className="sec-header">
                <span className="sec-label">Presença Regional</span>
                <h2 className="sec-title">
                    Onde <span>estamos</span>
                </h2>
                <p className="sec-sub">
                    Nossa operação conta com matriz em Fortaleza, filial no Maranhão
                    e atuação comercial em outros estados, com gerentes acompanhando
                    parceiros em toda a região.
                </p>
            </div>

            <div className="estados-grid">
                {ESTADOS.map((estado) => (
                    <div
                        className={`estado-card estado-card--${estado.tipo}`}
                        key={estado.uf}
                    >
                        <div className="estado-icon">
                            <IconePin />
                        </div>

                        <div className="estado-info">
                            <div className="estado-top">
                                <div className="estado-uf">{estado.uf}</div>

                                <span className={`estado-tag estado-tag--${estado.tipo}`}>
                                    {estado.tipo === "matriz" && "Matriz"}
                                    {estado.tipo === "filial" && "Filial"}
                                    {estado.tipo === "comercial" && "Comercial"}
                                </span>
                            </div>

                            <div className="estado-nome">{estado.nome}</div>
                            <div className="estado-cidades">{estado.descricao}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OndeEstamos;