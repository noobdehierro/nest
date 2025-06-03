import { Injectable } from '@nestjs/common';

export interface Task {
    title: string;
    description: string;
}

@Injectable()
export class TasksService {
    getTasks(): Task {
        return {
            title: 'Task 1',
            description: 'Description 1',
        };
    }
    postTask(task: Task) {
        console.log(task);
        return 'creando tarea';
    }
    updateTask() {
        return 'actualizando tarea';
    }
    deleteTask() {
        return 'eliminando tarea';
    }
    patchTask() {
        return 'actualizando parcialmente tarea';
    }
}
