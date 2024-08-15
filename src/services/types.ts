export interface TeeProps {
    name: string;
    distance: number;
    par: number;
}

export interface HoleDetailsProps {
    id: string;
    createdAt: string;
    updatedAt: string;
    HoleNumber: number;
    Par: number;
    CourseID: string;
}

export interface HoleProps {
    hole_number: number;
    details: HoleDetailsProps;
    tees: TeeProps[];
}

export interface CourseDetailsProps {
    name: string;
    number_of_holes: number;
    pitch_and_putt: boolean;
    compact: boolean;
    holes: HoleProps[];
}

export interface GolfProps {
    name: string;
    city: string;
    postalcode: string;
    maps_link: string;
}

export interface ApiResponse {
    course_details: CourseDetailsProps;
    courses: { id: string; name: string }[];
    golf: GolfProps;
}