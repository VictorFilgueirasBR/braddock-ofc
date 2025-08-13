    module.exports = {
      apps : [{
        name: "braddock-backend", // Nome da sua aplicação
        script: "./src/server.js", // Caminho para o arquivo principal do servidor
        watch: true, // Reinicia automaticamente se houver mudanças nos arquivos
        ignore_watch : ["node_modules", ".env"], // Ignora estas pastas para não reiniciar em toda mudança
        env: {
          "NODE_ENV": "development",
        },
        env_production: {
          "NODE_ENV": "production",
        },
        // Configuração para carregar variáveis de ambiente
        env_file: '.env',
      }]
    };
    
