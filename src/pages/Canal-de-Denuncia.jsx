import LegalLayout from "../components/LegalLayout";

const secoes = [
    { id: "canal", title: "Canal de denúncias" },
    { id: "contatos", title: "Contatos" },
];

const CanalDenuncias = () => {
    return (
        <LegalLayout
            badge="📢 Canal oficial"
            title="Canal de Denúncias"
            subtitle="Este canal está disponível para comunicações relacionadas a condutas irregulares, tentativas de fraude, uso indevido do nome da empresa e outras situações relevantes."
            chips={[
                "Atendimento institucional",
                "Comunicação oficial",
                "Ideia Promotora",
            ]}
            sections={secoes}
        >
            <section id="canal" className="legal-section">
                <h2>1. Canal de denúncias</h2>
                <p>
                    Caso você identifique qualquer irregularidade, solicitação indevida de pagamento,
                    uso incorreto do nome da Ideia Promotora ou situação suspeita relacionada aos serviços,
                    utilize os canais oficiais abaixo.
                </p>

                <div className="legal-highlight">
                    A Ideia Promotora não solicita pagamentos antecipados para liberação de crédito.
                </div>
            </section>

            <section id="contatos" className="legal-section">
                <h2>2. Contatos oficiais</h2>
                <div className="legal-contact">
                    <p><strong>E-mail jurídico:</strong> juridico@ideiapromotora.com.br</p>
                    <p><strong>DPO:</strong> encarregadoideiapromotora@gmail.com</p>
                    <p><strong>Telefone:</strong> (85) 2139-5599</p>
                    <p><strong>Endereço:</strong> Rua Pedro Borges, 20, Sala 1905, Centro, Fortaleza/CE</p>
                </div>
            </section>
        </LegalLayout>
    );
};

export default CanalDenuncias;