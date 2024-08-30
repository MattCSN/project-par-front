export type TeeProps = {
  id: string;
  Color: string;
  Distance: number;
  HoleID: string;
};

export type HoleDetailsProps = {
  id: string;
  HoleNumber: number;
  Par: number;
  tees: TeeProps[];
};

export type GolfProps = {
  id: string;
  name: string;
  city: string;
  postalCode: string;
  country: string;
  googleMapLinks: string;
  latitude: number;
  longitude: number;
  courses: { id: string; name: string; numberHoles: number }[];
};

export type CourseProps = {
  id: string;
  name: string;
  numberHoles: number;
  pitchAndPutt: boolean;
  compact: boolean;
  holes: HoleDetailsProps[];
  golf: GolfProps;
};
