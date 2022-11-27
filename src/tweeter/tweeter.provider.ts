import { Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TwitterApi } from "twitter-api-v2";
import { TweeterService } from "./tweeter.service";

/**
 * An array of all providers used in this app. Twitter client initialised here. 
 */
export const TweeterProviders = [
    {
        provide: 'TWITTER_V1_USER_CLIENT',
        useFactory: async () => {
            let logger = new Logger('TweeterProviders');
            let config = new ConfigService();
            let twitterClient = new TwitterApi({
                appKey: config.get<string>('TWITTER_API_KEY'),
                appSecret: config.get<string>('TWITTER_API_KEY_SECRET'),
                accessToken: config.get<string>('TWITTER_ACCESS_TOKEN'),
                accessSecret: config.get<string>('TWITTER_TOKEN_SECRET')
            });

            try {
                let user = await twitterClient.currentUser(); // load and cache user
                logger.log(`Twitter client instantiation for ${user.name} successful`)
                return twitterClient;
            } catch (error) {
                logger.error(`Twitter client instantiation failed`)
            }
            

        },
        inject:[ConfigService,TwitterApi,Logger]
    },
    TweeterService,
    TwitterApi
]

