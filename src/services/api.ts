export interface SportsData {
    id: string;
    performance: number;
    startDate: string;
    weekNo: number;
    elevation: number;
    time: number;
    endDate: string;
    mvpActivities: string;
    mvpDistance: string;
    mvpElevation: string;
    mvpTime: string;
    distance: number;
    activites: number;
}

export async function fetchSportsData(): Promise<SportsData[]> {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    
    try {
        const response = await fetch(`${API_BASE_URL}/api/sports`, {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}
