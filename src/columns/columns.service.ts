import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ColumnBoard } from './columns.model';
import { CreateColumnDto } from './dto/createColumnDto';

@Injectable()
export class ColumnsService {
  constructor(
    @InjectModel(ColumnBoard) private ColumnBoardRepo: typeof ColumnBoard,
  ) {}

  async getAllColumns() {
    const columns = await this.ColumnBoardRepo.findAll();
    return columns;
  }

  async createColumns(dto: CreateColumnDto) {
    const column = await this.ColumnBoardRepo.create(dto);
    return column;
  }
}
