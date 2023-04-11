import { Body, Controller, Get, Post } from "@nestjs/common";
import { DogService } from "./dog.service";
import { CreateDogDTO } from "./dto/create-dog.dto";

@Controller("dogs")
export class DogController {
    constructor(private dogService: DogService) { }

    @Post()
    async create(@Body() createDogDTO: CreateDogDTO) {
        await this.dogService.addDog(createDogDTO)
    }

    @Get()
    async getDogs() {
        return await this.dogService.getDogs()
    }
}