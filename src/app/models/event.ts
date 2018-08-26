const eventType = {
    'F': 'FREE',
    'T': 'TOKEN',
    'C': 'COST'
};

export class Event {
    facebook_id: string;
    title: string;
    description: string;
    cover_url: string;
    start_date: string;
    end_date: string;
    event_type: string;
    category: string;
    location_address: string;
    longitude: number;
    latitude: number;
    published: boolean;
    owner_facebook_id: string;
    owner_facebook_name: string;
    attending_count: number;

}
