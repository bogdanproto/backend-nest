import { Injectable } from '@nestjs/common';
import { Task } from './tasks.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTaskDto } from './dto/createTask.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task) private TaskRepo: typeof Task) {}

  async getAllTasks() {
    const tasks = await this.TaskRepo.findAll();
    return tasks;
  }

  async createTask(dto: CreateTaskDto) {
    const task = await this.TaskRepo.create(dto);
    return task;
  }
}
