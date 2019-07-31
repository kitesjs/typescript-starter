import { Injectable } from '@kites/common';

@Injectable()
export class TodoService {
  public getAll(): string {
    return 'Get all todos!!!';
  }

  public get(task: string) {
    return `Get details: ${task}`;
  }

  public begin(task: string) {
    return `Start: ${task}`;
  }
}
