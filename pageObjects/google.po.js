// O PageObjects é onde estão minhas funções de teste.
var google = function(){
	var self = this;


    this.verificarTela = function(tela){
        // Verifica a tela da google. Aqui a função verificaTela recebe o nome enviado como parametro do arquivo SPEC e verifica na condicional se o nome é o mesmo encontrado no site do google.
        return element(by.xpath('/html/body/div[1]/div[1]/div/div/div/div[1]/div/div[1]/a')).getText().then(function(nomeTela){
            if(tela === nomeTela)
                return true;
            else
                return false;
        });
      };
    
    this.inserirNoInputDoGoogle = function(dadosPesquisa){
        // Os dados da pesquisa foram passados por parametro lá do arquivo SPEC.
        let inputDadosGoogle =element(by.xpath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input')).sendKeys(dadosPesquisa)
        // Criei uma variável e coloquei o elemento input do google dentro dela. No final eu apertei a tecla ENTER, mas antes eu escrevi o que vou enviado por parametros.
        inputDadosGoogle.sendKeys(protractor.Key.ENTER);
        };
   
    this.clicarNoPrimeiroResultadoGoogle =function(){
        // Coloca em uma variável o elemento. Este elemento é um botão (vida) quando vc aperta vc vai escutar a mulher do google falando 'vida'      
        var primeiroElementoPesquisa = element(by.xpath('/html/body/div[7]/div/div[9]/div[1]/div/div[2]/div[2]/div/div/div[1]/div/div/div/div/div/div/div/span/div/div/div[3]/div/div[1]/div/div[5]'));
        // Aqui é a ação apertar no botão.
        primeiroElementoPesquisa.click();
        // Armazena o elemento/link da página que eu quero clicar em uma variável chamada 'paginaClicar'
        var paginaClicar = element(by.xpath('/html/body/div[7]/div/div[9]/div[1]/div/div[2]/div[2]/div/div/div[3]/div/div/div[1]/a/h3'))
        // Vai para o lugar na pagina onde se encontra o link, pois o protractor so encharga elemento que estão visiveis na página
        browser.actions().mouseMove(paginaClicar).perform();
        // Ação clica no link e vai para a pagina.
        paginaClicar.click();

    };
    
};
module.exports = new google();