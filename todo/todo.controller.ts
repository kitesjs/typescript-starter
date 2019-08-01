import { Controller, Get, Put, RequestParam, Delete, Post, RequestBody } from '@kites/rest';
import { TodoService } from './todo.service';

@Controller('/todo')
export class TodoController {

  constructor(public svTodo: TodoService) { }

  @Get('/')
  list() {
    return this.svTodo.getAll();
  }

  @Get('/:id')
  details(@RequestParam('id') task) {
    return this.svTodo.get(task);
  }

  @Post('/')
  create(@RequestBody() body) {
    return this.svTodo.create(body);
  }

  @Put('/:id')
  begin(@RequestParam('id') task) {
    return this.svTodo.begin(task);
  }

  /**
   * HTTP Delete with a route middleware
   * @param task
   */
  @Delete('/:id', (req, res, next) => {
    const id = req.param('id');
    console.log(`Preparing delete: task ${id}`);
    next();
  })
  remove(@RequestParam('id') task) {
    return this.svTodo.trash(task);
  }
}
