export interface Subscription {
  numSub: number;
  startDate: string;
  endDate: string;
  price: number;
  typeSub: string;
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
