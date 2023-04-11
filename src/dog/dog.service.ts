import { Injectable } from "@nestjs/common";
import { CreateDogDTO } from "./dto/create-dog.dto";
import { Dog } from "./interfaces/dog.interface";

@Injectable()
export class DogService {
    private readonly dogs: Dog[] = [
        {
            id: 0,
            name: "Toni"
        }
    ]

    async addDog(createDogDTO: CreateDogDTO): Promise<Dog> {
        this.dogs.push(createDogDTO)
        return this.dogs.at(-1)
    }

    async getDogs(): Promise<Dog[]> {
        return this.dogs
    }
}