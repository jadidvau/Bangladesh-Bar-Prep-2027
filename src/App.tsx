import React, { useState, useEffect } from "react";
import { 
  BookOpen, 
  Search, 
  Moon, 
  Sun, 
  Bookmark, 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  Edit3, 
  Award, 
  HelpCircle, 
  BookMarked, 
  Scale, 
  FileText, 
  ChevronRight, 
  Info, 
  GraduationCap, 
  Menu, 
  X, 
  Clock, 
  Sparkles,
  BookOpenCheck,
  Flame,
  ArrowRight,
  Play,
  Pause,
  Coffee,
  Target,
  Timer,
  Volume2,
  VolumeX,
  ChevronDown
} from "lucide-react";
import { CHAPTERS_LIST } from "./data/chapters";
import { Chapter, MCQQuestion, UserProgress } from "./types";

export default function App() {
  // Theme settings: 'sepia' | 'dark' | 'light'
  const [theme, setTheme] = useState<"light" | "dark" | "sepia">(() => {
    const saved = localStorage.getItem("bd-law-theme");
    return (saved as "light" | "dark" | "sepia") || "sepia";
  });

  // State to track current chapter
  const [selectedChapterId, setSelectedChapterId] = useState<string>("chapter-22");
  const selectedChapter = CHAPTERS_LIST.find(c => c.id === selectedChapterId) || CHAPTERS_LIST[0];

  // Active reading tab: 'commentary' | 'cases' | 'practice' | 'flashcards'
  const [activeTab, setActiveTab] = useState<"commentary" | "cases" | "practice" | "flashcards">("commentary");

  // Search query
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Mobile sidebar menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // User progress and notes
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem("bd-law-progress");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
    return {
      bookmarkedSections: [],
      completedMCQs: {},
      userNotes: {},
      completedSessions: {},
      dailySessionsCompleted: 0,
      dailyStudyGoal: 4
    };
  });

  // Active note editing ID
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [currentNoteText, setCurrentNoteText] = useState<string>("");

  // Practice session answers state
  const [quizAnswers, setQuizAnswers] = useState<{ [qid: string]: string }>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Flashcards state (question, answer, isFlipped, ratings, deckFinished)
  const [flashcardIndex, setFlashcardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [flashcardRatings, setFlashcardRatings] = useState<{ [maxim: string]: "easy" | "hard" | "again" }>({});
  const [deckFinished, setDeckFinished] = useState<boolean>(false);

  // Pomodoro Timer States
  const [timerMode, setTimerMode] = useState<"study" | "break">("study");
  const [timerSeconds, setTimerSeconds] = useState<number>(25 * 60);
  const [timerMaxDuration, setTimerMaxDuration] = useState<number>(25 * 60);
  const [timerIsRunning, setTimerIsRunning] = useState<boolean>(false);
  const [timerSelectedSection, setTimerSelectedSection] = useState<string>("general");
  const [showTimerDropdown, setShowTimerDropdown] = useState<boolean>(false);
  const [timerSoundEnabled, setTimerSoundEnabled] = useState<boolean>(true);

  // Play audio chime when Pomodoro completes using Web Audio API
  const playCompletionSound = () => {
    if (!timerSoundEnabled) return;
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(880, ctx.currentTime); // A5
      gain1.gain.setValueAtTime(0.15, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
      osc1.start(ctx.currentTime);
      osc1.stop(ctx.currentTime + 0.6);

      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(1320, ctx.currentTime + 0.15); // E6
      gain2.gain.setValueAtTime(0.15, ctx.currentTime + 0.15);
      gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.75);
      osc2.start(ctx.currentTime + 0.15);
      osc2.stop(ctx.currentTime + 0.75);
    } catch (e) {
      console.error("Failed to play audio alert", e);
    }
  };

  const configureTimer = (mode: "study" | "break", minutes: number) => {
    setTimerMode(mode);
    setTimerMaxDuration(minutes * 60);
    setTimerSeconds(minutes * 60);
    setTimerIsRunning(false);
  };

  const handleModeChange = (mode: "study" | "break") => {
    setTimerMode(mode);
    const mins = mode === "study" ? 25 : 5;
    setTimerMaxDuration(mins * 60);
    setTimerSeconds(mins * 60);
    setTimerIsRunning(false);
  };

  // Timer tick effect
  useEffect(() => {
    let interval: any = null;
    if (timerIsRunning) {
      interval = setInterval(() => {
        setTimerSeconds(prev => {
          if (prev <= 1) {
            setTimerIsRunning(false);
            playCompletionSound();
            
            // Log session if in study mode
            if (timerMode === "study") {
              setProgress(p => {
                const completed = p.completedSessions || {};
                const currentCount = completed[timerSelectedSection] || 0;
                const currentDaily = p.dailySessionsCompleted || 0;
                return {
                  ...p,
                  completedSessions: {
                    ...(p.completedSessions || {}),
                    [timerSelectedSection]: currentCount + 1
                  },
                  dailySessionsCompleted: currentDaily + 1
                };
              });
            }
            
            // Switch mode automatically with standard presets
            const nextMode = timerMode === "study" ? "break" : "study";
            const nextMinutes = nextMode === "study" ? 25 : 5;
            setTimerMode(nextMode);
            setTimerMaxDuration(nextMinutes * 60);
            return nextMinutes * 60;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerIsRunning, timerMode, timerSelectedSection, timerSoundEnabled]);

  const defaultMaxims = [
    {
      maxim: "Interest reipublicae ut sit finis litium",
      translation: "It is in the interest of the State that there should be an end to litigation.",
      application: "Section 11 (Res Judicata) foundation. Prevents infinite lawsuits."
    },
    {
      maxim: "Nemo debet bis vexari pro una et eadem causa",
      translation: "No person should be vexed (harassed) twice for the same cause.",
      application: "Section 11 (Res Judicata) foundation. Protects a party from double jeopardy in civil lawsuits."
    },
    {
      maxim: "Res judicata pro veritate accipitur",
      translation: "A judicial decision must be accepted as correct and true.",
      application: "Section 11. Ensures the finality and absolute authority of judicial decrees."
    },
    {
      maxim: "Ubi jus ibi remedium",
      translation: "Where there is a right, there is a remedy.",
      application: "Section 9. Establishes the broad jurisdiction of Civil Courts to try all disputes of civil nature."
    }
  ];

  const keyMaxims = selectedChapter.maxims || defaultMaxims;

  // Reset states on chapter switch
  useEffect(() => {
    setFlashcardIndex(0);
    setIsFlipped(false);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setDeckFinished(false);
  }, [selectedChapterId]);

  // Save progress on change
  useEffect(() => {
    localStorage.setItem("bd-law-progress", JSON.stringify(progress));
  }, [progress]);

  // Save theme on change
  useEffect(() => {
    localStorage.setItem("bd-law-theme", theme);
    const root = document.documentElement;
    root.classList.remove("dark");
    if (theme === "dark") {
      root.classList.add("dark");
    }
  }, [theme]);

  // Bookmark toggler
  const toggleBookmark = (sectionNo: string) => {
    setProgress(prev => {
      const exists = prev.bookmarkedSections.includes(sectionNo);
      const updated = exists 
        ? prev.bookmarkedSections.filter(id => id !== sectionNo)
        : [...prev.bookmarkedSections, sectionNo];
      return { ...prev, bookmarkedSections: updated };
    });
  };

  // Note saving
  const saveNote = (sectionNo: string) => {
    setProgress(prev => {
      const updatedNotes = { ...prev.userNotes, [sectionNo]: currentNoteText };
      return { ...prev, userNotes: updatedNotes };
    });
    setEditingNoteId(null);
  };

  const startEditingNote = (sectionNo: string, currentText: string) => {
    setEditingNoteId(sectionNo);
    setCurrentNoteText(currentText);
  };

  // Reset quiz state
  const handleResetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const handleSelectMCQOption = (questionId: string, optionId: string) => {
    if (quizSubmitted) return; // cannot change after submission
    setQuizAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const handleSubmitQuiz = () => {
    setQuizSubmitted(true);
    // Persist the completed quiz answers
    setProgress(prev => ({
      ...prev,
      completedMCQs: { ...prev.completedMCQs, ...quizAnswers }
    }));
  };

  // Total completed chapters
  const completedChaptersCount = CHAPTERS_LIST.filter(c => c.isCompleted).length;
  const syllabusCompletionPercentage = Math.round((completedChaptersCount / CHAPTERS_LIST.length) * 100);

  // Search filter
  const filteredSections = selectedChapter.sections?.filter(sec => 
    sec.sectionNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sec.simplifiedExplanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sec.statutoryText.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const filteredCases = selectedChapter.caseLaws?.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.facts.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.held.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.significance.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  // Theme styling helpers
  const getThemeClass = () => {
    if (theme === "dark") return "bg-[#131312] text-[#ECE9E2] font-serif transition-colors duration-300";
    if (theme === "sepia") return "bg-[#FDFCFB] text-[#1A1A1A] font-serif transition-colors duration-300";
    return "bg-[#FCFCFC] text-[#111111] font-serif transition-colors duration-300";
  };

  const getCardBgClass = () => {
    if (theme === "dark") return "bg-[#1C1C1A] border-[#2E2E2A] text-[#ECE9E2] rounded-xl border shadow-sm transition-all duration-300";
    if (theme === "sepia") return "bg-[#F8F6F2] border-[#E5E1D8] text-[#1A1A1A] rounded-xl border shadow-sm transition-all duration-300";
    return "bg-[#F4F4F3] border-[#E2E2E0] text-[#111111] rounded-xl border shadow-sm transition-all duration-300";
  };

  const getInputClass = () => {
    if (theme === "dark") return "bg-[#242421] border-[#2E2E2A] text-[#ECE9E2] placeholder-[#7A7A6E] focus:border-[#A2A28A] focus:ring-1 focus:ring-[#A2A28A]/30 transition-all rounded-lg";
    if (theme === "sepia") return "bg-[#F1EFEC] border-[#E5E1D8] text-[#1A1A1A] placeholder-[#8E8E7E] focus:border-[#5A5A40] focus:ring-1 focus:ring-[#5A5A40]/30 transition-all rounded-lg";
    return "bg-[#EDEDEC] border-[#E2E2E0] text-[#111111] placeholder-[#7F7F7D] focus:border-[#4E4E3A] focus:ring-1 focus:ring-[#4E4E3A]/30 transition-all rounded-lg";
  };

  const getHeaderBgClass = () => {
    if (theme === "dark") return "bg-[#131312]/85 backdrop-blur border-[#2E2E2A] text-[#ECE9E2]";
    if (theme === "sepia") return "bg-[#FDFCFB]/85 backdrop-blur border-[#E5E1D8] text-[#1A1A1A]";
    return "bg-[#FCFCFC]/85 backdrop-blur border-[#E2E2E0] text-[#111111]";
  };

  const getSubtleTextClass = () => {
    if (theme === "dark") return "text-[#7A7A6E] font-sans text-xs tracking-wider";
    if (theme === "sepia") return "text-[#8E8E7E] font-sans text-xs tracking-wider";
    return "text-[#7F7F7D] font-sans text-xs tracking-wider";
  };

  const getPrimaryBadgeClass = () => {
    if (theme === "dark") return "bg-[#A2A28A]/10 text-[#C5C5B2] border border-[#A2A28A]/20 font-sans uppercase font-bold tracking-widest text-[10px]";
    if (theme === "sepia") return "bg-[#5A5A40]/10 text-[#5A5A40] border border-[#5A5A40]/20 font-sans uppercase font-bold tracking-widest text-[10px]";
    return "bg-[#4E4E3A]/10 text-[#4E4E3A] border border-[#4E4E3A]/20 font-sans uppercase font-bold tracking-widest text-[10px]";
  };

  const getSidebarClass = () => {
    if (theme === "dark") return "bg-[#1C1C1A] border-[#2E2E2A] text-[#ECE9E2]";
    if (theme === "sepia") return "bg-[#F8F6F2] border-[#E5E1D8] text-[#1A1A1A]";
    return "bg-[#F4F4F3] border-[#E2E2E0] text-[#111111]";
  };

  const getSidebarItemClass = (isSelected: boolean, isCompleted: boolean) => {
    if (isSelected) {
      if (theme === "dark") return "bg-[#282825] border-l-4 border-[#A2A28A] text-[#ECE9E2]";
      if (theme === "sepia") return "bg-[#EAE7E0] border-l-4 border-[#5A5A40] text-[#1A1A1A]";
      return "bg-[#EDEDEC] border-l-4 border-[#4E4E3A] text-[#111111]";
    }
    
    // Unselected items
    let base = "border-l-4 border-transparent hover:bg-current/5 transition-colors";
    if (isCompleted) {
      return `${base} opacity-90`;
    } else {
      return `${base} opacity-50`;
    }
  };

  const handleRateFlashcard = (rating: "easy" | "hard" | "again") => {
    const currentMaxim = keyMaxims[flashcardIndex];
    if (!currentMaxim) return;

    // Update ratings map
    setFlashcardRatings(prev => ({
      ...prev,
      [currentMaxim.maxim]: rating
    }));

    // Advance to next or finish
    if (flashcardIndex < keyMaxims.length - 1) {
      setIsFlipped(false);
      setFlashcardIndex(prev => prev + 1);
    } else {
      // Completed last card
      setIsFlipped(false);
      setDeckFinished(true);
    }
  };

  const handleRestartDeck = () => {
    // Clear ratings for this chapter's maxims only
    setFlashcardRatings(prev => {
      const updated = { ...prev };
      keyMaxims.forEach(m => {
        delete updated[m.maxim];
      });
      return updated;
    });
    setFlashcardIndex(0);
    setIsFlipped(false);
    setDeckFinished(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleQuickJump = (sectionNo: string) => {
    if (!sectionNo) return;
    const elementId = sectionNo.replace(/\s+/g, '-');
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      element.classList.add("ring-2", "ring-amber-500/50", "ring-offset-2");
      setTimeout(() => {
        element.classList.remove("ring-2", "ring-amber-500/50", "ring-offset-2");
      }, 2000);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${getThemeClass()}`}>
      
      {/* MASTER TOP HEADER */}
      <header className={`sticky top-0 z-40 flex items-center justify-between px-4 py-3 border-b shadow-sm ${getHeaderBgClass()}`}>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg md:hidden hover:bg-current/10 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-[#5A5A40] dark:bg-[#A2A28A] text-white p-2 rounded-lg shadow-sm">
              <Scale size={20} />
            </div>
            <div>
              <h1 className="text-xs tracking-[0.2em] font-bold uppercase text-[#5A5A40] dark:text-[#A2A28A] mb-0.5 font-sans">Elite Prep</h1>
              <div className="text-lg md:text-xl font-serif italic text-amber-950 dark:text-[#ECE9E2] font-semibold">Bar & BJS 2027</div>
            </div>
          </div>
        </div>

        {/* STUDY TRAFFIC COUNTER */}
        <div className="hidden lg:flex items-center gap-6 font-sans text-xs">
          <div className="flex items-center gap-2">
            <BookOpenCheck className="text-[#5A5A40] dark:text-[#A2A28A]" size={16} />
            <span className="opacity-90">Syllabus Completed: <strong className="font-bold text-[#5A5A40] dark:text-[#A2A28A]">{syllabusCompletionPercentage}%</strong> ({completedChaptersCount}/22 Chapters)</span>
          </div>
          <div className="h-4 w-px bg-current opacity-20"></div>
          <div className="flex items-center gap-2">
            <Flame className="text-[#5A5A40] dark:text-[#A2A28A]" size={16} />
            <span className="opacity-90">Daily Streak: <strong className="font-bold">5 Days</strong></span>
          </div>
        </div>

        {/* POMODORO INTENSE STUDY TIMER */}
        <div className="relative font-sans text-xs z-50">
          <button
            onClick={() => setShowTimerDropdown(!showTimerDropdown)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all duration-200 select-none ${
              timerIsRunning 
                ? "bg-amber-500/15 border-amber-500/40 text-amber-800 dark:text-amber-300 shadow-sm font-semibold" 
                : theme === "dark"
                  ? "bg-[#1C1C1A] border-[#2E2E2A] hover:bg-[#282825]"
                  : theme === "sepia"
                    ? "bg-[#F8F6F2] border-[#E5E1D8] hover:bg-[#EAE7E0]"
                    : "bg-[#F4F4F3] border-[#E2E2E0] hover:bg-[#EDEDEC]"
            }`}
          >
            <Timer size={15} className={`text-amber-700 dark:text-amber-400 ${timerIsRunning ? "animate-spin [animation-duration:10s]" : ""}`} />
            <span className="font-mono font-bold tracking-wider">{formatTime(timerSeconds)}</span>
            <span className="hidden sm:inline opacity-70">({timerMode === "study" ? "Study" : "Break"})</span>
            {timerIsRunning && (
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
            )}
            <ChevronDown size={12} className={`transition-transform duration-200 ${showTimerDropdown ? "rotate-180" : ""}`} />
          </button>

          {showTimerDropdown && (
            <>
              {/* BACKDROP to close on click outside */}
              <div 
                className="fixed inset-0 z-40 bg-transparent" 
                onClick={() => setShowTimerDropdown(false)}
              />
              <div 
                className={`absolute right-0 mt-2 w-80 rounded-xl border p-4 shadow-xl z-50 transition-all duration-300 font-sans ${
                  theme === "dark"
                    ? "bg-[#1C1C1A] border-[#2E2E2A] text-[#ECE9E2] shadow-black/50"
                    : theme === "sepia"
                      ? "bg-[#FDFBF7] border-[#E5E1D8] text-[#1A1A1A] shadow-amber-950/10"
                      : "bg-[#FCFCFC] border-[#E2E2E0] text-[#111111] shadow-gray-300/35"
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-current/10">
                  <div className="flex items-center gap-1.5 font-bold tracking-wide">
                    <Timer size={16} className="text-[#5A5A40] dark:text-[#A2A28A]" />
                    <span>Intense Study Companion</span>
                  </div>
                  <button
                    onClick={() => setTimerSoundEnabled(!timerSoundEnabled)}
                    className="p-1 rounded hover:bg-current/10 transition-colors"
                    title={timerSoundEnabled ? "Mute notification" : "Unmute notification"}
                  >
                    {timerSoundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} className="text-red-500" />}
                  </button>
                </div>

                {/* Tabs */}
                <div className="flex bg-current/[0.04] p-1 rounded-lg mb-4 text-[11px] font-semibold">
                  <button
                    onClick={() => handleModeChange("study")}
                    className={`flex-1 py-1 rounded transition-all flex items-center justify-center gap-1.5 ${
                      timerMode === "study"
                        ? theme === "dark" ? "bg-[#282825] text-[#ECE9E2] shadow-sm font-bold" : "bg-white text-amber-950 shadow-sm font-bold border border-current/5"
                        : "opacity-60 hover:opacity-100 text-current"
                    }`}
                  >
                    <Target size={12} />
                    Study Session
                  </button>
                  <button
                    onClick={() => handleModeChange("break")}
                    className={`flex-1 py-1 rounded transition-all flex items-center justify-center gap-1.5 ${
                      timerMode === "break"
                        ? theme === "dark" ? "bg-[#282825] text-[#ECE9E2] shadow-sm font-bold" : "bg-white text-amber-950 shadow-sm font-bold border border-current/5"
                        : "opacity-60 hover:opacity-100 text-current"
                    }`}
                  >
                    <Coffee size={12} />
                    Relax Break
                  </button>
                </div>

                {/* Presets */}
                <div className="mb-4">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-current/60 mb-1.5">
                    Select Duration
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {timerMode === "study" ? (
                      <>
                        {[15, 25, 45, 60].map(m => (
                          <button
                            key={m}
                            onClick={() => configureTimer("study", m)}
                            className={`py-1 rounded border text-center font-mono font-semibold transition-all text-xs ${
                              timerMaxDuration === m * 60
                                ? "border-amber-500 bg-amber-500/10 text-amber-700 dark:text-amber-400 font-bold"
                                : "border-current/10 hover:border-current/30 text-current opacity-85"
                            }`}
                          >
                            {m}m
                          </button>
                        ))}
                      </>
                    ) : (
                      <>
                        {[3, 5, 10, 15].map(m => (
                          <button
                            key={m}
                            onClick={() => configureTimer("break", m)}
                            className={`py-1 rounded border text-center font-mono font-semibold transition-all text-xs ${
                              timerMaxDuration === m * 60
                                ? "border-blue-500 bg-blue-500/10 text-blue-700 dark:text-blue-400 font-bold"
                                : "border-current/10 hover:border-current/30 text-current opacity-85"
                            }`}
                          >
                            {m}m
                          </button>
                        ))}
                      </>
                    )}
                  </div>
                </div>

                {/* Focus Target Selector */}
                <div className="mb-4">
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-current/60 mb-1.5">
                    Focus Target Section
                  </label>
                  <select
                    value={timerSelectedSection}
                    onChange={(e) => setTimerSelectedSection(e.target.value)}
                    className={`w-full text-xs px-2 py-1.5 rounded-lg border focus:outline-none focus:ring-1 focus:ring-amber-500/30 transition-all ${
                      theme === "dark"
                        ? "bg-[#242421] border-[#2E2E2A] text-[#ECE9E2] focus:border-[#A2A28A]"
                        : theme === "sepia"
                          ? "bg-[#F1EFEC] border-[#E5E1D8] text-[#1A1A1A] focus:border-[#5A5A40]"
                          : "bg-[#EDEDEC] border-[#E2E2E0] text-[#111111] focus:border-[#4E4E3A]"
                    }`}
                  >
                    <option value="general">General Chapter Study</option>
                    {selectedChapter.sections?.map(sec => (
                      <option key={sec.sectionNo} value={sec.sectionNo}>
                        Sec {sec.sectionNo}: {sec.title.length > 25 ? sec.title.substring(0, 25) + "..." : sec.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Big Timer and Progress Bar */}
                <div className="flex flex-col items-center justify-center py-3 mb-4 bg-current/[0.02] rounded-xl border border-current/5">
                  <div className="text-4xl font-mono font-bold tracking-wider mb-2 text-current tabular-nums">
                    {formatTime(timerSeconds)}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60 mb-3 flex items-center gap-1 font-bold">
                    {timerIsRunning ? (
                      <>
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                        <span>Focusing...</span>
                      </>
                    ) : (
                      "Paused"
                    )}
                  </div>

                  {/* Progress Line */}
                  <div className="w-4/5 h-1.5 bg-current/15 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-300 ${
                        timerMode === "study" ? "bg-amber-500" : "bg-blue-400"
                      }`}
                      style={{ width: `${(timerSeconds / timerMaxDuration) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Primary Controls */}
                <div className="flex gap-2 mb-3">
                  <button
                    onClick={() => setTimerIsRunning(!timerIsRunning)}
                    className={`flex-1 py-2 rounded-lg font-bold flex items-center justify-center gap-1.5 transition-all text-xs text-white ${
                      timerIsRunning 
                        ? "bg-amber-600 hover:bg-amber-700" 
                        : "bg-emerald-600 hover:bg-emerald-700"
                    }`}
                  >
                    {timerIsRunning ? (
                      <>
                        <Pause size={14} fill="currentColor" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play size={14} fill="currentColor" />
                        Start Focus
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => {
                      setTimerIsRunning(false);
                      setTimerSeconds(timerMaxDuration);
                    }}
                    className={`px-3 py-2 rounded-lg border transition-all text-xs hover:bg-current/10 flex items-center justify-center ${
                      theme === "dark" ? "border-[#2E2E2A]" : "border-current/10"
                    }`}
                    title="Reset Timer"
                  >
                    <RotateCcw size={14} />
                  </button>
                </div>

                {/* Daily Study Goal */}
                <div className="mb-3 border-t border-current/10 pt-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-current/60 flex items-center gap-1">
                      <Flame size={12} className="text-amber-500 animate-pulse" />
                      Daily Study Goal
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => {
                          setProgress(p => {
                            const currentGoal = p.dailyStudyGoal || 4;
                            if (currentGoal <= 1) return p;
                            return { ...p, dailyStudyGoal: currentGoal - 1 };
                          });
                        }}
                        className="px-1.5 py-0.5 rounded bg-current/5 hover:bg-current/10 font-bold transition-colors select-none text-xs"
                        title="Decrease Goal"
                      >
                        -
                      </button>
                      <span className="font-mono text-xs font-bold w-4 text-center">
                        {progress.dailyStudyGoal || 4}
                      </span>
                      <button
                        onClick={() => {
                          setProgress(p => {
                            const currentGoal = p.dailyStudyGoal || 4;
                            return { ...p, dailyStudyGoal: currentGoal + 1 };
                          });
                        }}
                        className="px-1.5 py-0.5 rounded bg-current/5 hover:bg-current/10 font-bold transition-colors select-none text-xs"
                        title="Increase Goal"
                      >
                        +
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm("Do you want to reset your daily study sessions back to zero?")) {
                            setProgress(p => ({ ...p, dailySessionsCompleted: 0 }));
                          }
                        }}
                        className="ml-1 text-[9px] uppercase tracking-wide px-1 py-0.5 rounded border border-current/10 hover:bg-current/10 font-semibold opacity-60 hover:opacity-100 transition-all"
                        title="Reset Daily Sessions Count"
                      >
                        Reset
                      </button>
                    </div>
                  </div>

                  {/* Goal Progress bar & Status text */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[11px] font-semibold">
                      <span className="opacity-80">
                        {progress.dailySessionsCompleted || 0} of {progress.dailyStudyGoal || 4} completed
                      </span>
                      <span className="font-mono text-amber-600 dark:text-amber-400 font-bold">
                        {Math.round(((progress.dailySessionsCompleted || 0) / (progress.dailyStudyGoal || 4)) * 100)}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-current/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-500 rounded-full"
                        style={{
                          width: `${Math.min(
                            100,
                            (((progress.dailySessionsCompleted || 0) / (progress.dailyStudyGoal || 4)) * 100)
                          )}%`,
                        }}
                      />
                    </div>
                    {progress.dailySessionsCompleted !== undefined && progress.dailySessionsCompleted >= (progress.dailyStudyGoal || 4) && (
                      <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1 mt-1 animate-pulse">
                        🎉 Daily goal accomplished! Keep pushing!
                      </div>
                    )}
                  </div>
                </div>

                {/* Tracking stats */}
                <div className="text-[10px] text-current/75 border-t border-current/10 pt-2.5 flex items-center justify-between font-semibold">
                  <span className="flex items-center gap-1 text-current/80">
                    <Award size={12} className="text-amber-500" />
                    Target Completed:
                  </span>
                  <span className="font-mono text-[11px] font-bold">
                    {(progress.completedSessions || {})[timerSelectedSection] || 0} session(s)
                  </span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* THEME SELECTION & GLOBAL UTILITIES */}
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="flex bg-[#EAE7E0] dark:bg-[#2E2E2A] rounded-lg p-0.5 border border-current/10 font-sans text-[11px]">
            <button
              onClick={() => setTheme("sepia")}
              className={`px-3 py-1 rounded-md transition-all font-semibold flex items-center gap-1 ${theme === "sepia" ? "bg-[#5A5A40] text-white font-bold shadow-sm" : "opacity-70 text-current"}`}
            >
              <Sparkles size={11} />
              Sepia
            </button>
            <button
              onClick={() => setTheme("light")}
              className={`px-3 py-1 rounded-md transition-all font-semibold flex items-center gap-1 ${theme === "light" ? "bg-white text-[#1A1A1A] font-bold shadow-sm" : "opacity-70 text-current"}`}
            >
              <Sun size={11} />
              Light
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`px-3 py-1 rounded-md transition-all font-semibold flex items-center gap-1 ${theme === "dark" ? "bg-[#282825] text-[#ECE9E2] font-bold shadow-sm" : "opacity-70 text-current"}`}
            >
              <Moon size={11} />
              Dark
            </button>
          </div>
        </div>
      </header>

      {/* CORE FRAMEWORK WORKSPACE */}
      <div className="flex-1 flex relative">
        
        {/* CHAPTERS NAVIGATION SIDEBAR (DESKTOP) */}
        <aside className={`w-80 shrink-0 border-r hidden md:flex flex-col select-none ${getSidebarClass()}`}>
          <div className="p-4 border-b border-current/10">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search definitions, sections..."
                className={`w-full pl-8 pr-3 py-1.5 text-xs rounded-md focus:outline-none focus:ring-1 ${getInputClass()}`}
              />
              <Search className="absolute left-2.5 top-2.5 text-current opacity-60" size={13} />
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#8E8E7E] dark:text-[#7A7A6E] mb-2 font-sans">
                <span>Study Progress</span>
                <span>{syllabusCompletionPercentage}% COMPLETE</span>
              </div>
              <div className="h-1.5 w-full bg-current/10 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-300 ${theme === "dark" ? "bg-[#A2A28A]" : "bg-[#5A5A40]"}`}
                  style={{ width: `${syllabusCompletionPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-current/5">
            {CHAPTERS_LIST.map((ch, idx) => {
              const isSelected = ch.id === selectedChapterId;
              const formattedIdx = String(idx + 1).padStart(2, '0');
              return (
                <button
                  key={ch.id}
                  onClick={() => {
                    setSelectedChapterId(ch.id);
                    if (!ch.isCompleted) {
                      setActiveTab("commentary");
                    }
                  }}
                  className={`w-full text-left px-5 py-3.5 text-xs transition-all flex items-center justify-between ${getSidebarItemClass(isSelected, ch.isCompleted)}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-mono text-[10px] font-bold opacity-40 shrink-0">{formattedIdx}</span>
                    <div className="space-y-0.5 min-w-0">
                      <span className="font-serif font-bold text-sm block truncate">
                        {ch.title}
                      </span>
                      <span className="block text-[10px] opacity-60 font-sans truncate">{ch.subject}</span>
                    </div>
                  </div>
                  {ch.isCompleted ? (
                    <span className="shrink-0 bg-[#5A5A40]/10 text-[#5A5A40] dark:bg-[#A2A28A]/10 dark:text-[#A2A28A] text-[9px] px-1.5 py-0.5 rounded font-mono font-bold uppercase tracking-wider scale-90">
                      Active
                    </span>
                  ) : (
                    <span className="shrink-0 bg-current/10 text-current text-[8px] px-1 py-0.5 rounded font-mono uppercase opacity-40 scale-90">
                      Draft
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="p-4 border-t border-current/10 text-[11px] opacity-80 leading-relaxed bg-black/5 dark:bg-white/5 font-sans">
            <p className="font-bold flex items-center gap-1 mb-1 text-[#5A5A40] dark:text-[#A2A28A]">
              <GraduationCap size={14} /> BJS/Bar Council 2027
            </p>
            <p>Ready-to-use premium preparation textbook containing legal maxims, code analysis & exam tips.</p>
          </div>
        </aside>

        {/* MOBILE SIDEBAR MODAL OVERLAY */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 flex">
            <div className="fixed inset-0 bg-black/60" onClick={() => setMobileMenuOpen(false)}></div>
            <div className={`relative w-80 max-w-[85vw] flex flex-col p-4 z-10 ${getSidebarClass()}`}>
              <div className="flex items-center justify-between mb-4 border-b pb-2">
                <span className="font-serif italic font-bold text-base text-[#5A5A40] dark:text-[#A2A28A]">Syllabus Chapters</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-1 rounded hover:bg-current/10">
                  <X size={18} />
                </button>
              </div>

              {/* SEARCH BAR */}
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search in textbook..."
                    className={`w-full pl-8 pr-3 py-1.5 text-xs rounded-md focus:outline-none ${getInputClass()}`}
                  />
                  <Search className="absolute left-2.5 top-2.5 text-current opacity-60" size={13} />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto divide-y divide-current/5">
                {CHAPTERS_LIST.map((ch, idx) => {
                  const isSelected = ch.id === selectedChapterId;
                  const formattedIdx = String(idx + 1).padStart(2, '0');
                  return (
                    <button
                      key={ch.id}
                      onClick={() => {
                        setSelectedChapterId(ch.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-3 text-xs transition-all flex items-center justify-between ${getSidebarItemClass(isSelected, ch.isCompleted)}`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="font-mono text-[10px] font-bold opacity-40 shrink-0">{formattedIdx}</span>
                        <div className="space-y-0.5 truncate min-w-0">
                          <span className="font-serif font-bold truncate block">{ch.title}</span>
                          <span className="text-[10px] opacity-75 font-sans block truncate">{ch.subject}</span>
                        </div>
                      </div>
                      {ch.isCompleted ? (
                        <span className="bg-[#5A5A40]/10 text-[#5A5A40] dark:bg-[#A2A28A]/10 dark:text-[#A2A28A] text-[8px] px-1.5 py-0.5 rounded font-bold uppercase shrink-0 scale-90">Active</span>
                      ) : (
                        <span className="bg-current/10 text-[8px] px-1.5 py-0.5 rounded uppercase opacity-40 shrink-0 scale-90">Draft</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* PRIMARY TEXTBOOK WORKSPACE */}
        <main className="flex-1 overflow-y-auto px-4 py-6 md:px-8 max-w-5xl mx-auto w-full">
          
          {/* BANNER FOR ACTIVE OR INCOMPLETE CHAPTER */}
          {!selectedChapter.isCompleted ? (
            <div className={`p-8 rounded-xl border text-center shadow-md space-y-4 ${getCardBgClass()}`}>
              <div className="mx-auto w-16 h-16 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center border border-amber-500/30">
                <BookOpen size={32} className="animate-pulse" />
              </div>
              <h2 className="text-xl md:text-2xl font-serif font-bold tracking-tight">
                {selectedChapter.title}
              </h2>
              <p className="max-w-md mx-auto text-sm opacity-80 leading-relaxed">
                This chapter is scheduled and mapped under our comprehensive 300-page textbook curriculum. In this version, we are finalizing the master drafting.
              </p>
              <div className="p-4 bg-amber-500/10 rounded-lg text-xs max-w-lg mx-auto border border-amber-500/20 space-y-2">
                <p className="font-semibold text-amber-600 uppercase tracking-wider">How to unlock this Chapter?</p>
                <p className="leading-relaxed">
                  We are building this textbook chapter by chapter to ensure premium depth and complete statutory text coverage. Reply to the chat assistant with <strong className="font-bold underline text-amber-500">"CONTINUE TO NEXT CHAPTER"</strong> to trigger the next draft compile!
                </p>
              </div>
              <button 
                onClick={() => setSelectedChapterId("chapter-1")}
                className="inline-flex items-center gap-2 bg-amber-600 text-white hover:bg-amber-700 px-4 py-2 rounded-lg text-xs font-semibold shadow transition-colors"
              >
                Back to Chapter 1 Studio
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* CHAPTER HEADER & SYLLABUS META */}
              <div className="mb-8 font-sans">
                <div className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#5A5A40] dark:text-[#C5C5B2] mb-4 flex items-center">
                  <span className="h-px w-8 bg-[#5A5A40] dark:bg-[#C5C5B2] mr-3"></span>
                  {selectedChapter.subject}
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1A1A1A] dark:text-[#ECE9E2] leading-tight mb-6">
                  {selectedChapter.title}
                </h2>
                <p className="text-base md:text-lg text-[#5A5A5A] dark:text-[#A9A99E] leading-relaxed font-serif italic border-l-4 border-current/10 pl-6">
                  "{selectedChapter.quickSummary}"
                </p>
              </div>

              {/* STUDY TABS MENU */}
              <div className="flex border-b border-current/10 overflow-x-auto pb-px scrollbar-none font-sans text-xs">
                <button
                  onClick={() => setActiveTab("commentary")}
                  className={`py-3 px-4 font-semibold border-b-2 whitespace-nowrap transition-all flex items-center gap-2 ${
                    activeTab === "commentary"
                      ? "border-[#5A5A40] text-[#5A5A40] dark:border-[#A2A28A] dark:text-[#A2A28A] font-bold"
                      : "border-transparent opacity-70 hover:opacity-100 hover:text-[#5A5A40] dark:hover:text-[#A2A28A]"
                  }`}
                >
                  <FileText size={14} />
                  Detailed Commentary ({filteredSections.length})
                </button>
                <button
                  onClick={() => setActiveTab("cases")}
                  className={`py-3 px-4 font-semibold border-b-2 whitespace-nowrap transition-all flex items-center gap-2 ${
                    activeTab === "cases"
                      ? "border-[#5A5A40] text-[#5A5A40] dark:border-[#A2A28A] dark:text-[#A2A28A] font-bold"
                      : "border-transparent opacity-70 hover:opacity-100 hover:text-[#5A5A40] dark:hover:text-[#A2A28A]"
                  }`}
                >
                  <Scale size={14} />
                  Landmark Case Laws ({filteredCases.length})
                </button>
                <button
                  onClick={() => setActiveTab("practice")}
                  className={`py-3 px-4 font-semibold border-b-2 whitespace-nowrap transition-all flex items-center gap-2 ${
                    activeTab === "practice"
                      ? "border-[#5A5A40] text-[#5A5A40] dark:border-[#A2A28A] dark:text-[#A2A28A] font-bold"
                      : "border-transparent opacity-70 hover:opacity-100 hover:text-[#5A5A40] dark:hover:text-[#A2A28A]"
                  }`}
                >
                  <Award size={14} />
                  Practice MCQs
                </button>
                <button
                  onClick={() => setActiveTab("flashcards")}
                  className={`py-3 px-4 font-semibold border-b-2 whitespace-nowrap transition-all flex items-center gap-2 ${
                    activeTab === "flashcards"
                      ? "border-[#5A5A40] text-[#5A5A40] dark:border-[#A2A28A] dark:text-[#A2A28A] font-bold"
                      : "border-transparent opacity-70 hover:opacity-100 hover:text-[#5A5A40] dark:hover:text-[#A2A28A]"
                  }`}
                >
                  <Sparkles size={14} />
                  Maxim Flashcards
                </button>
              </div>

              {/* SEARCH STATUS NOTICE */}
              {searchQuery && (
                <div className="bg-[#5A5A40]/10 border border-[#5A5A40]/20 p-3 text-xs rounded-lg flex items-center justify-between">
                  <span>Filtered study material for: <strong>"{searchQuery}"</strong></span>
                  <button onClick={() => setSearchQuery("")} className="underline text-[#5A5A40] dark:text-[#A2A28A] font-semibold">Clear Search</button>
                </div>
              )}

              {/* TAB CONTENT: STATUTORY COMMENTARY */}
              {activeTab === "commentary" && (
                <div className="space-y-8">
                  
                  {/* COMMENTARY HEADER & QUICK JUMP */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-current/10 font-sans">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-[#1A1A1A] dark:text-[#ECE9E2]">
                        Detailed Commentary & Bare Act
                      </h3>
                      <p className="text-xs opacity-75 mt-0.5">
                        In-depth statutory review and examiner-focused insights
                      </p>
                    </div>
                    {selectedChapter.sections && selectedChapter.sections.length > 0 && (
                      <div className="flex items-center gap-2">
                        <label htmlFor="quick-jump-select" className="text-xs font-semibold opacity-80 flex items-center gap-1.5 whitespace-nowrap">
                          <ArrowRight size={13} className="text-[#5A5A40] dark:text-[#A2A28A]" />
                          Quick Jump:
                        </label>
                        <select
                          id="quick-jump-select"
                          onChange={(e) => {
                            handleQuickJump(e.target.value);
                            e.target.value = "";
                          }}
                          defaultValue=""
                          className={`text-xs px-3 py-1.5 rounded-lg border focus:outline-none focus:ring-1 focus:ring-amber-500/30 transition-all font-medium ${
                            theme === "dark"
                              ? "bg-[#242421] border-[#2E2E2A] text-[#ECE9E2] focus:border-[#A2A28A]"
                              : theme === "sepia"
                                ? "bg-[#F1EFEC] border-[#E5E1D8] text-[#1A1A1A] focus:border-[#5A5A40]"
                                : "bg-[#EDEDEC] border-[#E2E2E0] text-[#111111] focus:border-[#4E4E3A]"
                          }`}
                        >
                          <option value="" disabled hidden>Select a section...</option>
                          {selectedChapter.sections.map(sec => (
                            <option key={sec.sectionNo} value={sec.sectionNo}>
                              {sec.sectionNo}: {sec.title.length > 30 ? sec.title.substring(0, 30) + "..." : sec.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                  
                  {/* STRATEGY GUIDE BOX */}
                  <div className="p-6 border border-[#5A5A40] dark:border-[#A2A28A] border-dashed rounded-xl space-y-2 bg-[#5A5A40]/5 font-sans">
                    <div className="text-[10px] font-bold text-[#5A5A40] dark:text-[#C5C5B2] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <GraduationCap size={16} />
                      Chapter Strategy Guide
                    </div>
                    <p className="text-xs md:text-sm text-[#5A5A5A] dark:text-[#ECE9E2] italic leading-relaxed">
                      {selectedChapter.studyStrategy}
                    </p>
                  </div>

                  {/* SECTIONS LOOP */}
                  {filteredSections.length === 0 ? (
                    <div className="text-center py-12 opacity-60 text-sm">
                      No matching statutory sections found for "{searchQuery}".
                    </div>
                  ) : (
                    filteredSections.map((sec, index) => {
                      const isBookmarked = progress.bookmarkedSections.includes(sec.sectionNo);
                      const currentNote = progress.userNotes[sec.sectionNo] || "";
                      const isEditingThisNote = editingNoteId === sec.sectionNo;

                      return (
                        <article 
                          key={sec.sectionNo} 
                          className={`rounded-2xl border p-5 md:p-6 shadow-sm space-y-4 transition-all duration-300 relative overflow-hidden group ${getCardBgClass()}`}
                          id={sec.sectionNo.replace(/\s+/g, '-')}
                        >
                          
                          {/* Section Title & Bookmark */}
                          <div className="flex items-start justify-between gap-4 border-b pb-3 border-current/10">
                            <div className="space-y-0.5">
                              <span className="font-mono text-xs text-[#5A5A40] dark:text-[#A2A28A] font-bold tracking-wider uppercase">
                                CPC 1908 Statute
                              </span>
                              <h3 className="text-lg md:text-xl font-serif font-bold flex items-center gap-2">
                                <span className="bg-[#5A5A40] dark:bg-[#A2A28A] text-white text-xs px-2 py-0.5 rounded font-mono">
                                  {sec.sectionNo}
                                </span>
                                <span>{sec.title}</span>
                              </h3>
                            </div>
                            <button
                              onClick={() => toggleBookmark(sec.sectionNo)}
                              className={`p-1.5 rounded-full transition-colors ${
                                isBookmarked 
                                  ? "bg-[#5A5A40] dark:bg-[#A2A28A] text-white" 
                                  : "hover:bg-current/10 text-current opacity-70 hover:opacity-100"
                              }`}
                              title={isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
                            >
                              <Bookmark size={15} />
                            </button>
                          </div>

                          {/* STATUTORY TEXT (BARE ACT) */}
                          <div className="bg-black/5 dark:bg-white/5 rounded-xl p-5 border-l-4 border-[#5A5A40] dark:border-[#A2A28A] font-serif text-sm italic relative">
                            <span className="absolute -top-2.5 left-3 px-1.5 text-[9px] uppercase tracking-wider font-sans font-semibold bg-[#5A5A40] dark:bg-[#A2A28A] text-white rounded">
                              Bare Act statutory text
                            </span>
                            <p className="whitespace-pre-line leading-relaxed opacity-95 pt-1">
                              {sec.statutoryText}
                            </p>
                          </div>

                          {/* SIMPLIFIED EXPLANATION */}
                          <div className="space-y-2">
                            <h4 className="text-xs uppercase font-sans font-bold tracking-wider text-[#5A5A40] dark:text-[#A2A28A] flex items-center gap-1.5">
                              <Info size={13} /> Simplified Explanation & Legal Analysis
                            </h4>
                            <p className="text-sm leading-relaxed font-serif">
                              {sec.simplifiedExplanation}
                            </p>
                          </div>

                          {/* ESSENTIAL ELEMENTS BULLETS */}
                          <div className="space-y-2">
                            <h4 className="text-xs uppercase font-sans font-bold tracking-wider text-[#5A5A40] dark:text-[#A2A28A]">
                              Essential Elements for Examiners (Syllabus Check)
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans">
                              {sec.elements.map((el, elIdx) => (
                                <li key={elIdx} className="flex items-start gap-2 bg-black/5 dark:bg-white/5 p-2 rounded-lg">
                                  <span className="text-[#5A5A40] dark:text-[#A2A28A] font-bold font-mono mt-0.5">[{elIdx + 1}]</span>
                                  <span className="opacity-90">{el}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* STUDENT PERSONAL STUDY NOTES PERSISTED */}
                          <div className="border-t pt-4 border-current/10 space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-semibold flex items-center gap-1 font-sans text-[#5A5A40] dark:text-[#A2A28A]">
                                <Edit3 size={13} /> Study Notes (Syllabus Memo)
                              </span>
                              {!isEditingThisNote && currentNote && (
                                <button 
                                  onClick={() => startEditingNote(sec.sectionNo, currentNote)}
                                  className="text-[11px] underline hover:text-[#5A5A40] dark:hover:text-[#A2A28A]"
                                >
                                  Modify Note
                                </button>
                              )}
                            </div>

                            {isEditingThisNote ? (
                              <div className="space-y-2">
                                <textarea
                                  value={currentNoteText}
                                  onChange={(e) => setCurrentNoteText(e.target.value)}
                                  placeholder="Write key syllabus analysis, exam memory hooks, or self-reminders here..."
                                  rows={3}
                                  className={`w-full p-2.5 text-xs rounded-lg focus:outline-none focus:ring-1 ${getInputClass()}`}
                                />
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => saveNote(sec.sectionNo)}
                                    className="bg-[#5A5A40] hover:bg-[#4E4E3A] dark:bg-[#A2A28A] dark:hover:bg-[#8F8F75] text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow transition-colors"
                                  >
                                    Save Note
                                  </button>
                                  <button
                                    onClick={() => setEditingNoteId(null)}
                                    className="px-3 py-1.5 rounded-lg text-xs hover:bg-black/10"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            ) : currentNote ? (
                              <div className="p-3 bg-[#5A5A40]/5 dark:bg-[#A2A28A]/5 border border-[#5A5A40]/10 dark:border-[#A2A28A]/10 rounded-lg text-xs font-sans italic opacity-95">
                                {currentNote}
                              </div>
                            ) : (
                              <button
                                onClick={() => startEditingNote(sec.sectionNo, "")}
                                className="w-full text-left p-3 border border-dashed rounded-lg text-xs text-center opacity-70 hover:opacity-100 font-sans hover:border-[#5A5A40]/50 dark:hover:border-[#A2A28A]/50"
                              >
                                + Add personal exam study notes for {sec.sectionNo}
                              </button>
                            )}
                          </div>

                        </article>
                      );
                    })
                  )}

                  {/* DETAILED COMPARISON TABLE: DECREE VS ORDER */}
                  <div className={`p-6 rounded-2xl border shadow-sm space-y-4 ${getCardBgClass()}`}>
                    <h3 className="text-xl font-serif font-bold text-center border-b pb-3 border-current/10">
                      BJS Exam High-Yield: Decree vs. Order (Detailed Comparison)
                    </h3>
                    <div className="overflow-x-auto text-xs sm:text-sm font-sans">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-current/20 font-bold opacity-90">
                            <th className="py-2 px-3">Criteria</th>
                            <th className="py-2 px-3">Decree [Section 2(2)]</th>
                            <th className="py-2 px-3">Order [Section 2(14)]</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-current/10 opacity-95">
                          <tr>
                            <td className="py-2.5 px-3 font-semibold">Origin</td>
                            <td className="py-2.5 px-3">Can only arise from a suit initiated by a Plaint.</td>
                            <td className="py-2.5 px-3">Can arise from a plaint, petition, or an application.</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 px-3 font-semibold">Determination</td>
                            <td className="py-2.5 px-3">Conclusively determines substantive rights of the parties.</td>
                            <td className="py-2.5 px-3">Usually determines procedural or temporary rights.</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 px-3 font-semibold">Classification</td>
                            <td className="py-2.5 px-3">Can be preliminary, final, or partly preliminary & partly final.</td>
                            <td className="py-2.5 px-3">No such classification exists.</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 px-3 font-semibold">Right of Appeal</td>
                            <td className="py-2.5 px-3">Every single decree is appealable as a matter of right.</td>
                            <td className="py-2.5 px-3">Only orders listed in Sec 104 & Order 43 Rule 1 are appealable.</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 px-3 font-semibold">Second Appeal</td>
                            <td className="py-2.5 px-3">A second appeal can lie to High Court Division on grounds of law.</td>
                            <td className="py-2.5 px-3">No second appeal lies for orders (Sec 104(2)).</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
              )}

              {/* TAB CONTENT: LANDMARK CASE LAWS */}
              {activeTab === "cases" && (
                <div className="space-y-6">
                  {/* CASE STUDY STRATEGY */}
                  <div className="p-6 border border-[#5A5A40] dark:border-[#A2A28A] border-dashed rounded-xl space-y-2 bg-[#5A5A40]/5 font-sans">
                    <div className="text-[10px] font-bold text-[#5A5A40] dark:text-[#C5C5B2] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Scale size={16} />
                      Case Law Study Strategy
                    </div>
                    <p className="text-xs md:text-sm text-[#5A5A5A] dark:text-[#ECE9E2] italic leading-relaxed">
                      For both Bar Council and BJS exams, you must memorize the case citation alongside the principle (held). Scenario questions frequently quote case facts directly as exam prompts!
                    </p>
                  </div>

                  {filteredCases.length === 0 ? (
                    <div className="text-center py-12 opacity-60 text-sm">
                      No matching case laws found for "{searchQuery}".
                    </div>
                  ) : (
                    filteredCases.map((caseItem, idx) => (
                      <div key={idx} className={`p-6 rounded-2xl border shadow-sm space-y-4 ${getCardBgClass()}`}>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3 border-current/10 font-sans">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#5A5A40] dark:text-[#A2A28A] block">Landmark Subcontinent Authority</span>
                            <h3 className="text-lg md:text-xl font-serif font-bold text-[#1A1A1A] dark:text-[#ECE9E2] mt-0.5">
                              {caseItem.title}
                            </h3>
                          </div>
                          <div className="text-left sm:text-right font-mono text-xs">
                            <span className="bg-[#5A5A40] dark:bg-[#A2A28A] text-white font-bold px-2.5 py-1 rounded block sm:inline-block">
                              {caseItem.citation}
                            </span>
                            <span className="block text-[10px] mt-1 opacity-75">{caseItem.court}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                          <div className="space-y-2">
                            <h4 className="font-bold text-[#5A5A40] dark:text-[#A2A28A] uppercase tracking-wider font-sans text-xs">The Dispute & Facts</h4>
                            <p className="font-serif leading-relaxed opacity-90">{caseItem.facts}</p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-bold text-[#5A5A40] dark:text-[#A2A28A] uppercase tracking-wider font-sans text-xs">What Court Held & Decided</h4>
                            <p className="font-serif leading-relaxed opacity-90">{caseItem.held}</p>
                          </div>
                        </div>

                        <div className="bg-[#5A5A40]/5 dark:bg-[#A2A28A]/5 p-4 rounded-xl border border-[#5A5A40]/10 dark:border-[#A2A28A]/10 text-xs font-sans">
                          <strong className="font-bold text-[#5A5A40] dark:text-[#A2A28A] uppercase tracking-wider block mb-1">Syllabus Significance</strong>
                          <span className="opacity-95 leading-relaxed">{caseItem.significance}</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* TAB CONTENT: PRACTICE MCQ QUIZ */}
              {activeTab === "practice" && selectedChapter.mcqs && (
                <div className="space-y-6 font-sans">
                  
                  {/* SCORE DISPLAY BANNER */}
                  <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm ${getCardBgClass()}`}>
                    <div className="space-y-1">
                      <h3 className="text-lg font-serif font-bold">Chapter 1 MCQ Practice Board</h3>
                      <p className="text-xs opacity-75">Test your memory with real BJS-standard MCQs. Negative marking (0.25) applies in BJS prelims!</p>
                    </div>
                    <div className="flex items-center gap-3">
                      {quizSubmitted ? (
                        <div className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 p-2 rounded-lg border border-emerald-500/20 text-xs font-bold">
                          Finished! {
                            Object.keys(quizAnswers).filter(
                              qid => quizAnswers[qid] === selectedChapter.mcqs?.find(q => q.id === qid)?.correctOptionId
                            ).length
                          } / {selectedChapter.mcqs.length} Correct
                        </div>
                      ) : (
                        <span className="text-xs opacity-60">Status: Active Draft</span>
                      )}
                      <button
                        onClick={handleResetQuiz}
                        className="p-2 bg-black/5 rounded-full hover:bg-black/10 text-current transition-colors"
                        title="Reset Quiz"
                      >
                        <RotateCcw size={16} />
                      </button>
                    </div>
                  </div>

                  {/* MCQS LOOP */}
                  <div className="space-y-6">
                    {selectedChapter.mcqs.map((q, qidx) => {
                      const selectedOptionId = quizAnswers[q.id];
                      const isCorrect = selectedOptionId === q.correctOptionId;

                      return (
                        <div key={q.id} className={`p-5 rounded-2xl border shadow-sm space-y-4 ${getCardBgClass()}`}>
                          
                          {/* Question header */}
                          <div className="flex gap-2">
                            <span className="bg-[#5A5A40] dark:bg-[#A2A28A] text-white font-mono text-xs px-2 py-0.5 h-5 rounded font-bold">
                              Q{qidx + 1}
                            </span>
                            <p className="text-sm md:text-base font-serif font-semibold">
                              {q.question}
                            </p>
                          </div>

                          {/* Options grid */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                            {q.options.map((opt) => {
                              const isThisOptionSelected = selectedOptionId === opt.id;
                              let optionClass = "border border-current/15 hover:bg-black/5 dark:hover:bg-white/5";

                              if (isThisOptionSelected) {
                                optionClass = "bg-[#5A5A40]/10 border-[#5A5A40] dark:border-[#A2A28A] ring-2 ring-[#5A5A40]/30";
                              }

                              if (quizSubmitted) {
                                if (opt.id === q.correctOptionId) {
                                  optionClass = "bg-emerald-500/20 border-emerald-600 ring-2 ring-emerald-500/30 text-emerald-800 dark:text-emerald-400";
                                } else if (isThisOptionSelected && !isCorrect) {
                                  optionClass = "bg-rose-500/20 border-rose-600 ring-2 ring-rose-500/30 text-rose-800 dark:text-rose-400";
                                } else {
                                  optionClass = "opacity-50 border-current/10";
                                }
                              }

                              return (
                                <button
                                  key={opt.id}
                                  onClick={() => handleSelectMCQOption(q.id, opt.id)}
                                  disabled={quizSubmitted}
                                  className={`w-full text-left p-3 rounded-xl text-xs sm:text-sm transition-all duration-150 flex items-start gap-2.5 ${optionClass}`}
                                >
                                  <span className="font-mono font-bold text-[#5A5A40] dark:text-[#A2A28A] uppercase mt-0.5">[{opt.id}]</span>
                                  <span className="opacity-90">{opt.text}</span>
                                </button>
                              );
                            })}
                          </div>

                          {/* POST-SUBMIT EXPLANATION BOX */}
                          {quizSubmitted && (
                            <div className={`p-4 rounded-xl text-xs sm:text-sm border ${
                              isCorrect 
                                ? "bg-emerald-500/10 border-emerald-500/20" 
                                : "bg-rose-500/10 border-rose-500/20"
                            }`}>
                                <div className="flex items-center gap-2 font-bold mb-1">
                                  {isCorrect ? (
                                    <span className="text-emerald-600 flex items-center gap-1"><CheckCircle size={15} /> CORRECT ANSWER</span>
                                  ) : (
                                    <span className="text-rose-600 flex items-center gap-1"><XCircle size={15} /> INCORRECT ANSWER</span>
                                  )}
                                  <span className="text-[11px] opacity-75">({isCorrect ? "+1.00 Mark" : "-0.25 Mark"})</span>
                                </div>
                                <p className="font-serif leading-relaxed opacity-90">{q.explanation}</p>
                            </div>
                          )}

                        </div>
                      );
                    })}
                  </div>

                  {/* SUBMISSION ACTION BUTTON */}
                  {!quizSubmitted && (
                    <div className="text-center pt-4">
                      <button
                        onClick={handleSubmitQuiz}
                        disabled={Object.keys(quizAnswers).length === 0}
                        className="bg-[#5A5A40] hover:bg-[#4E4E3A] dark:bg-[#A2A28A] dark:hover:bg-[#8F8F75] text-white font-bold py-2 px-6 rounded-lg text-sm shadow disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      >
                        Submit Practice Paper
                      </button>
                    </div>
                  )}

                </div>
              )}

              {/* TAB CONTENT: MAXIMS FLASHCARDS */}
              {activeTab === "flashcards" && (
                <div className="space-y-6 font-sans">
                  
                  {/* FLASHCARD STRATEGY */}
                  <div className="p-6 border border-[#5A5A40] dark:border-[#A2A28A] border-dashed rounded-xl space-y-2 bg-[#5A5A40]/5 font-sans">
                    <div className="text-[10px] font-bold text-[#5A5A40] dark:text-[#C5C5B2] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Sparkles size={16} />
                      Flashcard Revision Method
                    </div>
                    <p className="text-xs md:text-sm text-[#5A5A5A] dark:text-[#ECE9E2] italic leading-relaxed">
                      Memorize Latin Legal Maxims. These maxims represent the foundational philosophy behind civil legislation. Written examiners expect these quoted verbatim in your essays!
                    </p>
                  </div>

                  {/* FLASHCARD CONTAINER OR DECK SUMMARY */}
                  {deckFinished ? (
                    <div className={`p-6 rounded-3xl border shadow-md space-y-6 max-w-2xl mx-auto ${getCardBgClass()}`}>
                      <div className="text-center space-y-3">
                        <div className="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                          <Award size={36} className="animate-bounce" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-[#1A1A1A] dark:text-[#ECE9E2]">
                          Maxim Practice Finished!
                        </h3>
                        <p className="text-xs sm:text-sm opacity-80 max-w-md mx-auto">
                          You have rated your confidence on all Latin Maxims for this chapter. Great work reinforcing your legal foundations!
                        </p>
                      </div>

                      {/* STATS OVERVIEW */}
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                          <span className="block text-[10px] uppercase font-bold tracking-widest text-emerald-700 dark:text-emerald-400">Easy</span>
                          <span className="text-xl sm:text-2xl font-mono font-bold">
                            {keyMaxims.filter(m => flashcardRatings[m.maxim] === "easy").length}
                          </span>
                        </div>
                        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                          <span className="block text-[10px] uppercase font-bold tracking-widest text-amber-700 dark:text-amber-400">Hard</span>
                          <span className="text-xl sm:text-2xl font-mono font-bold">
                            {keyMaxims.filter(m => flashcardRatings[m.maxim] === "hard").length}
                          </span>
                        </div>
                        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                          <span className="block text-[10px] uppercase font-bold tracking-widest text-red-700 dark:text-red-400">Again</span>
                          <span className="text-xl sm:text-2xl font-mono font-bold">
                            {keyMaxims.filter(m => flashcardRatings[m.maxim] === "again").length}
                          </span>
                        </div>
                      </div>

                      {/* SUMMARY LIST */}
                      <div className="space-y-2">
                        <h4 className="text-xs uppercase tracking-wider font-bold text-[#5A5A40] dark:text-[#A2A28A]">
                          Mastery Summary Detail
                        </h4>
                        <div className="divide-y divide-current/10 max-h-60 overflow-y-auto pr-1">
                          {keyMaxims.map((m, idx) => {
                            const rating = flashcardRatings[m.maxim];
                            let badge = (
                              <span className="text-[9px] uppercase px-1.5 py-0.5 rounded-full font-bold bg-current/5 opacity-60">
                                Unrated
                              </span>
                            );
                            if (rating === "easy") {
                              badge = (
                                <span className="text-[9px] uppercase px-1.5 py-0.5 rounded-full font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                                  ✅ Mastered (Easy)
                                </span>
                              );
                            } else if (rating === "hard") {
                              badge = (
                                <span className="text-[9px] uppercase px-1.5 py-0.5 rounded-full font-bold bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                                  Learning (Hard)
                                </span>
                              );
                            } else if (rating === "again") {
                              badge = (
                                <span className="text-[9px] uppercase px-1.5 py-0.5 rounded-full font-bold bg-red-500/15 text-red-700 dark:text-red-400 border border-red-500/20">
                                  Review (Again)
                                </span>
                              );
                            }

                            return (
                              <div key={idx} className="py-2.5 flex items-start justify-between gap-3 text-xs">
                                <div className="space-y-0.5">
                                  <strong className="font-serif italic font-semibold text-[#1A1A1A] dark:text-[#ECE9E2]">
                                    "{m.maxim}"
                                  </strong>
                                  <span className="block text-[11px] opacity-75">{m.translation}</span>
                                </div>
                                <div className="flex-shrink-0">
                                  {badge}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* ACTIONS */}
                      <div className="flex justify-center gap-3 border-t border-current/10 pt-4">
                        <button
                          onClick={handleRestartDeck}
                          className="flex items-center gap-1.5 px-4 py-2 bg-[#5A5A40] hover:bg-[#4E4E3A] dark:bg-[#A2A28A] dark:hover:bg-[#8F8F75] text-white text-xs font-bold rounded-lg shadow-sm transition-all"
                        >
                          <RotateCcw size={14} />
                          Practice Deck Again
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-6">
                      <button
                        onClick={() => setIsFlipped(!isFlipped)}
                        className={`w-full max-w-lg aspect-[5/3] rounded-3xl p-6 shadow-md border cursor-pointer select-none transition-all duration-300 text-center flex flex-col justify-between ${getCardBgClass()} ${
                          isFlipped ? "bg-[#5A5A40]/5 border-[#5A5A40]/30 dark:bg-[#A2A28A]/5 dark:border-[#A2A28A]/30" : "hover:scale-[1.01]"
                        }`}
                      >
                        <div className="text-right text-[10px] opacity-60 font-mono">
                          {isFlipped ? "CLICK TO REVEAL MAXIM" : "CLICK TO REVEAL MEANING"}
                        </div>

                        <div className="my-auto space-y-4">
                          {!isFlipped ? (
                            <div className="space-y-2">
                              <span className="text-xs tracking-widest text-[#5A5A40] dark:text-[#A2A28A] uppercase font-bold block">Latin Maxim</span>
                              <h3 className="text-xl md:text-2xl font-serif font-bold italic text-[#1A1A1A] dark:text-[#ECE9E2]">
                                "{keyMaxims[flashcardIndex].maxim}"
                              </h3>
                            </div>
                          ) : (
                            <div className="space-y-3">
                              <span className="text-xs tracking-widest text-emerald-600 uppercase font-bold block">English Translation</span>
                              <p className="text-base md:text-lg font-serif font-semibold text-slate-800 dark:text-slate-200">
                                {keyMaxims[flashcardIndex].translation}
                              </p>
                              <div className="h-px bg-current opacity-10 max-w-xs mx-auto"></div>
                              <p className="text-xs italic opacity-85 leading-relaxed">
                                <strong className="font-bold">Bangladesh App:</strong> {keyMaxims[flashcardIndex].application}
                              </p>
                            </div>
                          )}
                        </div>

                        <div className="text-center text-[10px] opacity-50 uppercase tracking-widest">
                          {flashcardRatings[keyMaxims[flashcardIndex].maxim] && (
                            <span className="mr-2 text-amber-600 dark:text-amber-400 font-bold uppercase">
                              [{flashcardRatings[keyMaxims[flashcardIndex].maxim]}]
                            </span>
                          )}
                          Maxim {flashcardIndex + 1} of {keyMaxims.length}
                        </div>
                      </button>

                      {/* CONFIDENCE RATING CONTROLS - ONLY ONCE FLIPPED */}
                      {isFlipped && (
                        <div className="mt-6 w-full max-w-lg space-y-3">
                          <div className="text-center text-[10px] uppercase font-bold tracking-widest opacity-75">
                            Rate your confidence to advance:
                          </div>
                          <div className="grid grid-cols-3 gap-3">
                            <button
                              onClick={() => handleRateFlashcard("again")}
                              className="flex flex-col items-center gap-1 py-2 px-3 rounded-xl border border-red-500/30 bg-red-500/5 hover:bg-red-500/10 text-red-700 dark:text-red-400 font-bold transition-all duration-200 text-xs"
                            >
                              <span className="text-base">🔁</span>
                              <span className="text-[10px] tracking-wide uppercase">Again</span>
                            </button>
                            <button
                              onClick={() => handleRateFlashcard("hard")}
                              className="flex flex-col items-center gap-1 py-2 px-3 rounded-xl border border-amber-500/30 bg-amber-500/5 hover:bg-amber-500/10 text-amber-700 dark:text-amber-400 font-bold transition-all duration-200 text-xs"
                            >
                              <span className="text-base">🟡</span>
                              <span className="text-[10px] tracking-wide uppercase">Hard</span>
                            </button>
                            <button
                              onClick={() => handleRateFlashcard("easy")}
                              className="flex flex-col items-center gap-1 py-2 px-3 rounded-xl border border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-bold transition-all duration-200 text-xs"
                            >
                              <span className="text-base">✅</span>
                              <span className="text-[10px] tracking-wide uppercase">Easy</span>
                            </button>
                          </div>
                        </div>
                      )}

                      {/* FLASHCARD NAVIGATION CONTROLS */}
                      <div className="flex gap-4 mt-6">
                        <button
                          onClick={() => {
                            setIsFlipped(false);
                            setFlashcardIndex(prev => (prev === 0 ? keyMaxims.length - 1 : prev - 1));
                          }}
                          className="px-4 py-1.5 rounded-lg border text-xs font-semibold hover:bg-black/5"
                        >
                          Previous Maxim
                        </button>
                        <button
                          onClick={() => {
                            setIsFlipped(false);
                            setFlashcardIndex(prev => (prev === keyMaxims.length - 1 ? 0 : prev + 1));
                          }}
                          className="px-4 py-1.5 rounded-lg border text-xs font-semibold hover:bg-black/5"
                        >
                          Next Maxim
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* BOOKMARKS QUICK RECALL PANEL (IF ANY BOOKMARKED) */}
              {progress.bookmarkedSections.length > 0 && (
                <div className={`p-4 rounded-xl border space-y-2 font-sans ${getCardBgClass()}`}>
                  <h4 className="text-xs font-bold text-[#5A5A40] dark:text-[#A2A28A] uppercase tracking-wider flex items-center gap-1.5">
                    <BookMarked size={14} /> My Quick Revision Bookmarks ({progress.bookmarkedSections.length})
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {progress.bookmarkedSections.map(secNo => (
                      <a
                        key={secNo}
                        href={`#${secNo.replace(/\s+/g, '-')}`}
                        className="bg-[#5A5A40] hover:bg-[#4E4E3A] dark:bg-[#A2A28A] dark:hover:bg-[#8F8F75] text-white text-[11px] px-2.5 py-1 rounded-md font-mono transition-colors"
                      >
                        {secNo}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* DRAFT NEXT STEP WORKFLOW PROMPT */}
              <div className="bg-[#1A1A1A] border border-[#2E2E2A] dark:bg-[#151513] dark:border-[#282825] text-slate-100 rounded-3xl p-6 shadow-md mt-12 relative overflow-hidden font-sans">
                <div className="absolute right-0 top-0 opacity-10 select-none text-[#5A5A40] dark:text-[#A2A28A]">
                  <Scale size={180} />
                </div>
                {(() => {
                  const currentIndex = CHAPTERS_LIST.findIndex(c => c.id === selectedChapterId);
                  const nextChapter = currentIndex !== -1 && currentIndex < CHAPTERS_LIST.length - 1 ? CHAPTERS_LIST[currentIndex + 1] : null;
                  
                  if (!nextChapter) {
                    return (
                      <div className="relative space-y-4 max-w-2xl">
                        <span className="bg-[#5A5A40] dark:bg-[#A2A28A] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                          Syllabus Complete
                        </span>
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-white leading-snug">
                          Congratulations on completing the syllabus!
                        </h3>
                        <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                          You have worked through all high-yield chapters of Civil Procedure, Criminal Procedure, Penal Code, Evidence Act, and Professional Ethics. Use the navigation panel and bookmarks to revise!
                        </p>
                      </div>
                    );
                  }

                  // Customize syllabus target based on the next chapter
                  let syllabusTarget = (
                    <ul className="space-y-1 opacity-90 pl-1 list-disc list-inside">
                      <li>Core legal provisions and codified sections of the next module</li>
                      <li>High-yield concepts, landmark appellate decisions and subcontinent precedents</li>
                      <li>Interactive mock MCQ testing with expert legal rationales</li>
                    </ul>
                  );

                  if (nextChapter.id === "chapter-2") {
                    syllabusTarget = (
                      <ul className="space-y-1 opacity-90 pl-1 list-disc list-inside">
                        <li>Sections 15 to 20 (Place of Suing: pecuniary limits, local jurisdiction, objections)</li>
                        <li>Sections 22 to 24 (Powers & procedures for transfer of civil suits)</li>
                        <li>Associated Subcontinent & Bangladesh appellate authorities with citation details</li>
                      </ul>
                    );
                  } else if (nextChapter.id === "chapter-3") {
                    syllabusTarget = (
                      <ul className="space-y-1 opacity-90 pl-1 list-disc list-inside">
                        <li>Sections 36 to 47 (Application, courts executing decrees, and the high-yield Section 47 questions)</li>
                        <li>Sections 51 & 60 (Modes of execution, attached property exemptions like tools of artisans and agriculturalists)</li>
                        <li>Shorthand formulas for written and scenario questions in Bar & BJS exams</li>
                      </ul>
                    );
                  } else if (nextChapter.id === "chapter-4") {
                    syllabusTarget = (
                      <ul className="space-y-1 opacity-90 pl-1 list-disc list-inside">
                        <li>Sections 96 to 104 (Appeals from Original Decrees, Preliminary Decrees, and Appealable Orders)</li>
                        <li>Procedural rules under Order 41 and Order 43 of the CPC</li>
                        <li>Appellate powers to take additional evidence, remand cases, and frame issues</li>
                      </ul>
                    );
                  } else if (nextChapter.id === "chapter-5") {
                    syllabusTarget = (
                      <ul className="space-y-1 opacity-90 pl-1 list-disc list-inside">
                        <li>Section 113 and Order 46 (Reference to High Court Division)</li>
                        <li>Section 114 and Order 47 (Grounds and limitations for Review)</li>
                        <li>Section 115 (Revisionary powers of the High Court Division and District Judge's Court in Bangladesh)</li>
                      </ul>
                    );
                  } else if (nextChapter.id === "chapter-6") {
                    syllabusTarget = (
                      <ul className="space-y-1 opacity-90 pl-1 list-disc list-inside">
                        <li>Order 6 (Pleadings, fundamental rules of pleading facts, not law, and amendments of pleadings under Rule 17)</li>
                        <li>Order 7 (Plaint, key particulars, and strict grounds for rejection of a plaint under Rule 11)</li>
                        <li>Order 8 (Written Statement, set-off, counter-claims, and the legal effect of failing to file a written statement)</li>
                      </ul>
                    );
                  } else if (nextChapter.id === "chapter-7") {
                    syllabusTarget = (
                      <ul className="space-y-1 opacity-90 pl-1 list-disc list-inside">
                        <li>Order 39 (Temporary Injunctions, standard requirements of prima facie case, irreparable injury, and balance of convenience)</li>
                        <li>Order 40 (Appointment of Receivers, critical roles, powers, and responsibilities)</li>
                        <li>Section 151 (Inherent powers of the court to do justice and prevent abuse of judicial process)</li>
                      </ul>
                    );
                  } else if (nextChapter.id === "chapter-8") {
                    syllabusTarget = (
                      <ul className="space-y-1 opacity-90 pl-1 list-disc list-inside">
                        <li>Sections 8 & 9 (Recovery of possession of immovable property: title-based vs possessory suits, and the 6-month limitation bar)</li>
                        <li>Sections 12, 21 & 21A (Specific performance of contracts, contracts that cannot be specifically enforced, and the mandatory registration requirement in Bangladesh)</li>
                        <li>High-yield Distinction tables between possessory suits under Sec 9 and title suits under Sec 8</li>
                      </ul>
                    );
                  } else if (nextChapter.id === "chapter-9") {
                    syllabusTarget = (
                      <ul className="space-y-1 opacity-90 pl-1 list-disc list-inside">
                        <li>Section 42 (Declaratory decrees, the requirement of consequential relief, and the statutory bar under the Section 42 proviso)</li>
                        <li>Sections 52 to 57 (Perpetual, Temporary, and Mandatory Injunctions, and the 11 statutory bars where an injunction must be refused under Section 56)</li>
                        <li>Key Bangladesh case laws on declarations of title, cloud on title, and negative covenants</li>
                      </ul>
                    );
                  } else if (nextChapter.id === "chapter-10") {
                    syllabusTarget = (
                      <ul className="space-y-1 opacity-90 pl-1 list-disc list-inside">
                        <li>Section 4 (CrPC definitions: Cognizable vs Non-cognizable, Bailable vs Non-bailable, Summons vs Warrant cases)</li>
                        <li>Section 6 (Classes of Criminal Courts in Bangladesh, including Judicial and Executive Magistrates)</li>
                        <li>Sections 31 & 32 (Sentencing powers of Sessions Judges and Magistrates)</li>
                      </ul>
                    );
                  } else if (nextChapter.id === "chapter-11") {
                    syllabusTarget = (
                      <ul className="space-y-1 opacity-90 pl-1 list-disc list-inside">
                        <li>Sections 107 & 117 (Security for keeping the peace and for good behavior)</li>
                        <li>Section 133 (Conditional order for removal of public nuisances)</li>
                        <li>Section 144 (Urgent orders in temporary cases of nuisance or apprehended danger)</li>
                        <li>Section 145 (Disputes concerning land or water likely to cause breach of peace, and possession inquiries)</li>
                      </ul>
                    );
                  } else if (nextChapter.id === "chapter-12") {
                    syllabusTarget = (
                      <ul className="space-y-1 opacity-90 pl-1 list-disc list-inside">
                        <li>Sections 154 & 155 (Information in cognizable and non-cognizable cases, FIR and General Diary entry)</li>
                        <li>Section 161 (Examination of witnesses by police and evidentiary value under Section 162)</li>
                        <li>Section 164 (Recording of confessions and statements by Magistrates and procedural safeguards)</li>
                        <li>Section 172 & 173 (Police Case Diaries and Police Reports, Charge Sheets, and Final Reports)</li>
                      </ul>
                    );
                  } else if (nextChapter.id === "chapter-13") {
                    syllabusTarget = (
                      <ul className="space-y-1 opacity-90 pl-1 list-disc list-inside">
                        <li>Sections 200 & 204 (Examination of complainant, dismissal of complaint, and issue of process)</li>
                        <li>Sections 241 to 250 (Trial procedures for warrant and summons cases before Magistrates in Bangladesh)</li>
                        <li>Sections 265A to 265L (Trial before the Court of Session, framing of charges, and acquittal/conviction)</li>
                        <li>Key differences between Discharge, Acquittal, and Release, and high-yield trial timelines</li>
                      </ul>
                    );
                  } else if (nextChapter.id === "chapter-14") {
                    syllabusTarget = (
                      <ul className="space-y-1 opacity-90 pl-1 list-disc list-inside">
                        <li>Sections 404 to 431 (Criminal appeals, appeals against acquittal under Section 417, and appeal limitation periods)</li>
                        <li>Sections 435 to 439 (Criminal revision powers of the High Court Division and Sessions Judge, and criminal reference)</li>
                        <li>Sections 496 to 498 (Bail in bailable and non-bailable offenses, and high-yield anticipatory bail under Section 498)</li>
                        <li>Key Bangladesh case laws on revision, appellate interference, and the BLAST principles of bail)</li>
                      </ul>
                    );
                  } else if (nextChapter.id === "chapter-15") {
                    syllabusTarget = (
                      <ul className="space-y-1 opacity-90 pl-1 list-disc list-inside">
                        <li>Sections 34 & 149 (Joint liability, common intention, and common object in commission of offences)</li>
                        <li>Sections 107 to 120 (Abetment, instigation, conspiracy, and criminal conspiracy under Sec 120A/120B)</li>
                        <li>High-yield legal distinctions between common intention (Sec 34) and common object (Sec 149)</li>
                        <li>Landmark Supreme Court of Bangladesh decisions on constructive and vicarious criminal liability</li>
                      </ul>
                    );
                  } else if (nextChapter.id === "chapter-16") {
                    syllabusTarget = (
                      <ul className="space-y-1 opacity-90 pl-1 list-disc list-inside">
                        <li>Sections 76 to 106 (General exceptions, mistake of fact, accident, infancy, insanity, and intoxication)</li>
                        <li>Sections 96 to 106 (Right of private defence of body and property, commencement, and limits)</li>
                        <li>High-yield legal distinctions between justifiable acts and private defence boundaries</li>
                        <li>Key Bangladesh case laws on burden of proof under Section 105 of the Evidence Act</li>
                      </ul>
                    );
                  } else if (nextChapter.id === "chapter-17") {
                    syllabusTarget = (
                      <ul className="space-y-1 opacity-90 pl-1 list-disc list-inside">
                        <li>Culpable Homicide vs. Murder (Sections 299 & 300) and exceptions under Sec 300</li>
                        <li>Rash or Negligent Driving/Act causing death (Sections 304A & 279)</li>
                        <li>Hurt and Grievous Hurt (Sections 319-326) and special acid throwing provisions (Section 326A)</li>
                        <li>Kidnapping, Abduction, and Wrongful Confinement (Sections 339-369)</li>
                      </ul>
                    );
                  } else if (nextChapter.id === "chapter-18") {
                    syllabusTarget = (
                      <ul className="space-y-1 opacity-90 pl-1 list-disc list-inside">
                        <li>Theft, Extortion, Robbery, and Dacoity (Sections 378-402) and aggravated forms</li>
                        <li>Criminal Breach of Trust (CBT) and Misappropriation of Property (Sections 403-409)</li>
                        <li>Cheating, Mischief, and Criminal Trespass/House-breaking (Sections 415-462)</li>
                        <li>Forgery, making false documents, and falsification of accounts (Sections 463-477A)</li>
                      </ul>
                    );
                  } else if (nextChapter.id === "chapter-19") {
                    syllabusTarget = (
                      <ul className="space-y-1 opacity-90 pl-1 list-disc list-inside">
                        <li>Sections 17 to 23 (Definition and evidentiary value of Admissions in civil/criminal cases)</li>
                        <li>Sections 24 to 30 (Confessions to police officers, custody confession exceptions, and co-accused confessions)</li>
                        <li>Section 32 (Dying Declarations, conditions of admissibility, and high-yield cases like State v. Mofizuddin)</li>
                        <li>Evidentiary status of statements made under special circumstances and relevance of previous judgments</li>
                      </ul>
                    );
                  } else if (nextChapter.id === "chapter-20") {
                    syllabusTarget = (
                      <ul className="space-y-1 opacity-90 pl-1 list-disc list-inside">
                        <li>Sections 101 to 110 (Burden of proof, shift of burden, standard of proof, and proof of legitimacy)</li>
                        <li>Section 114 (Presumptions of facts, including major presumptions on accomplice testimony and possession of stolen property)</li>
                        <li>Sections 115 to 117 (Estoppel: Definition, tenant/licensee estoppel, and mutual limits)</li>
                        <li>Sections 118 to 134 (Witness competency, child witnesses, accomplice competency under Section 133 vs 114, and examination of witnesses)</li>
                      </ul>
                    );
                  } else if (nextChapter.id === "chapter-21") {
                    syllabusTarget = (
                      <ul className="space-y-1 opacity-90 pl-1 list-disc list-inside">
                        <li>Section 3 (Absolute bar of limitation, court's duty to dismiss suits even if not raised as a defense)</li>
                        <li>Section 5 (Condonation of Delay: 'Sufficient Cause' test, application strictly to appeals/applications, never to suits)</li>
                        <li>Sections 6 to 8 (Legal Disability: minorage, insanity, idiocy, and maximum extensions)</li>
                        <li>Section 9 (Continuous running of time: once limitation starts, subsequent disabilities do not stop it)</li>
                        <li>Sections 14 (Exclusion of time of proceeding bona fide in court without jurisdiction) and 19-20 (Writing acknowledgments/payment)</li>
                      </ul>
                    );
                  } else if (nextChapter.id === "chapter-22") {
                    syllabusTarget = (
                      <ul className="space-y-1 opacity-90 pl-1 list-disc list-inside">
                        <li>The Bangladesh Bar Council Order & Rules, 1972 (constitutions, functions, and enrollments)</li>
                        <li>Canons of Professional Conduct and Etiquette (behavior towards public, courts, clients, and colleagues)</li>
                        <li>Bar Council Tribunals (professional misconduct, complaints, and disciplinary proceedings)</li>
                      </ul>
                    );
                  }

                  return (
                    <div className="relative space-y-4 max-w-2xl">
                      <span className="bg-[#5A5A40] dark:bg-[#A2A28A] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                        {selectedChapter.title.split(":")[0]} Study Complete
                      </span>
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-white leading-snug">
                        Advance to {nextChapter.title}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                        You have successfully mastered {selectedChapter.title.split(":")[1] || selectedChapter.title}. Ready to proceed with the next high-yield module?
                      </p>
                      
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs space-y-2 text-slate-200">
                        <p className="font-bold text-[#C5C5B2] uppercase tracking-wider flex items-center gap-1.5">
                          <GraduationCap size={15} /> {nextChapter.title.split(":")[0]} Syllabus Target:
                        </p>
                        {syllabusTarget}
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <p className="text-xs text-[#C5C5B2] font-semibold animate-pulse">
                          &rarr; Click below or say "CONTINUE TO NEXT CHAPTER" to advance!
                        </p>
                        <button
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            setSelectedChapterId(nextChapter.id);
                          }}
                          className="inline-flex items-center gap-1.5 bg-[#5A5A40] hover:bg-[#4E4E3A] dark:bg-[#A2A28A] dark:hover:bg-[#8F8F75] text-white text-xs font-bold py-2 px-4 rounded-lg shadow transition-all"
                        >
                          Explore {nextChapter.title.split(":")[0]} <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </div>

            </div>
          )}

        </main>

      </div>

      {/* FOOTER */}
      <footer className="py-4 border-t border-current/10 text-center font-sans text-[10px] opacity-70">
        <p>&copy; 2027 Supreme Bangladeshi Law Textbook Center. Built for Bangladesh Bar Council & BJS Exam Success.</p>
        <p className="mt-0.5">Platform compiled in accordance with standard civil procedure precedents and high-yield syllabi.</p>
      </footer>

    </div>
  );
}
