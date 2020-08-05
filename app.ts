import { KitesFactory } from '@kites/core';
import { TodoService } from './todo/todo.service';

// register controllers
import './todo/todo.controller';

async function bootstrap() {
  const app = await KitesFactory
    .create({
      loadConfig: true,
      discover: true,
      providers: [
        TodoService,
      ],
    })
    .init();

  app.logger.info(`Server started! Let's browse http://localhost:3000/api/todo`);
}

bootstrap();
