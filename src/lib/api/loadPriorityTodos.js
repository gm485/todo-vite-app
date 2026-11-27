export async function loadPriorityTodos() {
    const response = await fetch('/api/todos/priority')

    if (!response.ok) {
        throw new Error('Failed to load todos')
    }

    return response.json();
}