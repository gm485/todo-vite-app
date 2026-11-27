export async function loadTodos() {
    const response = await fetch('/api/todos')

    if (!response.ok) {
        throw new Error('Failed to load todos')
    }

    return response.json();
}