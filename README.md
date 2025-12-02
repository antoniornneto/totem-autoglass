# Totem Autoglass – Aplicativo para Evento (Expo/React Native)

Este projeto foi desenvolvido para a empresa **Autoglass** com o objetivo de servir como um aplicativo para tablets utilizado em uma feira comercial.  
O aplicativo funcionou como um **totem interativo**, oferecendo uma interface simples e intuitiva para apresentação de produtos, coleta de informações e interação com visitantes do estande.

---

## 🚀 Tecnologias Utilizadas

- **Expo Go**
- **React Native**
- **JavaScript**
- **Expo Router** (caso esteja presente no projeto)
- Outras dependências listadas no `package.json`

---

## 📌 Funcionalidades Principais

- Interface adaptada para **tablets**
- Navegação simples para uso em eventos
- Layout responsivo
- Experiência otimizada para longos períodos de uso contínuo

---

## 📂 Estrutura Básica do Projeto

- `app/` ou `src/` – Telas, rotas e componentes
- `assets/` – Imagens e arquivos estáticos
- `App.js` – Arquivo principal da aplicação
- `package.json` – Scripts e dependências

---

## 🛠 Como Iniciar o Projeto

1. Certifique-se de ter o **Node.js** instalado.
2. Instale o Expo CLI (se necessário):
   ```bash
   npm install -g expo-cli
3. Instale as dependências:
   ```bash
   npm install
4. Inicie o servidor de desenvolvimento:
   ```bash
   npx expo start
5. Abra o app usando o Expo Go no celular ou um emulador Android/iOS.

## Build para Produção

   Para gerar builds utilizando o EAS Build, execute:
   ```bash
   npx expo prebuild
   npx expo build:android
   npx expo build:ios
   ```

Ou siga as instruções da documentação oficial do Expo caso utilize eas build.

---

## 🎯 Objetivo do Projeto

Criar um aplicativo estável, intuitivo e funcional para representar a Autoglass em um ambiente corporativo.
O sistema foi projetado para funcionar como totem de apresentação, facilitando a interação com visitantes e apoiando a equipe no estande durante toda a feira comercial.
