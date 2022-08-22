import { Test, TestingModule } from '@nestjs/testing';
import { TweeterController } from './tweeter.controller';

describe('TweeterController', () => {
  let controller: TweeterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TweeterController],
    }).compile();

    controller = module.get<TweeterController>(TweeterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
