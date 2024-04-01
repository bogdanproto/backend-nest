import { Body, Controller, Get, Post } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { CreateColumnDto } from './dto/createColumnDto';

@Controller('columns')
export class ColumnsController {
  constructor(private columnService: ColumnsService) {}

  @Get()
  getAll() {
    return this.columnService.getAllColumns();
  }

  @Post()
  create(@Body() dto: CreateColumnDto) {
    return this.columnService.createColumns(dto);
  }
}
