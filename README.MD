# QA Challenger VOLTBRAS

## Introdução

Esse repositório foi um dos desafios feitos para o processo de desenvolvedor Backend da empresa.

Seguindo a documentação dele, serão propostos alguns modelos de teste nessa etapa do desafio técnico de QA.

## Como rodar o projeto

1. **Instalar as dependências**:

`npm install`

2. **Rodar a aplicação localmente**:

`npm run dev`

3. **rodar a aplicação no container Docker**

`docker-compose up`

4. **MongoDB URL**

Uma boa opção aqui é criar uma conta em:

https://www.mongodb.com/

e no próprio passo a passo do sistema é possível criar um banco e pegar uma URL
utilizando a interface do Mongo Atlas

5. **Documentação dos Endpoints**

https://studio.apollographql.com/public/Voltbras-Challenge/variant/current

## Funcionalidades Básicas

- Schema GraphQL com uma query suitablePlanets: que retorna os dados dos planetas com gravidade alta.

- Mutation installStation: que dado um planeta, instala uma estação de carregamento no planeta.

- Query stations: que irá listar todas as estações instaladas nos planetas.

- Mutation recharge: que dado uma estação e um datetime de quanto a recarga irá finalizar, realiza uma recarga, começando a partir do momento em que a mutation foi chamada e finalizando com a datetime passada.

- Autenticação com JWT: Apenas create users e login é uma rota publica

- Mutation reservation: que dado uma estação, um usuário e um intervalo de tempo, cria uma reserva da estação para o usuário naquele determinado intervalo de tempo.

- Query stationHistory: onde será possível visualizar o histórico de recargas de uma estação (mostrar o horário, o tempo de duração da recarga e o usuário que realizou-a).

# DESAFIO

# Parte 1 - Testes E2E, Unit tests, Load/Stress Tests

O seu desafio no presente contexto consiste em analisar as funcionalidades e documentação do repositório e estrutuar a parte de qualidade.

Escolha um Módulo da aplicação e utilizando o Jest(que ja está instalado)
e bibiliotecas a sua escolha(sinta-se livre para instalar o que precisar) realize:

1. Testes Unitários, seguindo sua metodologia de maneira a cobrir
   casos inesperados do código

2. Testes de Integração, seguindo sua metodologia de maneira a cobrir
   as funcionalidades básicas e possíveis exceções dos Módulos apresentados

3. Load Testes/Stress Test, o que você preferir

A partir disso temos uma breve parte de documentação:

4. Faça um breve vídeo(max 5min) explicando suas escolhas e metodologias para escrever os testes da aplicação.

5. Se possível apresente também pontos de melhoria na aplicação durante o vídeo, seja por segurança,
   bons padrões ou otimizações que poderiam impactar o front e consequentemente o usuário.

6. Crie uma Documentação no Readme explicando a proposta e as escolhas de teste feitas por você

# Testes Unitarios / Integrados

- UT - DTOs

- UIT - Services realizados com Mock nas camadas (repositories e model) (Done)

- E2E - Chamadas ao Graphql fazendo os testes E2E no escopo de Feature por Feature.(com erro)

- Load/Stress - Mesmos cenarios utilizados no E2E acima, porem executados na ferramenta Jmeter e o Plugin para Graphql (Pendente)

Para executar os Testes JEST (UT,UIT e E2E)  

**Rodar a Testes localmente**:

`npm test`


# Parte 2 - Testes Manuais/automatizados de usabilidade

Dado um dos nossos whitelabels:

- [Android](https://play.google.com/store/apps/details?id=br.com.voltbras.wecharge&hl=pt&pli=1)
- [iOS](https://apps.apple.com/br/app/wecharge/id1595933153)

Faça as seguintes tarefas:

1. Faça a análise da aplicação, identificando os principais módulos da aplicação.

2. Documente os módulos e crie cenários de testes para cada módulo:

ex (sinta-se livre pra explorar a forma que achar melhor na escrita e aprofundamento dos cenários):
   - **Login**
      - Login com senha errada deve dar erro
      - Login com senha correta deve dar certo
      - Login com email inexistente deve informar que email não existe

3. Escolha alguma ferramenta de automação e registre pelo menos uma dessas sequencias de testes
   nessa ferramenta para apresentação.

4. Levante possíveis pontos de melhorias, falhas de segurança ou considerações sobre
   as telas testadas

# Parte 2 - Cucumber + Appium + webIO

- Módulos de testes divididos em Features baseado no BDD (Cucumber) integrado ao código

    Facilidade de Versionamento, Integração via Github x ferramentas terceiras x código de automação, agrupamentos por @tags

## Ferramenta de Automação Mobile (appium + WebIO)
 
- [WebdriverIO](http://webdriver.io)
- [Appium Docs](http://appium.io/docs/en/about-appium/intro/)
 

# Installation Appium

- Installing Appium

- Install Appium-doctor

- Install Android Studio + Android SDK

- Install Appium

- npm i --location=global appium

- appium driver install uiautomator2

- Install Adb (para devices fisicos)

- Configure JAVA_HOME e ANDROID_HOME


# Configurações

- Copy the .apk file into root project folder ./apps
- Git clone < Project >
- executar `yarn install
- Configure capabilities the wdio.android.app.conf.ts or wdio.ios.app.conf.ts according your devices
- executar tests `npm run android.app` or `npm run android.browser`



config.capabilities = [
    {
        platformName: 'Android',
        maxInstances: 1,
        // Configuração para dispositivo Fisico   
        'appium:deviceName': '<ADB device Name>',
        'appium:platformVersion': '10.0',
        // Configuração para emulador
        //'appium:deviceName': 'emulator-5554',
        //'appium:platformVersion': '11.0',

        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        // Caminho do APP 
        'appium:app': join(process.cwd(), './apps/br_com_voltbras_wecharge_v11.6.4.apk'),
        // @ts-ignore
        'appium:appWaitActivity': 'br.com.voltbras.wecharge',
        'appium:newCommandTimeout': 240,
        'appium:noReset': true,
        'appium:fullReset': false

    },

wdio.shared.conf.ts

    mochaOpts: {
        ui: "bdd",
        /**
         *  Gerenciar o Timeout geral da aplicação dependendo do hardware que esta executando  
         */
        timeout: 10 * 60 * 1000,  
    },



