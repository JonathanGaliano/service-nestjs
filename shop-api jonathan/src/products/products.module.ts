import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/products.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductImage } from './entities/products-image.entity';

@Module({
imports: [TypeOrmModule.forFeature([Product, ProductImage])],
controllers: [ProductsController],
providers: [ProductsService],
})
export class ProductsModule {}
