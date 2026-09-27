"use client";

import { createContext, useContext, useEffect, useState } from "react";

const PlanContext = createContext();

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [toast, setToast] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      try {
        const storedPlan = localStorage.getItem("fitlog-plan");
        const storedSaved = localStorage.getItem("fitlog-saved");

        if (storedPlan) {
          setPlan(JSON.parse(storedPlan));
        }

        if (storedSaved) {
          setSaved(JSON.parse(storedSaved));
        }
      } catch (error) {
        console.error("Failed to load workout data:", error);
      }

      setLoading(false);
    };

    const timer = setTimeout(loadData, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    }
  }, [plan, loading]);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("fitlog-saved", JSON.stringify(saved));
    }
  }, [saved, loading]);

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  const addToPlan = (workout) => {
    const alreadyExists = plan.some((item) => item.id === workout.id);

    if (alreadyExists) {
      showToast("Already in today's plan");
      return;
    }

    if (plan.length >= 5) {
      showToast("Today's plan is full");
      return;
    }

    setPlan((currentPlan) => [...currentPlan, workout]);

    showToast("Added to today's plan");
  };

  const saveForLater = (workout) => {
    const alreadyExists = saved.some((item) => item.id === workout.id);

    if (alreadyExists) {
      showToast("Already saved");
      return;
    }

    setSaved((currentSaved) => [...currentSaved, workout]);

    showToast("Saved for later");
  };

  const removeFromPlan = (id) => {
    setPlan((currentPlan) =>
      currentPlan.filter((workout) => workout.id !== id),
    );

    showToast("Removed from today's plan");
  };
  const markAsDone = (id) => {
    setPlan((currentPlan) =>
      currentPlan.filter((workout) => workout.id !== id),
    );

    showToast("Workout marked as done");
  };

  const removeFromSaved = (id) => {
    setSaved((currentSaved) =>
      currentSaved.filter((workout) => workout.id !== id),
    );

    showToast("Removed from saved");
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        loading,
        addToPlan,
        saveForLater,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
      }}
    >
      {children}

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg border border-[#ccff00] bg-[#17181d] px-5 py-3 text-sm font-bold text-white shadow-lg">
          ✓ {toast}
        </div>
      )}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  return useContext(PlanContext);
}
