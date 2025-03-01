// src/types/index.ts
export interface BaseData {
    date: string;  // ISO format date (YYYY-MM-DD)
    source: string; // The data source (e.g., 'fitbit', 'rubber-bands')
  }
  
  // Rubber Bands specific types
  export interface RubberBand {
    id: string;
    name: string;
    color: string;
    maxResistance: number;
    minResistance: number;
    length: number;
    type: string;
  }
  
  export interface ExerciseLog {
    id: number;
    meta: Record<string, any>;
    quantity: number;
    exercise_id: string;
    band_ids: string[];
  }
  
  export interface WorkoutSession {
    id: number;
    duration: number;  // Duration in seconds
    workout_id: string;
    created_at: string; // ISO date string
    calories_burned: number;
    notes: string;
    effort: number;
    logs: ExerciseLog[];
  }
  
  export interface WorkoutData extends BaseData {
    sessions: WorkoutSession[];
    totalDuration: number;
    totalCalories: number;
    exerciseCounts: Record<string, number>;
    effortAverage: number;
  }
  
  // For configuration and collector options
  export interface CollectorOptions {
    startDate: string;
    endDate: string;
    source?: string;
  }