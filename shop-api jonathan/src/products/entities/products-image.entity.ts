import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './products.entity';

@Entity()
export class ProductImage {
@PrimaryGeneratedColumn()
id: number;

@Column()
url: string;

  //Relacion de muchos a uno
  //Muchas imagenes pueden ser de un producto
@ManyToOne(() => Product, (product) => product.images)
product: Product;
}
