import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Empleado } from './entities/empleado.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmpleadosService {
    constructor(
        @InjectRepository(Empleado)
        private usersRepository: Repository<Empleado>,
    ){

        
    }
    
    public findAll(){
        return this.usersRepository.find()
    }
}
