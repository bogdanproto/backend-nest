import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface TaskCreateField {
  title: string;
  description: string;
}

@Table({ tableName: 'tasks' })
export class Task extends Model<Task, TaskCreateField> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  title: string;

  @Column({ type: DataType.STRING })
  description: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isFinished: boolean;
}
