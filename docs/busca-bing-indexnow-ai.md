# Caiara — descoberta (Bing, IndexNow, IA)

## IndexNow

1. Foi criado o ficheiro-chave na raiz do site: `7f3a9c2e1b8d4a6e0f5c7b9d2e4a8c1f.txt` com o mesmo valor no interior. **Antes de produção**, pode substituir por uma chave gerada no [Bing Webmaster Tools](https://www.bing.com/webmasters) ou em [indexnow.org](https://www.indexnow.org/documentation).
2. Após publicar URL nova ou alterada, enviar um POST para a API IndexNow (exemplo):

```text
POST https://api.indexnow.org/indexnow
```

Corpo JSON (exemplo):

```json
{
  "host": "caiara.com.br",
  "key": "7f3a9c2e1b8d4a6e0f5c7b9d2e4a8c1f",
  "keyLocation": "https://caiara.com.br/7f3a9c2e1b8d4a6e0f5c7b9d2e4a8c1f.txt",
  "urlList": [
    "https://caiara.com.br/ux-para-sistemas-complexos/"
  ]
}
```

## Bing Webmaster Tools (checklist curto)

- Adicionar propriedade `https://caiara.com.br/`
- Submeter `sitemap.xml`
- Validar `robots.txt` (sem bloqueios acidentais a páginas importantes)
- Opcional: ativar IndexNow no painel Bing se disponível para a propriedade

## ChatGPT Search / crawlers

- `robots.txt` permite explícita mente `OAI-SearchBot` e outros agentes comuns de IA, além de `*`.
- O conteúdo comercial está em HTML real (não só em imagens); FAQs visíveis espelham JSON-LD nas páginas onde há FAQ.

## Nota

Substituir a chave IndexNow por uma gerada por si antes de divulgar o repositório público, se o repositório for público.

---

## Internacionalização (EN / ES na home)

**Estado atual:** PT / EN / ES partilham o mesmo `index.html` com objeto `T` — útil para visitantes, mas os motores de busca recebem sobretudo **pt-BR** no HTML por defeito (`lang="pt-BR"`).

**Recomendação honesta:**  
- **Prioridade:** `pt-BR` (home + hubs) e **`/portugal/` em `pt-PT`** — já com `hreflang` cruzado (`pt-BR` ↔ `pt-PT` + `x-default` na home).  
- **EN e ES:** manter o toggle **sem fingir** SEO internacional completo até existirem **URLs dedicadas** ou HTML com `lang` e copy pensados para cada mercado (ex.: `/en/` com texto estável, não só JS).  
- **Próximo passo de evolução:** páginas estáticas `/en/` e `/es/` apenas para 3–4 URLs críticas (home + contato + 1 hub), com `hreflang` alinhado — evita duplicar dezenas de landings.
