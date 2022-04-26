import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'greatkart.cqy1fntaoho1.us-east-1.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: '12345678',
      database: 'product',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
