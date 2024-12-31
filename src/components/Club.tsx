import { useQuery } from '@tanstack/react-query';

const Club = () => {
    const apiUrl = '/api/airtable-data';

    const query = useQuery({
        queryKey: ['apiData'],
        queryFn: async () => {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const rawText = await response.text();
            console.log('Raw response:', rawText);

            try {
                return JSON.parse(rawText);
            } catch (e) {
                console.error('JSON parse error:', e);
                throw new Error(`Failed to parse JSON: ${e.message}`);
            }
        },
    });

    return (
        <div>
            {query.isLoading ? (
                <p>Loading...</p>
            ) : query.isError ? (
                <p>Error: {(query.error as Error)?.message}</p>
            ) : (
                <div>
                    <pre>{JSON.stringify(query.data, null, 2)}</pre>
                    <button onClick={() => console.log('hello')}>Add Todo</button>
                </div>
            )}
        </div>
    );
};

export default Club;
