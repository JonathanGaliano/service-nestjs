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
marca: string;

@Column({ type: 'text' })
cantidad: string;

@Column({ type: 'numeric' })
precio: number;

// @Column({ type: 'numeric' })
// tipo: number;
  //Relacion de uno a muchos
  //Un producto puede tener muchas imagenes
// @OneToMany(() => ProductImage, (productImage) => productImage.product, {
//     cascade: true,
// })
// images?: ProductImage[];
}
