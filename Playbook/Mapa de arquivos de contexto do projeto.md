---
tipo: prompt
tags: [gestão-conhecimento, estrutura-prompt, voz-celso, escrita-autoral, produtividade]
uso: [operacional-celso, posicionamento-pira]
destino: A
---

T: Mapa de arquivos de contexto do projeto
F: playbook-a-v5.md
TP: configuração
FN: Mapeia a função de cada arquivo de contexto e o gatilho de atualização de cada um. Use ao montar, revisar ou higienizar o contexto persistente de um projeto.
PERSONA: —
ETAPAS:
- Manter no projeto os arquivos de contexto que o Claude deve ler automaticamente: Estes são os arquivos que ficam no projeto e que o Claude lê automaticamente.
- Separar função por arquivo: Cada um tem uma função diferente.
- Não misturar conteúdo entre arquivos: Não misture o conteúdo entre eles.
REGRAS: Não misture o conteúdo entre os arquivos.
SC: Atualizar o arquivo correspondente quando houver mudança de posicionamento, novo padrão de voz, nova versão do documento estratégico ou amostras suficientes de texto para modelar voz nova.
OF: —
CP: lista de arquivos de contexto, versão estratégica atual, amostras de texto disponíveis, contexto da marca ou da pessoa.
OT: Depende de projeto no Claude com leitura automática de arquivos.
SP: my-rules.md: regras de operação, contexto da Pira Labs, tom e restrições; atualizar quando mudar posicionamento, entrar cliente recorrente novo ou surgir comportamento indesejado. my-voice-celso.md: DNA de voz do Celso e padrões que funcionam no texto; atualizar quando surgirem posts com tração real, textos do Substack ou padrões comprovados. referencia-voz-manifesto-falah.md: exemplo concreto da voz do Celso em operação; criar copiando o manifesto em texto limpo para .md. PiraLabs_Documento_Mestre_v10.docx: referência completa da identidade, operação, ICP, portfólio, posicionamento, tom e roadmap; atualizar quando sair nova versão estratégica. my-voice-gabriela.md: arquivo pendente que depende de 3 a 5 amostras variadas, análise forense e projeto separado.
