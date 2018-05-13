import {Controller, Get, Res, Req} from "@nestjs/common";
const fs = require('fs');
@Controller()
export class InicioController{
    @Get('Home')
    mostrar(@Res()response){
        let htmlcontenido=fs.readFileSync(__dirname+'/html/contenido.html', 'utf8');
        let htmlheader= fs.readFileSync(__dirname+'/html/header.html', 'utf8');
        let htmlfooter= fs.readFileSync(__dirname+'/html/footer.html', 'utf8');
        let variable= htmlheader+htmlcontenido+htmlfooter;
        return response.status(200).send(variable);
    }

}