// src/products/products.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { ProductsService } from './products.service'; // Importar o service
import { CreateProductDto } from './dto/create-product.dto'; // Importar DTO
import { UpdateProductDto } from './dto/update-product.dto'; // Importar DTO


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(): any[] { // Retorna array de qualquer tipo por enquanto
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): any {
    const product = this.productsService.findOne(parseInt(id, 10));
    if (!product) {
        throw new NotFoundException(`Produto com ID ${id} não encontrado.`);
    }
    return product;
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): any { // Usar CreateProductDto
    return this.productsService.create(createProductDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): any { // Usar UpdateProductDto
    const product = this.productsService.update(parseInt(id, 10), updateProductDto);
    if (!product) {
        throw new NotFoundException(`Produto com ID ${id} não encontrado para atualizar.`);
    }
    return product;
  }

  @Delete(':id')
  remove(@Param('id') id: string): any {
    const removed = this.productsService.remove(parseInt(id, 10));
    if (!removed) {
        throw new NotFoundException(`Produto com ID ${id} não encontrado para remover.`);
    }
    return { message: `Produto com ID ${id} removido com sucesso.` };
  }
}