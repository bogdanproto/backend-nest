import { Module } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { ColumnsController } from './columns.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ColumnBoard } from './columns.model';
import { Task } from 'src/tasks/tasks.model';

@Module({
  providers: [ColumnsService],
  controllers: [ColumnsController],
  imports: [SequelizeModule.forFeature([ColumnBoard, Task])],
})
export class ColumnsModule {}
