# ebagabe.dev

Landing page em português do Brasil do **ebagabe**, estúdio enxuto de sites e sistemas para negócios.
Feito com React + TypeScript + Vite. Frontend estático, sem dependências externas de fontes ou imagens.

## Comandos

```bash
npm install     # instala as dependências
npm run dev     # servidor local de desenvolvimento
npm run build   # checagem de tipos (tsc) + build de produção em dist/
npm run preview # visualiza o build localmente
```

## WhatsApp

Todos os botões principais (cabeçalho, hero e chamada final) abrem o WhatsApp com a mensagem
`Olá! Quero um orçamento para um site ou sistema.` (codificada com `encodeURIComponent`).

O número vem da variável `VITE_WHATSAPP_NUMBER` (somente dígitos, com código do país e DDD).
Se estiver ausente ou inválida, usa `5582991828178`.

1. Copie `.env.example` para `.env.local` e ajuste o valor, se necessário.
2. Na Vercel, defina `VITE_WHATSAPP_NUMBER` em *Settings → Environment Variables*.

O número é um contato comercial público, não um segredo.

## Deploy na Vercel

Importe o repositório. Os padrões do preset **Vite** servem sem ajustes:

- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`
