"use client";

import { createContext, useContext, useEffect, useState } from "react";

const PlanContext = createContext();

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [toast, setToast] = useState("");
  const [loading, setLoading] = useState(true);

  // Load saved data from localStorage
  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");

    if (storedPlan) {
      const parsedPlan = JSON.parse(storedPlan);

      setTimeout(() => {
        setPlan(parsedPlan);
      }, 0);
    }

    if (storedSaved) {
      const parsedSaved = JSON.parse(storedSaved);

      setTimeout(() => {
        setSaved(parsedSaved);
      }, 0);
    }

    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  // Save plan to localStorage
  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan]);

  // Save saved workouts to localStorage
  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved]);

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  // Add workout to today's plan
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

  // Save workout
  const saveForLater = (workout) => {
    const alreadyExists = saved.some((item) => item.id === workout.id);

    if (alreadyExists) {
      showToast("Already saved");
      return;
    }

    setSaved((currentSaved) => [...currentSaved, workout]);

    showToast("Saved for later");
  };

  // Remove workout from today's plan
  const removeFromPlan = (id) => {
    setPlan((currentPlan) =>
      currentPlan.filter((workout) => workout.id !== id),
    );

    showToast("Removed from today's plan");
  };

  // Remove workout from saved
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
