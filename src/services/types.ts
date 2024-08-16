export interface TeeProps {
    id: string;
    Color: string;
    Distance: number;
    HoleID: string;
}

export interface HoleDetailsProps {
    id: string;
    HoleNumber: number;
    Par: number;
    tees: TeeProps[];
}

export interface GolfProps {
    id: string;
    name: string;
    city: string;
    postalCode: string;
    country: string;
    googleMapLinks: string;
    latitude: number;
    longitude: number;
    courses: { id: string; name: string, numberHoles: number }[];
}

export interface CourseProps {
    id: string;
    name: string;
    numberHoles: number;
    pitchAndPutt: boolean;
    compact: boolean;
    holes: HoleDetailsProps[];
    golf: GolfProps;
}