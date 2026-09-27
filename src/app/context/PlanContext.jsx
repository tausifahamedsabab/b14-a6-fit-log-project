"use client";

import { createContext, useContext, useEffect, useState } from "react";

const PlanContext = createContext();

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [toast, setToast] = useState("");

  // localStorage থেকে data load করা
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
  }, []);

  // plan change হলে localStorage update
  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan]);

  // saved change হলে localStorage update
  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved]);

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

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveForLater,
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
