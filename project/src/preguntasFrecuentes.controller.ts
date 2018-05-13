import {Controller, Post, Req, Get, Res, Param, HttpCode} from "@nestjs/common";
const fs = require('fs');
let htmlpreguntas= fs.readFileSync(__dirname+'/html/preguntasFrecuentes.html', 'utf8');
@Controller()
export class PreguntasFrecuentesController{
    preguntasF: preguntasFrecuentes[]=[];

    @Post('anadirPreguntas')
    anadirPreguntas(@Req() req, @Res() res){
        const parametrosQuery=req.query;
        this.preguntasF.push(new preguntasFrecuentes(parametrosQuery.pregunta, parametrosQuery.respuesta));
        this.preguntasF.forEach(value => {
            htmlpreguntas=htmlpreguntas.concat('<h1> Pregunta </h1> ',value.pregunta);
            htmlpreguntas=htmlpreguntas.concat('<p> Respuesta</p>', value.respuesta);
        });
        return res.send(this.preguntasF);
    }

    @Get('preguntas')
    mostrarPreguntas(@Res() response){
        return response.status(200).send(htmlpreguntas);
    }
}

class preguntasFrecuentes{

    constructor(public pregunta:string,
                public respuesta: string){
    }

}