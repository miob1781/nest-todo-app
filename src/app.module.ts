import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoService } from './todo/todo.service';
import { TodoModule } from './todo/todo.module';
import { DogModule } from './dog/dog.module';
import { DogService } from './dog/dog.service';

@Module({
  imports: [TodoModule, DogModule],
  controllers: [AppController],
  providers: [AppService, TodoService, DogService],
})
export class AppModule {}
