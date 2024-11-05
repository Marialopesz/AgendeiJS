# 🩺 Sistema de Agendamento de Consultas Médicas 

Este projeto é um sistema completo de agendamento de consultas médicas, composto por três aplicações integradas:

- 📱 **App Mobile**: Desenvolvido em **React Native**
- 💻 **Aplicação Web**: Desenvolvida em **React** com **Bootstrap**
- 🌐 **API REST**: Criada com **Node.js** e **Express**, usando **SQLite** como banco de dados

---

## 🎯 Objetivo

O projeto tem como objetivo oferecer uma plataforma prática e eficiente para **agendar, visualizar, editar e excluir consultas médicas**. Durante o desenvolvimento, explorei e aprofundei conhecimentos em **JavaScript**, **React**, **React Native**, **Node.js** e **Express**, focando na criação de uma **API RESTful** e nas operações **CRUD** (Create, Read, Update, Delete).

---

## 🚀 Funcionalidades

- **📅 CRUD de Consultas Médicas**:
  - **Criar** uma nova consulta
  - **Visualizar** todas as consultas agendadas
  - **Editar** os dados de uma consulta
  - **Excluir** uma consulta existente

- **🔗 Integração Completa entre Frontend e Backend**:
  - Comunicação via `axios` para sincronizar dados entre as plataformas mobile e web, garantindo consistência e performance.

- **💡 Tecnologias Modernas**:
  - **React** (com uso de `useState`, `useEffect`), **React Native**, **Node.js**, **Express** e **axios** são usados para assegurar que o sistema seja robusto, moderno e fácil de escalar.

---

## 🛠️ Tecnologias Utilizadas

### 📱 Frontend Mobile
- **React Native**: Para criar uma interface amigável e intuitiva
- **Axios**: Requisições HTTP para comunicação com o backend
- **Hooks (useState, useEffect)**: Gerenciamento de estado e ciclo de vida dos componentes

### 💻 Frontend Web
- **React**: Base para desenvolvimento da aplicação web
- **Bootstrap**: Design responsivo e interface moderna
- **Axios**: Comunicação simples e eficiente com a API
- **JavaScript (ES6)**: Manipulação e controle dos componentes

### 🌐 Backend
- **Node.js com Express**: Base para a criação da API RESTful
- **SQLite**: Banco de dados leve e eficiente, ideal para o armazenamento de dados de consultas médicas
- **CRUD Completo**: Implementação completa das operações de criação, leitura, atualização e exclusão de consultas

## 🚀 Como Rodar o Projeto
1. **Instale as Dependências**:
   ```bash
   npm install
2. **Executar o App Mobile (se estiver no PC)**:
   ```bash
   npm expo start --web
3. **Para abrir o App Mobile no celular (lembre-se de baixar o ExpoGO antes e escanear o QRcode depois)**:
   ```bash
   npm expo start
4. **Executar a Aplicação Web**:
   ```bash
   npm run dev
5. **Executar a API**:
   ```bash
   node --watch src/index.js


