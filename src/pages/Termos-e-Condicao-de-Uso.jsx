import LegalLayout from "../components/LegalLayout";

const secoes = [
    { id: "identificacao", title: "Identificação" },
    { id: "natureza", title: "Natureza dos serviços" },
    { id: "gratuidade", title: "Gratuidade e segurança" },
    { id: "cadastro", title: "Cadastro e veracidade" },
    { id: "lgpd", title: "Privacidade e proteção de dados" },
    { id: "propriedade", title: "Propriedade intelectual" },
    { id: "responsabilidade", title: "Limitação de responsabilidade" },
    { id: "contato", title: "Canais de contato" },
    { id: "foro", title: "Lei aplicável e foro" },
];

const TermosUso = () => {
    return (
        <LegalLayout
            badge="📘 Documento legal"
            title="Termos e Condições de Uso"
            subtitle="Ao navegar e utilizar este site, você concorda com as regras, condições e limitações aplicáveis à utilização do portal da Ideia Promotora."
            chips={[
                "Última atualização: 06/03/2026",
                "Ideia Soluções LTDA",
                "Correspondente Bancário",
            ]}
            sections={secoes}
        >
            <section id="identificacao" className="legal-section">
                <h2>1. Identificação</h2>
                <p>
                    Este site é de propriedade e operado pela <strong>Ideia Soluções Ltda (Ideia Promotora)</strong>,
                    inscrita no CNPJ nº <strong>43.180.438/0001-01</strong>, com sede na
                    <strong> Rua Pedro Borges, 20, Sala 1905, Centro, Fortaleza/CE, CEP 60.055-110</strong>.
                </p>
            </section>

            <section id="natureza" className="legal-section">
                <h2>2. Natureza dos serviços</h2>
                <p>
                    A Ideia Promotora atua exclusivamente como <strong>Correspondente Bancário</strong>,
                    seguindo as normas da Resolução nº 4.935 do Banco Central do Brasil.
                </p>
                <ul>
                    <li>Não é uma instituição financeira.</li>
                    <li>Realiza agenciamento, promoção e preparação de propostas de crédito para bancos parceiros.</li>
                    <li>
                        Facilita o acesso a produtos como empréstimo consignado, antecipação de saque-aniversário FGTS
                        e cartão de crédito consignado.
                    </li>
                    <li>
                        A análise e a concessão do crédito são de responsabilidade exclusiva das instituições financeiras parceiras.
                    </li>
                </ul>
            </section>

            <section id="gratuidade" className="legal-section">
                <h2>3. Gratuidade e segurança</h2>
                <div className="legal-highlight">
                    A Ideia Promotora não solicita pagamentos antecipados, depósitos de “taxas”, “seguros” ou
                    “custos operacionais” para liberação de empréstimos.
                </div>
                <p>
                    Os serviços de intermediação são gratuitos para o consumidor final. Caso você receba qualquer
                    solicitação de pagamento em nome da empresa, interrompa o contato e utilize os canais oficiais.
                </p>
            </section>

            <section id="cadastro" className="legal-section">
                <h2>4. Cadastro e veracidade das informações</h2>
                <ul>
                    <li>Fornecer informações precisas e verídicas.</li>
                    <li>Não utilizar dados de terceiros sem autorização legal.</li>
                    <li>Manter seus dados de contato atualizados para retorno das solicitações.</li>
                </ul>
            </section>

            <section id="lgpd" className="legal-section">
                <h2>5. Privacidade e proteção de dados (LGPD)</h2>
                <p>
                    A coleta de dados pessoais, como CPF, telefone e margem consignável, é realizada com a finalidade
                    estrita de operacionalizar simulações e propostas de crédito.
                </p>
                <p>
                    Ao preencher os campos do site, o usuário autoriza o tratamento dos dados para fins de consulta de
                    margem e pré-aprovação de crédito.
                </p>
            </section>

            <section id="propriedade" className="legal-section">
                <h2>6. Propriedade intelectual</h2>
                <p>
                    Todo o design, marcas, logotipos e conteúdos textuais do site são de propriedade da Ideia Promotora.
                    A reprodução não autorizada é proibida e sujeita às penalidades da legislação brasileira.
                </p>
            </section>

            <section id="responsabilidade" className="legal-section">
                <h2>7. Limitação de responsabilidade</h2>
                <p>
                    A empresa busca manter taxas, prazos e informações atualizados, porém os valores exibidos em simuladores
                    são estimativas e podem variar conforme as políticas vigentes das instituições financeiras no momento da contratação.
                </p>
            </section>

            <section id="contato" className="legal-section">
                <h2>8. Canais de contato</h2>
                <div className="legal-contact">
                    <p><strong>Endereço:</strong> Rua Pedro Borges, 20, Sala 1905 - Centro, Fortaleza/CE</p>
                    <p><strong>E-mail:</strong> juridico@ideiapromotora.com.br</p>
                    <p><strong>SAC:</strong> (85) 2139-5599</p>
                    <p><strong>Ouvidoria:</strong> (85) 2139-5599</p>
                </div>
            </section>

            <section id="foro" className="legal-section">
                <h2>9. Lei aplicável e foro</h2>
                <p>
                    Estes Termos são regidos pelas leis da República Federativa do Brasil, ficando eleito o foro da
                    Comarca de Fortaleza/CE para dirimir quaisquer questões relativas a este documento.
                </p>
            </section>
        </LegalLayout>
    );
};

export default TermosUso;