import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductImage } from './products-image.entity';

//Estacion de servicio  
@Entity()
export class Product {
@PrimaryGeneratedColumn('uuid')
id: string;

@Column({ type: 'text' })
nombre: string;

@Column({ type: 'text' })
modelo: string;

@Column({ type: 'text' })
color: string;

@Column({ type: 'text' })
capasidad: string;

@Column({ type: 'numeric' })
precio: number;

@Column({ type: 'numeric' })
año: number;
  //Relacion de uno a muchos
  //Un producto puede tener muchas imagenes
@OneToMany(() => ProductImage, (productImage) => productImage.product, {
    cascade: true,
})
images?: ProductImage[];
}
