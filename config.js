exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	capabilities: {
		'browserName': 'chrome'
	},
    //seleciona todos os arquivos .spec.js
    specs: ['specs/*.spec.js'],
	
	allScriptsTimeout: 300000,
	jasmineNodeOpts: {
        defaultTimeoutInterval: 300000
    },
    
};
