export interface MCQOption {
  id: string;
  text: string;
}

export interface MCQQuestion {
  id: string;
  question: string;
  options: MCQOption[];
  correctOptionId: string;
  explanation: string;
}

export interface CaseLaw {
  title: string;
  citation: string;
  court: string;
  facts: string;
  held: string;
  significance: string;
}

export interface StatutorySection {
  sectionNo: string;
  title: string;
  statutoryText: string;
  simplifiedExplanation: string;
  elements: string[];
}

export interface Chapter {
  id: string;
  title: string;
  subject: string;
  isCompleted: boolean;
  sections?: StatutorySection[];
  caseLaws?: CaseLaw[];
  mcqs?: MCQQuestion[];
  quickSummary?: string;
  studyStrategy?: string;
  maxims?: { maxim: string; translation: string; application: string; }[];
}

export interface UserProgress {
  bookmarkedSections: string[]; // section identifiers (e.g., "CPC-S2")
  completedMCQs: { [questionId: string]: string }; // questionId -> selectedOptionId
  userNotes: { [sectionId: string]: string }; // sectionId -> note string
  completedSessions?: { [sectionNo: string]: number }; // sectionNo -> count of pomodoro study sessions completed
  dailySessionsCompleted?: number; // count of pomodoro study sessions completed today
  dailyStudyGoal?: number; // target daily number of pomodoro sessions
  chapterStudyTime?: { [chapterId: string]: number }; // chapterId -> cumulative study seconds
}
