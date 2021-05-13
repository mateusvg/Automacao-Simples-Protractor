// Cria uma variável para pegar o documento que possue minhas funções de teste.
var google = require('./../pageObjects/google.po.js');
// O arquivo SPEC chama as funções dentro do pageObject.


// Suite de testes da tela inicial do google
describe('Testes da tela de login', function(){
	browser.waitForAngularEnabled(false);
	// Metodo beforeEach realiza o comando antes de cada execução de IT o mesmo com AFTEREACH
	beforeEach(function() {
		browser.sleep(1000);
	  });
	
	// MetodoafterEach, realiza o comando depois de cada execução de IT
	afterEach(function() {
		browser.sleep(12000);
	  });
	  
	
    it('Verificar palavra na pagina do google no final do rodapé', function(){
		browser.get('https://www.google.com');
		// Verificando se o site que abriu mesmo foi o site do google.
		// Pesquisar o icone Gmail no canto superior da tela. Se tiver o icone do Gmail, retorna TRUE, o teste passa.
		expect(google.verificarTela('Gmail')).toBe(true);
    });

	it('Verificar palavra na pagina do google no final do rodapé', function(){
		// Input do google passado como parametro para o arquivo PageObject "O que e vida"
		expect(google.inserirNoInputDoGoogle('O que é vida'));
    });

	it('Clicar no primeiro resultado da pesquisa google', function(){
		// Input do google passado como parametro para o arquivo PageObject "O que e vida"
		expect(google.clicarNoPrimeiroResultadoGoogle());
    });
	

});