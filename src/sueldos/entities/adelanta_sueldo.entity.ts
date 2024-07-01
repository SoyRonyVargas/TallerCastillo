import { Empleado } from 'src/empleados/entities/empleado.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class AdelantoSueldo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  monto: number;

  @Column()
  fechaSolicitud: Date;

  @Column()
  estado: string;

  @ManyToOne(() => Empleado, empleado => empleado.adelantosSueldo)
  empleado: Empleado;
}