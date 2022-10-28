/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { createRegisterDto } from './dto/createRegister.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}
  @Post()
		async create(@Body() req: createRegisterDto) {
			return this.registerService.create(req);
  }
		@Get()
		async findAll() {
			return this.registerService.findAll();
		}
		@Get(':id')
		async	findOne(@Param('id') id: string) {
   return this.registerService.findOne(id);
		}
}