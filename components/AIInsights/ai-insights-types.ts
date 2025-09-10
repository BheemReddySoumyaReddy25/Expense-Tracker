// types.ts

export interface InsightData {
  id: string;
  type: "info" | "tip" | "warning" | "success";
  title: string;
  message: string;
  action?: string;
  confidence?: number;
}

export interface AIAnswer {
  insightId: string; // <-- belongs here, since answers are linked to insights
  answer: string;
  isLoading: boolean;
}
