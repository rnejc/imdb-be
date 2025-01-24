import { IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
    @IsString()
    title: string;
    @IsString()
    description: string;
    @IsDateString()
    release_date: Date;
    @IsNumber()
    rating: number;
}