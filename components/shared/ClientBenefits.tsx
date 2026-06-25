const TEAL = '#004757';
const WHITE = '#F5F5F2';
const SAND = '#e8e0d6';
const TAUPE = '#b0a596';
const EMBER = '#eb5c2e';

export function ClientBenefits() {
  return (
    <section style={{ backgroundColor: TEAL }}>
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-20 py-16 md:py-24">
        <p
          className="font-body"
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: SAND,
            marginBottom: '16px',
          }}
        >
          Além do projeto
        </p>
        <h2 className="type-h1" style={{ color: WHITE, marginBottom: '56px', maxWidth: '900px' }}>
          Clientes da Pira Labs acessam lugares difíceis de alcançar sozinhos.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Beneficio 1: Notion */}
          <div>
            <h3 className="type-h3" style={{ color: WHITE, marginBottom: '20px' }}>
              Até 6 meses de Notion Business com IA
            </h3>
            <p className="font-body" style={{ fontSize: '1rem', lineHeight: 1.75, fontWeight: 300, color: SAND, marginBottom: '20px' }}>
              A Pira Labs é <span style={{ color: EMBER }}>parceira</span> do programa Notion for Startups. Clientes elegíveis que trabalham com a Pira Labs e ainda não ativaram um plano pago no Notion podem solicitar até 6 meses do Plano Business com IA incluída, sem custo, via o link de parceiro da Pira Labs, sujeito à aprovação e classificação do Notion. Sem vínculo com parceiro, startups elegíveis podem receber até 3 meses; SMBs ou casos não plenamente verificáveis podem receber 1 mês.
            </p>
            <p className="font-body" style={{ fontSize: '0.8125rem', lineHeight: 1.6, fontWeight: 300, color: TAUPE }}>
              Válido para empresas elegíveis, com menos de 100 pessoas, site público e domínio de e-mail próprio, sem histórico de plano pago no Notion. Uma utilização por empresa, sujeita à aprovação do Notion.
            </p>
            <img
              src="/notion-logo-white.png"
              alt="Notion"
              style={{ height: '40px', width: 'auto', borderRadius: '0', marginTop: '40px', display: 'block' }}
            />
          </div>

          {/* Beneficio 2: Eventos */}
          <div>
            <h3 className="type-h3" style={{ color: WHITE, marginBottom: '20px' }}>
              Acesso a eventos de inovação
            </h3>
            <p className="font-body" style={{ fontSize: '1rem', lineHeight: 1.75, fontWeight: 300, color: SAND, marginBottom: '20px' }}>
              Clientes ativos da Pira Labs podem ser conectados ao ecossistema da Gabriela Aguiar, com acesso a condições diferenciadas e convites para eventos como Web Summit Rio, SP Innovation Week, Rio Innovation Week e Energy Summit, entre outros, quando houver disponibilidade. É um benefício de relacionamento: depende de agenda e disponibilidade, não de garantia contratual.
            </p>
            <p className="font-body" style={{ fontSize: '0.8125rem', lineHeight: 1.6, fontWeight: 300, color: TAUPE }}>
              Comunicado diretamente durante o projeto, conforme disponibilidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
