import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Task } from 'src/tasks/tasks.model';

interface ColumnCreateField {
  title: string;
}

@Table({ tableName: 'columns' })
export class ColumnBoard extends Model<ColumnBoard, ColumnCreateField> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  title: string;

  @HasMany(() => Task)
  tasks: Task[];
}
