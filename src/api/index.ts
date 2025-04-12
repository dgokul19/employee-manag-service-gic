const API_BASE_URL = `https://67f7676642d6c71cca65012c.mockapi.io/api/v1/`;

export const callApiHelper = async (endpoint: string, method = 'GET', params = null, customHeaders = {}) => {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        ...customHeaders,
    };

    const options: RequestInit = {
        method,
        headers,
    };
    if (params) {
        options.body = JSON.stringify(params);
    }

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Something went wrong');
        }

        return await response.json();
    } catch (error) {
        console.error('API Error:', (error as Error).message);
        throw error;
    }
}