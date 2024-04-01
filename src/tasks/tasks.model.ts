import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ColumnBoard } from 'src/columns/columns.model';

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

  @Column({ type: DataType.STRING })
  test: string;

  @ForeignKey(() => ColumnBoard)
  @Column({ type: DataType.INTEGER })
  columnId: number;

  @BelongsTo(() => ColumnBoard)
  columnBoard: ColumnBoard;
}
