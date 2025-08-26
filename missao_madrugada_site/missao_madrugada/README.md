# Site Missão na Madrugada

Site oficial do projeto Missão na Madrugada da Igreja Missão Maior.

## 🚀 Funcionalidades

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e celular
- **Integração Instagram**: Exibe posts do Instagram automaticamente
- **Galeria de Fotos**: Sistema para adicionar e gerenciar fotos das missões
- **Sistema de Doações**: Seção dedicada para doações via PIX e WhatsApp
- **Modo Administrador**: Interface para editar conteúdo sem conhecimento técnico
- **PWA Ready**: Pode ser instalado como aplicativo no celular

## 📱 Como Usar o Modo Administrador

1. **Ativar Modo Admin**:
   - Clique no ícone de engrenagem no canto inferior direito
   - Digite a senha: `missaomaior2025`

2. **Configurar Instagram**:
   - No primeiro acesso ao modo admin, será solicitado o username do Instagram
   - Digite apenas o nome de usuário (sem @)
   - Exemplo: se o perfil é @missaomadrugada, digite apenas: missaomadrugada

3. **Adicionar Fotos**:
   - No modo admin, aparecerá uma seção "Adicionar Nova Foto"
   - Selecione a imagem do seu dispositivo
   - Adicione título e descrição
   - Clique em "Adicionar Foto"

4. **Gerenciar Fotos**:
   - No modo admin, cada foto terá um botão "Excluir"
   - As fotos são armazenadas localmente no navegador

## 🛠️ Personalização

### Alterar Informações Básicas

Edite o arquivo `config.json` para alterar:
- Título e descrição do site
- Informações de contato (email, telefone, WhatsApp)
- Chave PIX
- Cores do site
- Senha de administrador

### Alterar Cores

No arquivo `config.json`, seção `colors`:
```json
{
    "primary": "#d62828",    // Cor principal (vermelho)
    "secondary": "#f77f00",  // Cor secundária (laranja)
    "accent": "#fcbf49",     // Cor de destaque (amarelo)
    "background": "#111",    // Cor de fundo
    "text": "#fff"          // Cor do texto
}
```

### Adicionar Redes Sociais

No arquivo `config.json`, seção `social`:
```json
{
    "instagram": "seu_usuario_instagram",
    "facebook": "sua_pagina_facebook",
    "youtube": "seu_canal_youtube"
}
```

## 📂 Estrutura de Arquivos

```
missao_madrugada/
├── index.html          # Página principal
├── styles.css          # Estilos do site
├── script.js           # Funcionalidades JavaScript
├── config.json         # Configurações do site
├── gallery.json        # Dados da galeria (backup)
├── sw.js              # Service Worker (PWA)
└── README.md          # Este arquivo
```

## 🔧 Instalação

1. **Hospedagem Simples**:
   - Faça upload de todos os arquivos para seu servidor web
   - Acesse o site pelo navegador

2. **Servidor Local** (para testes):
   - Abra o terminal na pasta do projeto
   - Execute: `python -m http.server 8000`
   - Acesse: `http://localhost:8000`

## 📱 Instalação como App

O site pode ser instalado como aplicativo no celular:

1. Abra o site no navegador do celular
2. No menu do navegador, procure por "Adicionar à tela inicial" ou "Instalar app"
3. Confirme a instalação

## 🎨 Adicionando Imagens Personalizadas

### Banner Principal
- Substitua a referência `banner.jpg` no arquivo `styles.css`
- Recomendado: 1920x1080px, formato JPG

### QR Code PIX
- Adicione o arquivo `qrcode-pix.png` na pasta do site
- Recomendado: 300x300px, formato PNG

### Fotos da Galeria
- Use o modo administrador para adicionar fotos
- Ou edite diretamente o arquivo `gallery.json`

## 🔒 Segurança

- A senha de administrador está no arquivo `config.json`
- Para maior segurança, altere a senha padrão
- As fotos são armazenadas localmente no navegador
- Para backup, exporte os dados regularmente

## 📞 Suporte

Para dúvidas ou problemas:
- Email: contato@missaonamadrugada.org
- WhatsApp: (51) 98109-1110

## 📄 Licença

Este site foi desenvolvido especificamente para a Igreja Missão Maior.
Todos os direitos reservados.

---

**Desenvolvido com ❤️ para a Missão na Madrugada**

