import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { HelloController } from './hello/hello.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TasksModule, ProjectsModule, UsersModule, AuthModule],
  controllers: [HelloController],
})
export class AppModule {}
