import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerCustomOptions,
} from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PROJECT_NAME, SWAGGER_URL } from '../common/helpers';
import { envs } from './envs';

const swaggerOptions: SwaggerCustomOptions = {
  customCss: `.swagger-ui 
  .topbar { background-color: #02044a; border-bottom: 15px solid #3c4473; } 
  .topbar-wrapper img {content:url(''); width:auto; height:30px;}`,
  customSiteTitle: `${PROJECT_NAME} Docs`,
  customfavIcon: '',
};

export async function initSwagger(
  app: INestApplication,
  configService: ConfigService,
) {
  const config = new DocumentBuilder()
    .setTitle(
      `${PROJECT_NAME.replaceAll('-', ' ').toUpperCase()} (${envs.nodeEnv.toUpperCase()})`,
    )
    .setDescription('Metroflog by AIHI')
    .setContact('Support', '', 'armandoh.ibarra@gmail.com')
    .setLicense('AIHI', 'http://aihi.work/')
    .setVersion(configService.get('npm_package_version') ?? '0.0.1')
    .addBearerAuth({
      type: 'http',
      in: 'header',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      description: 'Enter JWT token',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(SWAGGER_URL, app, document, swaggerOptions);
}
