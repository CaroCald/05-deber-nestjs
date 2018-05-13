import {Controller, Post, Req, Get, Res} from "@nestjs/common";
const fs = require('fs');
@Controller()
export class PreguntasFrecuentesController{
    preguntas1: preguntas[]=[];
    @Post('anadirPreguntas')
    anadirPreguntas(@Req() req, @Res() res){
        const parametrosQuery=req.query;
        this.preguntas1.push(new preguntas(parametrosQuery.pregunta, parametrosQuery.respuesta));
        return res.send(this.preguntas1);
    }

    @Get('preguntas')
    mostrarPreguntas(){
        let htmlpreguntas= fs.readFileSync(__dirname+'/html/preguntasFrecuentes.html', 'utf8');
        htmlpreguntas=htmlpreguntas.replace('{{variable}}',this.preguntas1);
        return htmlpreguntas;
    }
}

class preguntas{
    constructor(public pregunta?:string,
                public respuesta?: string){
    }



}