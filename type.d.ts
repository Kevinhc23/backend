export type payloadType = {
  id: number;
  email: string;
  role: string;
  name: string;
  lastname: string;
};

export type visitType = {
  cedula: Number;
  name: String;
  departureTime: String;
  hour: String;
  purpose: String;
  status: Boolean;
  notes: String;
  departmentId: String;
  date: Date;
};

export type userType = {
  name: String;
  lastname: String;
  email: String;
  password: String;
  role?: {
    connect: {
      id: String;
    };
  };
};
