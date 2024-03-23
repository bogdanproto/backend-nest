import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/createTask.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAll() {
    return this.taskService.getAllTasks();
  }

  @Post()
  create(@Body() dto: CreateTaskDto) {
    return this.taskService.createTask(dto);
  }
}
