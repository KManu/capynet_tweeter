import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweeterModule } from './tweeter/tweeter.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.dev', '.env.prod','.env'],
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development','production','staging').default('development'),
        PORT: Joi.number().default(8000),
        TWITTER_API_KEY: Joi.string().alphanum().default(''),
        TWITTER_API_KEY_SECRET: Joi.string().default(''),
        TWITTER_BEARER_TOKEN: Joi.string().default(''),
        TWITTER_ACCESS_TOKEN: Joi.string().default(''),
        TWITTER_TOKEN_SECRET: Joi.string().default(''),
      }),
      validationOptions: {
        allowUnknown: true,
        abortEarly: false
      }
    }),
    TweeterModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
