import { Body, Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {


    constructor(private tasksService: TasksService) { }

    @Get('')
    getAllTasks() {
        return this.tasksService.getTasks();
    }

    @Post('')
    createTask(@Body() task:any) {
        return this.tasksService.postTask(task);
    }

    @Put('')
    updateTask() {
        return this.tasksService.updateTask();
    }

    @Delete('')
    deleteTask() {
        return this.tasksService.deleteTask();
    }
    
    @Patch('')
    patchTask() {
        return this.tasksService.patchTask();
    }
}