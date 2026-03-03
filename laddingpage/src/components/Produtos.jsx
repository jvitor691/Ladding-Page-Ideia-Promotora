import "../style/produtos.css";

const PRODUCTS = [
    {
        icon: "📋",
        category: "Crédito Consignado",
        title: "Consignado",
        items: ["INSS", "Servidor Público", "Federal"],
    },
    {
        icon: "💳",
        category: "Cartões",
        title: "Cartões Especiais",
        items: ["Cartão Consignado RMC", "Cartão Benefício RCC"],
    },
    {
        icon: "💡",
        category: "Linhas de Crédito",
        title: "Crédito",
        items: ["Crédito Pessoal", "Saque FGTS", "Crédito na Conta de Energia"],
    },
];

const Produtos = () => {
    return (
        <section class="produtos" id="produtos">
            <div class="sec-header">
                <span class="sec-label">Nossos Produtos</span>
                <h2 class="sec-title">Conheça nossas <span>soluções financeiras</span></h2>
                <p class="sec-sub">Uma parceria pronta para te oferecer muito mais — com as melhores condições do mercado.</p>
            </div>
            <div class="produtos-grid">

                <div class="prod-card">
                    <div class="prod-icon">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /><path d="M12 6v6l4 2" /></svg>
                    </div>
                    <div class="prod-cat">Crédito Consignado</div>
                    <div class="prod-name">Consignado</div>
                    <ul class="prod-items">
                        <li>INSS</li>
                        <li>Servidor Público</li>
                        <li>Federal</li>
                    </ul>
                    <a href="#" class="prod-btn">
                        Saiba mais
                        <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
                    </a>
                </div>

                <div class="prod-card">
                    <div class="prod-icon">
                        <svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                    </div>
                    <div class="prod-cat">Cartões</div>
                    <div class="prod-name">Cartões Especiais</div>
                    <ul class="prod-items">
                        <li>Cartão Consignado RMC</li>
                        <li>Cartão Benefício RCC</li>
                    </ul>
                    <a href="#" class="prod-btn">
                        Saiba mais
                        <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
                    </a>
                </div>

                <div class="prod-card">
                    <div class="prod-icon">
                        <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                    </div>
                    <div class="prod-cat">Linhas de Crédito</div>
                    <div class="prod-name">Crédito</div>
                    <ul class="prod-items">
                        <li>Crédito Pessoal</li>
                        <li>Saque FGTS</li>
                        <li>Crédito na Conta de Energia</li>
                    </ul>
                    <a href="#" class="prod-btn">
                        Saiba mais
                        <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Produtos;