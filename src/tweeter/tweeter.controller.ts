import { Body, Controller, Get, Post } from '@nestjs/common';
import { TweeterService } from './tweeter.service';

@Controller('tweeter')
export class TweeterController {

    constructor(private readonly tweeterService: TweeterService) { }

    @Get()
    getHello(): string {
        return this.tweeterService.getHello();
    }

    @Post('postTweet')
    async postTweet(@Body() body: {message:string}) {
        let opStatus:boolean = false;
        let opDetails:Object = undefined;
        try {
            opDetails = await this.tweeterService.postTweet(body.message);
            opStatus = true;
        } catch (error) {
            opStatus = false;
            opDetails = error;
        }  
        return {
            status: opStatus,
            details: opDetails
        } 
    }

    @Get('getTweetSchedule')
    async getTweetSchedule(){
        let opStatus:boolean = false;
        let opDetails:any = undefined;
        
        try {
            opDetails = await this.tweeterService.retrieveScheduledTweet();
            opStatus = true;
        } catch (error) {
            opStatus = false;
            opDetails = error;
        }

        return {
            status: opStatus,
            details: opDetails
        } 
        
    }
}
