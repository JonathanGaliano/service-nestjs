import {IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength,} from 'class-validator';

export class CreateProductDto {

@IsString()
@IsNotEmpty()
@MinLength(5)  //minimo de 5 letras
nombre: string;

@IsString()
@IsNotEmpty()
modelo: string;

@IsString()
color: string;

@IsString()
capasidad: string;

@IsNumber()
precio: number;

@IsNumber()
año: number;

@IsString({ each: true })
@IsArray()
@IsOptional()
images?: string[];
}
