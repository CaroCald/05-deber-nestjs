import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {PreguntasFrecuentesController} from "./preguntasFrecuentes.controller";
import {InicioController} from "./inicio.controller";

@Module({
  imports: [],
  controllers: [AppController, InicioController,PreguntasFrecuentesController],
  components: [],
})
export class AppModule {}
