import { Link } from "react-router-dom";
import "../style/legal.css";

const LegalLayout = ({ badge, title, subtitle, chips = [], sections = [], children }) => {
    return (
        <main className="legal-page">
            <section className="legal-hero">
                <div className="legal-hero-inner">
                    <span className="legal-badge">{badge}</span>
                    <h1 className="legal-title">{title}</h1>
                    <p className="legal-subtitle">{subtitle}</p>
                </div>
            </section>

            <section className="legal-container">
                <div className="legal-card">
                    <div className="legal-meta">
                        {chips.map((chip) => (
                            <span key={chip} className="legal-chip">
                                {chip}
                            </span>
                        ))}
                    </div>

                    <div className="legal-grid">
                        <aside className="legal-aside">
                            <h3>Navegação rápida</h3>
                            <ul>
                                {sections.map((section) => (
                                    <li key={section.id}>
                                        <a href={`#${section.id}`}>{section.title}</a>
                                    </li>
                                ))}
                            </ul>

                            <div className="legal-actions">
                                <Link to="/" className="legal-btn legal-btn-secondary">
                                    Voltar ao site
                                </Link>
                            </div>
                        </aside>

                        <div className="legal-content">{children}</div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LegalLayout;