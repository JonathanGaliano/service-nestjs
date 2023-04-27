import { IsString } from "class-validator";
import { IsNotEmpty, MinLength, IsNumber, IsOptional } from "class-validator/types/decorator/decorators";


export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(15)
    title: string;

    @IsNumber()
    @IsOptional()
    price?: number;

    @IsString()
    @MinLength(15)
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    slug?: string;

    @IsNumber()
    @IsOptional()
    stock?: number;

    @IsString()
    @IsOptional()
    gender?: string;

}