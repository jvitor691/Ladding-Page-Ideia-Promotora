import LegalLayout from "../components/LegalLayout";

const secoes = [
    { id: "objetivo", title: "Objetivo e escopo" },
    { id: "papeis", title: "Papéis no tratamento" },
    { id: "dados", title: "Categorias de dados" },
    { id: "finalidades", title: "Finalidades" },
    { id: "compartilhamento", title: "Compartilhamento" },
    { id: "seguranca", title: "Segurança e armazenamento" },
    { id: "direitos", title: "Direitos do titular" },
    { id: "cookies", title: "Política de cookies" },
    { id: "dpo", title: "Canal de comunicação (DPO)" },
];

const PoliticaPrivacidade = () => {
    return (
        <LegalLayout
            badge="🔒 Privacidade e dados"
            title="Política de Privacidade e Proteção de Dados"
            subtitle="Esta política apresenta as diretrizes adotadas pela Ideia Promotora para o tratamento de dados pessoais, em conformidade com a LGPD."
            chips={[
                "LGPD — Lei nº 13.709/2018",
                "Última atualização: 06/03/2026",
                "Dados pessoais e navegação",
            ]}
            sections={secoes}
        >
            <section id="objetivo" className="legal-section">
                <h2>1. Objetivo e escopo</h2>
                <p>
                    Esta Política estabelece as diretrizes para o tratamento de dados pessoais coletados pela
                    <strong> IDEIA PROMOTORA (CNPJ 43.180.438/0001-01)</strong>, com compromisso de transparência,
                    segurança e privacidade em conformidade com a LGPD.
                </p>
            </section>

            <section id="papeis" className="legal-section">
                <h2>2. Papéis no tratamento de dados</h2>
                <ul>
                    <li><strong>Controladora:</strong> ao decidir quais dados coletar para prospecção e atendimento inicial.</li>
                    <li><strong>Operadora:</strong> ao tratar dados sob instrução de instituições financeiras parceiras.</li>
                </ul>
            </section>

            <section id="dados" className="legal-section">
                <h2>3. Categorias de dados tratados</h2>
                <ul>
                    <li><strong>Dados cadastrais:</strong> nome, CPF, RG, CNH, data de nascimento, naturalidade, filiação e estado civil.</li>
                    <li><strong>Dados de contato:</strong> endereço residencial, telefone celular e e-mail.</li>
                    <li><strong>Dados profissionais e financeiros:</strong> benefício INSS, Siape, matrícula funcional, contracheque, extrato bancário, salário e margem consignável.</li>
                    <li><strong>Dados biométricos:</strong> fotos de documentos e selfies para prevenção à fraude e autenticação.</li>
                    <li><strong>Dados de navegação:</strong> IP, navegador, páginas visitadas e tempo de permanência.</li>
                </ul>
            </section>

            <section id="finalidades" className="legal-section">
                <h2>4. Finalidades do tratamento</h2>
                <ul>
                    <li>Realizar simulações, consultas de margem e propostas de empréstimos/cartões.</li>
                    <li>Verificar identidade e autenticidade de documentos para prevenção à fraude.</li>
                    <li>Consultar sistemas como Dataprev, SouGov, Portal do Consignado e sistemas municipais/estaduais.</li>
                    <li>Enviar atualizações por WhatsApp, SMS ou e-mail.</li>
                    <li>Cumprir obrigações legais e regulatórias.</li>
                </ul>
            </section>

            <section id="compartilhamento" className="legal-section">
                <h2>5. Compartilhamento com terceiros</h2>
                <ul>
                    <li>Bancos e instituições financeiras.</li>
                    <li>Plataformas de assinatura digital.</li>
                    <li>Órgãos pagadores para reserva e averbação de margem.</li>
                    <li>Autoridades governamentais, quando exigido por lei.</li>
                </ul>
            </section>

            <section id="seguranca" className="legal-section">
                <h2>6. Segurança e armazenamento</h2>
                <ul>
                    <li>Uso de criptografia em trânsito (SSL/TLS) e em repouso.</li>
                    <li>Armazenamento pelo tempo necessário às finalidades ou conforme exigência legal.</li>
                    <li>Após o prazo legal, os dados podem ser excluídos ou anonimizados.</li>
                </ul>
            </section>

            <section id="direitos" className="legal-section">
                <h2>7. Direitos do titular</h2>
                <ul>
                    <li>Confirmar a existência de tratamento e obter cópia dos dados.</li>
                    <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
                    <li>Solicitar anonimização, bloqueio ou eliminação quando cabível.</li>
                    <li>Solicitar portabilidade.</li>
                    <li>Revogar consentimento para fins de marketing.</li>
                </ul>
            </section>

            <section id="cookies" className="legal-section">
                <h2>8. Política de cookies</h2>
                <p>
                    O site utiliza cookies essenciais e analíticos para funcionamento, compreensão do fluxo de visitas
                    e melhoria da experiência. A desativação pode limitar recursos do site.
                </p>
            </section>

            <section id="dpo" className="legal-section">
                <h2>9. Canal de comunicação (DPO)</h2>
                <div className="legal-contact">
                    <p><strong>Encarregado de Dados (DPO):</strong> Djeane Dantas</p>
                    <p><strong>E-mail exclusivo:</strong> encarregadoideiapromotora@gmail.com</p>
                    <p><strong>Endereço postal:</strong> Rua Pedro Borges, 20, Sala 1905, Centro, Fortaleza/CE</p>
                </div>
            </section>
        </LegalLayout>
    );
};

export default PoliticaPrivacidade;