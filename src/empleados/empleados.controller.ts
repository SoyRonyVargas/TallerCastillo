// src/empleado/empleado.controller.ts
// import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { Empleado } from './entities/empleado.entity';

@Controller('empleados')
export class EmpleadoController {
  constructor(private readonly empleadoService: EmpleadosService) {}

  @Get()
  async findAll(): Promise<Empleado[]> {
    return await this.empleadoService.findAll();
  }

//   @Get(':id')
//   async findOne(@Param('id') id: string): Promise<Empleado> {
//     // return await this.empleadoService.findOne(+id);
//   }

//   @Post()
//   async create(@Body() createEmpleadoDto: CreateEmpleadoDto): Promise<Empleado> {
//     return await this.empleadoService.create(createEmpleadoDto);
//   }

//   @Put(':id')
//   async update(@Param('id') id: string, @Body() updateEmpleadoDto: UpdateEmpleadoDto): Promise<Empleado> {
//     return await this.empleadoService.update(+id, updateEmpleadoDto);
//   }

//   @Delete(':id')
//   async remove(@Param('id') id: string): Promise<void> {
//     return await this.empleadoService.remove(+id);
//   }
}
