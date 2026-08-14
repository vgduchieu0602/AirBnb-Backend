import config from "./config.js"

function bootstrap (): void {
    console.log(`${config.app.name} starting...`)
    console.log(`Port: ${config.app.port}`)
    console.log(`Enviroment: ${config.app.enviroment}`)
}

bootstrap()