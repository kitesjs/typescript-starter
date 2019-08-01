import { Controller, Get, Put, RequestParam, Delete } from '@kites/rest';
import { TodoService } from './todo.service';
import { remove } from 'winston';

@Controller('/todo', (req, res, next) => {
  console.log(`New request: ${req.method} ${req.url}`);
  next();
})
export class TodoController {

  constructor(public svTodo: TodoService) { }

  @Get('/') list() {
    return this.svTodo.getAll();
  }

  @Get('/:id') details(@RequestParam('id') task) {
    return this.svTodo.get(task);
  }

  @Put('/:id') begin(@RequestParam('id') task) {
    return this.svTodo.begin(task);
  }

  @Delete('/:id', (req, res, next) => {
    console.log('Preparing delete ...');
    next();
  })
  remove(@RequestParam('id') task) {
    return this.svTodo.trash(task);
  }
}
