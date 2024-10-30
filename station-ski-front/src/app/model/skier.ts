export interface Subscription {
  // Define fields according to your Subscription entity
}
export interface Skier {
  numSkier: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string; // Use string to make it easier for forms
  city: string;
  subscription?: Subscription;
  pistes?: number[]; // Assuming pistes are represented by their IDs
}
