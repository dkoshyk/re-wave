export const taskTypes = [
    {
        value: 'task',
        label: 'Default Task',
    },
    {
        value: 'small',
        label: 'Small Task',
    },
    {
        value: 'medium',
        label: 'Medium Task',
    },
    {
        value: 'big',
        label: 'Big Task',
    }
];

export function getTaskTypeLabel(value) {
    return taskTypes.find(task => task.value === value)?.label ?? '';
}