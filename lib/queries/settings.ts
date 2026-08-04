export const GET_SETTINGS = `
query GetConfiguracaoDoSite {
  configuracaoDoSite {
    nodes {
      title
      configuracoesGerais {
        telefone
        whatsapp
        facebook
        instagram
        email
        endereco
        textoBotao
        urlBotao
        favicon
      }
    }
  }
}
`;