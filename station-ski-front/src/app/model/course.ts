export interface Course {
    numCourse: number;
    level: number;
    typeCourse: TypeCourse;
    support: Support;
    price: number;
    timeSlot: number;
    registrations?: Registration[]; // Add this line
  }
  
  // Assuming TypeCourse and Support are enums, you can define them like this:
  export enum TypeCourse {
    COLLECTIVE_CHILDREN = 'COLLECTIVE_CHILDREN',
    INTERMEDIATE = 'INTERMEDIATE',
    COLLECTIVE_ADULT = 'COLLECTIVE_ADULT',
    BEGINNER = 'BEGINNER',
    INDIVIDUAL = 'INDIVIDUAL',


  }
  
  export enum Support {
    SNOWBOARD = 'SNOWBOARD',
    SKI = 'SKI',
  }
  
  // Define the Registration interface if not already defined
  export interface Registration {
    // Add appropriate properties for Registration
  }
  