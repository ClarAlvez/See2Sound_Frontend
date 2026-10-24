# See2Sound Frontend — auditoria pré-apresentação

Data: 24/10/2026. Escopo: frontend web deste repositório. Aplicativo Flutter e backend não foram modificados. Alterações locais, sem publicação ou commit automático.

## A. Resumo executivo

**Avaliação: pronto com ressalvas para apresentação institucional.**

Antes: as duas páginas existentes já tinham estrutura semântica, skip link, menu móvel, preferências e estados honestos de indisponibilidade dos downloads. Lint e build passavam. Entretanto, endereços desconhecidos exibiam uma tela sem conteúdo, preferências salvas eram aceitas sem validação, o painel cortava conteúdo ampliado, os efeitos gráficos não respeitavam efetivamente a redução de movimento e o bundle inicial tinha 805,47 kB. A consulta de dependências revelou avisos de segurança, inclusive em ferramentas auxiliares.

Depois: navegação com página de erro, preferências validadas, painel adaptado a 320 px com texto a 150% e espaçamento ampliado, efeitos desmontados quando desativados, carregamento gráfico separado, descarte de recursos e dependências atualizadas dentro das faixas declaradas. O build final passou com JavaScript principal de 262,43 kB. A consulta final `npm audit` retornou zero vulnerabilidades conhecidas. As duas páginas passaram na matriz de 20 combinações de página/largura, sem overflow da página nem texto principal cortado nos elementos medidos.

Ressalvas: nenhum instalador está disponível no repositório; o site não demonstra processamento real; a hospedagem de produção não foi acessada; leitores de tela, zoom nativo de 200%, dispositivos físicos e conformidade WCAG completa precisam de validação humana complementar.

## B. Arquitetura identificada

Reconhecimento realizado antes das alterações, com arquitetura resumida também na comunicação inicial da auditoria.

| Área | Implementação real |
| --- | --- |
| Aplicação | `app/`, React 19, JavaScript/JSX, Vite, módulos ES |
| Entrada | `app/index.html`, `src/main.jsx`, StrictMode e BrowserRouter |
| Rotas | `src/App.jsx`: `/`, `/download`; acrescentada rota curinga de erro |
| Páginas | Home compõe Hero, About, HowItWorks, WhyUse; Download informa disponibilidade; Navbar e Footer compartilhados |
| Estilos | CSS global e por componente, Tailwind 4 via plugin Vite, configuração shadcn |
| Ícones | lucide-react e react-icons |
| Efeitos | OGL em LineWaves; Three.js em LiquidEther, usado na página de plataformas |
| Estado | `useState`, `useRef`, efeitos React; preferências em localStorage; sem Redux ou estado remoto |
| Integrações | Links externos GitHub/Instagram e mailto; nenhuma chamada fetch/axios ou serviço da API |
| Configuração | Alias `@` para `src`; sem arquivos de ambiente ou URL de API identificados no código versionado |
| Dependências | npm e package-lock; dependências reais em `app/package.json` |
| Qualidade | ESLint com regras de hooks/refresh; testes Node adicionados; sem TypeScript ou E2E/axe previamente configurado |

A raiz tinha um segundo manifesto com dependências duplicadas sem scripts. Agora oferece comandos que delegam a `app/`, sem duplicar dependências. O lockfile da raiz foi regenerado. O README passou a descrever a estrutura real e os comandos disponíveis.

Elementos auxiliares: `components/ui/button.jsx` não integra as páginas atuais e importava uma utilidade ausente; a utilidade foi implementada usando clsx/tailwind-merge já declarados. CSS de Threads, DarkVeil, AnimatedWaves e DownloadPage, além de regras antigas de fundos, não corresponde a componentes ativos encontrados. Mantidos para evitar apagar trabalho de evolução visual sem necessidade. GSAP e a fonte Geist continuam declarados, embora não sejam necessários às páginas atuais; a importação global da fonte sem uso foi retirada. O CSS shadcn mantém o pacote necessário ao build.

## C. Problemas encontrados

| Prioridade | Descrição | Arquivos envolvidos | Impacto | Situação |
| --- | --- | --- | --- | --- |
| Alta | Preferências persistidas aceitavam tipos e tamanhos arbitrários | AccessibilityDropdown, lib/accessibilitySettings | Texto pode desaparecer, opções inválidas | Corrigido |
| Alta | Redução de movimento e remoção de fundos só alteravam CSS; GPU continuava executando | HeroSection, DownloadLiquidBackground, novo hook e DecorativeEffect | Movimento e consumo desnecessário de recursos | Corrigido |
| Alta | Painel em 320 px com fonte a 150% e espaçamento cortava títulos, colunas e controles | AccessibilityDropdown.css | Preferências difíceis de ler e operar | Corrigido; reteste sem cortes internos |
| Alta | Falha na criação do contexto gráfico podia afetar a página | LineWaves, LiquidEther, DecorativeEffect | Perda de acesso em ambiente sem WebGL | Tratamento implementado; falha de hardware não induzida no navegador |
| Alta | Dependências com avisos de segurança | app/package-lock.json | Riscos em roteamento, desenvolvimento e ferramentas auxiliares | Corrigido para os avisos retornados pela consulta final |
| Média | Rota desconhecida sem página correspondente | App, NotFound | Tela sem orientação e sem retorno | Corrigido |
| Média | Hero com altura fixa e linhas sem quebra | HeroSection.css, global.css | Corte em telas baixas ou texto ampliado | Corrigido |
| Média | Painel fixo só até 768 px, embora menu móvel fosse até 980 px | AccessibilityDropdown.css | Painel mal posicionado na faixa intermediária | Corrigido |
| Média | Escape concorria entre painel e menu; painel permanecia aberto ao navegar com Tab para fora | Navbar, AccessibilityDropdown | Foco inconsistente | Corrigido; Escape verificado em camadas |
| Média | Liberação incompleta de geometrias, materiais, targets e callback de resize | LineWaves, LiquidEther | Recursos retidos após navegação | Descarte explícito implementado; sem medição de heap/GPU |
| Média | Ondas executavam fora da área visível e em aba oculta | LineWaves | Uso desnecessário de GPU | Pausa implementada; retorno visual verificado |
| Média | CTA dizia “Experimente” sem instalador disponível | HeroSection | Expectativa incorreta para apresentação | Corrigido para “Conheça as plataformas” |
| Média | Utilidade shadcn ausente e pasta `lib/` ignorada por regra genérica Python | ui/button, lib/utils, .gitignore | Import quebrado ao utilizar o componente; arquivos omitidos pelo Git | Corrigido |
| Média | Links de download não disponíveis | pages/Download | Impede demonstrar instalação | Pendente de releases reais; estados desabilitados preservados |
| Média | Recarregamento de `/download` depende do fallback da hospedagem | BrowserRouter, README | Possível 404 no servidor publicado | Documentado; funciona no preview, hospedagem não validada |
| Baixa | Metadados institucionais incompletos e descrição igual nas rotas | index.html, App | Apresentação/compartilhamento menos claros | Melhorado; sem inventar domínio canônico |
| Baixa | Bundle principal de 805,47 kB | Imports dos efeitos | Custo inicial elevado | Corrigido com importação dinâmica |
| Baixa | Fonte baixada globalmente, mas body usa Arial | global.css | Downloads sem benefício nas páginas atuais | Importação removida |
| Baixa | Close do painel com alvo de 34 px | AccessibilityDropdown.css | Operação por toque menos confortável | Ampliado a 44 px |
| Baixa | Documentação de template e árvore incorreta | README, app/README | Dificulta execução e manutenção | Corrigido |

Não foi identificado bloqueador crítico de execução nas páginas institucionais. A severidade crítica retornada inicialmente para uma dependência transitiva de ferramenta não demonstrava exploração na página estática; ainda assim, as atualizações compatíveis eliminaram os avisos retornados pelo npm.

## D. Correções implementadas

- Validação por lista de propriedades conhecidas: booleanos reais; texto limitado de 100 a 150%, em passos de 10. JSON inválido e armazenamento bloqueado mantêm fallback de sessão já existente. Dois testes exercitam conteúdo inválido e persistência de configurações válidas.
- Rota curinga com heading, explicação e link de retorno. Atualização de título e descrição por rota; cancelamento dos frames agendados para navegação.
- Escape do painel interrompe propagação antes do menu; foco retorna ao disparador. Ao mover foco para fora do painel, ele fecha; perda de foco da janela sem novo alvo não fecha o painel indevidamente. Frames pendentes de foco são cancelados.
- Preferências, alto contraste e configuração de movimento do sistema controlam a montagem dos renderizadores. Suspense e um limite de erro isolam efeitos decorativos das informações do site.
- LineWaves pausa por visibilidade; limpa geometria, programa, contexto, eventos e observador. LiquidEther limpa targets, materiais, geometrias, textura de paleta e callback de resize ao desmontar.
- Utilidade `cn` implementada com bibliotecas existentes, sem novo pacote de runtime. Exceção no `.gitignore` permite versionar `app/src/lib`.
- Atualizações npm sem `--force` e sem alteração manual das faixas: Vite instalado 8.3.5; React Router instalado 7.18.4; dependências transitivas compatíveis corrigidas por `npm audit fix --ignore-scripts --no-fund`.

## E. Melhorias visuais e responsividade

A identidade de fundo escuro, roxo, logotipo, tipografia, ondas, cartões e organização das seções foi preservada. A intervenção concentrou-se em geometria flexível, quebra de títulos, espaços para conteúdo ampliado, largura consistente dos cartões e rolagem do menu/painel em telas baixas.

Hero usa altura mínima em vez de altura fixa e permite quebra de linhas. Títulos longos podem quebrar quando necessário. Painel usa colunas `minmax(0, 1fr)`, controle com largura própria, header flexível e quebra de palavras; a versão móvel acompanha o breakpoint de 980 px. Cartões de plataforma usam toda a largura disponível dentro do limite previsto.

Matriz final no navegador integrado, build de produção, altura de 900 px:

| Largura | Home | Plataformas |
| --- | --- | --- |
| 1920 | Sem overflow medido | Sem overflow medido |
| 1440 | Sem overflow medido | Sem overflow medido |
| 1366 | Sem overflow medido | Sem overflow medido |
| 1280 | Sem overflow medido | Sem overflow medido |
| 1024 | Sem overflow medido | Sem overflow medido |
| 768 | Sem overflow medido | Sem overflow medido |
| 430 | Sem overflow medido | Sem overflow medido |
| 390 | Sem overflow medido | Sem overflow medido |
| 375 | Sem overflow medido | Sem overflow medido |
| 320 | Sem overflow medido | Sem overflow medido |

Medições: scrollWidth do documento versus innerWidth e scrollWidth/clientWidth de headings principais, parágrafos e botões. Essas verificações não substituem inspeção visual ou detectam toda possível sobreposição. Foram inspecionadas capturas desktop/móvel e a seção de funcionamento; painel ampliado em 320 px também foi medido sem overflow interno após a correção. O site já usa `overflow-x: hidden` em partes do layout; por isso, a verificação incluiu elementos internos, e não apenas a barra de rolagem.

## F. Acessibilidade

Referência: [WCAG 2.2 do W3C](https://www.w3.org/TR/WCAG22/), especialmente navegação por teclado, reflow, nomes de controles e movimento. A diretriz [Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) fundamenta a necessidade de controle efetivo dos efeitos contínuos.

Preservados: idioma pt-BR, main, header, nav e footer, um h1 por página, headings de seções, listas, skip link, ícones decorativos ocultos, nomes de links externos com indicação de nova aba, foco visível e regiões polite de feedback.

Melhorias: nomes dos checkboxes/slider separados de suas descrições para evitar repetição; Escape em camadas; restauração de foco; foco na seção acionada pela seta; slider operável por teclado; alvo de fechamento a 44 px; reflow do painel com fonte e espaçamento aumentados; cancelamento dos efeitos ao reduzir movimento; fallback de checkbox nativo em forced-colors.

Verificado no navegador: abertura e fechamento do menu e painel, slider com End (150%), checkbox de espaçamento e redução de movimento, restauração de padrões, persistência após recarga, retorno de foco por Escape e foco em âncora entre páginas. Zero canvas com redução de movimento ativa; canvas presente novamente após restauração.

Limitações: não foi executado axe, Lighthouse, NVDA, JAWS ou VoiceOver. Não foi validado zoom nativo de 200%, emulação da preferência de movimento do sistema, modo forced-colors ou falha real do dispositivo WebGL. Não há certificação de conformidade AA; contraste sobre fundos animados e todos os estados requerem medição adicional. A ampliação de 150% pelo painel não equivale a comprovação do critério de resize a 200%.

## G. Integração com o backend e mídia

Nenhuma integração FastAPI existe nesta versão web. Não há services, chamadas HTTP para processamento, URL base, variáveis de API, autenticação, uploads, jobs, polling, resultados ou downloads de artefatos. Os únicos links de contato externos são públicos e preservados. Nenhum endpoint foi inventado e nenhum mock de API foi introduzido.

A seção “Como funciona” descreve o sistema See2Sound, não um formulário funcional do site. A página de plataformas mantém macOS em preparação, Windows em breve e Linux planejado. O conteúdo institucional não foi usado como evidência de funcionamento do aplicativo ou da IA.

Não há player HTML, áudio ou demonstração audiovisual no código atual. A regra 16:9 e os testes de reprodução/sincronização não se aplicam a este repositório; nenhum player desnecessário foi criado. Testes reais ou simulados do backend não foram realizados, pois não existe integração web a validar.

## H. Testes e evidências

Ambiente: Windows/PowerShell, Node 24.22.1 do runtime fornecido pelo ambiente. Inicialmente `npm` não estava no PATH. Comandos equivalentes foram executados diretamente com o Node e os arquivos CLI instalados em `app/node_modules`; depois foi obtido npm oficial 11.21.1 para atualização/auditoria. O pnpm foi utilizado somente para obter a ferramenta, sem adotar pnpm-lock no projeto.

| Comando / verificação | Resultado |
| --- | --- |
| `npm run lint`, tentativa inicial no shell | Não executou: npm ausente do PATH |
| `node node_modules/eslint/bin/eslint.js .`, em app, antes e depois | Passou, sem erros |
| `node node_modules/vite/bin/vite.js build`, antes | Passou; aviso de chunk >500 kB |
| `node --test`, em app | 2 testes passaram, 0 falhas |
| `npm run lint`, `npm test`, `npm run build`, raiz, ao final | Passaram também pelos novos scripts de delegação |
| `node node_modules/vite/bin/vite.js build`, final | Passou com Vite 8.3.5, sem aviso de chunk >500 kB |
| Consulta oficial npm bulk de nomes/versões do lockfile | Identificou advisories; resposta original salva |
| Tentativa `pnpm audit --prod --json` | Não executou auditoria: não há pnpm-lock.yaml; não conta como resultado npm |
| Tentativa de consulta HTTP no sandbox | Bloqueada por rede; consulta autorizada fora do sandbox foi bem-sucedida |
| Tentativa `pnpm dlx npm@11` | Download ocorreu; link simbólico bloqueado por Windows. npm baixado foi executado diretamente |
| `npm update react-router-dom vite --ignore-scripts --no-fund`, em app | Sucesso; aviso de limpeza de arquivo nativo em uso, sem impedir build posterior |
| `npm audit fix --ignore-scripts --no-fund`, em app | Sucesso; 0 vulnerabilidades reportadas |
| `npm --prefix app audit --json`, final | Sucesso; total 0; evidência JSON salva |
| `npm install --package-lock-only --ignore-scripts --no-audit --no-fund`, raiz | Sucesso; lockfile sem dependências duplicadas |
| Navegador integrado no servidor Vite e depois `vite preview` | Home, Download, 404, retorno, âncora de outra página, menu e preferências verificados |
| Matriz final de produção | 20 combinações; sem overflow de documento ou cortes nos textos principais medidos |
| Console do navegador na sequência final | Nenhum warn/error capturado |
| `git diff --check` | Sem erros de whitespace; aviso de normalização LF/CRLF no README |

Os comandos acima aparecem abreviados com `node`/`npm`; na execução foi usado o caminho absoluto dos executáveis quando necessário. O launcher `npm.cmd` do pacote baixado não funcionou diretamente na pasta temporária; um wrapper temporário, fora do projeto, apontando para o CLI oficial permitiu validar os comandos da raiz. Não há script de typecheck, testes de integração ou E2E versionados. Não foram executados testes inexistentes, `npm ci` em checkout limpo, testes de APIs nem testes de browsers físicos adicionais.

### Desempenho observado

| Artefato | Antes | Depois |
| --- | --- | --- |
| JavaScript principal | 805,47 kB / gzip 222,27 kB | 262,43 kB / gzip 84,33 kB |
| LineWaves separado | Integrado no principal | 50,22 kB / gzip 15,10 kB |
| LiquidEther separado | Integrado no principal | 492,80 kB / gzip 122,89 kB |
| CSS principal | 48,67 kB / gzip 10,07 kB | 49,43 kB / gzip 10,05 kB |

A redução do principal é de aproximadamente 67%. Isso não significa igual redução no total baixado por quem visitar as duas páginas com efeitos habilitados. Three.js continua volumoso, mas não faz parte do caminho inicial da Home. Preferências que desativam efeitos evitam montar/carregar os componentes decorativos. Removida importação global de fontes sem uso no body. Não foram coletados LCP, INP, CLS ou métricas de campo; tamanho de bundle não comprova Core Web Vitals.

Evidências: [auditoria npm final](AUDITORIA_DEPENDENCIAS.json), [resposta de advisories antes das correções](AUDITORIA_DEPENDENCIAS_ANTES.json), [captura Home desktop](auditoria-evidencias/home-desktop.png), [captura plataformas móvel](auditoria-evidencias/plataformas-mobile.png) e [matriz de responsividade](auditoria-evidencias/responsividade.json). A resposta bulk inicial e o relatório npm final têm formatos/contagens diferentes; não se deve comparar seus totais como se fossem a mesma métrica.

## I. Pendências e limites

1. **Releases do aplicativo:** fornecer instaladores e confirmar plataformas/prazos com a equipe. Sem binários, demonstração de instalação não está pronta. Não foram inventados links ou downloads.
2. **Hospedagem:** confirmar fallback SPA para `index.html`, cache de assets com hash, HTTPS e atualização direta de `/download` no destino real. Não há configuração de provedor suficiente para alterar implantação com segurança. O preview responde com o shell da SPA em rotas desconhecidas; uma resposta HTTP 404 real depende da hospedagem.
3. **Acessibilidade complementar:** testar leitor de tela, zoom 200%/400%, contraste de todas as combinações, forced-colors, dispositivo com redução de movimento e aparelhos reais. Não há alegação de conformidade completa.
4. **SEO social:** título/descrição institucionais estáticos existem, mas metadados alterados pelo JavaScript nem sempre são lidos por robôs sociais. Domínio público, canonical e imagem OG específica dependem do endereço oficial e decisão de publicação. Nenhum domínio foi inventado.
5. **Links externos e contatos:** URLs e nomes preservados do projeto; existência/posse atual dos perfis e funcionamento dos e-mails não foram confirmados, e nenhuma mensagem foi enviada.
6. **Conteúdo:** a equipe deve validar, na apresentação, as capacidades do ecossistema descritas no site. Este código não permite comprovar qualidade científica, reconhecimento de personagens ou sincronização do backend. Nenhuma métrica, parceria ou depoimento foi acrescentado.
7. **Manutenção:** existem dependências auxiliares e estilos históricos. Limpeza ampla e substituição do motor gráfico não foram necessárias para o escopo. Auditoria npm sem avisos é uma fotografia da base consultada, não garantia absoluta de segurança futura.
8. **Robustez gráfica:** caminhos de fallback e liberação foram revisados no código e navegação exercitada; não houve profiling de memória nem injeção de falhas de shader/contexto.

## J. Checklist para demonstração

- [ ] Executar `npm --prefix app ci` no computador da apresentação com Node compatível.
- [ ] Executar `npm run lint`, `npm test`, `npm run build` e `npm run preview`.
- [ ] Abrir Home e conferir identidade, texto, ondas e rolagem das quatro seções.
- [ ] Navegar por Início, Sobre, Como funciona, Benefícios e Plataforma.
- [ ] Abrir `/download` diretamente e atualizar no endereço real de apresentação.
- [ ] Mostrar honestamente que instaladores ainda não estão disponíveis.
- [ ] Testar o menu móvel e o painel por teclado; Escape deve fechar primeiro o painel, depois o menu.
- [ ] Demonstrar tamanho do texto, espaçamento, alto contraste e redução de animações; restaurar preferências ao terminar.
- [ ] Conferir a interface em 320 px e com zoom de 200% no navegador usado na apresentação.
- [ ] Percorrer com leitor de tela e confirmar nomes/ordem de leitura.
- [ ] Confirmar contatos e perfis públicos, sem depender de login para a demonstração.
- [ ] Acessar um endereço inexistente e usar “Voltar ao início”.
- [ ] Conferir console e arquivos estáticos na rede do local; manter o build pronto para uso local.
- [ ] Preparar a demonstração do aplicativo/backend separadamente, caso esteja no roteiro.

## K. Avaliação final

**Pronto com ressalvas.** As páginas institucionais funcionam no preview de produção, passam em lint, testes das preferências, build e matriz de responsividade; as consultas finais não retornaram vulnerabilidades npm conhecidas. As principais barreiras encontradas no painel e nos efeitos foram corrigidas, mantendo a identidade visual.

O site está adequado para apresentar o projeto e informar disponibilidade. Não está pronto para prometer download ou processamento no navegador. A aprovação para publicação e uma declaração ampla de acessibilidade dependem da hospedagem real e das verificações complementares explicitadas neste relatório.
