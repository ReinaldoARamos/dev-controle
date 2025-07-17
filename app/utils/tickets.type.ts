export interface TicketsProps {
  id: string;
  name: string;
  status: string;
  created_at: Date | null;
  updated_at: Date | null;
  customerId: string | null;
  UserId: string | null;
  description: string;
}
