import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';
import e from 'express';

const regex = /[A-Za-z0-9]{8,}/
const regemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('urlap')
  getHello(
    @Query('email') email: string,
    @Query('password') password: string,
    @Query('password1') password1: string
  ): object {
    const errors: any = {};
    if(email ===  '') {
      errors.email = "Üres az email mező!"
    }
    if(!regemail.test(email)){
      errors.email = "Hibás email formátum"
    }
     if (!(password == password1)) {
       errors.password = 'A jelszók nem egyeznek';
     }
    if(!regex.test(password)){
      errors.password = "A jelszó nem fele meg"
    }
    if(!regex.test(password1)){
      errors.password1 = "A jelszó nem fele meg"
    }
    return { email, errors, negyedik: 12 };
  }
}
