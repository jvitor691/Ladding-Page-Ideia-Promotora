import LegalLayout from "../components/LegalLayout";

const secoes = [
    { id: "oque", title: "O que são cookies" },
    { id: "motivo", title: "Por que utilizamos" },
    { id: "quando", title: "Quando são utilizados" },
    { id: "tipos", title: "Tipos de cookies" },
    { id: "desabilitar", title: "Como desabilitar" },
];

const PoliticaCookies = () => {
    return (
        <LegalLayout
            badge="🍪 Transparência em cookies"
            title="Política de Cookies"
            subtitle="Entenda como a Ideia Promotora utiliza cookies para melhorar a navegação, personalizar a experiência e garantir o funcionamento adequado do site."
            chips={[
                "Última atualização: 06/03/2026",
                "Cookies próprios e de terceiros",
                "Navegação e personalização",
            ]}
            sections={secoes}
        >
            <section id="oque" className="legal-section">
                <h2>1. O que são cookies</h2>
                <p>
                    Cookies são pequenos arquivos com informações sobre os visitantes, armazenados pelo navegador
                    para identificar o dispositivo e melhorar a experiência de navegação.
                </p>
                <p>
                    Eles ajudam o site a “lembrar” preferências, buscas e interações realizadas durante o uso da plataforma.
                </p>
            </section>

            <section id="motivo" className="legal-section">
                <h2>2. Por que utilizamos cookies</h2>
                <p>
                    Utilizamos cookies para viabilizar funcionalidades do site, reduzir falhas, personalizar a navegação,
                    direcionar publicidade de soluções financeiras e analisar estatisticamente preferências gerais dos usuários.
                </p>
            </section>

            <section id="quando" className="legal-section">
                <h2>3. Quando os cookies são utilizados</h2>
                <p>
                    Durante a navegação em nossos sites poderá ocorrer a coleta e utilização de cookies.
                </p>
            </section>

            <section id="tipos" className="legal-section">
                <h2>4. Quais cookies são utilizados</h2>
                <ul>
                    <li><strong>Necessários:</strong> essenciais para o funcionamento correto do site.</li>
                    <li><strong>Performance:</strong> medem visitas, áreas acessadas, duração e erros, de forma anônima.</li>
                    <li><strong>Funcionais:</strong> guardam preferências como idioma, região ou preenchimentos prévios.</li>
                    <li><strong>Segurança:</strong> ajudam a proteger dados e oferecer recursos de proteção durante a navegação.</li>
                    <li><strong>Marketing:</strong> direcionam conteúdos e ofertas conforme o perfil de acesso.</li>
                </ul>
            </section>

            <section id="desabilitar" className="legal-section">
                <h2>5. Não quero utilizar cookies. O que posso fazer?</h2>
                <p>
                    Você pode gerenciar ou desabilitar cookies diretamente no navegador, como Chrome, Firefox ou Edge.
                </p>
                <p>
                    Os cookies podem ser próprios ou de terceiros. Caso sejam desabilitados, algumas funcionalidades do site
                    poderão ficar parcial ou totalmente indisponíveis.
                </p>
            </section>
        </LegalLayout>
    );
};

export default PoliticaCookies;